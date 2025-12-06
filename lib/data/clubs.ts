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
  contact?: {
    email?: string
    phone?: string
    people?: { name: string; role: string; email?: string; phone?: string }[]
  }
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
    contact: {
      email: "contact@manilaspeedclub.ph",
      phone: "+63 917 111 1111",
      people: [
        { name: "Coach Roberto Tan", role: "Head Coach", email: "roberto.tan@manilaspeedclub.ph", phone: "+63 917 111 1111" },
        { name: "Liza Mendoza", role: "Club Manager", email: "liza.mendoza@manilaspeedclub.ph" },
      ],
    },
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
    contact: {
      email: "hello@cebudistance.ph",
      phone: "+63 917 222 2222",
      people: [
        { name: "Coach Maria Gonzales", role: "Head Coach", email: "maria.gonzales@cebudistance.ph", phone: "+63 917 222 2222" },
        { name: "Ramon Cruz", role: "Club Admin", email: "ramon.cruz@cebudistance.ph" },
      ],
    },
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
    contact: {
      email: "contact@davaoathletics.ph",
      phone: "+63 917 333 3333",
      people: [
        { name: "Coach Antonio Reyes", role: "Head Coach", email: "antonio.reyes@davaoathletics.ph" },
        { name: "Miguel Santos", role: "Club Manager", email: "miguel.santos@davaoathletics.ph", phone: "+63 917 333 3333" },
      ],
    },
  },
  {
    id: "4",
    slug: slugify("Quezon City Sprinters"),
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City",
    founded: "2015",
    spots: "5 spots open",
    contact: {
      email: "info@qcsprinters.ph",
      phone: "+63 917 444 4444",
      people: [
        { name: "Coach Emmanuel Cruz", role: "Head Coach", email: "emmanuel.cruz@qcsprinters.ph" },
        { name: "Anna Lim", role: "Admin", email: "anna.lim@qcsprinters.ph" },
      ],
    },
  },
  {
    id: "5",
    slug: slugify("Iloilo Track Club"),
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo City",
    founded: "2011",
    spots: "3 spots open",
    contact: {
      email: "hello@iloilotrack.ph",
      phone: "+63 917 555 5555",
      people: [
        { name: "Coach Lisa Santos", role: "Head Coach", email: "lisa.santos@iloilotrack.ph" },
        { name: "Jared Ramos", role: "Club Manager", email: "jared.ramos@iloilotrack.ph" },
      ],
    },
  },
  {
    id: "6",
    slug: slugify("Laguna Athletics Academy"),
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna (Sta. Rosa)",
    founded: "2013",
    spots: "10 spots open",
    contact: {
      email: "contact@lagunaathletics.ph",
      phone: "+63 917 666 6666",
      people: [
        { name: "Coach Paula Dizon", role: "Head Coach", email: "paula.dizon@lagunaathletics.ph" },
        { name: "Marco Tan", role: "Program Director", email: "marco.tan@lagunaathletics.ph" },
      ],
    },
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
    contact: {
      email: "clubs@philippineathletics.ph",
      phone: "+63 917 000 0000",
      people: [{ name: displayName, role: "Club Contact", email: "clubs@philippineathletics.ph" }],
    },
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
