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

export type ClubWebsiteLink = {
  label?: string
  href: string
  note?: string
}

export type ClubSocialPlatform = "Instagram" | "Facebook" | "X" | "YouTube" | "TikTok" | "Other"

export type ClubSocialLink = {
  platform: ClubSocialPlatform
  href: string
  handle?: string
  label?: string
  note?: string
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
  expectsCoachRoster?: boolean
  isStub?: boolean
  contact?: {
    email?: string
    phone?: string
    people?: { name: string; role: string; email?: string; phone?: string }[]
  }
  website?: ClubWebsiteLink
  socialLinks?: ClubSocialLink[]
  locationDetail?: {
    name?: string
    address: string
    lat?: number
    lng?: number
    mapUrl?: string
    notes?: string
  }
  schedule?: ScheduleSession[]
  researchSources?: {
    label: string
    href: string
    note?: string
  }[]
}

export const clubs: Club[] = [
  {
    id: "club-filam-sports",
    slug: "filam-sports",
    name: "FilAm Sports",
    focus: "Filipino-heritage athlete representation, logistics, sponsorship, and Philippine national-team pathway support.",
    location: "United States and Philippines",
    founded: "Not publicly listed",
    spots: "Selective",
    bio:
      "FilAm Sports is a Filipino-heritage athlete support organization and public athlete roster focused on helping athletes with Filipino roots navigate representation, competition planning, resources, sponsorship opportunities, and the pathway to represent the Philippines. Ed Lasquete is modeled as the owner / co-founder and linked coach-operator for this club profile. Its public athletes page lists Lauren Hoffman as a National Team Member and 2024 Paris Olympian in the 400m hurdles, Yacine Guermali as a National Team Member in track and field middle distance, Bernalyn Bejoy as a National Team Member in track and field 800 Meter, and Daniella Daynata as a National Team Member in track and field throws. The club profile is modeled here as an athlete-support club because the app's club layer is the right place to connect public athlete relationships, operator contacts, and source evidence without replacing national-team status.",
    achievements: [
      "Public roster includes Lauren Hoffman as a National Team Member, 2024 Paris Olympian, and 400m hurdles athlete.",
      "Public roster includes Yacine Guermali as a National Team Member in track and field middle distance.",
      "Public roster includes Bernalyn Bejoy as a National Team Member in track and field 800 Meter.",
      "Public roster includes Daniella Daynata as a National Team Member in track and field throws.",
      "FilAm Sports says its work covers representation and government affairs for athletes seeking to represent the Philippines.",
      "FilAm Sports describes support across competition scheduling, training, mental health, strategy, logistics, endorsements, NIL, opportunities, and talent acquisition.",
      "Ed Lasquete is linked as the owner / co-founder coach-operator profile for FilAm Sports.",
      "BusinessWorld described Lauren Hoffman and Yacine Guermali as part of FilAm Sports' athlete stable during the 2024 National Open / Paris qualification window.",
    ],
    safety: [
      "Public contact and inquiry route is available for athletes, business partners, and media through info@filamsports.com.",
      "Athlete-support claims are kept source-linked because FilAm Sports is an external support organization, not a PATAFA-published official club roster.",
    ],
    contact: {
      email: "info@filamsports.com",
      people: [
        { name: "Ed Lasquete", role: "Owner / co-founder", email: "ed@filamsports.com", phone: "(408) 391-8136" },
        { name: "Bo Navarro", role: "FilAm Sports team", email: "bo@filamsports.com", phone: "(619) 735-6394" },
        { name: "Judith Staples", role: "FilAm Sports team", email: "judith@filamsports.com", phone: "+63 918 925 8493" },
        { name: "Johann Nool", role: "FilAm Sports team", email: "johann@filamsports.com", phone: "(408) 690-8465" },
      ],
    },
    website: {
      label: "Official website",
      href: "https://www.filamsports.com/",
      note: "Roster, news, mission, contact, and athlete-support information.",
    },
    socialLinks: [
      {
        platform: "Instagram",
        href: "https://www.instagram.com/filamsports/",
        handle: "@filamsports",
        note: "Linked from the official FilAm Sports website.",
      },
    ],
    locationDetail: {
      name: "FilAm Sports",
      address: "United States and Philippines",
      notes:
        "FilAm Sports describes operations in both the U.S. and the Philippines and serves Filipino-heritage athletes across the globe.",
    },
    researchSources: [
      {
        label: "FilAm Sports home",
        href: "https://www.filamsports.com/",
        note: "Mission, support model, latest athlete posts, team contacts, Instagram link, and public contact email.",
      },
      {
        label: "FilAm Sports athletes",
        href: "https://www.filamsports.com/athletes",
        note: "Public roster listing Lauren Hoffman, Yacine Guermali, Bernalyn Bejoy, and Daniella Daynata as National Team Members.",
      },
      {
        label: "FilAm Sports mission / What We Do",
        href: "https://www.filamsports.com/solutions",
        note: "Representation, logistics/resources, sustainability, and talent-acquisition descriptions.",
      },
      {
        label: "BusinessWorld National Open coverage",
        href: "https://www.bworldonline.com/sports/2024/05/09/593976/filam-sports-athletes-eye-paris-slots-in-national-open/",
        note: "Independent coverage describing Hoffman and Guermali within the FilAm Sports athlete stable.",
      },
    ],
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
