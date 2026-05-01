import { athleteProfiles, athleteSummaries } from "./athletes"
import { clubs } from "./clubs"
import { coaches } from "./coaches"
import { competitions } from "./competitions"
import { buildRankingsForAthletes, getAgeGroup, getBestResultForEvent, getRankingYearsFromAthletes, toCanonicalEventKey } from "./performance-evidence"
import { resolveRoster, sponsors } from "./sponsors"
import { formatEventLabel, normalizeEventKey } from "./utils"

export type ValidationIssue = { kind: "missing" | "warning"; message: string }

const normalizeRank = (rank?: string | number) => {
  if (rank === undefined || rank === null || rank === "") return null
  return Number.parseInt(String(rank).replace("#", "").trim(), 10)
}

export const validateDataIntegrity = (): ValidationIssue[] => {
  const issues: ValidationIssue[] = []

  // Athlete references
  athleteSummaries.forEach((athlete) => {
    if (athlete.clubId && !clubs.find((club) => club.id === athlete.clubId)) {
      issues.push({ kind: "missing", message: `Athlete ${athlete.name} references missing club ${athlete.clubId}` })
    }
    if (athlete.coachId && !coaches.find((coach) => coach.id === athlete.coachId)) {
      issues.push({ kind: "missing", message: `Athlete ${athlete.name} references missing coach ${athlete.coachId}` })
    }
  })

  // Coach references
  coaches.forEach((coach) => {
    if (coach.clubId && !clubs.find((club) => club.id === coach.clubId)) {
      issues.push({ kind: "missing", message: `Coach ${coach.name} references missing club ${coach.clubId}` })
    }
  })

  // Club references
  clubs.forEach((club) => {
    const clubAthletes = athleteProfiles.filter((athlete) => athlete.clubId === club.id)
    const clubCoaches = coaches.filter((coach) => coach.clubId === club.id)
    if (clubAthletes.length === 0) {
      issues.push({ kind: "warning", message: `Club ${club.name} has no mapped athletes` })
    }
    if (club.expectsCoachRoster !== false && clubCoaches.length === 0) {
      issues.push({ kind: "warning", message: `Club ${club.name} has no mapped coaches` })
    }
    if (club.isRecognized && (!club.recognitions || club.recognitions.length === 0)) {
      issues.push({ kind: "warning", message: `Club ${club.name} is recognized but has no recognition labels` })
    }
  })

  // Coach recognition
  coaches.forEach((coach) => {
    if (coach.isRecognized && (!coach.recognitions || coach.recognitions.length === 0)) {
      issues.push({ kind: "warning", message: `Coach ${coach.name} is recognized but has no recognition labels` })
    }
    if (coach.isRecognized && (!coach.certifications || coach.certifications.length === 0)) {
      issues.push({ kind: "warning", message: `Coach ${coach.name} is recognized but has no certifications listed` })
    }
  })

  // Sponsor rosters
  sponsors.forEach((sponsor) => {
    resolveRoster(sponsor.roster).forEach((entry) => {
      if (entry.name.startsWith("Unknown")) {
        issues.push({ kind: "missing", message: `Sponsor ${sponsor.name} roster has missing ${entry.type} ${entry.id}` })
      }
    })
  })

  // Competition sanity checks
  competitions.forEach((competition) => {
    if (!competition.events.length) {
      issues.push({ kind: "warning", message: `Competition ${competition.name} has no events listed` })
    }
  })

  // Event normalization checks
  const checkedEvents = new Set<string>()
  const checkNormalization = (eventLabel: string, source: string) => {
    const canonical = formatEventLabel(eventLabel)
    const key = `${source}|${eventLabel}`
    if (checkedEvents.has(key)) return
    checkedEvents.add(key)
    if (canonical !== eventLabel && normalizeEventKey(eventLabel) !== normalizeEventKey(canonical)) {
      issues.push({ kind: "warning", message: `event_normalization: ${source} uses non-canonical event label "${eventLabel}"` })
    }
  }

  athleteProfiles.forEach((athlete) => {
    athlete.events.forEach((event) => checkNormalization(event.name, `athlete ${athlete.slug}`))
    athlete.competitions.forEach((competition) => checkNormalization(competition.event, `athlete ${athlete.slug} competitions`))
  })
  competitions.forEach((competition) => {
    competition.events.forEach((event) => checkNormalization(event, `competition ${competition.slug}`))
    ;(competition.results ?? []).forEach((resultBlock) => checkNormalization(resultBlock.event, `competition ${competition.slug} results`))
  })

  const latestYear = getRankingYearsFromAthletes(athleteProfiles)[0] ?? new Date().getFullYear()
  const rankingCache = new Map<string, ReturnType<typeof buildRankingsForAthletes>>()

  // PB and rank consistency checks for non-stub athletes
  athleteProfiles.filter((athlete) => !athlete.isStub).forEach((athlete) => {
    athlete.events.forEach((event) => {
      const eventKey = toCanonicalEventKey(event.name)
      const bestEvidence = getBestResultForEvent({ athlete, eventKey, scope: "all-time" })

      if (event.personalBest && event.personalBest !== "—" && !bestEvidence) {
        issues.push({
          kind: "missing",
          message: `pb_consistency: ${athlete.slug} ${event.name} has profile PB (${event.personalBest}) without supporting competition evidence`,
        })
      }

      if (event.personalBest && event.personalBest !== "—" && bestEvidence && event.personalBest !== bestEvidence.competition.result) {
        issues.push({
          kind: "warning",
          message: `pb_consistency: ${athlete.slug} ${event.name} profile PB (${event.personalBest}) differs from evidence best (${bestEvidence.competition.result})`,
        })
      }
    })

    const primaryEvent = athlete.events[0]
    if (!primaryEvent || !athlete.gender) return

    const ageGroup = getAgeGroup(athlete.birthDate, latestYear)
    const cacheKey = `${toCanonicalEventKey(primaryEvent.name)}|${athlete.gender}|${ageGroup}|${latestYear}`
    if (!rankingCache.has(cacheKey)) {
      rankingCache.set(
        cacheKey,
        buildRankingsForAthletes({
          athletes: athleteProfiles,
          event: primaryEvent.name,
          gender: athlete.gender,
          ageGroup,
          year: latestYear,
        }),
      )
    }

    const rankingEntry = rankingCache.get(cacheKey)?.find((entry) => entry.id === athlete.id)
    const profileRank = normalizeRank(primaryEvent.nationalRank)

    if (!rankingEntry && profileRank !== null) {
      issues.push({
        kind: "warning",
        message: `rank_consistency: ${athlete.slug} has profile rank #${profileRank} but is unranked in ${latestYear} ${primaryEvent.name} (${athlete.gender}/${ageGroup})`,
      })
      return
    }

    if (rankingEntry && profileRank !== null && rankingEntry.rank !== profileRank) {
      issues.push({
        kind: "warning",
        message: `rank_consistency: ${athlete.slug} profile rank #${profileRank} differs from computed rank #${rankingEntry.rank} in ${latestYear} ${primaryEvent.name} (${athlete.gender}/${ageGroup})`,
      })
    }
  })

  return issues
}

if (typeof process !== "undefined" && process.argv[1]) {
  const currentFile = new URL(process.argv[1], "file:").href
  if (import.meta.url === currentFile) {
    const issues = validateDataIntegrity()
    if (!issues.length) {
      console.log("Data integrity check passed")
    } else {
      issues.forEach((issue) => console.log(`${issue.kind.toUpperCase()}: ${issue.message}`))
      if (issues.some((issue) => issue.kind === "missing")) {
        process.exitCode = 1
      }
    }
  }
}
