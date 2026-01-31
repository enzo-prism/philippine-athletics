import { getCompetitionResultsByAthleteId } from "./competitions"
import { athleteProfiles } from "./athletes"
import { normalizeKey } from "./utils"

export type Gender = "Women" | "Men"
export type AgeGroup = "Youth" | "Open"

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

type PerformanceValue = {
  value: number
  higherIsBetter: boolean
}

const parsePerformance = (performance: string | undefined): PerformanceValue | null => {
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

const mergeCompetitions = (athlete: (typeof athleteProfiles)[number]) => {
  const competitionResults = getCompetitionResultsByAthleteId(athlete.id)
  if (!competitionResults.length) return athlete.competitions

  const seen = new Set(
    athlete.competitions.map((competition) => `${competition.meet}|${competition.date}|${competition.event}|${competition.result}`),
  )

  const merged = [
    ...athlete.competitions,
    ...competitionResults.filter((competition) => {
      const key = `${competition.meet}|${competition.date}|${competition.event}|${competition.result}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    }),
  ]

  return merged
}

export const getRankingEvents = () => {
  const events = new Set<string>()
  athleteProfiles.forEach((athlete) => {
    mergeCompetitions(athlete).forEach((competition) => {
      if (competition.event) events.add(competition.event)
    })
  })
  return Array.from(events).sort((a, b) => a.localeCompare(b))
}

export const getRankingYears = () => {
  const years = new Set<number>()
  athleteProfiles.forEach((athlete) => {
    mergeCompetitions(athlete).forEach((competition) => {
      const year = new Date(competition.date).getFullYear()
      if (!Number.isNaN(year)) years.add(year)
    })
  })
  return Array.from(years).sort((a, b) => b - a)
}

export const buildRankings = ({
  event,
  gender,
  ageGroup,
  year,
}: {
  event: string
  gender: Gender
  ageGroup: AgeGroup
  year: number
}) => {
  const normalizedEvent = normalizeKey(event)

  const entries = athleteProfiles.flatMap((athlete) => {
    if (!athlete.gender || athlete.gender !== gender) return []

    const athleteAgeGroup = getAgeGroup(athlete.birthDate, year)
    if (athleteAgeGroup !== ageGroup) return []

    const matching = mergeCompetitions(athlete)
      .filter((competition) => normalizeKey(competition.event) === normalizedEvent)
      .filter((competition) => new Date(competition.date).getFullYear() === year)
      .map((competition) => {
        const parsed = parsePerformance(competition.result)
        if (!parsed) return null
        return { competition, parsed }
      })
      .filter(Boolean) as Array<{ competition: (typeof athlete.competitions)[number]; parsed: PerformanceValue }>

    if (!matching.length) return []

    const best = matching.reduce((current, next) => {
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
        href: `/athletes/${athlete.slug}`,
        gender: athlete.gender ?? gender,
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

  return sorted.map((entry, index) => {
    const { _parsed, ...rest } = entry as RankingEntry & { _parsed: PerformanceValue }
    return { ...rest, rank: index + 1 }
  })
}
