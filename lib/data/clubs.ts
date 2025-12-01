import { athleteSummaries } from "./athletes"
import { coaches } from "./coaches"
import { matchesIdOrSlug, slugify } from "./utils"

export type Club = {
  id: string
  slug: string
  name: string
  focus: string
  location: string
  founded: string
  spots: string
  bio?: string
  achievements?: string[]
  isStub?: boolean
}

export const clubs: Club[] = [
  {
    id: "1",
    slug: slugify("Manila Speed Club"),
    name: "Manila Speed Club",
    focus: "Sprint Training",
    location: "Manila",
    founded: "2008",
    spots: "6 spots open",
    bio: "Dedicated to technical sprint development and relay excellence. Manila Speed Club supports elite and emerging sprinters with data-informed training.",
    achievements: ["12 National Champions", "SEA Games 5 Gold Medals", "Asian Games 2 Medalists"],
  },
  {
    id: "2",
    slug: slugify("Cebu Distance Runners"),
    name: "Cebu Distance Runners",
    focus: "Long Distance Running",
    location: "Cebu City",
    founded: "2010",
    spots: "4 spots open",
    bio: "Holistic distance program combining altitude blocks, nutrition support, and tactical race prep for track and road athletes.",
    achievements: ["Consistent SEA finalists", "National road podiums"],
  },
  {
    id: "3",
    slug: slugify("Davao Athletics"),
    name: "Davao Athletics",
    focus: "Field Events",
    location: "Davao City",
    founded: "2012",
    spots: "8 spots open",
    bio: "Regional hub for jumps and throws with access to runway, pit, and cage facilities.",
    achievements: ["Regional dominance in jumps", "Produced national champions"],
  },
  {
    id: "4",
    slug: slugify("Quezon City Sprinters"),
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City",
    founded: "2015",
    spots: "5 spots open",
  },
  {
    id: "5",
    slug: slugify("Iloilo Track Club"),
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo City",
    founded: "2011",
    spots: "3 spots open",
  },
  {
    id: "6",
    slug: slugify("Laguna Athletics Academy"),
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna (Sta. Rosa)",
    founded: "2013",
    spots: "10 spots open",
  },
]

export const getClubById = (idOrSlug: string) => clubs.find((club) => matchesIdOrSlug(club, idOrSlug))

export const getClubByIdOrStub = (idOrSlug: string, nameHint?: string): Club => {
  const club = getClubById(idOrSlug)
  if (club) return club
  const displayName = nameHint || idOrSlug.replace(/-/g, " ") || "Club"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name: displayName,
    focus: "Track and field",
    location: "Philippines",
    founded: "—",
    spots: "TBD",
    bio: "Profile coming soon. Details to be updated.",
    isStub: true,
  }
}

export const getClubAthletes = (clubIdOrName: string) =>
  athleteSummaries.filter(
    (athlete) =>
      athlete.clubId === clubIdOrName ||
      (athlete.club && athlete.club.toLowerCase() === clubIdOrName.toLowerCase()),
  )

export const getClubCoaches = (clubIdOrName: string) =>
  coaches.filter(
    (coach) => coach.clubId === clubIdOrName || coach.club.toLowerCase() === clubIdOrName.toLowerCase(),
  )
