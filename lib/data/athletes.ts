import { matchesIdOrSlug, slugify } from "./utils"

// Shared athlete data and helpers
export type EventPerformance = {
  name: string
  personalBest: string
  seasonBest?: string
  nationalRank?: string | number
  asianRank?: string | number
  globalRank?: string | number
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
  hometown?: string
  club: string
  clubId?: string
  coach: string
  coachId?: string
  events: EventPerformance[]
  birthDate: string
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
  nationalRank?: string | number
  asianRank?: string | number
  globalRank?: string | number
  events?: string[]
  href: string
  isStub?: boolean
}

function toSummary(profile: AthleteProfile): AthleteSummary {
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
    id: "athlete-jc-dela-cruz",
    slug: "jc-dela-cruz",
    firstName: "JC",
    lastName: "Dela Cruz",
    specialty: "100m, 200m sprint",
    location: "Manila, NCR",
    hometown: "Quezon City, NCR",
    club: "Manila Striders Track Club",
    clubId: "club-manila-striders",
    coach: "Ana Reyes",
    coachId: "coach-ana-reyes",
    events: [
      { name: "100m", personalBest: "10.68", seasonBest: "10.74", nationalRank: 5 },
      { name: "200m", personalBest: "21.45", seasonBest: "21.70", nationalRank: 7 },
    ],
    birthDate: "2002-03-15",
    joinedYear: 2022,
    achievements: [
      "Bronze medalist, Philippine National Open 100m (2025)",
      "Gold medalist, NCR Regional Meet 200m (2024)",
      "National team pool member for 4x100m relay",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2025-04-15", location: "Pasig, NCR", event: "100m", result: "10.74", place: "3rd in Final" },
      { meet: "NCR Regional Championships", date: "2024-02-10", location: "Manila, NCR", event: "200m", result: "21.70", place: "1st in Final" },
      { meet: "UAAP Track & Field", date: "2023-12-02", location: "Quezon City, NCR", event: "100m", result: "10.82", place: "4th in Final" },
    ],
    upcoming: [{ meet: "NCR Sprint Festival", date: "2025-12-20", location: "Pasig, NCR", events: ["100m", "200m"] }],
    bio: "Explosive sprinter balancing university studies with national-level competition, JC is targeting a sub-10.60 season in the 100m.",
    contact: {
      sms: "+63 917 555 1001",
      whatsapp: "+63 917 555 1001",
      email: "jc.delacruz@example.com",
      instagram: "@jc_sprintsph",
      facebook: "fb.me/jc.delacruz.sprints",
    },
    sponsors: [
      { name: "FastFeet PH", category: "Footwear", note: "Competition spikes and training shoes" },
      { name: "NCR Energy Drink", category: "Beverage", note: "Season-long hydration support" },
    ],
  },
  {
    id: "athlete-mia-santos",
    slug: "mia-santos",
    firstName: "Mia",
    lastName: "Santos",
    specialty: "100m, 200m sprint",
    location: "Pasig, NCR",
    hometown: "Caloocan City, NCR",
    club: "Manila Striders Track Club",
    clubId: "club-manila-striders",
    coach: "Mark Villanueva",
    coachId: "coach-mark-villanueva",
    events: [
      { name: "100m", personalBest: "11.92", seasonBest: "12.01", nationalRank: 4 },
      { name: "200m", personalBest: "24.45", seasonBest: "24.70", nationalRank: 6 },
    ],
    birthDate: "2003-07-02",
    joinedYear: 2023,
    achievements: [
      "Gold medalist, UAAP 100m (2025)",
      "Silver medalist, Philippine National Games 200m (2024)",
      "Broke school record in 100m and 200m",
    ],
    competitions: [
      { meet: "UAAP Track & Field", date: "2025-03-10", location: "Quezon City, NCR", event: "100m", result: "11.98", place: "1st in Final" },
      { meet: "Philippine National Games", date: "2024-05-18", location: "Pasig, NCR", event: "200m", result: "24.70", place: "2nd in Final" },
      { meet: "NCR Regional Championships", date: "2023-02-12", location: "Manila, NCR", event: "100m", result: "12.10", place: "2nd in Final" },
    ],
    upcoming: [
      { meet: "Philippine National Open", date: "2026-04-10", location: "Pasig, NCR", events: ["100m", "200m", "4x100m relay"] },
    ],
    bio: "One of the top emerging women’s sprinters in the country, Mia is known for her fast starts and strong relay performances.",
    contact: {
      sms: "+63 917 555 2002",
      whatsapp: "+63 917 555 2002",
      email: "mia.santos@example.com",
      instagram: "@mia_sprints",
      facebook: "fb.me/mia.santos.sprints",
    },
    sponsors: [{ name: "Manila Health Lab", category: "Sports Science", note: "Performance testing and recovery support" }],
  },
  {
    id: "athlete-paolo-lim",
    slug: "paolo-lim",
    firstName: "Paolo",
    lastName: "Lim",
    specialty: "400m, 400m hurdles",
    location: "Manila, NCR",
    hometown: "Pasig, NCR",
    club: "Manila Striders Track Club",
    clubId: "club-manila-striders",
    coach: "Ana Reyes",
    coachId: "coach-ana-reyes",
    events: [
      { name: "400m", personalBest: "47.85", seasonBest: "48.10", nationalRank: 6 },
      { name: "400m hurdles", personalBest: "51.90", seasonBest: "52.30", nationalRank: 3 },
    ],
    birthDate: "2001-11-08",
    joinedYear: 2021,
    achievements: [
      "Bronze medalist, Philippine National Open 400m hurdles (2024)",
      "Gold medalist, NCR Regional Meet 400m (2023)",
      "Key member of multiple 4x400m relay gold medal teams",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2024-04-12", location: "Pasig, NCR", event: "400m hurdles", result: "52.30", place: "3rd in Final" },
      { meet: "NCR Regional Championships", date: "2023-02-11", location: "Manila, NCR", event: "400m", result: "48.10", place: "1st in Final" },
      { meet: "UAAP Track & Field", date: "2022-12-03", location: "Quezon City, NCR", event: "400m hurdles", result: "52.90", place: "4th in Final" },
    ],
    upcoming: [{ meet: "Metro Manila Hurdles Cup", date: "2026-01-15", location: "Manila, NCR", events: ["400m hurdles"] }],
    bio: "Quarter-miler and hurdler shifting focus toward the 400m hurdles with the goal of qualifying for regional championships.",
    contact: {
      sms: "+63 917 555 3003",
      whatsapp: "+63 917 555 3003",
      email: "paolo.lim@example.com",
      instagram: "@paolo.400h",
      facebook: "fb.me/paolo.lim.400h",
    },
    sponsors: [],
  },
  {
    id: "athlete-erika-villarin",
    slug: "erika-villarin",
    firstName: "Erika",
    lastName: "Villarin",
    specialty: "800m, 1500m",
    location: "Cebu City, Central Visayas",
    hometown: "Lapu-Lapu City, Cebu",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    coach: "Liza Tan",
    coachId: "coach-liza-tan",
    events: [
      { name: "800m", personalBest: "2:09.50", seasonBest: "2:10.80", nationalRank: 3 },
      { name: "1500m", personalBest: "4:27.90", seasonBest: "4:30.20", nationalRank: 4 },
    ],
    birthDate: "2004-01-21",
    joinedYear: 2023,
    achievements: [
      "Silver medalist, Philippine National Games 800m (2025)",
      "Bronze medalist, UAAP 1500m (2024)",
      "Multiple-time Cebu provincial champion in middle distance",
    ],
    competitions: [
      { meet: "Philippine National Games", date: "2025-05-22", location: "Cebu City, Cebu", event: "800m", result: "2:10.80", place: "2nd in Final" },
      { meet: "UAAP Track & Field", date: "2024-03-08", location: "Quezon City, NCR", event: "1500m", result: "4:30.20", place: "3rd in Final" },
      { meet: "Cebu Provincial Championships", date: "2023-11-11", location: "Cebu City, Cebu", event: "800m", result: "2:11.50", place: "1st in Final" },
    ],
    upcoming: [{ meet: "Visayas Regional Qualifiers", date: "2026-02-05", location: "Dumaguete, Negros Oriental", events: ["800m", "1500m"] }],
    bio: "A patient racer with a strong finishing kick, Erika is building toward regional selection in the 800m.",
    contact: {
      sms: "+63 917 555 4004",
      whatsapp: "+63 917 555 4004",
      email: "erika.villarin@example.com",
      instagram: "@erika.runscebu",
    },
    sponsors: [{ name: "RunCebu Specialty Store", category: "Running Retail", note: "Provides racing flats and travel support for major meets" }],
  },
  {
    id: "athlete-carlo-mendoza",
    slug: "carlo-mendoza",
    firstName: "Carlo",
    lastName: "Mendoza",
    specialty: "5000m, 10000m",
    location: "Cebu City, Central Visayas",
    hometown: "Toledo City, Cebu",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    coach: "Joel Mercado",
    coachId: "coach-joel-mercado",
    events: [
      { name: "5000m", personalBest: "14:35.00", seasonBest: "14:40.20", nationalRank: 4 },
      { name: "10000m", personalBest: "30:25.50", seasonBest: "30:40.00", nationalRank: 3 },
    ],
    birthDate: "2000-09-12",
    joinedYear: 2020,
    achievements: [
      "Bronze medalist, Philippine National Open 10000m (2024)",
      "Top Filipino finisher in Cebu City Marathon 21K (2023)",
      "Multiple wins in local 5K and 10K road races",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2024-04-13", location: "Pasig, NCR", event: "10000m", result: "30:40.00", place: "3rd in Final" },
      { meet: "Cebu City Marathon", date: "2023-01-08", location: "Cebu City, Cebu", event: "21K road race", result: "1:10:30", place: "Top Filipino, 5th overall" },
      { meet: "Visayas Regional Championships", date: "2022-07-02", location: "Bacolod City, Negros Occidental", event: "5000m", result: "14:45.10", place: "2nd in Final" },
    ],
    upcoming: [{ meet: "National Distance Festival", date: "2026-03-15", location: "Tagaytay, Cavite", events: ["5000m"] }],
    bio: "A high-mileage grinder, Carlo is transitioning from road racing to track with eyes on national team qualifying standards.",
    contact: {
      sms: "+63 917 555 5005",
      whatsapp: "+63 917 555 5005",
      email: "carlo.mendoza@example.com",
    },
    sponsors: [],
  },
  {
    id: "athlete-nico-uy",
    slug: "nico-uy",
    firstName: "Nico",
    lastName: "Uy",
    specialty: "3000m steeplechase, 5000m",
    location: "Cebu City, Central Visayas",
    hometown: "Mandaue City, Cebu",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    coach: "Joel Mercado",
    coachId: "coach-joel-mercado",
    events: [
      { name: "3000m steeplechase", personalBest: "9:03.20", seasonBest: "9:06.50", nationalRank: 2 },
      { name: "5000m", personalBest: "14:50.00", seasonBest: "14:55.40" },
    ],
    birthDate: "2002-05-05",
    joinedYear: 2022,
    achievements: [
      "Silver medalist, Philippine National Open 3000m steeplechase (2025)",
      "Gold medalist, Visayas Regional Championships 3000m steeplechase (2024)",
      "Transitioned from obstacle course racing to track steeplechase",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2025-04-14", location: "Pasig, NCR", event: "3000m steeplechase", result: "9:06.50", place: "2nd in Final" },
      { meet: "Visayas Regional Championships", date: "2024-07-06", location: "Iloilo City, Iloilo", event: "3000m steeplechase", result: "9:10.80", place: "1st in Final" },
      { meet: "Cebu Distance Project Time Trial", date: "2023-10-01", location: "Cebu City, Cebu", event: "5000m", result: "14:55.40", place: "1st overall" },
    ],
    upcoming: [{ meet: "SEA Steeplechase Qualifier", date: "2026-04-02", location: "Singapore", events: ["3000m steeplechase"] }],
    bio: "Former OCR athlete now focused on steeplechase, Nico brings strong hurdle skills and a fearless racing style.",
    contact: {
      sms: "+63 917 555 6006",
      whatsapp: "+63 917 555 6006",
      email: "nico.uy@example.com",
      instagram: "@nico_steeples",
    },
    sponsors: [{ name: "TrailStrong PH", category: "Apparel", note: "Technical tops and training kits" }],
  },
  {
    id: "athlete-janelle-go",
    slug: "janelle-go",
    firstName: "Janelle",
    lastName: "Go",
    specialty: "400m, 800m",
    location: "Cebu City, Central Visayas",
    hometown: "Talisay City, Cebu",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    coach: "Liza Tan",
    coachId: "coach-liza-tan",
    events: [
      { name: "400m", personalBest: "55.20", seasonBest: "55.60", nationalRank: 5 },
      { name: "800m", personalBest: "2:11.80", seasonBest: "2:12.50", nationalRank: 6 },
    ],
    birthDate: "2005-02-18",
    joinedYear: 2024,
    achievements: [
      "Gold medalist, Cebu City Schools Meet 400m (2024)",
      "Bronze medalist, Visayas Regional Championships 800m (2024)",
      "Anchored multiple winning 4x400m relay teams",
    ],
    competitions: [
      { meet: "Visayas Regional Championships", date: "2024-07-06", location: "Iloilo City, Iloilo", event: "800m", result: "2:12.50", place: "3rd in Final" },
      { meet: "Cebu City Schools Meet", date: "2024-02-20", location: "Cebu City, Cebu", event: "400m", result: "55.60", place: "1st in Final" },
    ],
    upcoming: [{ meet: "Cebu Sprint & Middle Distance Carnival", date: "2026-01-28", location: "Cebu City, Cebu", events: ["400m", "800m"] }],
    bio: "A young 400/800m talent still in senior high school, Janelle splits her time between sprint and middle-distance training.",
    contact: {
      sms: "+63 917 555 7007",
      email: "janelle.go@example.com",
      instagram: "@janelle.runs",
    },
    sponsors: [],
  },
  {
    id: "athlete-rico-navarro",
    slug: "rico-navarro",
    firstName: "Rico",
    lastName: "Navarro",
    specialty: "Long jump, triple jump",
    location: "Davao City, Davao Region",
    hometown: "Tagum City, Davao del Norte",
    club: "Davao Field & Jumps Academy",
    clubId: "club-davao-field-jumps",
    coach: 'Ramon "Mon" Castillo',
    coachId: "coach-ramon-castillo",
    events: [
      { name: "Long jump", personalBest: "7.45m", seasonBest: "7.38m", nationalRank: 2 },
      { name: "Triple jump", personalBest: "15.65m", seasonBest: "15.40m", nationalRank: 3 },
    ],
    birthDate: "2001-06-09",
    hometown: "Tagum City, Davao del Norte",
    joinedYear: 2021,
    achievements: [
      "Silver medalist, Philippine National Open long jump (2025)",
      "Bronze medalist, SEA Youth long jump (as junior)",
      "Mindanao regional record holder in long jump",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2025-04-15", location: "Pasig, NCR", event: "Long jump", result: "7.38m", place: "2nd in Final" },
      { meet: "Mindanao Regional Championships", date: "2024-08-10", location: "Davao City, Davao Region", event: "Long jump", result: "7.30m", place: "1st in Final" },
      { meet: "Mindanao Regional Championships", date: "2024-08-11", location: "Davao City, Davao Region", event: "Triple jump", result: "15.40m", place: "2nd in Final" },
    ],
    upcoming: [{ meet: "National Field Events Challenge", date: "2026-03-05", location: "Iligan City, Lanao del Norte", events: ["Long jump", "Triple jump"] }],
    bio: "Explosive jumper from Davao working to break the 7.60m barrier and secure regional team selection.",
    contact: {
      sms: "+63 917 555 8008",
      whatsapp: "+63 917 555 8008",
      email: "rico.navarro@example.com",
      instagram: "@ricojumpsph",
    },
    sponsors: [{ name: "South Mindanao Sports Hub", category: "Local Sponsor", note: "Travel assistance for national meets" }],
  },
  {
    id: "athlete-leah-dominguez",
    slug: "leah-dominguez",
    firstName: "Leah",
    lastName: "Dominguez",
    specialty: "Javelin throw",
    location: "Davao City, Davao Region",
    hometown: "General Santos City, South Cotabato",
    club: "Davao Field & Jumps Academy",
    clubId: "club-davao-field-jumps",
    coach: 'Ramon "Mon" Castillo',
    coachId: "coach-ramon-castillo",
    events: [{ name: "Javelin throw", personalBest: "51.20m", seasonBest: "50.90m", nationalRank: 3 }],
    birthDate: "2002-10-30",
    joinedYear: 2022,
    achievements: [
      "Bronze medalist, Philippine National Games javelin (2024)",
      "Gold medalist, Mindanao Regional Championships javelin (2023)",
      "Consistent finalist in national-level javelin competitions",
    ],
    competitions: [
      { meet: "Philippine National Games", date: "2024-05-19", location: "Pasig, NCR", event: "Javelin throw", result: "50.90m", place: "3rd in Final" },
      { meet: "Mindanao Regional Championships", date: "2023-08-12", location: "Davao City, Davao Region", event: "Javelin throw", result: "49.80m", place: "1st in Final" },
    ],
    upcoming: [{ meet: "National Throws Festival", date: "2026-02-18", location: "Baguio City, Benguet", events: ["Javelin throw"] }],
    bio: "Former volleyball player who transitioned to javelin, Leah is working on refining her technique to compete for national records.",
    contact: {
      sms: "+63 917 555 9009",
      email: "leah.dominguez@example.com",
      instagram: "@leah.throws",
    },
    sponsors: [],
  },
  {
    id: "athlete-jr-bautista",
    slug: "jr-bautista",
    firstName: "John Rey",
    lastName: "Bautista",
    specialty: "Shot put, discus throw",
    location: "Davao City, Davao Region",
    hometown: "Digos City, Davao del Sur",
    club: "Davao Field & Jumps Academy",
    clubId: "club-davao-field-jumps",
    coach: 'Ramon "Mon" Castillo',
    coachId: "coach-ramon-castillo",
    events: [
      { name: "Shot put", personalBest: "16.80m", seasonBest: "16.45m", nationalRank: 4 },
      { name: "Discus throw", personalBest: "50.10m", seasonBest: "49.80m", nationalRank: 5 },
    ],
    birthDate: "2000-01-05",
    joinedYear: 2019,
    achievements: [
      "Finalist, Philippine National Open shot put (2024)",
      "Gold medalist, Mindanao Regional Championships discus (2023)",
      "Leader of school-based throwing clinics in Davao",
    ],
    competitions: [
      { meet: "Philippine National Open", date: "2024-04-13", location: "Pasig, NCR", event: "Shot put", result: "16.45m", place: "4th in Final" },
      { meet: "Mindanao Regional Championships", date: "2023-08-11", location: "Davao City, Davao Region", event: "Discus throw", result: "49.80m", place: "1st in Final" },
    ],
    upcoming: [{ meet: "Philippines Throws Grand Prix", date: "2026-03-22", location: "Davao City, Davao Region", events: ["Shot put", "Discus throw"] }],
    bio: "JR is a powerful thrower specializing in shot put and discus, balancing competition with work as a part-time PE teacher.",
    contact: {
      sms: "+63 917 556 0000",
      whatsapp: "+63 917 556 0000",
      email: "jr.bautista@example.com",
    },
    sponsors: [{ name: "Davao Strength Club", category: "Gym Partner", note: "Provides access to strength and conditioning facilities" }],
  },
]

export const athleteSummaries: AthleteSummary[] = athleteProfiles.map(toSummary)

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
