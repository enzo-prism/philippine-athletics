import { athleteSummaries } from "./athletes"
import { coaches } from "./coaches"
import { matchesIdOrSlug, slugify } from "./utils"

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
}

export const clubs: Club[] = [
  {
    id: "club-manila-striders",
    slug: "manila-striders-track-club",
    name: "Manila Striders Track Club",
    focus: "Sprints, hurdles, and relays for youth, collegiate, and open athletes",
    location: "Manila, NCR",
    founded: 2014,
    spots: 80,
    bio: "Community-based sprint squad training out of the PhilSports Complex, focused on developing student-athletes from public and private schools in Metro Manila.",
    achievements: [
      "Produced multiple Palarong Pambansa sprint medalists",
      "Finalists in 4x100m relay at Philippine National Open",
      "Regular host of weekend sprint and relay clinics for high school teams",
    ],
    contact: {
      email: "info@manilastriders.ph",
      phone: "+63 917 100 1234",
      people: [
        { name: "Coach Ana Reyes", role: "Head Coach", email: "ana.reyes@example.com", phone: "+63 917 000 0001" },
        { name: "Coach Mark Villanueva", role: "Sprints & Relays Coach", email: "mark.villanueva@example.com", phone: "+63 917 000 0002" },
      ],
    },
    locationDetail: {
      name: "PhilSports Track Oval",
      address: "PhilSports Complex, Meralco Ave, Pasig, Metro Manila, Philippines",
      lat: 14.5767,
      lng: 121.0662,
      mapUrl: "https://maps.google.com/?q=PhilSports+Track+Oval",
      notes: "Evening sessions on weekdays (17:30–20:00) and Saturday morning time trials twice a month.",
    },
    isStub: false,
  },
  {
    id: "club-cebu-distance-project",
    slug: "cebu-distance-project",
    name: "Cebu Distance Project",
    focus: "Middle- and long-distance development from grassroots to elite",
    location: "Cebu City, Central Visayas",
    founded: 2016,
    spots: 65,
    bio: "Distance-focused training group working with student-athletes from Cebu and neighboring provinces, with a pathway from road running into track championships.",
    achievements: [
      "Multiple podium finishes in national road 10K and half marathon events",
      "Produced UAAP and national collegiate 1500m finalists",
      "Hosts an annual 5K road race and time trial series for youth runners",
    ],
    contact: {
      email: "hello@cebudistanceproject.ph",
      phone: "+63 917 200 5678",
      people: [
        { name: "Coach Liza Tan", role: "Head Coach", email: "liza.tan@example.com", phone: "+63 917 000 0003" },
        { name: "Coach Joel Mercado", role: "Senior Distance Coach", email: "joel.mercado@example.com", phone: "+63 917 000 0004" },
      ],
    },
    locationDetail: {
      name: "Cebu City Sports Center",
      address: "Osmeña Blvd, Cebu City, 6000 Cebu, Philippines",
      lat: 10.3042,
      lng: 123.8907,
      mapUrl: "https://maps.google.com/?q=Cebu+City+Sports+Center",
      notes: "Track sessions every Tuesday, Thursday, and Saturday; long runs on the SRP coastal road every Sunday.",
    },
    isStub: false,
  },
  {
    id: "club-davao-field-jumps",
    slug: "davao-field-and-jumps-academy",
    name: "Davao Field & Jumps Academy",
    focus: "Horizontal jumps, vertical jumps, and throwing events with a grassroots pipeline",
    location: "Davao City, Davao Region",
    founded: 2018,
    spots: 45,
    bio: "Specialized academy helping athletes from Southern Mindanao discover and develop talent in long jump, triple jump, high jump, javelin, discus, and shot put.",
    achievements: [
      "SEA Youth long jump bronze medalist produced from the academy",
      "Consistent podium finishes in Mindanao regional championships for throws and jumps",
      "Partner club for LGU-led grassroots athletics festivals in Davao City",
    ],
    contact: {
      email: "contact@davaofieldjumps.ph",
      phone: "+63 917 300 9012",
      people: [{ name: 'Coach Ramon "Mon" Castillo', role: "Head Coach", email: "ramon.castillo@example.com", phone: "+63 917 000 0005" }],
    },
    locationDetail: {
      name: "Davao City Recreation Center Oval",
      address: "Quirino Ave, Poblacion District, Davao City, Philippines",
      lat: 7.0707,
      lng: 125.6119,
      mapUrl: "https://maps.google.com/?q=Davao+City+Recreation+Center",
      notes: "Jumps and throws sessions in the late afternoon; sand pit and throwing sectors shared with local schools.",
    },
    isStub: false,
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
