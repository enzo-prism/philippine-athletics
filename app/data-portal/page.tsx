"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCircle2, Clipboard, FileText, ShieldCheck, UploadCloud } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { athleteProfiles, athleteSummaries } from "@/lib/data/athletes"
import { getCompetitionResultsByAthleteId } from "@/lib/data/competitions"
import { normalizeKey } from "@/lib/data/utils"

const SAMPLE_CSV = `competition,event,round,athleteName,athleteId,result,place,wind,note
2025 SEA Games,400m hurdles,Final,Lauren Hoffman,athlete-lauren-hoffman,56.80,3,+1.2,PB
2025 SEA Games,400m hurdles,Final,Nguyen Thi Lan,,55.92,1,+1.2,
2025 SEA Games,400m hurdles,Final,Siti Aisyah,,56.40,2,+1.2,
2025 SEA Games,200m,Final,Kristina Knott,athlete-kristina-knott,23.45,3,+1.7,
2025 SEA Games,200m,Final,Suphawadee Thongchai,,23.10,1,+1.7,
2025 SEA Games,200m,Final,Nguyen Minh Anh,,23.32,2,+1.7,
`

const STORAGE_KEY = "trackph:results-intake"

type IngestionRole = "contributor" | "certified"

type CompetitionMeta = {
  name: string
  location: string
  startDate: string
  endDate: string
  organizer: string
  type: string
  status: "Past" | "Upcoming"
  source: "Demo data" | "World Athletics"
}

type FieldKey =
  | "competition"
  | "event"
  | "round"
  | "athleteName"
  | "athleteId"
  | "result"
  | "place"
  | "wind"
  | "note"

const FIELD_DEFS: { key: FieldKey; label: string; required?: boolean }[] = [
  { key: "competition", label: "Competition", required: true },
  { key: "event", label: "Event", required: true },
  { key: "round", label: "Round" },
  { key: "athleteName", label: "Athlete name", required: true },
  { key: "athleteId", label: "Athlete ID" },
  { key: "result", label: "Result", required: true },
  { key: "place", label: "Place", required: true },
  { key: "wind", label: "Wind" },
  { key: "note", label: "Note" },
]

const WIND_REQUIRED_EVENTS = new Set([
  normalizeKey("100m"),
  normalizeKey("200m"),
  normalizeKey("100m hurdles"),
  normalizeKey("110m hurdles"),
  normalizeKey("long jump"),
  normalizeKey("triple jump"),
])

type ParsedData = {
  headers: string[]
  rows: string[][]
}

type MappedRow = {
  row: number
  competition?: string
  event?: string
  round?: string
  athleteName?: string
  athleteId?: string
  result?: string
  place?: string
  wind?: string
  note?: string
}

type IssueLevel = "error" | "warning"

type ValidationIssue = {
  level: IssueLevel
  message: string
  row?: number
}

type AgeGroup = "Youth" | "Open"

type Gender = "Women" | "Men"

type PerformanceValue = {
  value: number
  higherIsBetter: boolean
}

type CompetitionResult = {
  meet: string
  date: string
  location: string
  event: string
  result: string
  place: string
  source?: CompetitionMeta["source"]
}

type AthleteImpact = {
  id: string
  name: string
  club: string
  updates: Array<{
    event: string
    result: string
    place?: string
    isPB: boolean
    isSB: boolean
  }>
}

type RankingEntry = {
  id: string
  name: string
  event: string
  result: string
  date: string
  meet: string
  location: string
  club: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
  rank: number
  source?: CompetitionMeta["source"]
}

type RankingImpact = {
  event: string
  year: number
  gender: Gender
  ageGroup: AgeGroup
  impacts: Array<{
    id: string
    name: string
    beforeRank?: number
    afterRank?: number
  }>
  topAfter: RankingEntry[]
}

type Submission = {
  id: string
  status: "pending" | "published"
  submittedAt: string
  submittedBy: IngestionRole
  competition: CompetitionMeta
  rows: MappedRow[]
  issues: ValidationIssue[]
}

const defaultMeta: CompetitionMeta = {
  name: "",
  location: "",
  startDate: "",
  endDate: "",
  organizer: "",
  type: "National",
  status: "Past",
  source: "Demo data",
}

const normalizeHeader = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")

const detectDelimiter = (text: string) => {
  const firstLine = text.split(/\r?\n/)[0] ?? ""
  const commas = (firstLine.match(/,/g) || []).length
  const tabs = (firstLine.match(/\t/g) || []).length
  if (tabs > commas) return "\t"
  return ","
}

const parseDelimited = (text: string): ParsedData | null => {
  const cleaned = text.replace(/^\uFEFF/, "").trim()
  if (!cleaned) return null
  const delimiter = detectDelimiter(cleaned)
  const rows: string[][] = []
  let current: string[] = []
  let field = ""
  let inQuotes = false

  for (let i = 0; i < cleaned.length; i += 1) {
    const char = cleaned[i]
    const next = cleaned[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"'
        i += 1
        continue
      }
      inQuotes = !inQuotes
      continue
    }

    if (!inQuotes && char === delimiter) {
      current.push(field)
      field = ""
      continue
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1
      current.push(field)
      rows.push(current)
      current = []
      field = ""
      continue
    }

    field += char
  }

  if (field.length || current.length) {
    current.push(field)
    rows.push(current)
  }

  const headerRow = rows[0]
  if (!headerRow) return null
  const headers = headerRow.map((item) => item.trim())
  const dataRows = rows.slice(1).filter((row) => row.some((cell) => cell.trim() !== ""))
  return { headers, rows: dataRows }
}

const autoMapHeaders = (headers: string[]) => {
  const normalized = headers.map(normalizeHeader)
  const mapping: Record<FieldKey, string> = {
    competition: "",
    event: "",
    round: "",
    athleteName: "",
    athleteId: "",
    result: "",
    place: "",
    wind: "",
    note: "",
  }

  const headerLookup = new Map(normalized.map((value, index) => [value, headers[index]]))

  const candidates: Record<FieldKey, string[]> = {
    competition: ["competition", "meet", "meeting", "eventname"],
    event: ["event", "discipline"],
    round: ["round", "stage"],
    athleteName: ["athletename", "name", "athlete"],
    athleteId: ["athleteid", "id"],
    result: ["result", "mark", "time"],
    place: ["place", "rank", "position"],
    wind: ["wind", "windreading"],
    note: ["note", "remarks", "status"],
  }

  FIELD_DEFS.forEach(({ key }) => {
    const match = candidates[key].find((candidate) => headerLookup.has(candidate))
    if (match) mapping[key] = headerLookup.get(match) ?? ""
  })

  return mapping
}

const parsePerformance = (performance?: string) => {
  if (!performance) return null
  const raw = performance.trim()
  if (!raw || raw === "—") return null
  const lower = raw.toLowerCase()
  const hasColon = lower.includes(":")
  const endsWithSeconds = /\d?s\b/.test(lower) || lower.endsWith("s")
  const isTime = hasColon || endsWithSeconds

  if (isTime) {
    if (hasColon) {
      const parts = raw.split(":").map((part) => parseFloat(part))
      if (parts.some((value) => Number.isNaN(value))) return null
      return parts
    }
    const value = parseFloat(raw)
    if (Number.isNaN(value)) return null
    return [value]
  }

  const numeric = parseFloat(raw)
  if (Number.isNaN(numeric)) return null
  return [numeric]
}

const parsePerformanceDetailed = (performance?: string): PerformanceValue | null => {
  if (!performance) return null
  const raw = performance.trim()
  if (!raw || raw === "—") return null
  const lower = raw.toLowerCase()
  const hasColon = lower.includes(":")
  const endsWithSeconds = /\d?s\b/.test(lower) || lower.endsWith("s")
  const isTime = hasColon || endsWithSeconds

  if (isTime) {
    if (hasColon) {
      const parts = raw.split(":").map((part) => parseFloat(part))
      if (parts.some((value) => Number.isNaN(value))) return null
      const [first, second = 0, third = 0] = parts
      const totalSeconds = parts.length === 3 ? first * 3600 + second * 60 + third : first * 60 + second
      return { value: totalSeconds, higherIsBetter: false }
    }
    const value = parseFloat(raw)
    if (Number.isNaN(value)) return null
    return { value, higherIsBetter: false }
  }

  const numeric = parseFloat(raw)
  if (Number.isNaN(numeric)) return null
  const higherIsBetter = lower.includes("m") || lower.includes("pt") || lower.includes("pts")
  return { value: numeric, higherIsBetter }
}

const getAgeGroup = (birthDate: string | undefined, year: number): AgeGroup => {
  if (!birthDate || birthDate === "—") return "Open"
  const birthYear = Number.parseInt(birthDate.slice(0, 4), 10)
  if (!birthYear || Number.isNaN(birthYear)) return "Open"
  const age = year - birthYear
  return age <= 19 ? "Youth" : "Open"
}

const getYearFromDate = (value?: string) => {
  if (!value) return new Date().getFullYear()
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return new Date().getFullYear()
  return parsed.getFullYear()
}

const buildResultKey = (result: CompetitionResult) =>
  `${result.meet}|${result.date}|${normalizeKey(result.event)}|${result.result}`

const mergeCompetitionsWithExtras = (
  athleteId: string,
  base: CompetitionResult[],
  extrasByAthlete: Map<string, CompetitionResult[]>,
) => {
  const competitionResults = getCompetitionResultsByAthleteId(athleteId)
  const seen = new Set(base.map(buildResultKey))
  const merged = [
    ...base,
    ...competitionResults.filter((result) => {
      const key = buildResultKey(result)
      if (seen.has(key)) return false
      seen.add(key)
      return true
    }),
  ]

  const extras = extrasByAthlete.get(athleteId) ?? []
  extras.forEach((result) => {
    const key = buildResultKey(result)
    if (!seen.has(key)) {
      seen.add(key)
      merged.push(result)
    }
  })

  return merged
}

const buildRankingForEvent = ({
  event,
  gender,
  ageGroup,
  year,
  extrasByAthlete,
}: {
  event: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
  extrasByAthlete: Map<string, CompetitionResult[]>
}) => {
  const normalizedEvent = normalizeKey(event)
  const entries = athleteProfiles.flatMap((athlete) => {
    if (!athlete.gender || athlete.gender !== gender) return []
    if (getAgeGroup(athlete.birthDate, year) !== ageGroup) return []

    const merged = mergeCompetitionsWithExtras(athlete.id, athlete.competitions, extrasByAthlete)
    const matching = merged
      .filter((competition) => normalizeKey(competition.event) === normalizedEvent)
      .filter((competition) => new Date(competition.date).getFullYear() === year)
      .map((competition) => {
        const parsed = parsePerformanceDetailed(competition.result)
        if (!parsed) return null
        return { competition, parsed }
      })
      .filter(Boolean) as Array<{ competition: CompetitionResult; parsed: PerformanceValue }>

    if (!matching.length) return []

    const best = matching.reduce((current, next) => {
      if (!current) return next
      if (current.parsed.higherIsBetter !== next.parsed.higherIsBetter) return current
      if (current.parsed.higherIsBetter) {
        if (next.parsed.value > current.parsed.value) return next
      } else if (next.parsed.value < current.parsed.value) {
        return next
      }
      const currentDate = new Date(current.competition.date).getTime()
      const nextDate = new Date(next.competition.date).getTime()
      return nextDate > currentDate ? next : current
    })

    return [
      {
        id: athlete.id,
        name: `${athlete.firstName} ${athlete.lastName}`.trim(),
        event,
        result: best.competition.result,
        date: best.competition.date,
        meet: best.competition.meet,
        location: best.competition.location,
        club: athlete.club,
        gender,
        ageGroup,
        year,
        rank: 0,
        source: best.competition.source,
        _parsed: best.parsed,
      },
    ]
  })

  const sorted = entries.sort((a, b) => {
    const perfA = a._parsed as PerformanceValue
    const perfB = b._parsed as PerformanceValue
    if (perfA.higherIsBetter !== perfB.higherIsBetter) return 0
    if (perfA.higherIsBetter) return perfB.value - perfA.value
    return perfA.value - perfB.value
  })

  return sorted.map((entry, index) => {
    const { _parsed, ...rest } = entry as RankingEntry & { _parsed: PerformanceValue }
    return { ...rest, rank: index + 1 }
  })
}

const getWindRequired = (event?: string) => {
  if (!event) return false
  return WIND_REQUIRED_EVENTS.has(normalizeKey(event))
}

const buildId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID()
  return `submission-${Date.now()}`
}

const safeLocalStorage = {
  get: (key: string) => {
    if (typeof window === "undefined") return null
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set: (key: string, value: string) => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(key, value)
    } catch {
      return
    }
  },
}

export default function DataPortalPage() {
  const [role, setRole] = useState<IngestionRole>("contributor")
  const [activeTab, setActiveTab] = useState("upload")
  const [rawText, setRawText] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const [previewEvent, setPreviewEvent] = useState("All events")
  const [parsed, setParsed] = useState<ParsedData | null>(null)
  const [mapping, setMapping] = useState<Record<FieldKey, string>>({
    competition: "",
    event: "",
    round: "",
    athleteName: "",
    athleteId: "",
    result: "",
    place: "",
    wind: "",
    note: "",
  })
  const [meta, setMeta] = useState<CompetitionMeta>(defaultMeta)
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    const stored = safeLocalStorage.get(STORAGE_KEY)
    if (!stored) return
    try {
      const parsedStored = JSON.parse(stored) as Submission[]
      if (Array.isArray(parsedStored)) setSubmissions(parsedStored)
    } catch {
      return
    }
  }, [])

  useEffect(() => {
    if (!submissions.length) return
    safeLocalStorage.set(STORAGE_KEY, JSON.stringify(submissions))
  }, [submissions])

  const parseInput = (text: string) => {
    const result = parseDelimited(text)
    setParsed(result)
    if (result) {
      setMapping(autoMapHeaders(result.headers))
      setActiveTab("map")
    }
  }

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      const content = String(reader.result || "")
      setRawText(content)
      setFileName(file.name)
      parseInput(content)
    }
    reader.readAsText(file)
  }

  const mappedRows = useMemo(() => {
    if (!parsed) return []
    const headerIndex = new Map(parsed.headers.map((header, index) => [header, index]))
    return parsed.rows.map((row, idx) => {
      const valueFor = (key: FieldKey) => {
        const header = mapping[key]
        if (!header) return ""
        const columnIndex = headerIndex.get(header)
        if (columnIndex === undefined) return ""
        return row[columnIndex] ?? ""
      }
      return {
        row: idx + 2,
        competition: valueFor("competition"),
        event: valueFor("event"),
        round: valueFor("round"),
        athleteName: valueFor("athleteName"),
        athleteId: valueFor("athleteId"),
        result: valueFor("result"),
        place: valueFor("place"),
        wind: valueFor("wind"),
        note: valueFor("note"),
      }
    })
  }, [parsed, mapping])

  const validation = useMemo(() => {
    if (!mappedRows.length) return { issues: [], errors: 0, warnings: 0 }
    const issues: ValidationIssue[] = []
    const seen = new Set<string>()
    const athleteIndex = new Map(
      athleteSummaries.map((athlete) => [normalizeKey(athlete.name), athlete.id])
    )
    const athleteIds = new Set(athleteSummaries.map((athlete) => athlete.id))

    mappedRows.forEach((row) => {
      FIELD_DEFS.filter((field) => field.required).forEach((field) => {
        const value = row[field.key]
        if (!value || value.trim() === "") {
          issues.push({
            level: "error",
            row: row.row,
            message: `Missing ${field.label}.`,
          })
        }
      })

      if (row.result && !parsePerformance(row.result)) {
        issues.push({
          level: "error",
          row: row.row,
          message: `Result format looks invalid: "${row.result}".`,
        })
      }

      if (row.event && getWindRequired(row.event) && !row.wind) {
        issues.push({
          level: "warning",
          row: row.row,
          message: `Wind reading recommended for ${row.event}.`,
        })
      }

      if (row.athleteId && !athleteIds.has(row.athleteId)) {
        issues.push({
          level: "warning",
          row: row.row,
          message: `Unknown athlete ID: ${row.athleteId}.`,
        })
      } else if (!row.athleteId && row.athleteName) {
        const lookup = athleteIndex.get(normalizeKey(row.athleteName))
        if (!lookup) {
          issues.push({
            level: "warning",
            row: row.row,
            message: `Athlete not found in demo data: ${row.athleteName}.`,
          })
        }
      }

      const key = `${row.event}|${row.athleteName}|${row.result}|${row.round}`
      if (row.event && row.athleteName && row.result) {
        if (seen.has(key)) {
          issues.push({
            level: "warning",
            row: row.row,
            message: "Duplicate row detected.",
          })
        } else {
          seen.add(key)
        }
      }
    })

    const errors = issues.filter((issue) => issue.level === "error").length
    const warnings = issues.filter((issue) => issue.level === "warning").length
    return { issues, errors, warnings }
  }, [mappedRows])

  const impactPreview = useMemo(() => {
    const metaYear = getYearFromDate(meta.startDate || meta.endDate)
    if (!mappedRows.length) {
      return { year: metaYear, athletes: [], rankingImpacts: [], unknownAthletes: [] as string[] }
    }

    const athleteById = new Map(athleteProfiles.map((athlete) => [athlete.id, athlete]))
    const athleteByName = new Map(
      athleteProfiles.map((athlete) => [
        normalizeKey(`${athlete.firstName} ${athlete.lastName}`),
        athlete,
      ]),
    )

    const extraResultsByAthlete = new Map<string, CompetitionResult[]>()
    const athleteUpdates = new Map<string, AthleteImpact>()
    const unknownAthletes = new Set<string>()
    const impactedByEvent = new Map<string, Set<string>>()
    const eventLabels = new Map<string, string>()

    const pushExtraResult = (athleteId: string, result: CompetitionResult) => {
      const current = extraResultsByAthlete.get(athleteId) ?? []
      extraResultsByAthlete.set(athleteId, [...current, result])
    }

    const addImpact = (athlete: (typeof athleteProfiles)[number], update: AthleteImpact["updates"][number]) => {
      const current = athleteUpdates.get(athlete.id) ?? {
        id: athlete.id,
        name: `${athlete.firstName} ${athlete.lastName}`.trim(),
        club: athlete.club,
        updates: [],
      }
      current.updates.push(update)
      athleteUpdates.set(athlete.id, current)
    }

    mappedRows.forEach((row) => {
      const event = row.event?.trim()
      const result = row.result?.trim()
      if (!event || !result) return

      const athlete =
        (row.athleteId && athleteById.get(row.athleteId)) ||
        (row.athleteName ? athleteByName.get(normalizeKey(row.athleteName)) : undefined)

      if (!athlete) {
        if (row.athleteName) unknownAthletes.add(row.athleteName)
        return
      }

      const meet = row.competition?.trim() || meta.name || "Competition"
      const date = meta.startDate || meta.endDate || "TBD"
      const location = meta.location || "Philippines"
      pushExtraResult(athlete.id, {
        meet,
        date,
        location,
        event,
        result,
        place: row.place ?? "",
        source: meta.source,
      })

      const matchingEvent = athlete.events.find((evt) => normalizeKey(evt.name) === normalizeKey(event))
      const newPerf = parsePerformanceDetailed(result)
      const pbPerf = matchingEvent?.personalBest ? parsePerformanceDetailed(matchingEvent.personalBest) : null
      const sbPerf = matchingEvent?.seasonBest ? parsePerformanceDetailed(matchingEvent.seasonBest) : null

      const isPB =
        Boolean(
          newPerf &&
            pbPerf &&
            newPerf.higherIsBetter === pbPerf.higherIsBetter &&
            (newPerf.higherIsBetter ? newPerf.value > pbPerf.value : newPerf.value < pbPerf.value),
        )
      const isSB =
        Boolean(
          newPerf &&
            sbPerf &&
            newPerf.higherIsBetter === sbPerf.higherIsBetter &&
            (newPerf.higherIsBetter ? newPerf.value > sbPerf.value : newPerf.value < sbPerf.value),
        )

      addImpact(athlete, {
        event,
        result,
        place: row.place ?? undefined,
        isPB,
        isSB,
      })

      const normalizedEvent = normalizeKey(event)
      const impacted = impactedByEvent.get(normalizedEvent) ?? new Set<string>()
      impacted.add(athlete.id)
      impactedByEvent.set(normalizedEvent, impacted)
      if (!eventLabels.has(normalizedEvent)) eventLabels.set(normalizedEvent, event)
    })

    const rankingImpacts: RankingImpact[] = []

    impactedByEvent.forEach((athleteIds, eventKey) => {
      const eventLabel = eventLabels.get(eventKey) ?? eventKey
      const combos = new Map<string, { gender: Gender; ageGroup: AgeGroup }>()
      athleteIds.forEach((id) => {
        const athlete = athleteById.get(id)
        if (!athlete?.gender) return
        const ageGroup = getAgeGroup(athlete.birthDate, metaYear)
        combos.set(`${athlete.gender}-${ageGroup}`, { gender: athlete.gender, ageGroup })
      })

      combos.forEach(({ gender, ageGroup }) => {
        const before = buildRankingForEvent({
          event: eventLabel,
          gender,
          ageGroup,
          year: metaYear,
          extrasByAthlete: new Map(),
        })
        const after = buildRankingForEvent({
          event: eventLabel,
          gender,
          ageGroup,
          year: metaYear,
          extrasByAthlete: extraResultsByAthlete,
        })

        const impacts = Array.from(athleteIds)
          .map((id) => {
            const athlete = athleteById.get(id)
            if (!athlete || athlete.gender !== gender) return null
            if (getAgeGroup(athlete.birthDate, metaYear) !== ageGroup) return null
            const beforeRank = before.find((entry) => entry.id === id)?.rank
            const afterRank = after.find((entry) => entry.id === id)?.rank
            if (!afterRank) return null
            return {
              id,
              name: `${athlete.firstName} ${athlete.lastName}`.trim(),
              beforeRank,
              afterRank,
            }
          })
          .filter(Boolean) as RankingImpact["impacts"]

        if (!impacts.length) return
        rankingImpacts.push({
          event: eventLabel,
          year: metaYear,
          gender,
          ageGroup,
          impacts,
          topAfter: after.slice(0, 5),
        })
      })
    })

    return {
      year: metaYear,
      athletes: Array.from(athleteUpdates.values()).sort((a, b) => a.name.localeCompare(b.name)),
      rankingImpacts,
      unknownAthletes: Array.from(unknownAthletes.values()),
    }
  }, [mappedRows, meta])

  const athletePagePreview = useMemo(() => {
    const athleteById = new Map(athleteProfiles.map((athlete) => [athlete.id, athlete]))
    const athleteByName = new Map(
      athleteProfiles.map((athlete) => [
        normalizeKey(`${athlete.firstName} ${athlete.lastName}`),
        athlete,
      ]),
    )
    const extrasByAthlete = new Map<string, CompetitionResult[]>()
    const updatesByAthlete = new Map<string, MappedRow[]>()
    const previewDate = meta.startDate || meta.endDate || "TBD"
    const previewMeet = meta.name || "Competition"
    const previewLocation = meta.location || "Philippines"

    mappedRows.forEach((row) => {
      const athlete =
        (row.athleteId && athleteById.get(row.athleteId)) ||
        (row.athleteName ? athleteByName.get(normalizeKey(row.athleteName)) : undefined)
      if (!athlete) return

      const current = updatesByAthlete.get(athlete.id) ?? []
      updatesByAthlete.set(athlete.id, [...current, row])

      const extras = extrasByAthlete.get(athlete.id) ?? []
      extrasByAthlete.set(athlete.id, [
        ...extras,
        {
          meet: row.competition?.trim() || previewMeet,
          date: previewDate,
          location: previewLocation,
          event: row.event ?? "",
          result: row.result ?? "",
          place: row.place ?? "",
          source: meta.source,
        },
      ])
    })

    const parseDate = (value: string) => {
      const parsed = new Date(value)
      if (Number.isNaN(parsed.getTime())) return 0
      return parsed.getTime()
    }

    return Array.from(updatesByAthlete.entries())
      .map(([athleteId, rows]) => {
        const athlete = athleteById.get(athleteId)
        if (!athlete) return null
        const extras = extrasByAthlete.get(athleteId) ?? []
        const extrasKeys = new Set(extras.map(buildResultKey))
        const merged = mergeCompetitionsWithExtras(athleteId, athlete.competitions, extrasByAthlete)
          .sort((a, b) => parseDate(b.date) - parseDate(a.date))
          .slice(0, 5)
          .map((result) => ({
            ...result,
            isNew: extrasKeys.has(buildResultKey(result)),
          }))

        const newResults = rows.map((row) => {
          const event = row.event ?? ""
          const result = row.result ?? ""
          const matchingEvent = athlete.events.find((evt) => normalizeKey(evt.name) === normalizeKey(event))
          const newPerf = parsePerformanceDetailed(result)
          const pbPerf = matchingEvent?.personalBest ? parsePerformanceDetailed(matchingEvent.personalBest) : null
          const sbPerf = matchingEvent?.seasonBest ? parsePerformanceDetailed(matchingEvent.seasonBest) : null
          const isPB =
            Boolean(
              newPerf &&
                pbPerf &&
                newPerf.higherIsBetter === pbPerf.higherIsBetter &&
                (newPerf.higherIsBetter ? newPerf.value > pbPerf.value : newPerf.value < pbPerf.value),
            )
          const isSB =
            Boolean(
              newPerf &&
                sbPerf &&
                newPerf.higherIsBetter === sbPerf.higherIsBetter &&
                (newPerf.higherIsBetter ? newPerf.value > sbPerf.value : newPerf.value < sbPerf.value),
            )

          return {
            event,
            result,
            place: row.place,
            isPB,
            isSB,
          }
        })

        return {
          id: athlete.id,
          name: `${athlete.firstName} ${athlete.lastName}`.trim(),
          club: athlete.club,
          location: athlete.location,
          primaryEvent: athlete.events[0]?.name ?? athlete.specialty,
          newResults,
          recentResults: merged,
        }
      })
      .filter(Boolean) as Array<{
      id: string
      name: string
      club: string
      location: string
      primaryEvent: string
      newResults: Array<{ event: string; result: string; place?: string; isPB: boolean; isSB: boolean }>
      recentResults: Array<CompetitionResult & { isNew: boolean }>
    }>
  }, [mappedRows, meta])

  const rankingPreview = useMemo(() => {
    return impactPreview.rankingImpacts.map((impact) => ({
      ...impact,
      topThree: impact.topAfter.slice(0, 3),
      impactedIds: new Set(impact.impacts.map((entry) => entry.id)),
    }))
  }, [impactPreview.rankingImpacts])

  const competitionPreview = useMemo(() => {
    const previewName = meta.name || mappedRows[0]?.competition?.trim() || "Competition preview"
    const previewLocation = meta.location || "Philippines"
    const previewDate =
      meta.startDate && meta.endDate && meta.startDate !== meta.endDate
        ? `${meta.startDate} — ${meta.endDate}`
        : meta.startDate || meta.endDate || "TBD"

    const uniqueEvents = Array.from(
      new Set(mappedRows.map((row) => row.event?.trim()).filter(Boolean)),
    ) as string[]

    const uniqueAthletes = new Set(
      mappedRows.map((row) => row.athleteId || row.athleteName || "").filter(Boolean),
    )

    const parsePlaceValue = (place?: string) => {
      if (!place) return null
      const match = place.match(/\d+/)
      return match ? Number.parseInt(match[0], 10) : null
    }

    const blocks = mappedRows.reduce((acc, row) => {
      const event = row.event?.trim()
      if (!event) return acc
      const round = row.round?.trim()
      const key = `${event}||${round ?? ""}`
      if (!acc.has(key)) {
        acc.set(key, { event, round, entries: [] as MappedRow[] })
      }
      acc.get(key)?.entries.push(row)
      return acc
    }, new Map<string, { event: string; round?: string; entries: MappedRow[] }>())

    const resultBlocks = Array.from(blocks.values()).map((block) => ({
      ...block,
      entries: [...block.entries].sort((a, b) => {
        const aValue = parsePlaceValue(a.place)
        const bValue = parsePlaceValue(b.place)
        if (aValue === null || bValue === null) return 0
        return aValue - bValue
      }),
    }))

    return {
      name: previewName,
      location: previewLocation,
      date: previewDate,
      events: uniqueEvents.sort((a, b) => a.localeCompare(b)),
      participantCount: uniqueAthletes.size,
      resultCount: mappedRows.length,
      resultBlocks,
    }
  }, [mappedRows, meta])

  const filteredPreviewBlocks = useMemo(() => {
    if (previewEvent === "All events") return competitionPreview.resultBlocks
    return competitionPreview.resultBlocks.filter((block) => block.event === previewEvent)
  }, [competitionPreview.resultBlocks, previewEvent])

  useEffect(() => {
    const options = ["All events", ...competitionPreview.events]
    if (!options.includes(previewEvent)) {
      setPreviewEvent("All events")
    }
  }, [competitionPreview.events, previewEvent])

  const groupedPreview = useMemo(() => {
    const groups = new Map<string, MappedRow[]>()
    mappedRows.forEach((row) => {
      const event = row.event || "Unknown event"
      if (!groups.has(event)) groups.set(event, [])
      groups.get(event)?.push(row)
    })
    return Array.from(groups.entries())
  }, [mappedRows])

  const handleSubmit = () => {
    const submission: Submission = {
      id: buildId(),
      status: role === "certified" ? "published" : "pending",
      submittedAt: new Date().toISOString(),
      submittedBy: role,
      competition: meta,
      rows: mappedRows,
      issues: validation.issues,
    }
    setSubmissions((prev) => [submission, ...prev])
    setActiveTab("review")
  }

  const downloadSubmission = (submission: Submission) => {
    const blob = new Blob([JSON.stringify(submission, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `trackph-submission-${submission.id}.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const canMap = Boolean(parsed?.headers?.length)
  const canValidate = mappedRows.length > 0
  const canReview = validation.errors === 0 && mappedRows.length > 0
  const metaComplete = Boolean(
    meta.name &&
      meta.location &&
      meta.startDate &&
      meta.endDate &&
      meta.organizer &&
      meta.type
  )
  const canPublish = canReview && metaComplete

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="size-4" />
            Results intake
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Results Intake Portal</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Upload competition results, validate entries, and stage updates for TrackPH. Certified stewards can publish
            directly in this demo.
          </p>
        </header>

        <Card className="py-0 gap-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Role</span>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={role === "contributor" ? "default" : "outline"}
                  onClick={() => setRole("contributor")}
                >
                  Contributor
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={role === "certified" ? "default" : "outline"}
                  onClick={() => setRole("certified")}
                >
                  Certified steward
                </Button>
              </div>
              <Badge variant="outline" className="border-border text-foreground">
                {role === "certified" ? "Can publish" : "Review required"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Demo note: submissions are stored in your browser only. This does not modify live data across the site.
            </p>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList data-testid="intake-tabs">
            <TabsTrigger value="upload" data-testid="intake-tab-upload">
              <UploadCloud className="size-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="map" disabled={!canMap} data-testid="intake-tab-map">
              <Clipboard className="size-4" />
              Map fields
            </TabsTrigger>
            <TabsTrigger value="validate" disabled={!canValidate} data-testid="intake-tab-validate">
              <CheckCircle2 className="size-4" />
              Validate
            </TabsTrigger>
            <TabsTrigger value="review" disabled={!canValidate} data-testid="intake-tab-review">
              <FileText className="size-4" />
              Review
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card className="py-0 gap-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Label className="text-sm font-semibold">Upload CSV</Label>
                  <Input
                    type="file"
                    accept=".csv,.tsv,text/csv,text/tab-separated-values"
                    data-testid="results-upload-input"
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      if (file) handleFile(file)
                    }}
                  />
                </div>
                {fileName ? <p className="text-xs text-muted-foreground">Loaded: {fileName}</p> : null}
                <Separator />
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Paste data</Label>
                  <textarea
                    className="min-h-[180px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Paste CSV or TSV data here"
                    data-testid="results-paste-input"
                    value={rawText}
                    onChange={(event) => setRawText(event.target.value)}
                  />
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" variant="outline" onClick={() => parseInput(rawText)} data-testid="results-parse">
                      Parse
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setRawText(SAMPLE_CSV)
                        setFileName(null)
                        parseInput(SAMPLE_CSV)
                      }}
                      data-testid="results-sample"
                    >
                      Use sample data
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Recommended columns: competition, event, round, athleteName, athleteId, result, place, wind, note.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card className="py-0 gap-0">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Field mapping</p>
                  <p className="text-xs text-muted-foreground">
                    Map each TrackPH field to a column in your file. Required fields must be mapped.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FIELD_DEFS.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label className="text-xs font-semibold uppercase">
                        {field.label} {field.required ? "*" : ""}
                      </Label>
                      <select
                        className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                        value={mapping[field.key]}
                        data-testid={`map-field-${field.key}`}
                        onChange={(event) =>
                          setMapping((prev) => ({
                            ...prev,
                            [field.key]: event.target.value,
                          }))
                        }
                      >
                        <option value="">Not provided</option>
                        {parsed?.headers.map((header) => (
                          <option key={`${field.key}-${header}`} value={header}>
                            {header}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button type="button" onClick={() => setActiveTab("validate")} data-testid="map-validate">
                    Validate
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setActiveTab("upload")}>
                    Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validate" className="space-y-6">
            <Card className="py-0 gap-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold">Validation summary</p>
                  <Badge variant="outline">{mappedRows.length} rows</Badge>
                  <Badge variant="outline" className={validation.errors ? "border-red-300 text-red-600" : undefined}>
                    {validation.errors} errors
                  </Badge>
                  <Badge variant="outline" className={validation.warnings ? "border-amber-300 text-amber-700" : undefined}>
                    {validation.warnings} warnings
                  </Badge>
                </div>
                <div className="space-y-2">
                  {validation.issues.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No issues found. You can proceed to review.</p>
                  ) : (
                    validation.issues.slice(0, 8).map((issue, idx) => (
                      <div
                        key={`${issue.message}-${idx}`}
                        className={`rounded-md border px-3 py-2 text-xs ${
                          issue.level === "error"
                            ? "border-red-200 bg-red-50 text-red-700"
                            : "border-amber-200 bg-amber-50 text-amber-700"
                        }`}
                      >
                        {issue.row ? `Row ${issue.row}: ` : ""}
                        {issue.message}
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <Button type="button" onClick={() => setActiveTab("review")} disabled={!canReview} data-testid="validate-review">
                    Continue to review
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setActiveTab("map")}>
                    Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="review" className="space-y-6">
            <Card className="py-0 gap-0">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Competition metadata</p>
                  <p className="text-xs text-muted-foreground">
                    Add or confirm the competition details. These fields are required for the submission.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Competition name" },
                    { key: "location", label: "Location" },
                    { key: "startDate", label: "Start date" },
                    { key: "endDate", label: "End date" },
                    { key: "organizer", label: "Organizer" },
                    { key: "type", label: "Type" },
                  ].map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label className="text-xs font-semibold uppercase">{field.label}</Label>
                      <Input
                        value={meta[field.key as keyof CompetitionMeta] as string}
                        data-testid={`meta-${field.key}`}
                        onChange={(event) =>
                          setMeta((prev) => ({
                            ...prev,
                            [field.key]: event.target.value,
                          }))
                        }
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase">Status</Label>
                    <select
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                      value={meta.status}
                      data-testid="meta-status"
                      onChange={(event) =>
                        setMeta((prev) => ({
                          ...prev,
                          status: event.target.value as CompetitionMeta["status"],
                        }))
                      }
                    >
                      <option value="Past">Past</option>
                      <option value="Upcoming">Upcoming</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase">Source</Label>
                    <select
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                      value={meta.source}
                      data-testid="meta-source"
                      onChange={(event) =>
                        setMeta((prev) => ({
                          ...prev,
                          source: event.target.value as CompetitionMeta["source"],
                        }))
                      }
                    >
                      <option value="Demo data">Demo data</option>
                      <option value="World Athletics">World Athletics</option>
                    </select>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">Preview</p>
                  <div className="space-y-4">
                    {groupedPreview.map(([event, rows]) => (
                      <div key={event} className="rounded-md border border-border p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{event}</p>
                          <Badge variant="outline">{rows.length} entries</Badge>
                        </div>
                        <div className="space-y-2">
                          {rows.slice(0, 4).map((row) => (
                            <div key={`${row.row}-${row.athleteName}`} className="text-xs text-muted-foreground">
                              {row.place ? `${row.place}. ` : ""}
                              {row.athleteName ?? "Unknown athlete"} — {row.result}
                              {row.wind ? ` (${row.wind} wind)` : ""}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-4" data-testid="impact-preview">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Impact preview</p>
                    <Badge variant="outline">Year {impactPreview.year}</Badge>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-md border border-border p-4 space-y-3">
                      <p className="text-sm font-semibold text-foreground">Athlete page updates</p>
                      {impactPreview.athletes.length === 0 ? (
                        <p className="text-xs text-muted-foreground">
                          No matching athletes found in demo data yet.
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {impactPreview.athletes.map((athlete) => (
                            <div key={athlete.id} className="rounded-md border border-border bg-background p-3 space-y-1">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                                <span className="text-xs text-muted-foreground">{athlete.club}</span>
                              </div>
                              <div className="space-y-1">
                                {athlete.updates.map((update, idx) => (
                                  <div
                                    key={`${athlete.id}-${update.event}-${idx}`}
                                    className="text-xs text-muted-foreground flex flex-wrap items-center gap-2"
                                  >
                                    <span>
                                      {update.event} — {update.result}
                                      {update.place ? ` (${update.place})` : ""}
                                    </span>
                                    {update.isPB ? (
                                      <Badge variant="outline" className="border-accent/40 text-accent">
                                        PB
                                      </Badge>
                                    ) : null}
                                    {!update.isPB && update.isSB ? (
                                      <Badge
                                        variant="outline"
                                        className="border-amber-300/70 text-amber-700 bg-amber-50"
                                      >
                                        SB
                                      </Badge>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {impactPreview.unknownAthletes.length > 0 ? (
                        <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                          Unmatched athletes: {impactPreview.unknownAthletes.join(", ")}.
                        </div>
                      ) : null}
                    </div>
                    <div className="rounded-md border border-border p-4 space-y-3">
                      <p className="text-sm font-semibold text-foreground">Ranking shifts</p>
                      {impactPreview.rankingImpacts.length === 0 ? (
                        <p className="text-xs text-muted-foreground">
                          No ranking impact detected yet. Add athlete IDs to compare against existing rankings.
                        </p>
                      ) : (
                        <div className="space-y-3">
                          {impactPreview.rankingImpacts.map((impact, idx) => (
                            <div key={`${impact.event}-${impact.gender}-${idx}`} className="rounded-md border border-border bg-background p-3 space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-xs font-semibold text-foreground">{impact.event}</p>
                                <span className="text-[11px] text-muted-foreground">
                                  {impact.gender} • {impact.ageGroup}
                                </span>
                              </div>
                              <div className="space-y-1">
                                {impact.topAfter.slice(0, 3).map((entry) => (
                                  <div key={`${entry.id}-${entry.rank}`} className="text-xs text-muted-foreground">
                                    #{entry.rank} {entry.name} — {entry.result}
                                  </div>
                                ))}
                              </div>
                              <Separator />
                              <div className="space-y-1">
                                {impact.impacts.map((item) => {
                                  const before = item.beforeRank ? `#${item.beforeRank}` : "—"
                                  const after = item.afterRank ? `#${item.afterRank}` : "—"
                                  const delta =
                                    item.beforeRank && item.afterRank
                                      ? item.beforeRank - item.afterRank
                                      : 0
                                  const deltaLabel =
                                    item.beforeRank && item.afterRank
                                      ? delta > 0
                                        ? `(+${delta})`
                                        : delta < 0
                                          ? `(${delta})`
                                          : "(no change)"
                                      : item.afterRank
                                        ? "(new)"
                                        : ""

                                  return (
                                    <div key={item.id} className="text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                                      <span className="font-semibold text-foreground">{item.name}</span>
                                      <span>
                                        {before} → {after}
                                      </span>
                                      <span>{deltaLabel}</span>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Competition page preview</p>
                    <Badge variant="outline">{meta.status}</Badge>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-accent uppercase tracking-widest">Preview</p>
                        <h3 className="text-2xl font-bold text-foreground">{competitionPreview.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {meta.type || "Competition"} • {competitionPreview.location}
                        </p>
                        <p className="text-xs text-muted-foreground">{competitionPreview.date}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          meta.source === "World Athletics"
                            ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                            : "border-border text-foreground bg-muted"
                        }
                      >
                        {meta.source}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="p-3 rounded-lg border border-border bg-background">
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Participants</p>
                        <p className="text-lg font-semibold text-foreground">{competitionPreview.participantCount}</p>
                      </div>
                      <div className="p-3 rounded-lg border border-border bg-background">
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Events</p>
                        <p className="text-lg font-semibold text-foreground">{competitionPreview.events.length}</p>
                      </div>
                      <div className="p-3 rounded-lg border border-border bg-background">
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Results</p>
                        <p className="text-lg font-semibold text-foreground">{competitionPreview.resultCount}</p>
                      </div>
                      <div className="p-3 rounded-lg border border-border bg-background">
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Organizer</p>
                        <p className="text-xs font-semibold text-foreground">{meta.organizer || "TBD"}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Filter:</span>
                        {["All events", ...competitionPreview.events].map((event) => {
                          const active = previewEvent === event
                          return (
                            <button
                              key={event}
                              type="button"
                              onClick={() => setPreviewEvent(event)}
                              className={`rounded-full border px-3 py-1 ${
                                active ? "border-accent text-accent" : "border-border text-foreground"
                              }`}
                            >
                              {event}
                            </button>
                          )
                        })}
                      </div>

                      {meta.status === "Upcoming" ? (
                        <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                          Public view hides results for upcoming competitions. Set status to “Past” to preview results.
                        </div>
                      ) : (
                        filteredPreviewBlocks.length === 0 ? (
                          <p className="text-xs text-muted-foreground">No results to preview yet.</p>
                        ) : (
                          <div className="space-y-3">
                            {filteredPreviewBlocks.map((block) => (
                                <div
                                  key={`${block.event}-${block.round ?? "all"}`}
                                  className="rounded-lg border border-border bg-background p-4 space-y-2"
                                >
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-foreground">{block.event}</p>
                                    {block.round ? (
                                      <span className="text-xs font-semibold text-muted-foreground uppercase">
                                        {block.round}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="space-y-2">
                                    {block.entries.map((entry, idx) => {
                                      const athlete =
                                        (entry.athleteId &&
                                          athleteProfiles.find((ath) => ath.id === entry.athleteId)) ||
                                        (entry.athleteName
                                          ? athleteProfiles.find(
                                              (ath) =>
                                                normalizeKey(`${ath.firstName} ${ath.lastName}`) ===
                                                normalizeKey(entry.athleteName ?? ""),
                                            )
                                          : undefined)
                                      const matchingEvent = athlete?.events.find(
                                        (evt) => normalizeKey(evt.name) === normalizeKey(block.event),
                                      )
                                      const newPerf = parsePerformanceDetailed(entry.result)
                                      const pbPerf = matchingEvent?.personalBest
                                        ? parsePerformanceDetailed(matchingEvent.personalBest)
                                        : null
                                      const sbPerf = matchingEvent?.seasonBest
                                        ? parsePerformanceDetailed(matchingEvent.seasonBest)
                                        : null
                                      const isPB =
                                        Boolean(
                                          newPerf &&
                                            pbPerf &&
                                            newPerf.higherIsBetter === pbPerf.higherIsBetter &&
                                            (newPerf.higherIsBetter
                                              ? newPerf.value > pbPerf.value
                                              : newPerf.value < pbPerf.value),
                                        )
                                      const isSB =
                                        Boolean(
                                          newPerf &&
                                            sbPerf &&
                                            newPerf.higherIsBetter === sbPerf.higherIsBetter &&
                                            (newPerf.higherIsBetter
                                              ? newPerf.value > sbPerf.value
                                              : newPerf.value < sbPerf.value),
                                        )

                                      return (
                                        <div
                                          key={`${block.event}-${entry.athleteName}-${idx}`}
                                          className="flex items-center justify-between gap-3 text-xs"
                                        >
                                          <div className="space-y-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                              <p className="font-semibold text-foreground">
                                                {entry.athleteName ?? "Unknown athlete"}
                                              </p>
                                              {isPB ? (
                                                <Badge variant="outline" className="border-accent/40 text-accent">
                                                  PB
                                                </Badge>
                                              ) : null}
                                              {!isPB && isSB ? (
                                                <Badge
                                                  variant="outline"
                                                  className="border-amber-300/70 text-amber-700 bg-amber-50"
                                                >
                                                  SB
                                                </Badge>
                                              ) : null}
                                            </div>
                                            <p className="text-[11px] text-muted-foreground">
                                              {entry.place ? `Place: ${entry.place}` : "Place: —"}{" "}
                                              {entry.wind ? `• Wind ${entry.wind}` : ""}
                                            </p>
                                          </div>
                                          <div className="text-right">
                                            <p className="font-semibold text-foreground">{entry.result}</p>
                                            {entry.note ? (
                                              <p className="text-[11px] text-muted-foreground">{entry.note}</p>
                                            ) : null}
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Athlete page preview</p>
                    <Badge variant="outline">{athletePagePreview.length} athletes</Badge>
                  </div>
                  {athletePagePreview.length === 0 ? (
                    <p className="text-xs text-muted-foreground">
                      No athlete matches yet. Add athlete IDs or known names to preview profile updates.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {athletePagePreview.map((athlete) => (
                        <Card key={athlete.id} className="py-0 gap-0">
                          <CardContent className="p-4 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div>
                                <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {athlete.club} • {athlete.location}
                                </p>
                              </div>
                              <Badge variant="outline">{athlete.primaryEvent}</Badge>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs font-semibold text-foreground">New results</p>
                              <div className="space-y-2">
                                {athlete.newResults.map((result, idx) => (
                                  <div key={`${athlete.id}-new-${idx}`} className="text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                                    <span>
                                      {result.event} — {result.result}
                                      {result.place ? ` (${result.place})` : ""}
                                    </span>
                                    {result.isPB ? (
                                      <Badge variant="outline" className="border-accent/40 text-accent">
                                        PB
                                      </Badge>
                                    ) : null}
                                    {!result.isPB && result.isSB ? (
                                      <Badge
                                        variant="outline"
                                        className="border-amber-300/70 text-amber-700 bg-amber-50"
                                      >
                                        SB
                                      </Badge>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs font-semibold text-foreground">Recent results</p>
                              <div className="space-y-2">
                                {athlete.recentResults.map((result, idx) => (
                                  <div
                                    key={`${athlete.id}-recent-${idx}`}
                                    className={`rounded-md border px-3 py-2 text-xs ${
                                      result.isNew
                                        ? "border-accent/40 bg-accent/5 text-foreground"
                                        : "border-border text-muted-foreground"
                                    }`}
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <span>
                                        {result.event} — {result.result}
                                      </span>
                                      <span>{result.place ? `Place ${result.place}` : "Place —"}</span>
                                    </div>
                                    <div className="text-[11px] text-muted-foreground">
                                      {result.meet} • {result.date}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Rankings page preview</p>
                    <Badge variant="outline">{rankingPreview.length} events</Badge>
                  </div>
                  {rankingPreview.length === 0 ? (
                    <p className="text-xs text-muted-foreground">
                      No ranking impacts detected yet. Add athlete IDs to see updated top‑3 cards.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {rankingPreview.map((impact) => (
                        <Card key={`${impact.event}-${impact.gender}-${impact.ageGroup}`} className="py-0 gap-0">
                          <CardContent className="p-4 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-foreground">{impact.event}</p>
                              <span className="text-xs text-muted-foreground">
                                {impact.gender} • {impact.ageGroup} • {impact.year}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {impact.topThree.map((entry) => {
                                const isImpacted = impact.impactedIds.has(entry.id)
                                return (
                                  <div
                                    key={`${entry.id}-${entry.rank}`}
                                    className={`rounded-md border p-3 space-y-1 ${
                                      isImpacted ? "border-accent bg-accent/5" : "border-border"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <p className="text-xs font-semibold text-foreground">{entry.name}</p>
                                      <Badge variant="outline" className="border-accent/40 text-accent">
                                        #{entry.rank}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{entry.result}</p>
                                    <p className="text-[11px] text-muted-foreground">{entry.meet}</p>
                                  </div>
                                )
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button type="button" onClick={handleSubmit} disabled={!canPublish} data-testid="review-submit">
                    {role === "certified" ? "Publish to demo" : "Submit for review"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setActiveTab("validate")}>
                    Back
                  </Button>
                </div>
                {!canPublish ? (
                  <p className="text-xs text-muted-foreground">
                    Complete competition metadata and resolve validation errors before submitting.
                  </p>
                ) : null}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="space-y-4" data-testid="submission-log">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Submission log</h2>
            <Badge variant="outline">{submissions.length} total</Badge>
          </div>
          {submissions.length === 0 ? (
            <Card className="py-0 gap-0">
              <CardContent className="p-6 text-sm text-muted-foreground">
                No submissions yet. Upload results to create the first log entry.
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {submissions.map((submission) => (
                <Card key={submission.id} className="py-0 gap-0">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">{submission.competition.name || "Untitled"}</p>
                      <Badge
                        variant="outline"
                        className={
                          submission.status === "published"
                            ? "border-emerald-300 text-emerald-700"
                            : "border-amber-300 text-amber-700"
                        }
                      >
                        {submission.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Submitted {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Rows: {submission.rows.length}</p>
                    <p className="text-xs text-muted-foreground">Issues: {submission.issues.length}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" onClick={() => downloadSubmission(submission)}>
                        Download JSON
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
