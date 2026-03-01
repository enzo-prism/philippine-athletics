import { athleteProfiles } from "./athletes"
import {
  buildRankingsForAthletes,
  getRankingEventsFromAthletes,
  getRankingYearsFromAthletes,
} from "./performance-evidence"

export type {
  AgeGroup,
  Gender,
  RankingEntry,
  AthleteRankingContext,
  AthleteEventEvidence,
  CanonicalEventKey,
  PerformanceValue,
} from "./performance-evidence"

export const getRankingEvents = () => getRankingEventsFromAthletes(athleteProfiles)

export const getRankingYears = () => getRankingYearsFromAthletes(athleteProfiles)

export const buildRankings = ({
  event,
  gender,
  ageGroup,
  year,
}: {
  event: string
  gender: "Women" | "Men"
  ageGroup: "Youth" | "Open"
  year: number
}) =>
  buildRankingsForAthletes({
    athletes: athleteProfiles,
    event,
    gender,
    ageGroup,
    year,
  })
