import { athleteSummaries } from "@/lib/data/athletes"

export type DemoAthleteSpotlight = {
  id: string
  eventCategory: string
  whyThisAthlete: string
}

export const demoAthleteSpotlights: DemoAthleteSpotlight[] = []

const spotlightIds = new Set(demoAthleteSpotlights.map((item) => item.id))

export const demoAthleteSummaries = athleteSummaries.filter((athlete) => spotlightIds.has(athlete.id))
