import {
  buildRankingsForAthletes,
  getAgeGroup,
  getBestResultForEvent,
  getMergedCompetitionResults,
  getRankingYearsFromAthletes,
  toCanonicalEventKey,
} from "./performance-evidence"
import { matchesIdOrSlug, normalizeKey, slugify } from "./utils"

// Shared athlete data and helpers
export type EventPerformance = {
  name: string
  personalBest: string
  seasonBest?: string
  nationalRank?: string | number
  asianRank?: string | number
  globalRank?: string | number
}

export type DataSourceLabel = "World Athletics" | "Demo data"

export type CompetitionResult = {
  meet: string
  date: string
  location: string
  event: string
  result: string
  place: string
  source?: DataSourceLabel
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

export type AthleteVerificationBadge = {
  label: string
  detail?: string
}

export type AthleteProfileFact = {
  label: string
  value: string
}

export type AthleteResearchSource = {
  label: string
  href: string
  note?: string
}

export type AthleteProfile = {
  id: string
  slug: string
  membershipNumber: string
  firstName: string
  lastName: string
  gender?: "Women" | "Men"
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
  profileFacts?: AthleteProfileFact[]
  researchSources?: AthleteResearchSource[]
  pathwayStage?: "National Team" | "Developmental Team" | "Masters"
  teamAffiliation?: string
  verificationBadges?: AthleteVerificationBadge[]
  isStub?: boolean
}

export type AthleteSummary = {
  id: string
  slug: string
  membershipNumber: string
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
  pathwayStage?: AthleteProfile["pathwayStage"]
  teamAffiliation?: string
  verificationBadges?: AthleteVerificationBadge[]
  isStub?: boolean
}

const rawAthleteProfiles: Omit<AthleteProfile, "membershipNumber">[] = [
  {
    id: "athlete-lauren-hoffman",
    slug: "lauren-hoffman",
    firstName: "Lauren",
    lastName: "Hoffman",
    gender: "Women",
    specialty: "400m hurdles",
    location: "Philippine National Team",
    hometown: "Haymarket, Virginia, USA",
    club: "Philippine National Team",
    coach: "No publicly listed coach",
    events: [
      {
        name: "400 Metres Hurdles",
        personalBest: "55.47",
        seasonBest: "57.28",
        nationalRank: 1,
        globalRank: 130,
      },
      {
        name: "100 Metres Hurdles",
        personalBest: "13.34",
        seasonBest: "13.53",
        nationalRank: 1,
      },
      {
        name: "400 Metres",
        personalBest: "53.71",
        seasonBest: "54.27",
      },
      {
        name: "60 Metres Hurdles",
        personalBest: "8.48",
        seasonBest: "8.48",
      },
    ],
    birthDate: "1999-03-30",
    joinedYear: 2023,
    achievements: [
      "2024 Paris Olympian for the Philippines in the women's 400m hurdles.",
      "Philippine national team eligible from 1 Oct 2023 after previously representing the United States.",
      "Philippine senior record holder in the 100m hurdles at 13.34 from the 2024 Philippine Championships.",
      "Philippine Athletics public record page lists her senior 400m hurdles national record at 55.84 from the 2024 USATF LA Grand Prix.",
      "Finished fifth in both the 400m hurdles and women's 4x400m relay at the 2023 Asian Games.",
      "Won 400m hurdles bronze and women's 4x400m relay bronze at the 2025 Southeast Asian Games.",
      "Duke school-record 400m hurdler, 2022 ACC champion, and NCAA Outdoor Championships bronze medalist.",
    ],
    competitions: [
      {
        meet: "116th Drake Relays",
        date: "2026-04-25",
        location: "Drake Stadium, Des Moines, IA, USA",
        event: "400 Metres Hurdles",
        result: "57.32",
        place: "8th, final",
        source: "World Athletics",
      },
      {
        meet: "Tom Jones Memorial",
        date: "2026-04-17",
        location: "Percy Beard Track, Gainesville, FL, USA",
        event: "400 Metres Hurdles",
        result: "57.39",
        place: "6th, final",
        source: "World Athletics",
      },
      {
        meet: "Duke Invitational",
        date: "2026-04-11",
        location: "Morris Williams T&F Stadium, Durham, NC, USA",
        event: "400 Metres Hurdles",
        result: "57.28",
        place: "3rd, final",
        source: "World Athletics",
      },
      {
        meet: "ASICS Last Chance Invitational",
        date: "2026-02-21",
        location: "JDL Fast Track, Winston Salem, NC, USA",
        event: "400 Metres",
        result: "54.27",
        place: "1st, short track final",
        source: "World Athletics",
      },
      {
        meet: "Camel City Sprints",
        date: "2026-02-06",
        location: "JDL Fast Track, Winston Salem, NC, USA",
        event: "60 Metres Hurdles",
        result: "8.48",
        place: "2nd, final",
        source: "World Athletics",
      },
      {
        meet: "Southeast Asian Games",
        date: "2025-12-16",
        location: "Supachalasai National Stadium, Bangkok, Thailand",
        event: "4x400 Metres Relay",
        result: "3:38.92",
        place: "3rd, final",
        source: "World Athletics",
      },
      {
        meet: "Southeast Asian Games",
        date: "2025-12-15",
        location: "Supachalasai National Stadium, Bangkok, Thailand",
        event: "400 Metres Hurdles",
        result: "57.75",
        place: "3rd, final",
        source: "World Athletics",
      },
      {
        meet: "Southeast Asian Games",
        date: "2025-12-15",
        location: "Supachalasai National Stadium, Bangkok, Thailand",
        event: "100 Metres Hurdles",
        result: "13.53",
        place: "4th, final",
        source: "World Athletics",
      },
      {
        meet: "The XXXIII Olympic Games",
        date: "2024-08-05",
        location: "Stade de France, Paris, France",
        event: "400 Metres Hurdles",
        result: "58.28",
        place: "7th, repechage heat 3",
        source: "World Athletics",
      },
      {
        meet: "The XXXIII Olympic Games",
        date: "2024-08-04",
        location: "Stade de France, Paris, France",
        event: "400 Metres Hurdles",
        result: "57.84",
        place: "37th overall, heats",
        source: "World Athletics",
      },
      {
        meet: "Philippine Championships",
        date: "2024-05-10",
        location: "Philsport Track Oval, Pasig, Philippines",
        event: "400 Metres Hurdles",
        result: "55.92",
        place: "1st, final",
        source: "World Athletics",
      },
      {
        meet: "Philippine Championships",
        date: "2024-05-08",
        location: "Philsport Track Oval, Pasig, Philippines",
        event: "100 Metres Hurdles",
        result: "13.34",
        place: "1st, final",
        source: "World Athletics",
      },
      {
        meet: "114th Drake Relays",
        date: "2024-04-27",
        location: "Drake Stadium, Des Moines, IA, USA",
        event: "400 Metres Hurdles",
        result: "55.72",
        place: "2nd, final",
        source: "World Athletics",
      },
      {
        meet: "Clemson Tiger Paw Invitational",
        date: "2024-02-09",
        location: "Clemson Indoor Track & Field Complex, Clemson, SC, USA",
        event: "400 Metres",
        result: "53.71",
        place: "Short track result",
        source: "World Athletics",
      },
      {
        meet: "19th Asian Games",
        date: "2023-10-04",
        location: "HOC Stadium, Hangzhou, China",
        event: "4x400 Metres Relay",
        result: "3:40.78",
        place: "5th, final",
        source: "World Athletics",
      },
      {
        meet: "19th Asian Games",
        date: "2023-10-03",
        location: "HOC Stadium, Hangzhou, China",
        event: "400 Metres Hurdles",
        result: "57.21",
        place: "5th, final",
        source: "World Athletics",
      },
      {
        meet: "ATL All-Comers Series",
        date: "2023-06-17",
        location: "Marietta HS, Marietta, GA, USA",
        event: "400 Metres Hurdles",
        result: "55.77",
        place: "Season best",
        source: "World Athletics",
      },
      {
        meet: "NCAA Division I Outdoor Championships",
        date: "2022-06-09",
        location: "Hayward Field, Eugene, OR, USA",
        event: "400 Metres Hurdles",
        result: "55.47",
        place: "Personal best, semifinal automatic qualifier",
        source: "World Athletics",
      },
      {
        meet: "ACC Championships",
        date: "2021-05-15",
        location: "Paul Derr TF Facility, Raleigh, NC, USA",
        event: "400 Metres Hurdles",
        result: "56.98",
        place: "Season best",
        source: "World Athletics",
      },
    ],
    upcoming: [],
    bio: "Lauren Hoffman is a Philippine national team hurdler and 2024 Paris Olympian specializing in the 400m hurdles. Her profile sits at the intersection of elite NCAA development and Philippine senior-team performance: she became one of Duke's best 400m hurdlers, later became eligible to represent the Philippines in national representative competitions, and has since added Olympic, Asian Games, Philippine Championships, and Southeast Asian Games results to her record.",
    contact: {},
    sponsors: [],
    profileFacts: [
      { label: "World Athletics ID", value: "14649944" },
      { label: "Born", value: "30 Mar 1999" },
      { label: "Hometown", value: "Haymarket, Virginia, USA" },
      { label: "Team", value: "Philippines" },
      { label: "Primary event", value: "400m hurdles" },
      { label: "All-time PB", value: "55.47, NCAA Outdoor Championships, 9 Jun 2022" },
      { label: "Philippine record note", value: "PATAFA public record page lists 55.84 at the 2024 USATF LA Grand Prix" },
    ],
    researchSources: [
      {
        label: "World Athletics profile",
        href: "https://worldathletics.org/athletes/x/14649944",
        note: "Eligibility, rankings, personal bests, honours, and result history.",
      },
      {
        label: "Philippine Athletics national records",
        href: "https://www.philippineathletics.org/records",
        note: "Official Philippine senior record listings for 100m hurdles and 400m hurdles.",
      },
      {
        label: "World Athletics Olympic results",
        href: "https://worldathletics.org/competitions/olympic-games/the-xxxiii-olympic-games-7153115/results/women/400-metres-hurdles/heats/summary",
        note: "Paris 2024 400m hurdles heat and repechage summaries.",
      },
      {
        label: "Duke Athletics feature",
        href: "https://goduke.com/news/2024/7/31/track-field-wrapped-in-a-new-flag.aspx",
        note: "Duke career context and Paris Olympic qualification story.",
      },
    ],
    pathwayStage: "National Team",
    teamAffiliation: "Philippines",
    verificationBadges: [
      {
        label: "World Athletics verified",
        detail: "WA profile lists Hoffman as Philippines, born 30 Mar 1999, current women's 400m hurdles world ranking, and eligible for PHI national representative competitions from 1 Oct 2023.",
      },
      {
        label: "Paris 2024 Olympian",
        detail: "World Athletics Olympic results list 57.84 in the heats and 58.28 in the repechage round of the women's 400m hurdles.",
      },
      {
        label: "Philippine record holder",
        detail: "Philippine Athletics' public records page lists Hoffman for the women's 100m hurdles record at 13.34 and the women's 400m hurdles record at 55.84.",
      },
      {
        label: "NCAA and Duke proof",
        detail: "Duke Athletics credits her with a Duke 400m hurdles school record, the 2022 ACC title, NCAA bronze, and a 55.47 personal best at the NCAA Outdoor Championships.",
      },
    ],
  },
  {
    id: "athlete-yacine-guermali",
    slug: "yacine-guermali",
    firstName: "Yacine",
    lastName: "Guermali",
    gender: "Men",
    specialty: "Middle distance / 1500m-5000m",
    location: "Philippine National Team",
    hometown: "Vancouver, Washington, USA",
    club: "Philippine National Team",
    coach: "No publicly listed coach",
    events: [
      {
        name: "5000 Metres",
        personalBest: "13:28.40",
        seasonBest: "13:36.43",
        nationalRank: 1,
        globalRank: 947,
      },
      {
        name: "1500 Metres",
        personalBest: "3:40.87",
        seasonBest: "3:40.87",
        nationalRank: 1,
      },
      {
        name: "3000 Metres",
        personalBest: "7:51.19",
        seasonBest: "8:02.62",
        nationalRank: 1,
      },
      {
        name: "10,000 Metres",
        personalBest: "29:43.94",
        seasonBest: "29:43.94",
      },
      {
        name: "Mile Short Track",
        personalBest: "4:04.65",
        seasonBest: "4:04.65",
      },
      {
        name: "800 Metres",
        personalBest: "1:50.33",
      },
    ],
    birthDate: "1999-07-26",
    joinedYear: 2024,
    achievements: [
      "Philippine national team middle-distance and distance runner eligible from 4 Jun 2024.",
      "Philippine senior record holder at 1500m with 3:40.87 from Meeting Sport e Solidarieta Lignano on 14 Jul 2024.",
      "Philippine senior record holder at 3000m with 7:51.19 from the Gyulai Istvan Memorial on 9 Jul 2024.",
      "Philippine senior record holder at 5000m with 13:28.40 from the 2024 Seiko Golden Grand Prix in Tokyo.",
      "Won 2025 Southeast Asian Games silver medals in both the men's 5000m and 10,000m.",
      "Represented the Philippines at the 2026 World Athletics Cross Country Championships, finishing 76th in the senior men's race.",
      "Gonzaga alumnus with program records in the indoor 5000m and outdoor 1500m, plus two NCAA 5000m national semifinal qualifications.",
    ],
    competitions: [
      {
        meet: "Virginia Challenge",
        date: "2026-04-18",
        location: "UVA Lannigan Field, Charlottesville, VA, USA",
        event: "5000 Metres",
        result: "13:36.43",
        place: "5th, final",
        source: "World Athletics",
      },
      {
        meet: "Hokie Invitational",
        date: "2026-01-23",
        location: "Rector Fieldhouse, Blacksburg, VA, USA",
        event: "2000 Metres Short Track",
        result: "5:09.91",
        place: "4th, final",
        source: "World Athletics",
      },
      {
        meet: "46th World Athletics Cross Country Championships",
        date: "2026-01-10",
        location: "Tallahassee, FL, USA",
        event: "Cross Country Senior Race",
        result: "32:39",
        place: "76th, final",
        source: "World Athletics",
      },
      {
        meet: "Southeast Asian Games",
        date: "2025-12-16",
        location: "Supachalasai National Stadium, Bangkok, Thailand",
        event: "10,000 Metres",
        result: "29:43.94",
        place: "2nd, final",
        source: "World Athletics",
      },
      {
        meet: "Southeast Asian Games",
        date: "2025-12-14",
        location: "Supachalasai National Stadium, Bangkok, Thailand",
        event: "5000 Metres",
        result: "14:47.33",
        place: "2nd, final",
        source: "World Athletics",
      },
      {
        meet: "Philippine Athletics Championships",
        date: "2025-05-01",
        location: "New Clark City Stadium, New Clark City, Philippines",
        event: "5000 Metres",
        result: "14:35.99",
        place: "1st, final",
        source: "World Athletics",
      },
      {
        meet: "Boston University DMR Challenge",
        date: "2025-02-21",
        location: "Boston Univ. Track & Tennis Center, Boston, MA, USA",
        event: "5000 Metres Short Track",
        result: "13:51.43",
        place: "Short track result",
        source: "World Athletics",
      },
      {
        meet: "Doc Hale Virginia Tech Invitational",
        date: "2025-02-07",
        location: "Rector Fieldhouse, Blacksburg, VA, USA",
        event: "Mile Short Track",
        result: "4:04.65",
        place: "Short track result",
        source: "World Athletics",
      },
      {
        meet: "Virginia Tech Invitational",
        date: "2025-01-17",
        location: "Rector Fieldhouse, Blacksburg, VA, USA",
        event: "3000 Metres",
        result: "8:02.62",
        place: "Short track result",
        source: "World Athletics",
      },
      {
        meet: "Meeting Sport e Solidarieta Lignano",
        date: "2024-07-14",
        location: "Stadio G. Teghil, Lignano Sabbiadoro, Italy",
        event: "1500 Metres",
        result: "3:40.87",
        place: "National record",
        source: "World Athletics",
      },
      {
        meet: "Gyulai Istvan Memorial",
        date: "2024-07-09",
        location: "Bregyo Athletic Center, Szekesfehervar, Hungary",
        event: "3000 Metres",
        result: "7:51.19",
        place: "National record",
        source: "World Athletics",
      },
      {
        meet: "Seiko Golden Grand Prix",
        date: "2024-05-19",
        location: "National Stadium, Tokyo, Japan",
        event: "5000 Metres",
        result: "13:28.40",
        place: "National record",
        source: "World Athletics",
      },
      {
        meet: "Guldensporenmeeting",
        date: "2023-07-08",
        location: "Sportcentrum Wembley, Kortrijk, Belgium",
        event: "1500 Metres",
        result: "3:41.75",
        place: "Season best",
        source: "World Athletics",
      },
      {
        meet: "Stanford Invitational",
        date: "2023-03-31",
        location: "Cobb Track and Angell Field, Palo Alto, CA, USA",
        event: "10,000 Metres",
        result: "29:55.07",
        place: "Collegiate personal best",
        source: "World Athletics",
      },
      {
        meet: "Portland Track Festival - High Performance",
        date: "2023-06-04",
        location: "Mt. Hood Community College, Gresham, OR, USA",
        event: "800 Metres",
        result: "1:50.33",
        place: "Personal best",
        source: "World Athletics",
      },
      {
        meet: "Boston University/Sharon Colyear-Danville Season Opener",
        date: "2022-12-03",
        location: "Boston Univ. Track & Tennis Center, Boston, MA, USA",
        event: "5000 Metres Short Track",
        result: "13:33.99",
        place: "Gonzaga indoor record",
        source: "World Athletics",
      },
      {
        meet: "OSU High Performance",
        date: "2021-04-30",
        location: "Oregon State Whyte Track and Field Center, Corvallis, OR, USA",
        event: "5000 Metres",
        result: "13:50.74",
        place: "Season best",
        source: "World Athletics",
      },
    ],
    upcoming: [],
    bio: "Yacine Guermali is a Philippine national team middle-distance and distance athlete whose profile is built around record-level 1500m, 3000m, and 5000m performances. A Gonzaga alumnus from Vancouver, Washington, he moved from high-level NCAA distance running into Philippine representative competition in 2024 and quickly established national-standard marks, then added a double-silver SEA Games campaign and a World Cross Country appearance for the Philippines.",
    contact: {},
    sponsors: [],
    profileFacts: [
      { label: "World Athletics ID", value: "14697159" },
      { label: "Born", value: "26 Jul 1999" },
      { label: "Hometown", value: "Vancouver, Washington, USA" },
      { label: "Team", value: "Philippines" },
      { label: "Primary range", value: "1500m, 3000m, 5000m" },
      { label: "National records", value: "1500m 3:40.87, 3000m 7:51.19, 5000m 13:28.40" },
      { label: "SEA Games proof", value: "2025 silver in 5000m and 10,000m" },
    ],
    researchSources: [
      {
        label: "World Athletics profile",
        href: "https://worldathletics.org/athletes/united-states/yacine-guermali-14697159",
        note: "Eligibility, rankings, personal bests, national records, and result history.",
      },
      {
        label: "Philippine Athletics national records",
        href: "https://www.philippineathletics.org/records",
        note: "Official Philippine senior records for 1500m, 3000m, and 5000m.",
      },
      {
        label: "World Athletics SEA Games results",
        href: "https://worldathletics.org/competition/calendar-results/results/7218189",
        note: "Official 2025 SEA Games result pages for 5000m and 10,000m.",
      },
      {
        label: "Gonzaga Athletics profile",
        href: "https://gozags.com/sports/track-and-field/roster/yacine-guermali/2803",
        note: "College background, school records, NCAA qualifications, and hometown.",
      },
    ],
    pathwayStage: "National Team",
    teamAffiliation: "Philippines",
    verificationBadges: [
      {
        label: "World Athletics verified",
        detail: "WA profile lists Guermali as Philippines, born 26 Jul 1999, eligible for PHI national representative competitions from 4 Jun 2024, and ranked in the men's 5000m.",
      },
      {
        label: "Philippine record holder",
        detail: "Philippine Athletics' public records page lists Guermali as the men's senior record holder at 1500m, 3000m, and 5000m.",
      },
      {
        label: "SEA Games medalist",
        detail: "World Athletics SEA Games results list Guermali second in the 5000m at 14:47.33 and second in the 10,000m at 29:43.94.",
      },
      {
        label: "Gonzaga proof",
        detail: "Gonzaga Athletics lists him as a program record holder and two-time NCAA 5000m national semifinal qualifier.",
      },
    ],
  },
]

const buildMembershipNumber = (id: string) =>
  `PA-${id
    .replace(/^athlete-/, "")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase()
    .slice(0, 10)
    .padEnd(10, "0")}`

export const athleteProfiles: AthleteProfile[] = rawAthleteProfiles.map((profile) => ({
  ...profile,
  membershipNumber: buildMembershipNumber(profile.id),
}))

const latestRankingYear =
  getRankingYearsFromAthletes(athleteProfiles)[0] ?? new Date().getFullYear()

const rankingCache = new Map<string, ReturnType<typeof buildRankingsForAthletes>>()

const getDefaultRankingForEvent = (profile: AthleteProfile, eventName: string) => {
  if (!profile.gender) return undefined
  const ageGroup = getAgeGroup(profile.birthDate, latestRankingYear)
  const cacheKey = `${toCanonicalEventKey(eventName)}|${profile.gender}|${ageGroup}|${latestRankingYear}`

  if (!rankingCache.has(cacheKey)) {
    rankingCache.set(
      cacheKey,
      buildRankingsForAthletes({
        athletes: athleteProfiles,
        event: eventName,
        gender: profile.gender,
        ageGroup,
        year: latestRankingYear,
      }),
    )
  }

  return rankingCache.get(cacheKey)?.find((entry) => entry.id === profile.id)
}

function toSummary(profile: AthleteProfile): AthleteSummary {
  const primaryEvent = profile.events[0]
  const eventName = primaryEvent?.name
  const bestEvidence = eventName
    ? getBestResultForEvent({
        athlete: profile,
        eventKey: toCanonicalEventKey(eventName),
        scope: "all-time",
      })
    : null
  const derivedRanking = eventName ? getDefaultRankingForEvent(profile, eventName) : undefined

  return {
    id: profile.id,
    slug: profile.slug,
    membershipNumber: profile.membershipNumber,
    name: `${profile.firstName} ${profile.lastName}`,
    specialty: profile.specialty,
    club: profile.club,
    coach: profile.coach,
    clubId: profile.clubId,
    coachId: profile.coachId,
    pb: bestEvidence?.competition.result ?? primaryEvent?.personalBest,
    location: profile.location,
    nationalRank: derivedRanking?.rank ?? primaryEvent?.nationalRank,
    asianRank: primaryEvent?.asianRank,
    globalRank: primaryEvent?.globalRank,
    events: profile.events.map((evt) => evt.name),
    href: `/athletes/${profile.slug}`,
    pathwayStage: profile.pathwayStage,
    teamAffiliation: profile.teamAffiliation,
    verificationBadges: profile.verificationBadges,
    isStub: profile.isStub,
  }
}

export const athleteSummaries: AthleteSummary[] = athleteProfiles.map(toSummary)

export const getAthleteProfile = (idOrSlug: string): AthleteProfile | undefined =>
  athleteProfiles.find((athlete) => matchesIdOrSlug(athlete, idOrSlug))

export const getAthleteProfileByMembershipNumber = (membershipNumber: string): AthleteProfile | undefined => {
  const normalized = normalizeKey(membershipNumber)
  if (!normalized) return undefined
  return athleteProfiles.find((athlete) => normalizeKey(athlete.membershipNumber) === normalized)
}

export const getAthleteSummary = (idOrSlug: string): AthleteSummary | undefined =>
  athleteSummaries.find((athlete) => matchesIdOrSlug(athlete, idOrSlug))

export const getAthleteSummaryByMembershipNumber = (membershipNumber: string): AthleteSummary | undefined => {
  const normalized = normalizeKey(membershipNumber)
  if (!normalized) return undefined
  return athleteSummaries.find((athlete) => normalizeKey(athlete.membershipNumber) === normalized)
}

const buildStubProfile = (summary: AthleteSummary): AthleteProfile => {
  const parts = summary.name.split(" ")
  const firstName = parts[0] || summary.name
  const lastName = parts.slice(1).join(" ") || summary.name
  const eventName = summary.events?.[0] || summary.specialty
  const year = new Date().getFullYear()

  return {
    id: summary.id,
    slug: summary.slug,
    membershipNumber: summary.membershipNumber,
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
    pathwayStage: summary.pathwayStage,
    teamAffiliation: summary.teamAffiliation,
    verificationBadges: summary.verificationBadges,
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
    membershipNumber: buildMembershipNumber(idOrSlug),
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
  if (profile) {
    const merged = getMergedCompetitionResults(profile)
    if (merged.length === profile.competitions.length) return profile

    return {
      ...profile,
      competitions: merged,
    }
  }
  const summary = getAthleteSummary(idOrSlug)
  if (summary) return buildStubProfile(summary)
  return buildUnknownStub(idOrSlug)
}

export const getAllAthleteEvents = () =>
  athleteProfiles.flatMap((athlete) => athlete.events.map((event) => ({ athlete, event })))
