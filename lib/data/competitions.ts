import { matchesIdOrSlug, slugify } from "./utils"

export type Competition = {
  id: string
  slug: string
  name: string
  type: string
  location: string
  startDate: string
  endDate: string
  organizer: string
  about: string
  events: string[]
  participants: number
  countries: number
  records: number
  highlights: string[]
  medalists: string[]
  ticketInfo: string
  sponsor: string
  status: "Upcoming" | "Past"
  dateLabel: string
  isStub?: boolean
}

export const competitions: Competition[] = [
  {
    id: "1",
    slug: slugify("Philippine National Championships 2025"),
    name: "Philippine National Championships 2025",
    type: "National",
    location: "Rizal Memorial Stadium, Manila",
    startDate: "April 15, 2025",
    endDate: "April 21, 2025",
    organizer: "Philippine Athletics Track & Field Association (PATFA)",
    about:
      "The National Championships is the premier track and field competition in the Philippines. Athletes compete for national titles across all track and field events.",
    events: ["100m", "200m", "400m", "800m", "1500m", "5000m", "Long Jump", "High Jump", "Triple Jump", "Shot Put", "Discus Throw", "Javelin Throw", "Hammer Throw", "Relays"],
    participants: 260,
    countries: 1,
    records: 5,
    highlights: [
      "Maria Santos won 400m with 52.34s personal best",
      "Juan Dela Cruz set 5000m national record of 14:28.5",
      "Rafael Gomez claimed 100m title in 10.42s",
      "Ana Reyes swept horizontal jumps",
    ],
    medalists: [
      "Maria Santos - 400m (Gold)",
      "Juan Dela Cruz - 5000m (Gold)",
      "Rafael Gomez - 100m (Gold)",
      "Ana Reyes - Long Jump (Gold)",
    ],
    ticketInfo: "Free admission",
    sponsor: "Philippine Sports Commission, Local Government Units",
    status: "Past",
    dateLabel: "Apr 15, 2025",
  },
  {
    id: "2",
    slug: slugify("2025 Southeast Asian Games"),
    name: "2025 Southeast Asian Games",
    type: "Regional",
    location: "Bangkok / Chonburi / Songkhla, Thailand",
    startDate: "December 11, 2025",
    endDate: "December 20, 2025",
    organizer: "Southeast Asian Games Federation",
    about:
      "Biennial multi-sport event for Southeast Asia. Athletics is a marquee sport with full Olympic event slate.",
    events: ["100m to Marathon", "Race Walk", "All Jumps", "All Throws", "Relays"],
    participants: 600,
    countries: 11,
    records: 8,
    highlights: [
      "Regional showdown with Olympic qualifying implications",
      "Philippines targeting relay podiums",
      "Distance squad peaking off altitude blocks",
    ],
    medalists: ["TBD after competition"],
    ticketInfo: "Ticketed sessions by venue",
    sponsor: "Host Country Government, Corporate Sponsors",
    status: "Upcoming",
    dateLabel: "Dec 11, 2025",
  },
  {
    id: "3",
    slug: slugify("2025 Asian Athletics Championships"),
    name: "2025 Asian Athletics Championships",
    type: "Continental",
    location: "Gumi, South Korea",
    startDate: "May 31, 2025",
    endDate: "June 5, 2025",
    organizer: "Asian Athletics Association",
    about:
      "Premier continental championship featuring elite athletes from across Asia. Strong representation from Philippines team.",
    events: ["All Olympic Track & Field Events", "Marathon Men & Women", "Race Walk 20km", "All Field Events"],
    participants: 800,
    countries: 48,
    records: 3,
    highlights: [
      "Philippines team size of 18 athletes",
      "Juan Dela Cruz in 5000m final",
      "Rafael Gomez anchoring sprint relay",
    ],
    medalists: [
      "Juan Dela Cruz - 5000m (Top 8)",
      "Philippines - 4×400m Relay (Finalist)",
      "Ana Reyes - Long Jump (Finalist)",
    ],
    ticketInfo: "Paid admission to most sessions",
    sponsor: "Korean Athletics Federation, Partners",
    status: "Past",
    dateLabel: "May 31, 2025",
  },
  {
    id: "4",
    slug: slugify("World Athletics Continental Tour (Asia leg)"),
    name: "World Athletics Continental Tour (Asia leg)",
    type: "International",
    location: "Various cities, Asia-Pacific",
    startDate: "August 3, 2025",
    endDate: "August 25, 2025",
    organizer: "World Athletics",
    about:
      "Series of regional qualifying meets for international competitions. Important for athletes to gain exposure and standards.",
    events: ["All Track Events", "All Field Events", "Race Walk Events", "Relay Events"],
    participants: 1200,
    countries: 15,
    records: 2,
    highlights: [
      "Olympic qualifying opportunities",
      "High international competition level",
      "Multiple Philippines records challenged",
    ],
    medalists: ["Performances logged for ranking points"],
    ticketInfo: "Varies by host city",
    sponsor: "World Athletics, National Federations",
    status: "Past",
    dateLabel: "Aug 3, 2025",
  },
  {
    id: "5",
    slug: slugify("2026 Asian Games"),
    name: "2026 Asian Games",
    type: "Continental",
    location: "Aichi-Nagoya, Japan",
    startDate: "September 19, 2026",
    endDate: "September 24, 2026",
    organizer: "Olympic Council of Asia",
    about:
      "Major continental games featuring athletics as a centerpiece with strong qualifying standards and deep fields.",
    events: ["Olympic Track & Field Program"],
    participants: 900,
    countries: 45,
    records: 5,
    highlights: ["Philippines aiming for relay finals", "Throws squad targeting top-8 finishes"],
    medalists: ["To be determined"],
    ticketInfo: "Ticketed sessions",
    sponsor: "Host Country Government",
    status: "Upcoming",
    dateLabel: "Sep 19, 2026",
  },
  {
    id: "6",
    slug: slugify("2026 World Athletics Cross Country Championships"),
    name: "2026 World Athletics Cross Country Championships",
    type: "World",
    location: "Tallahassee, Florida, USA",
    startDate: "January 10, 2026",
    endDate: "January 11, 2026",
    organizer: "World Athletics",
    about: "World championship for cross country featuring senior and junior races over varied terrain.",
    events: ["Senior Men", "Senior Women", "Mixed Relay", "Junior Men", "Junior Women"],
    participants: 400,
    countries: 50,
    records: 0,
    highlights: ["Mixed relay qualification goal", "Course suited for strength runners"],
    medalists: ["To be determined"],
    ticketInfo: "Ticketed",
    sponsor: "World Athletics",
    status: "Upcoming",
    dateLabel: "Jan 10, 2026",
  },
  {
    id: "7",
    slug: slugify("2026 World Athletics Road Running Championships"),
    name: "2026 World Athletics Road Running Championships",
    type: "World",
    location: "Copenhagen, Denmark",
    startDate: "September 19, 2026",
    endDate: "September 20, 2026",
    organizer: "World Athletics",
    about: "World championships for road mile, 5km, and half marathon events with mass participation components.",
    events: ["Road Mile", "5km", "Half Marathon"],
    participants: 500,
    countries: 60,
    records: 0,
    highlights: ["National half marathon team qualifier", "Fast course for PB attempts"],
    medalists: ["To be determined"],
    ticketInfo: "Ticketed",
    sponsor: "World Athletics",
    status: "Upcoming",
    dateLabel: "Sep 19, 2026",
  },
  {
    id: "8",
    slug: slugify("2026 World Athletics Ultimate Championship"),
    name: "2026 World Athletics Ultimate Championship",
    type: "World",
    location: "Budapest, Hungary",
    startDate: "September 11, 2026",
    endDate: "September 13, 2026",
    organizer: "World Athletics",
    about: "Inaugural championship with condensed high-drama finals across track and field disciplines.",
    events: ["Invitational finals across track and field"],
    participants: 300,
    countries: 50,
    records: 0,
    highlights: ["Top-ranked athletes only", "Made-for-broadcast format"],
    medalists: ["To be determined"],
    ticketInfo: "Ticketed",
    sponsor: "World Athletics",
    status: "Upcoming",
    dateLabel: "Sep 11, 2026",
  },
  {
    id: "9",
    slug: slugify("Philippine Nationals / Domestic Circuit 2026"),
    name: "Philippine Nationals / Domestic Circuit 2026",
    type: "National",
    location: "Philippines (season circuit)",
    startDate: "March 15, 2026",
    endDate: "April 5, 2026",
    organizer: "Philippine Athletics Track & Field Association (PATFA)",
    about: "Domestic season of national meets for selection and development with multiple stops.",
    events: ["Full track and field program across stops"],
    participants: 280,
    countries: 1,
    records: 3,
    highlights: ["Selection pathway for Asian Games", "Youth and U23 spotlight meets"],
    medalists: ["Season-long podiums tracked per meet"],
    ticketInfo: "Free to ticketed by venue",
    sponsor: "Local Government Units",
    status: "Upcoming",
    dateLabel: "Mar 15, 2026",
  },
]

export const getCompetitionById = (idOrSlug: string) =>
  competitions.find((competition) => matchesIdOrSlug(competition, idOrSlug))

export const getCompetitionByIdOrStub = (idOrSlug: string): Competition => {
  const competition = getCompetitionById(idOrSlug)
  if (competition) return competition
  const name = idOrSlug.replace(/-/g, " ") || "Competition"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name,
    type: "Track & Field",
    location: "Philippines",
    startDate: "TBD",
    endDate: "TBD",
    organizer: "To be announced",
    about: "Profile coming soon. Details to be updated.",
    events: [],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [],
    medalists: [],
    ticketInfo: "TBD",
    sponsor: "TBD",
    status: "Upcoming",
    dateLabel: "TBD",
    isStub: true,
  }
}
