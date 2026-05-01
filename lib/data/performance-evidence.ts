import { getCompetitionResultsByAthleteId } from "./competitions"
import { formatEventLabel, normalizeEventKey, parseDateToTimestamp } from "./utils"
import type { AthleteProfile, CompetitionResult as AthleteCompetitionResult } from "./athletes"

export type Gender = "Women" | "Men"
export type AgeGroup = "Youth" | "Open"
export type CanonicalEventKey = string

export type PerformanceValue = {
  value: number
  higherIsBetter: boolean
}

export type AthleteEventEvidence = {
  athleteId: string
  event: string
  eventKey: CanonicalEventKey
  competition: AthleteCompetitionResult
  parsed: PerformanceValue
}

export type AthleteRankingContext = {
  event: string
  eventKey: CanonicalEventKey
  year: number
  gender: Gender
  ageGroup: AgeGroup
}

export type RankingEntry = {
  id: string
  name: string
  event: string
  result: string
  date: string
  meet: string
  location: string
  club: string
  href: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
  rank: number
  source?: string
}

export const toCanonicalEventKey = (event: string): CanonicalEventKey => normalizeEventKey(event)

const higherIsBetterEventKeys = new Set([
  "high jump",
  "long jump",
  "triple jump",
  "pole vault",
  "shot put",
  "discus throw",
  "javelin throw",
  "hammer throw",
])

const isHigherIsBetterEvent = (eventKey?: CanonicalEventKey) =>
  !!eventKey && higherIsBetterEventKeys.has(toCanonicalEventKey(eventKey))

export const parsePerformanceValue = (performance?: string, eventKey?: CanonicalEventKey): PerformanceValue | null => {
  if (!performance) return null
  const raw = performance.trim()
  if (!raw || raw === "—") return null

  const lower = raw.toLowerCase()
  const hasColon = lower.includes(":")
  const endsWithSeconds = /\ds\b/.test(lower) || lower.endsWith("s")
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
  const higherIsBetter = isHigherIsBetterEvent(eventKey) || lower.includes("m") || lower.includes("pt") || lower.includes("pts")
  return { value: numeric, higherIsBetter }
}

export const getCompetitionYear = (dateValue?: string): number | null => {
  const timestamp = parseDateToTimestamp(dateValue)
  if (timestamp === null) return null
  return new Date(timestamp).getUTCFullYear()
}

export const buildCompetitionResultKey = (result: AthleteCompetitionResult) =>
  `${result.meet}|${result.date}|${toCanonicalEventKey(result.event)}|${result.result}`

const dedupeCompetitionResults = (results: AthleteCompetitionResult[]) => {
  const seen = new Set<string>()
  const merged: AthleteCompetitionResult[] = []

  results.forEach((result) => {
    const key = buildCompetitionResultKey(result)
    if (seen.has(key)) return
    seen.add(key)
    merged.push(result)
  })

  return merged
}

export const getMergedCompetitionResults = (
  athlete: Pick<AthleteProfile, "id" | "competitions">,
  extras: AthleteCompetitionResult[] = [],
) => {
  const competitionResults = getCompetitionResultsByAthleteId(athlete.id)
  return dedupeCompetitionResults([...athlete.competitions, ...competitionResults, ...extras])
}

export const getAgeGroup = (birthDate: string | undefined, year: number): AgeGroup => {
  if (!birthDate || birthDate === "—") return "Open"
  const birthYear = Number.parseInt(birthDate.slice(0, 4), 10)
  if (!birthYear || Number.isNaN(birthYear)) return "Open"
  const age = year - birthYear
  return age <= 19 ? "Youth" : "Open"
}

const pickBestEvidence = (entries: AthleteEventEvidence[]) => {
  if (!entries.length) return null

  return entries.reduce((current, next) => {
    if (!current) return next
    if (current.parsed.higherIsBetter !== next.parsed.higherIsBetter) return current

    if (current.parsed.higherIsBetter) {
      if (next.parsed.value > current.parsed.value) return next
    } else if (next.parsed.value < current.parsed.value) {
      return next
    }

    const currentDate = parseDateToTimestamp(current.competition.date) ?? 0
    const nextDate = parseDateToTimestamp(next.competition.date) ?? 0
    return nextDate > currentDate ? next : current
  })
}

export const getEventEvidence = ({
  athlete,
  eventKey,
  scope,
  year,
  extras = [],
}: {
  athlete: Pick<AthleteProfile, "id" | "competitions">
  eventKey: CanonicalEventKey
  scope: "all-time" | "year"
  year?: number
  extras?: AthleteCompetitionResult[]
}): AthleteEventEvidence[] => {
  const merged = getMergedCompetitionResults(athlete, extras)

  return merged
    .filter((competition) => toCanonicalEventKey(competition.event) === eventKey)
    .filter((competition) => {
      if (scope === "all-time") return true
      const competitionYear = getCompetitionYear(competition.date)
      return competitionYear !== null && competitionYear === year
    })
    .map((competition) => {
      const parsed = parsePerformanceValue(competition.result, eventKey)
      if (!parsed) return null
      return {
        athleteId: athlete.id,
        event: formatEventLabel(competition.event),
        eventKey,
        competition,
        parsed,
      }
    })
    .filter(Boolean) as AthleteEventEvidence[]
}

export const getBestResultForEvent = ({
  athlete,
  eventKey,
  scope,
  year,
  extras = [],
}: {
  athlete: Pick<AthleteProfile, "id" | "competitions">
  eventKey: CanonicalEventKey
  scope: "all-time" | "year"
  year?: number
  extras?: AthleteCompetitionResult[]
}) => {
  const evidence = getEventEvidence({ athlete, eventKey, scope, year, extras })
  return pickBestEvidence(evidence)
}

export const buildRankingsForAthletes = ({
  athletes,
  event,
  gender,
  ageGroup,
  year,
  extrasByAthlete = new Map<string, AthleteCompetitionResult[]>(),
}: {
  athletes: AthleteProfile[]
  event: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
  extrasByAthlete?: Map<string, AthleteCompetitionResult[]>
}) => {
  const eventKey = toCanonicalEventKey(event)
  const displayEvent = formatEventLabel(event)

  const entries = athletes.flatMap((athlete) => {
    if (!athlete.gender || athlete.gender !== gender) return []

    const athleteAgeGroup = getAgeGroup(athlete.birthDate, year)
    if (athleteAgeGroup !== ageGroup) return []

    const best = getBestResultForEvent({
      athlete,
      eventKey,
      scope: "year",
      year,
      extras: extrasByAthlete.get(athlete.id) ?? [],
    })

    if (!best) return []

    return [
      {
        id: athlete.id,
        name: `${athlete.firstName} ${athlete.lastName}`.trim(),
        event: displayEvent,
        result: best.competition.result,
        date: best.competition.date,
        meet: best.competition.meet,
        location: best.competition.location,
        club: athlete.club,
        href: `/athletes/${athlete.slug}`,
        gender,
        ageGroup: athleteAgeGroup,
        year,
        rank: 0,
        source: best.competition.source ?? "Demo data",
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

  return sorted.map(
    (entry, index): RankingEntry => ({
      id: entry.id,
      name: entry.name,
      event: entry.event,
      result: entry.result,
      date: entry.date,
      meet: entry.meet,
      location: entry.location,
      club: entry.club,
      href: entry.href,
      gender: entry.gender,
      ageGroup: entry.ageGroup,
      year: entry.year,
      rank: index + 1,
      source: entry.source,
    }),
  )
}

export const getRankingEntryForAthlete = ({
  athletes,
  athleteId,
  event,
  gender,
  ageGroup,
  year,
  extrasByAthlete,
}: {
  athletes: AthleteProfile[]
  athleteId: string
  event: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
  extrasByAthlete?: Map<string, AthleteCompetitionResult[]>
}) =>
  buildRankingsForAthletes({ athletes, event, gender, ageGroup, year, extrasByAthlete }).find(
    (entry) => entry.id === athleteId,
  )

export const getRankingEventsFromAthletes = (athletes: AthleteProfile[]) => {
  const eventLabels = new Map<CanonicalEventKey, string>()

  athletes.forEach((athlete) => {
    getMergedCompetitionResults(athlete).forEach((competition) => {
      if (!competition.event) return
      const key = toCanonicalEventKey(competition.event)
      if (!key || eventLabels.has(key)) return
      eventLabels.set(key, formatEventLabel(competition.event))
    })
  })

  return Array.from(eventLabels.values()).sort((a, b) => a.localeCompare(b))
}

export const getRankingYearsFromAthletes = (athletes: AthleteProfile[]) => {
  const years = new Set<number>()

  athletes.forEach((athlete) => {
    getMergedCompetitionResults(athlete).forEach((competition) => {
      const year = getCompetitionYear(competition.date)
      if (year !== null) years.add(year)
    })
  })

  return Array.from(years).sort((a, b) => b - a)
}
