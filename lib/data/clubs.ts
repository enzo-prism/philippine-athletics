import { athleteSummaries } from "./athletes"
import { coaches } from "./coaches"
import { matchesIdOrSlug, slugify } from "./utils"

export type ScheduleSession = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
  startTime: string
  endTime: string
  title: string
  type?: "track" | "strength" | "recovery" | "competition" | "other"
  notes?: string
}

export type Club = {
  id: string
  slug: string
  name: string
  focus: string
  location: string
  founded: number | string
  spots: number | string
  bio?: string
  achievements?: string[]
  isRecognized?: boolean
  recognitions?: string[]
  recognitionDetails?: { label: string; issuer: string; validThrough?: string }[]
  safety?: string[]
  isStub?: boolean
  contact?: {
    email?: string
    phone?: string
    people?: { name: string; role: string; email?: string; phone?: string }[]
  }
  locationDetail?: {
    name?: string
    address: string
    lat?: number
    lng?: number
    mapUrl?: string
    notes?: string
  }
  schedule?: ScheduleSession[]
}

export const clubs: Club[] = []

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
