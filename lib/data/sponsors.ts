import { athleteSummaries } from "./athletes"
import { clubs } from "./clubs"
import { coaches } from "./coaches"
import { matchesIdOrSlug, slugify } from "./utils"

export type SponsoredEntity = {
  id: string
  type: "athlete" | "coach" | "club"
}

export type Sponsor = {
  id: string
  slug: string
  name: string
  focus: string
  location: string
  details: string[]
  roster: SponsoredEntity[]
  badges?: string[]
  isStub?: boolean
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    slug: slugify("SprintLab"),
    name: "SprintLab",
    focus: "Apparel & Speed Gear",
    location: "Makati",
    details: ["Performance kits", "Spikes & relay gear", "Athlete activation support"],
    badges: ["National Partner"],
    roster: [
      { id: "1", type: "athlete" },
      { id: "4", type: "athlete" },
      { id: "1", type: "club" },
    ],
  },
  {
    id: "2",
    slug: slugify("HydraFuel"),
    name: "HydraFuel",
    focus: "Hydration & Nutrition",
    location: "Taguig (BGC)",
    details: ["Hydration program", "Electrolytes & gels", "Travel kits"],
    badges: ["Performance Nutrition"],
    roster: [
      { id: "2", type: "athlete" },
      { id: "16", type: "athlete" },
      { id: "3", type: "athlete" },
      { id: "2", type: "club" },
    ],
  },
  {
    id: "3",
    slug: slugify("StridePT"),
    name: "StridePT",
    focus: "Recovery & Physio",
    location: "Quezon City",
    details: ["Physio support", "Soft-tissue & strength plans", "Travel coverage"],
    badges: ["Recovery Partner"],
    roster: [
      { id: "6", type: "athlete" },
      { id: "7", type: "athlete" },
      { id: "1", type: "coach" },
    ],
  },
]

export const getSponsorById = (idOrSlug: string) => sponsors.find((sponsor) => matchesIdOrSlug(sponsor, idOrSlug))

export const getSponsorByIdOrStub = (idOrSlug: string): Sponsor => {
  const sponsor = getSponsorById(idOrSlug)
  if (sponsor) return sponsor
  const name = idOrSlug.replace(/-/g, " ") || "Sponsor"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name,
    focus: "Partnership",
    location: "Philippines",
    details: ["Support to be announced"],
    roster: [],
    isStub: true,
  }
}

export const resolveRoster = (roster: SponsoredEntity[]) =>
  roster.map((item) => {
    if (item.type === "athlete") {
      const athlete = athleteSummaries.find((ath) => ath.id === item.id)
      return athlete
        ? { ...item, name: athlete.name, href: `/athletes/${athlete.slug}` }
        : { ...item, name: "Unknown athlete", href: "#" }
    }
    if (item.type === "coach") {
      const coach = coaches.find((c) => c.id === item.id)
      return coach ? { ...item, name: coach.name, href: `/coaches/${coach.slug}` } : { ...item, name: "Unknown coach", href: "#" }
    }
    const club = clubs.find((c) => c.id === item.id)
    return club ? { ...item, name: club.name, href: `/clubs/${club.slug}` } : { ...item, name: "Unknown club", href: "#" }
  })
