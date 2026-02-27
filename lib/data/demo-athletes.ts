import { athleteSummaries } from "@/lib/data/athletes"

export type DemoAthleteSpotlight = {
  id: string
  eventCategory: string
  whyThisAthlete: string
}

export const demoAthleteSpotlights: DemoAthleteSpotlight[] = [
  {
    id: "athlete-jc-dela-cruz",
    eventCategory: "Sprints",
    whyThisAthlete: "Short sprint progression and ranking traceability.",
  },
  {
    id: "athlete-lauren-hoffman",
    eventCategory: "Hurdles",
    whyThisAthlete: "Internationally visible hurdles profile for governance demo flow.",
  },
  {
    id: "athlete-erika-villarin",
    eventCategory: "Middle Distance",
    whyThisAthlete: "800m/1500m pathway for institutional program tracking.",
  },
  {
    id: "athlete-carlo-mendoza",
    eventCategory: "Long Distance",
    whyThisAthlete: "Endurance athlete journey across local and national meets.",
  },
  {
    id: "athlete-rico-navarro",
    eventCategory: "Field Events",
    whyThisAthlete: "Jumps-focused profile to represent non-track event workflows.",
  },
]

const spotlightIds = new Set(demoAthleteSpotlights.map((item) => item.id))

export const demoAthleteSummaries = athleteSummaries.filter((athlete) => spotlightIds.has(athlete.id))

