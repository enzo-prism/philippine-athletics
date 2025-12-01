import { athleteProfiles, athleteSummaries } from "./athletes"
import { clubs } from "./clubs"
import { coaches } from "./coaches"
import { competitions } from "./competitions"
import { resolveRoster, sponsors } from "./sponsors"

export type ValidationIssue = { kind: "missing" | "warning"; message: string }

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
    if (clubCoaches.length === 0) {
      issues.push({ kind: "warning", message: `Club ${club.name} has no mapped coaches` })
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
