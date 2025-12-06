import { matchesIdOrSlug, slugify } from "./utils"

// Shared athlete data and helpers
export type EventPerformance = {
  name: string
  personalBest: string
  seasonBest?: string
  nationalRank?: string
  asianRank?: string
  globalRank?: string
}

export type CompetitionResult = {
  meet: string
  date: string
  location: string
  event: string
  result: string
  place: string
}

export type UpcomingCompetition = {
  meet: string
  date: string
  location: string
  events: string[]
}

export type Contact = {
  sms?: string
  whatsapp?: string
  email?: string
  instagram?: string
  facebook?: string
}

export type Sponsor = {
  name: string
  category: string
  note?: string
}

export type AthleteProfile = {
  id: string
  slug: string
  firstName: string
  lastName: string
  specialty: string
  location: string
  club: string
  coach: string
  clubId?: string
  coachId?: string
  events: EventPerformance[]
  birthDate: string
  hometown: string
  joinedYear: number
  achievements: string[]
  competitions: CompetitionResult[]
  upcoming: UpcomingCompetition[]
  bio: string
  contact: Contact
  sponsors: Sponsor[]
  isStub?: boolean
}

export type AthleteSummary = {
  id: string
  slug: string
  name: string
  specialty: string
  club: string
  coach?: string
  clubId?: string
  coachId?: string
  pb?: string
  location: string
  nationalRank?: string
  asianRank?: string
  globalRank?: string
  events?: string[]
  href: string
  isStub?: boolean
}

const toSummary = (profile: AthleteProfile): AthleteSummary => {
  const primaryEvent = profile.events[0]
  return {
    id: profile.id,
    slug: profile.slug,
    name: `${profile.firstName} ${profile.lastName}`,
    specialty: profile.specialty,
    club: profile.club,
    coach: profile.coach,
    clubId: profile.clubId,
    coachId: profile.coachId,
    pb: primaryEvent?.personalBest,
    location: profile.location,
    nationalRank: primaryEvent?.nationalRank,
    asianRank: primaryEvent?.asianRank,
    globalRank: primaryEvent?.globalRank,
    events: profile.events.map((evt) => evt.name),
    href: `/athletes/${profile.slug}`,
    isStub: profile.isStub,
  }
}

export const athleteProfiles: AthleteProfile[] = [
  {
    id: "1",
    slug: slugify("Maria Santos"),
    firstName: "Maria",
    lastName: "Santos",
    specialty: "400m / 200m Sprinter",
    location: "Taguig (Bonifacio Global City)",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    clubId: "1",
    coachId: "1",
    events: [
      { name: "400m", personalBest: "52.34s", seasonBest: "52.89s", nationalRank: "#1 PH", asianRank: "#4 Asia", globalRank: "#32 World" },
      { name: "200m", personalBest: "23.12s", seasonBest: "23.35s", nationalRank: "#2 PH", asianRank: "#12 Asia", globalRank: "#80 World" },
      { name: "4×400m relay", personalBest: "3:32.10 (split 52.1s)", nationalRank: "#1 PH", asianRank: "#5 Asia", globalRank: "#40 World" },
    ],
    birthDate: "March 15, 1999",
    hometown: "Manila",
    joinedYear: 2015,
    achievements: [
      "Philippine National Champion 2024 (400m)",
      "SEA Games Silver Medalist 2023 (4×400m Relay)",
      "National Record Holder (Indoor 400m)",
      "Commonwealth Games Qualifier 2022",
    ],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "400m", result: "52.34s", place: "1st" },
      { meet: "SEA Games", date: "May 2023", location: "Cambodia", event: "4×400m relay", result: "3:32.10 (split 52.1s)", place: "2nd" },
      { meet: "Asian Championships", date: "Jul 2023", location: "Bangkok", event: "400m", result: "52.90s", place: "5th" },
    ],
    upcoming: [
      { meet: "Asian Grand Prix", date: "Aug 12, 2025", location: "Bangkok", events: ["400m", "4×400m relay"] },
      { meet: "World Relays Qualifier", date: "Sep 3, 2025", location: "Singapore", events: ["4×400m relay"] },
    ],
    bio: "Quarter-miler known for aggressive backstretch pacing and strong finishes. Focused on qualifying for world relays and continental finals.",
    contact: {
      sms: "+63 917 555 1234",
      whatsapp: "+63 917 555 1234",
      email: "maria.santos@samplemail.ph",
      instagram: "@maria400",
      facebook: "facebook.com/maria400",
    },
    sponsors: [
      { name: "SprintLab", category: "Apparel", note: "Race kit" },
      { name: "HydraFuel", category: "Nutrition", note: "Hydration & gels" },
      { name: "StridePT", category: "Recovery", note: "Physio support" },
    ],
  },
  {
    id: "2",
    slug: slugify("Juan Dela Cruz"),
    firstName: "Juan",
    lastName: "Dela Cruz",
    specialty: "5000m / 10,000m Runner",
    location: "Cebu City",
    club: "Cebu Distance Runners",
    coach: "Coach Maria Gonzales",
    clubId: "2",
    coachId: "2",
    events: [
      { name: "5000m", personalBest: "14:28.5", seasonBest: "14:35", nationalRank: "#2 PH", asianRank: "#15 Asia" },
      { name: "10,000m", personalBest: "30:10", seasonBest: "30:25", nationalRank: "#3 PH", asianRank: "#19 Asia" },
    ],
    birthDate: "June 2, 1997",
    hometown: "Cebu City",
    joinedYear: 2014,
    achievements: ["SEA Games finalist (5000m)", "Philippine National Silver (10,000m)", "Top 10 Asian Grand Prix"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "5000m", result: "14:28.5", place: "2nd" },
      { meet: "Asian Grand Prix", date: "Jul 2024", location: "Bangkok", event: "5000m", result: "14:36", place: "7th" },
    ],
    upcoming: [{ meet: "Marathon Tryouts", date: "Oct 18, 2025", location: "Cebu City", events: ["10,000m"] }],
    bio: "Volume-based distance runner transitioning to stronger late-race surges while keeping economy high for road events.",
    contact: {
      sms: "+63 917 200 5000",
      email: "juan.delacruz@samplemail.ph",
      instagram: "@juanruns",
    },
    sponsors: [{ name: "StridePT", category: "Recovery" }],
  },
  {
    id: "3",
    slug: slugify("Ana Reyes"),
    firstName: "Ana",
    lastName: "Reyes",
    specialty: "Long Jump / Triple Jump",
    location: "Davao City",
    club: "Davao Athletics",
    coach: "Coach Antonio Reyes",
    clubId: "3",
    coachId: "3",
    events: [
      { name: "Long jump", personalBest: "6.42m", seasonBest: "6.38m", nationalRank: "#1 PH", asianRank: "#6 Asia", globalRank: "#48 World" },
      { name: "Triple jump", personalBest: "13.70m", seasonBest: "13.55m", nationalRank: "#2 PH", asianRank: "#12 Asia", globalRank: "#80 World" },
    ],
    birthDate: "February 12, 1996",
    hometown: "Davao City",
    joinedYear: 2012,
    achievements: ["National Champion (Long Jump)", "SEA Games Bronze Medalist (Long Jump)", "Asian Championships finalist"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "Long jump", result: "6.42m", place: "1st" },
      { meet: "Asian Championships", date: "Jul 2024", location: "Bangkok", event: "Long jump", result: "6.30m", place: "5th" },
    ],
    upcoming: [{ meet: "SEA Series", date: "Sep 15, 2025", location: "Kuala Lumpur", events: ["Long jump"] }],
    bio: "Technical horizontal jumper focusing on board consistency and stronger second phase in triple jump.",
    contact: {
      email: "ana.reyes@samplemail.ph",
      instagram: "@ana.jumps",
    },
    sponsors: [{ name: "HydraFuel", category: "Nutrition" }],
  },
  {
    id: "4",
    slug: slugify("Rafael Gomez"),
    firstName: "Rafael",
    lastName: "Gomez",
    specialty: "100m / 200m Sprinter",
    location: "Quezon City",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    clubId: "1",
    coachId: "1",
    events: [
      { name: "100m", personalBest: "10.42s", seasonBest: "10.55s", nationalRank: "#3 PH" },
      { name: "200m", personalBest: "21.00s", seasonBest: "21.12s", nationalRank: "#4 PH" },
    ],
    birthDate: "August 10, 1998",
    hometown: "Quezon City",
    joinedYear: 2016,
    achievements: ["National Bronze Medalist (100m)", "Relay pool member for PH 4x100m"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "100m", result: "10.42s", place: "3rd" },
      { meet: "Luzon Invitational", date: "Jun 2024", location: "La Union", event: "200m", result: "21.18s", place: "2nd" },
    ],
    upcoming: [{ meet: "Asian Relays", date: "Sep 2, 2025", location: "Singapore", events: ["4x100m"] }],
    bio: "Explosive starter focused on smoother transition phase and closing speed to secure relay spots.",
    contact: {
      whatsapp: "+63 917 300 1042",
      instagram: "@rafael.sprints",
    },
    sponsors: [{ name: "SprintLab", category: "Apparel" }],
  },
  {
    id: "6",
    slug: slugify("Carlos Mendoza"),
    firstName: "Carlos",
    lastName: "Mendoza",
    specialty: "1500m / 800m Middle Distance",
    location: "Manila",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    clubId: "1",
    coachId: "1",
    events: [
      { name: "1500m", personalBest: "3:54.2", seasonBest: "3:55.8", nationalRank: "#2 PH" },
      { name: "800m", personalBest: "1:50.4", seasonBest: "1:51.2", nationalRank: "#3 PH" },
    ],
    birthDate: "December 1, 1999",
    hometown: "Manila",
    joinedYear: 2017,
    achievements: ["National Silver Medalist (1500m)", "SEA Games relay pool for mixed relay"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "1500m", result: "3:54.2", place: "2nd" },
      { meet: "Metro Manila Classic", date: "Feb 2024", location: "Taguig", event: "800m", result: "1:51.2", place: "2nd" },
    ],
    upcoming: [{ meet: "Asian Grand Prix", date: "Aug 12, 2025", location: "Bangkok", events: ["1500m"] }],
    bio: "Smooth-striding miler working on race tactics and efficient final 300m moves.",
    contact: {
      sms: "+63 917 888 1500",
      email: "carlos.mendoza@samplemail.ph",
    },
    sponsors: [{ name: "HydraFuel", category: "Nutrition" }],
  },
  {
    id: "7",
    slug: slugify("Paolo Ramirez"),
    firstName: "Paolo",
    lastName: "Ramirez",
    specialty: "200m / 100m Sprinter",
    location: "Taguig (Bonifacio Global City)",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    clubId: "1",
    coachId: "1",
    events: [
      { name: "200m", personalBest: "20.88s", seasonBest: "21.05s", nationalRank: "#4 PH" },
      { name: "100m", personalBest: "10.58s", seasonBest: "10.64s", nationalRank: "#5 PH" },
    ],
    birthDate: "May 8, 2000",
    hometown: "Taguig",
    joinedYear: 2018,
    achievements: ["Philippine National Bronze (200m)", "4x100m relay pool member"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "200m", result: "20.88s", place: "3rd" },
      { meet: "Asian Grand Prix", date: "Jul 2024", location: "Bangkok", event: "200m", result: "21.05s", place: "6th" },
    ],
    upcoming: [{ meet: "SEA Series", date: "Sep 15, 2025", location: "Kuala Lumpur", events: ["200m", "4x100m"] }],
    bio: "Curve-running specialist honing drive phase consistency to convert more sub-21 efforts.",
    contact: {
      whatsapp: "+63 917 200 2000",
      instagram: "@paolo.200",
    },
    sponsors: [{ name: "StridePT", category: "Recovery" }],
  },
  {
    id: "16",
    slug: slugify("Bianca Robles"),
    firstName: "Bianca",
    lastName: "Robles",
    specialty: "1500m Runner",
    location: "Cebu City",
    club: "Cebu Distance Runners",
    coach: "Coach Maria Gonzales",
    clubId: "2",
    coachId: "2",
    events: [
      { name: "1500m", personalBest: "4:08.5", seasonBest: "4:10.8", nationalRank: "#2 PH", asianRank: "#20 Asia" },
      { name: "800m", personalBest: "2:03.9", seasonBest: "2:04.5", nationalRank: "#3 PH" },
    ],
    birthDate: "November 4, 2001",
    hometown: "Cebu City",
    joinedYear: 2019,
    achievements: ["SEA Games finalist (1500m)", "National Champion U23 (800m)"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "1500m", result: "4:09.1", place: "2nd" },
      { meet: "Asian U23 Championships", date: "Oct 2024", location: "Dubai", event: "1500m", result: "4:12.0", place: "5th" },
    ],
    upcoming: [{ meet: "Asian Grand Prix", date: "Aug 12, 2025", location: "Bangkok", events: ["1500m"] }],
    bio: "Late-kick miler integrating strength blocks to hold pace on laps two and three.",
    contact: {
      email: "bianca.robles@samplemail.ph",
      instagram: "@bianca.mid",
    },
    sponsors: [{ name: "HydraFuel", category: "Nutrition" }],
  },
  {
    id: "17",
    slug: slugify("Kenji Tan"),
    firstName: "Kenji",
    lastName: "Tan",
    specialty: "100m Sprinter",
    location: "Makati",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    clubId: "1",
    coachId: "1",
    events: [
      { name: "100m", personalBest: "10.55s", seasonBest: "10.60s", nationalRank: "#4 PH" },
      { name: "200m", personalBest: "21.20s", seasonBest: "21.35s", nationalRank: "#6 PH" },
    ],
    birthDate: "February 22, 2002",
    hometown: "Makati",
    joinedYear: 2020,
    achievements: ["National Finalist (100m)", "Relay prospect for 4x100m"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "100m", result: "10.55s", place: "4th" },
      { meet: "Manila Sprint Series", date: "Jun 2024", location: "Manila", event: "100m", result: "10.60s", place: "2nd" },
    ],
    upcoming: [{ meet: "Asian Relays", date: "Sep 2, 2025", location: "Singapore", events: ["4x100m"] }],
    bio: "Younger sprinter building strength off the blocks and refining upright transition.",
    contact: {
      sms: "+63 917 555 1055",
      instagram: "@kenji.sprint",
    },
    sponsors: [{ name: "SprintLab", category: "Apparel" }],
  },
  {
    id: "18",
    slug: slugify("Miguel Lopez"),
    firstName: "Miguel",
    lastName: "Lopez",
    specialty: "4x100m / 200m Sprinter",
    location: "Quezon City",
    club: "Quezon City Sprinters",
    coach: "Coach Emmanuel Cruz",
    clubId: "4",
    coachId: "4",
    events: [
      { name: "4×100m relay", personalBest: "40.28s", seasonBest: "40.40s", nationalRank: "#2 PH" },
      { name: "200m", personalBest: "21.30s", seasonBest: "21.40s", nationalRank: "#7 PH" },
    ],
    birthDate: "July 30, 2001",
    hometown: "Quezon City",
    joinedYear: 2019,
    achievements: ["National Relay Pool (4x100m)", "Metro Manila Games Bronze (200m)"],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "4x100m", result: "40.28s", place: "2nd" },
      { meet: "Manila Sprint Series", date: "Jun 2024", location: "Manila", event: "200m", result: "21.45s", place: "3rd" },
    ],
    upcoming: [{ meet: "Asian Relays", date: "Sep 2, 2025", location: "Singapore", events: ["4x100m"] }],
    bio: "Relay-first sprinter focused on exchange consistency and curve running for second leg duties.",
    contact: {
      email: "miguel.lopez@samplemail.ph",
      instagram: "@miguel.relays",
    },
    sponsors: [{ name: "StridePT", category: "Recovery" }],
  },
  {
    id: "19",
    slug: slugify("Jessa Villanueva"),
    firstName: "Jessa",
    lastName: "Villanueva",
    specialty: "Youth Multi-Event",
    location: "Sta. Rosa, Laguna",
    club: "Laguna Athletics Academy",
    coach: "Coach Paula Dizon",
    clubId: "6",
    coachId: "6",
    events: [
      { name: "100m hurdles", personalBest: "14.30s", seasonBest: "14.40s", nationalRank: "#3 PH U20" },
      { name: "Long jump", personalBest: "5.80m", seasonBest: "5.75m", nationalRank: "#4 PH U20" },
    ],
    birthDate: "April 5, 2005",
    hometown: "Laguna",
    joinedYear: 2021,
    achievements: ["Palarong Pambansa Champion (100mH)", "U20 National Finalist (Long Jump)"],
    competitions: [
      { meet: "Palarong Pambansa", date: "May 2024", location: "Cebu", event: "100m hurdles", result: "14.30s", place: "1st" },
      { meet: "National Juniors", date: "Mar 2024", location: "Clark", event: "Long jump", result: "5.75m", place: "2nd" },
    ],
    upcoming: [{ meet: "SEA U20", date: "Aug 20, 2025", location: "Bangkok", events: ["100m hurdles", "Long jump"] }],
    bio: "U20 multi-event athlete building speed and rhythm over hurdles while sharpening take-off mechanics in long jump.",
    contact: {
      sms: "+63 917 123 7890",
      instagram: "@jessa.multi",
    },
    sponsors: [{ name: "HydraFuel", category: "Nutrition" }],
  },
  {
    id: "20",
    slug: slugify("Liza Cruz"),
    firstName: "Liza",
    lastName: "Cruz",
    specialty: "Marathon / Road",
    location: "Taguig",
    club: "Manila Speed Club",
    coach: "Coach Rafael Cruz",
    clubId: "1",
    coachId: "7",
    events: [
      { name: "Marathon", personalBest: "2:36:50", seasonBest: "2:37:30", nationalRank: "#1 PH" },
      { name: "Half Marathon", personalBest: "1:12:30", seasonBest: "1:13:10", nationalRank: "#1 PH" },
    ],
    birthDate: "September 9, 1995",
    hometown: "Taguig",
    joinedYear: 2013,
    achievements: ["National Marathon Champion 2024", "SEA Games Marathon Bronze"],
    competitions: [
      { meet: "National Marathon", date: "Jan 2024", location: "Manila", event: "Marathon", result: "2:36:50", place: "1st" },
      { meet: "SEA Games", date: "May 2023", location: "Cambodia", event: "Marathon", result: "2:38:20", place: "3rd" },
    ],
    upcoming: [{ meet: "Asian Marathon", date: "Nov 3, 2025", location: "Seoul", events: ["Marathon"] }],
    bio: "Road specialist focusing on even splits, heat adaptation, and nutrition timing for championship marathons.",
    contact: {
      email: "liza.cruz@samplemail.ph",
      instagram: "@liza.marathon",
    },
    sponsors: [{ name: "HydraFuel", category: "Nutrition", note: "Race fueling" }],
  },
]

const baseSummaries: AthleteSummary[] = athleteProfiles.map(toSummary)

export const athleteSummaries: AthleteSummary[] = baseSummaries

export const getAthleteProfile = (idOrSlug: string): AthleteProfile | undefined =>
  athleteProfiles.find((athlete) => matchesIdOrSlug(athlete, idOrSlug))

export const getAthleteSummary = (idOrSlug: string): AthleteSummary | undefined =>
  athleteSummaries.find((athlete) => matchesIdOrSlug(athlete, idOrSlug))

const buildStubProfile = (summary: AthleteSummary): AthleteProfile => {
  const parts = summary.name.split(" ")
  const firstName = parts[0] || summary.name
  const lastName = parts.slice(1).join(" ") || summary.name
  const eventName = summary.events?.[0] || summary.specialty
  const year = new Date().getFullYear()

  return {
    id: summary.id,
    slug: summary.slug,
    firstName,
    lastName,
    specialty: summary.specialty,
    location: summary.location || "Philippines",
    club: summary.club,
    coach: summary.coach || "Coach not listed",
    clubId: summary.clubId,
    coachId: summary.coachId,
    events: [
      {
        name: eventName,
        personalBest: summary.pb || "—",
        nationalRank: summary.nationalRank,
        asianRank: summary.asianRank,
        globalRank: summary.globalRank,
      },
    ],
    birthDate: "—",
    hometown: summary.location || "Philippines",
    joinedYear: year,
    achievements: [],
    competitions: [],
    upcoming: [],
    bio: "Profile coming soon. Details to be updated.",
    contact: {},
    sponsors: [],
    isStub: true,
  }
}

const buildUnknownStub = (idOrSlug: string): AthleteProfile => {
  const nameFromSlug = idOrSlug.replace(/-/g, " ").trim() || "Athlete"
  const parts = nameFromSlug.split(" ")
  const firstName = parts[0] || "Athlete"
  const lastName = parts.slice(1).join(" ") || "Profile"
  const year = new Date().getFullYear()
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    firstName,
    lastName,
    specialty: "Track and field",
    location: "Philippines",
    club: "To be confirmed",
    coach: "Coach not listed",
    events: [{ name: "Event", personalBest: "—" }],
    birthDate: "—",
    hometown: "Philippines",
    joinedYear: year,
    achievements: [],
    competitions: [],
    upcoming: [],
    bio: "Profile coming soon. Details to be updated.",
    contact: {},
    sponsors: [],
    isStub: true,
  }
}

export const getAthleteProfileOrStub = (idOrSlug: string): AthleteProfile => {
  const profile = getAthleteProfile(idOrSlug)
  if (profile) return profile
  const summary = getAthleteSummary(idOrSlug)
  if (summary) return buildStubProfile(summary)
  return buildUnknownStub(idOrSlug)
}

export const getAllAthleteEvents = () =>
  athleteProfiles.flatMap((athlete) => athlete.events.map((event) => ({ athlete, event })))
