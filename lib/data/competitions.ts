import { matchesIdOrSlug, slugify } from "./utils"

export type CompetitionSource = {
  label: string
  href: string
  note: string
}

export type CompetitionEvidenceLevel = "Official" | "Official/organizer" | "Secondary official"

export type CompetitionTier =
  | "Must-watch"
  | "Elite circuit"
  | "Championship"
  | "Development championship"
  | "Road major"
  | "Road championship"
  | "Regional championship"

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
  results?: {
    event: string
    round?: string
    entries: {
      athleteName: string
      athleteId?: string
      result: string
      place: string
      note?: string
      source?: "World Athletics" | "Demo data"
    }[]
  }[]
  participants: number
  countries: number
  records: number
  highlights: string[]
  medalists: string[]
  ticketInfo: string
  sponsor: string
  status: "Upcoming" | "Past"
  dateLabel: string
  series?: string
  tier?: CompetitionTier
  officialUrl?: string
  watchReason?: string
  evidenceLevel?: CompetitionEvidenceLevel
  evidenceNotes?: string
  sourceUpdated?: string
  sourceLinks?: CompetitionSource[]
  isWorldLevel?: boolean
  isStub?: boolean
}

const sourceUpdated = "Verified May 1, 2026"

const worldRelaysSource: CompetitionSource = {
  label: "World Athletics Relays Gaborone 26",
  href: "https://worldathletics.org/competitions/world-athletics-relays/gaborone26",
  note: "Official World Athletics event hub for the Gaborone 26 relays.",
}

const worldRelaysKeyInfoSource: CompetitionSource = {
  label: "World Athletics Relays key information",
  href: "https://worldathletics.org/competitions/world-athletics-relays/gaborone26/key-info",
  note: "Confirms the six relay events and qualification role for Budapest 26 and Beijing 27.",
}

const diamondLeagueCalendarSource: CompetitionSource = {
  label: "Wanda Diamond League calendar 2026",
  href: "https://www.diamondleague.com/calendar/",
  note: "Official Diamond League calendar; used for all 15 Diamond League dates and the Doha June 19 correction.",
}

const continentalTourSource: CompetitionSource = {
  label: "World Athletics Continental Tour expands for biggest-ever season",
  href: "https://worldathletics.org/competitions/world-athletics-continental-tour/news/world-athletics-continental-tour-expands-2026",
  note: "Official World Athletics press release listing the 2026 Gold-level meetings.",
}

const ultimateChampionshipSource: CompetitionSource = {
  label: "World Athletics Ultimate Championship Budapest 26",
  href: "https://worldathletics.org/competitions/world-athletics-ultimate-championship/2026",
  note: "Official event hub for the inaugural World Athletics Ultimate Championship.",
}

const ultimateProgrammeSource: CompetitionSource = {
  label: "28 events, one Ultimate Championship",
  href: "https://worldathletics.org/en/competitions/world-athletics-ultimate-championship/2026/news/news/28-events-one-ultimate-championship",
  note: "Official programme article describing 28 events across three sessions.",
}

const roadRunningSource: CompetitionSource = {
  label: "World Athletics Road Running Championships Copenhagen 26",
  href: "https://worldathletics.org/competitions/world-athletics-road-running-championships/copenhagen26",
  note: "Official Copenhagen 26 event hub for the mile, 5K, and half marathon championship weekend.",
}

const u20Source: CompetitionSource = {
  label: "World Athletics U20 Championships Oregon 26",
  href: "https://worldathletics.org/competitions/world-athletics-u20-championships/oregon26",
  note: "Official World Athletics U20 event hub confirming Hayward Field and 5-9 August 2026.",
}

const commonwealthSource: CompetitionSource = {
  label: "Scottish Athletics Glasgow 2026 schedule",
  href: "https://www.scottishathletics.org.uk/glasgow26-athletics-schedule/",
  note: "Confirms athletics and para athletics running from 27 July to 1 August 2026.",
}

const europeanSource: CompetitionSource = {
  label: "European Athletics Championships Birmingham 2026",
  href: "https://www.birmingham26.com/competitions/european-athletics-championships/overview",
  note: "Official European Athletics championship hub for Birmingham, 10-16 August 2026.",
}

const olympicsMarathonMajorsSource: CompetitionSource = {
  label: "Olympics.com World Marathon Majors 2026 list",
  href: "https://www.olympics.com/en/news/world-marathon-majors-2026-all-results-times-full-list",
  note: "Used as a secondary cross-check for the 2026 World Marathon Majors sequence.",
}

const trackProgramme = ["Sprints", "Hurdles", "Middle distance", "Distance", "Jumps", "Throws"]
const championshipProgramme = [...trackProgramme, "Race walks", "Relays", "Combined events"]
const diamondProgramme = ["Diamond disciplines", "Sprints", "Middle distance", "Jumps", "Throws"]
const continentalProgramme = ["Continental Tour disciplines", "Sprints", "Middle distance", "Jumps", "Throws"]

const makeCompetition = (competition: Competition): Competition => competition

const makeDiamondLeagueMeet = ({
  id,
  name,
  location,
  startDate,
  endDate = startDate,
  dateLabel,
}: {
  id: string
  name: string
  location: string
  startDate: string
  endDate?: string
  dateLabel: string
}): Competition =>
  makeCompetition({
    id,
    slug: id,
    name,
    type: "Diamond League",
    location,
    startDate,
    endDate,
    organizer: "Wanda Diamond League",
    about:
      `${name} is part of the 2026 Wanda Diamond League, the premier global one-day professional track and field circuit. The official calendar places this stop on ${dateLabel}, with the season building toward the Brussels Final on 4-5 September.`,
    events: diamondProgramme,
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Top-tier professional track and field meeting on the global Diamond League circuit.",
      "Athletes use the circuit to chase prize money, world-class head-to-heads, and season-long Diamond League positioning.",
      "The app treats the Diamond League calendar as the highest-priority one-day professional track layer.",
    ],
    medalists: [],
    ticketInfo: "See the official Wanda Diamond League calendar and meet channels for tickets, timetable, and entries.",
    sponsor: "Wanda Diamond League partner programme",
    status: "Upcoming",
    dateLabel,
    series: "Wanda Diamond League",
    tier: "Elite circuit",
    officialUrl: diamondLeagueCalendarSource.href,
    watchReason:
      "Premier one-day pro-track circuit stop; useful for tracking global event form before the season-ending championship window.",
    evidenceLevel: "Official",
    evidenceNotes:
      "The live Diamond League calendar was used as the source of truth. It lists Doha on 19 June 2026, superseding older calendar references that had Doha in May.",
    sourceUpdated,
    sourceLinks: [diamondLeagueCalendarSource],
    isWorldLevel: true,
  })

const makeContinentalGoldMeet = ({
  id,
  name,
  location,
  startDate,
  endDate = startDate,
  dateLabel,
}: {
  id: string
  name: string
  location: string
  startDate: string
  endDate?: string
  dateLabel: string
}): Competition =>
  makeCompetition({
    id,
    slug: id,
    name,
    type: "Continental Tour Gold",
    location,
    startDate,
    endDate,
    organizer: "World Athletics Continental Tour",
    about:
      `${name} is one of the remaining Gold-level meetings on the 2026 World Athletics Continental Tour. Gold meetings sit directly below the Diamond League in the global one-day meet structure and regularly draw world-class athletes chasing ranking points, standards, and competitive form.`,
    events: continentalProgramme,
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Gold-level World Athletics Continental Tour stop.",
      "Important second-layer professional meet for ranking points, qualification marks, and event-specific depth.",
      "Official World Athletics 2026 Continental Tour release lists this meet among the Gold meetings after Melbourne and Nairobi.",
    ],
    medalists: [],
    ticketInfo: "See the official meet and World Athletics Continental Tour channels for tickets, timetable, and entries.",
    sponsor: "World Athletics Continental Tour partner programme",
    status: "Upcoming",
    dateLabel,
    series: "World Athletics Continental Tour Gold",
    tier: "Elite circuit",
    officialUrl: continentalTourSource.href,
    watchReason:
      "Best next layer below the Diamond League; strong indicator of global depth and qualification momentum.",
    evidenceLevel: "Official",
    evidenceNotes:
      "World Athletics' 2026 Continental Tour release identifies this as a Gold-level meeting on the 2026 calendar.",
    sourceUpdated,
    sourceLinks: [continentalTourSource],
    isWorldLevel: true,
  })

const diamondLeagueMeets: Competition[] = [
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-shanghai-keqiao-2026",
    name: "Wanda Diamond League Shanghai/Keqiao",
    location: "Shanghai/Keqiao, China",
    startDate: "2026-05-16",
    dateLabel: "16 May 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-xiamen-2026",
    name: "Wanda Diamond League Xiamen",
    location: "Xiamen, China",
    startDate: "2026-05-23",
    dateLabel: "23 May 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-rabat-2026",
    name: "Wanda Diamond League Rabat",
    location: "Rabat, Morocco",
    startDate: "2026-05-31",
    dateLabel: "31 May 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-rome-2026",
    name: "Wanda Diamond League Rome",
    location: "Rome, Italy",
    startDate: "2026-06-04",
    dateLabel: "4 June 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-stockholm-2026",
    name: "Wanda Diamond League Stockholm",
    location: "Stockholm, Sweden",
    startDate: "2026-06-07",
    dateLabel: "7 June 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-oslo-2026",
    name: "Wanda Diamond League Oslo",
    location: "Oslo, Norway",
    startDate: "2026-06-10",
    dateLabel: "10 June 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-doha-2026",
    name: "Wanda Diamond League Doha",
    location: "Doha, Qatar",
    startDate: "2026-06-19",
    dateLabel: "19 June 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-paris-2026",
    name: "Wanda Diamond League Paris",
    location: "Paris, France",
    startDate: "2026-06-28",
    dateLabel: "28 June 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-eugene-2026",
    name: "Wanda Diamond League Eugene",
    location: "Eugene, Oregon, United States",
    startDate: "2026-07-04",
    dateLabel: "4 July 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-monaco-2026",
    name: "Wanda Diamond League Monaco",
    location: "Monaco",
    startDate: "2026-07-10",
    dateLabel: "10 July 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-london-2026",
    name: "Wanda Diamond League London",
    location: "London, Great Britain",
    startDate: "2026-07-18",
    dateLabel: "18 July 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-lausanne-2026",
    name: "Wanda Diamond League Lausanne",
    location: "Lausanne, Switzerland",
    startDate: "2026-08-21",
    dateLabel: "21 August 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-silesia-2026",
    name: "Wanda Diamond League Silesia",
    location: "Silesia, Poland",
    startDate: "2026-08-23",
    dateLabel: "23 August 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-zurich-2026",
    name: "Wanda Diamond League Zurich",
    location: "Zurich, Switzerland",
    startDate: "2026-08-27",
    dateLabel: "27 August 2026",
  }),
  makeDiamondLeagueMeet({
    id: "wanda-diamond-league-brussels-final-2026",
    name: "Wanda Diamond League Final Brussels",
    location: "Brussels, Belgium",
    startDate: "2026-09-04",
    endDate: "2026-09-05",
    dateLabel: "4-5 September 2026",
  }),
]

const continentalGoldMeets: Competition[] = [
  makeContinentalGoldMeet({
    id: "seiko-golden-grand-prix-tokyo-2026",
    name: "SEIKO Golden Grand Prix",
    location: "Tokyo, Japan",
    startDate: "2026-05-17",
    dateLabel: "17 May 2026",
  }),
  makeContinentalGoldMeet({
    id: "irena-szewinska-memorial-2026",
    name: "Irena Szewińska Memorial",
    location: "Bydgoszcz, Poland",
    startDate: "2026-05-29",
    dateLabel: "29 May 2026",
  }),
  makeContinentalGoldMeet({
    id: "paavo-nurmi-games-2026",
    name: "Paavo Nurmi Games",
    location: "Turku, Finland",
    startDate: "2026-06-03",
    dateLabel: "3 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "usatf-lone-star-grand-prix-2026",
    name: "USATF Lone Star Grand Prix",
    location: "College Station, Texas, United States",
    startDate: "2026-06-06",
    dateLabel: "6 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "usatf-la-grand-prix-2026",
    name: "USATF LA Grand Prix",
    location: "Los Angeles, United States",
    startDate: "2026-06-13",
    endDate: "2026-06-14",
    dateLabel: "13-14 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "ostrava-golden-spike-2026",
    name: "Ostrava Golden Spike",
    location: "Ostrava, Czechia",
    startDate: "2026-06-16",
    dateLabel: "16 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "fbk-games-hengelo-2026",
    name: "FBK Games",
    location: "Hengelo, Netherlands",
    startDate: "2026-06-21",
    dateLabel: "21 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "boris-hanzekovic-memorial-2026",
    name: "Boris Hanžeković Memorial",
    location: "Zagreb, Croatia",
    startDate: "2026-06-26",
    dateLabel: "26 June 2026",
  }),
  makeContinentalGoldMeet({
    id: "gyulai-istvan-memorial-2026",
    name: "Gyulai István Memorial",
    location: "Budapest, Hungary",
    startDate: "2026-07-14",
    dateLabel: "14 July 2026",
  }),
]

const championshipEvents: Competition[] = [
  makeCompetition({
    id: "world-athletics-relays-gaborone-2026",
    slug: "world-athletics-relays-gaborone-2026",
    name: "World Athletics Relays Gaborone 26",
    type: "World Athletics Series",
    location: "Gaborone, Botswana",
    startDate: "2026-05-02",
    endDate: "2026-05-03",
    organizer: "World Athletics",
    about:
      "World Athletics Relays Gaborone 26 is the global relay championship for national teams. World Athletics describes the event as the main qualification event for relay places at the World Athletics Ultimate Championship in Budapest and the World Athletics Championships Beijing 27, with six relay disciplines contested in Gaborone.",
    events: [
      "Women's 4x100m relay",
      "Men's 4x100m relay",
      "Women's 4x400m relay",
      "Men's 4x400m relay",
      "Mixed 4x100m relay",
      "Mixed 4x400m relay",
    ],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "First World Athletics Series event in this calendar window and a true national-team relay championship.",
      "World Athletics lists the six-event programme across men's, women's, and mixed 4x100m and 4x400m relays.",
      "The meet doubles as a relay qualification checkpoint for Budapest 26 and Beijing 27.",
    ],
    medalists: [],
    ticketInfo: "Tickets, timetable, live results, and broadcast notes are handled through the World Athletics Gaborone 26 hub.",
    sponsor: "World Athletics Series partner programme",
    status: "Upcoming",
    dateLabel: "2-3 May 2026",
    series: "World Athletics Series",
    tier: "Must-watch",
    officialUrl: worldRelaysSource.href,
    watchReason:
      "The biggest global relay championship of the year and the first major World Athletics Series event after May 1.",
    evidenceLevel: "Official",
    evidenceNotes:
      "World Athletics page data and key-information copy confirm 2-3 May 2026 in Gaborone and the six relay events.",
    sourceUpdated,
    sourceLinks: [worldRelaysSource, worldRelaysKeyInfoSource],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "world-athletics-ultimate-championship-budapest-2026",
    slug: "world-athletics-ultimate-championship-budapest-2026",
    name: "World Athletics Ultimate Championship Budapest 26",
    type: "World Athletics Series",
    location: "Budapest, Hungary",
    startDate: "2026-09-11",
    endDate: "2026-09-13",
    organizer: "World Athletics",
    about:
      "The World Athletics Ultimate Championship is a new season-ending championship built around the sport's best athletes. World Athletics' official material positions Olympic champions, world champions, Diamond League winners, and top performers in a three-day championship format in Budapest.",
    events: ["28-event championship programme", "Track", "Field", "Mixed 4x100m relay", "Relays"],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Inaugural edition of World Athletics' new season-ending championship.",
      "Official programme article says the format covers 28 events across three sessions.",
      "Positioned as the final best-vs-best championship layer after the Diamond League season.",
    ],
    medalists: [],
    ticketInfo: "Tickets and event updates are available through the World Athletics Budapest 26 hub.",
    sponsor: "World Athletics Series partner programme",
    status: "Upcoming",
    dateLabel: "11-13 September 2026",
    series: "World Athletics Series",
    tier: "Must-watch",
    officialUrl: ultimateChampionshipSource.href,
    watchReason:
      "New global season-ending championship that concentrates Olympic champions, world champions, Diamond League winners, and top-ranked athletes.",
    evidenceLevel: "Official",
    evidenceNotes:
      "World Athletics event data confirms 11-13 September 2026 in Budapest; the official programme article confirms the 28-event concept.",
    sourceUpdated,
    sourceLinks: [ultimateChampionshipSource, ultimateProgrammeSource],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "world-athletics-road-running-championships-copenhagen-2026",
    slug: "world-athletics-road-running-championships-copenhagen-2026",
    name: "World Athletics Road Running Championships Copenhagen 26",
    type: "Road Running",
    location: "Copenhagen, Denmark",
    startDate: "2026-09-19",
    endDate: "2026-09-20",
    organizer: "World Athletics",
    about:
      "Copenhagen 26 is World Athletics' global road-running championship weekend. The official event page frames it around championship titles in the mile, 5K, and half marathon, with elite runners and mass-participation races sharing the city course.",
    events: ["Road mile", "5K", "Half marathon"],
    participants: 65000,
    countries: 0,
    records: 0,
    highlights: [
      "World Athletics Series road-running championship rather than a track meet.",
      "Official page lists Saturday 19 September for the mile and 5K routes and Sunday 20 September for the half marathon route.",
      "Event page promotes a 65,000-runner mass-participation festival around the elite championship races.",
    ],
    medalists: [],
    ticketInfo: "Mass-race registration and route information are linked from the official Copenhagen 26 hub.",
    sponsor: "World Athletics Series partner programme",
    status: "Upcoming",
    dateLabel: "19-20 September 2026",
    series: "World Athletics Series",
    tier: "Road championship",
    officialUrl: roadRunningSource.href,
    watchReason:
      "World titles on the road over the mile, 5K, and half marathon; essential if the app tracks athletics beyond the stadium.",
    evidenceLevel: "Official",
    evidenceNotes:
      "World Athletics event hub confirms Copenhagen, 19-20 September 2026, and the official route copy identifies the mile, 5K, and half marathon programme.",
    sourceUpdated,
    sourceLinks: [roadRunningSource],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "world-athletics-u20-championships-oregon-2026",
    slug: "world-athletics-u20-championships-oregon-2026",
    name: "World Athletics U20 Championships Oregon 26",
    type: "World Athletics Series",
    location: "Hayward Field, Eugene, Oregon, United States",
    startDate: "2026-08-05",
    endDate: "2026-08-09",
    organizer: "World Athletics",
    about:
      "Oregon 26 is the World Athletics U20 Championships, the global championship for the next wave of elite track and field athletes. World Athletics identifies Hayward Field at the University of Oregon as the venue and 5-9 August 2026 as the competition window.",
    events: ["U20 track", "U20 field", "Relays", "Combined events"],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Major global age-group championship for future senior-level stars.",
      "Held at Hayward Field, a recent World Championships and World U20 Championships venue.",
      "Useful for monitoring emerging athletes who may become SEA Games, Asian, or Olympic pathway targets.",
    ],
    medalists: [],
    ticketInfo: "Ticket packages and qualification documents are linked from the official Oregon 26 hub.",
    sponsor: "World Athletics Series partner programme",
    status: "Upcoming",
    dateLabel: "5-9 August 2026",
    series: "World Athletics Series",
    tier: "Development championship",
    officialUrl: u20Source.href,
    watchReason:
      "The best global U20 checkpoint in the period; important for pathway scouting and future international standards.",
    evidenceLevel: "Official",
    evidenceNotes:
      "World Athletics event page confirms 5-9 August 2026 and Hayward Field at the University of Oregon.",
    sourceUpdated,
    sourceLinks: [u20Source],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "commonwealth-games-athletics-glasgow-2026",
    slug: "commonwealth-games-athletics-glasgow-2026",
    name: "Commonwealth Games Athletics Glasgow 2026",
    type: "Regional Championship",
    location: "Glasgow, Scotland",
    startDate: "2026-07-27",
    endDate: "2026-08-01",
    organizer: "Glasgow 2026 / Commonwealth Sport",
    about:
      "Commonwealth Games athletics is a regional championship rather than a World Athletics Series event, but it remains globally relevant because many Commonwealth nations field world-class athletes. Scottish Athletics' schedule notice confirms athletics and para athletics running from 27 July to 1 August 2026.",
    events: ["Athletics", "Para athletics"],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Regional multi-sport championship with world-class athletes from Commonwealth nations.",
      "Athletics and para athletics share the 27 July to 1 August competition window.",
      "Useful context event for athletes from Commonwealth countries and for global championship form tracking.",
    ],
    medalists: [],
    ticketInfo: "See Glasgow 2026 and Scottish Athletics channels for the full sport schedule and ticketing.",
    sponsor: "Glasgow 2026 partner programme",
    status: "Upcoming",
    dateLabel: "27 July-1 August 2026",
    series: "Commonwealth Games",
    tier: "Regional championship",
    officialUrl: commonwealthSource.href,
    watchReason:
      "Not a global championship, but a high-value regional championship with many elite athletes and para-athletics medals.",
    evidenceLevel: "Official/organizer",
    evidenceNotes:
      "Scottish Athletics' Glasgow 2026 schedule notice confirms the athletics window; final event timetables should be checked with Glasgow 2026 as the Games approach.",
    sourceUpdated,
    sourceLinks: [commonwealthSource],
    isWorldLevel: false,
  }),
  makeCompetition({
    id: "european-athletics-championships-birmingham-2026",
    slug: "european-athletics-championships-birmingham-2026",
    name: "European Athletics Championships Birmingham 2026",
    type: "Regional Championship",
    location: "Alexander Stadium, Birmingham, Great Britain",
    startDate: "2026-08-10",
    endDate: "2026-08-16",
    organizer: "European Athletics",
    about:
      "Birmingham 2026 is the European Athletics Championships. It is regional rather than world-level by governance, but the depth of European athletics makes many event finals world-class. European Athletics lists Birmingham, Great Britain, from 10 to 16 August 2026, with Alexander Stadium as the venue.",
    events: championshipProgramme,
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "Premier European outdoor championship and a major senior championships marker in the 2026 season.",
      "European Athletics describes the championships as the showcase event for the continental branch of the sport.",
      "The event follows a dense July-August championship stretch that also includes the Commonwealth Games and World U20s.",
    ],
    medalists: [],
    ticketInfo: "Tickets, timetable, and media updates are linked through the Birmingham 2026 European Athletics hub.",
    sponsor: "European Athletics partner programme",
    status: "Upcoming",
    dateLabel: "10-16 August 2026",
    series: "European Athletics Championships",
    tier: "Regional championship",
    officialUrl: europeanSource.href,
    watchReason:
      "Regional championship with world-class depth across many events, especially sprints, middle distance, jumps, throws, and endurance events.",
    evidenceLevel: "Official",
    evidenceNotes:
      "European Athletics' official hub confirms Birmingham, 10-16 August 2026, and Alexander Stadium context.",
    sourceUpdated,
    sourceLinks: [europeanSource],
    isWorldLevel: false,
  }),
]

const marathonMajors: Competition[] = [
  makeCompetition({
    id: "tcs-sydney-marathon-2026",
    slug: "tcs-sydney-marathon-2026",
    name: "TCS Sydney Marathon",
    type: "World Marathon Major",
    location: "Sydney, Australia",
    startDate: "2026-08-30",
    endDate: "2026-08-30",
    organizer: "TCS Sydney Marathon / Abbott World Marathon Majors",
    about:
      "The TCS Sydney Marathon is the newest Abbott World Marathon Major and the first of the late-2026 major-marathon sequence in this app's watch window. The official marathon page ties 2026 entry and qualification details to race day on 30 August 2026.",
    events: ["Marathon", "Elite marathon", "Mass participation"],
    participants: 0,
    countries: 150,
    records: 0,
    highlights: [
      "Newest member of the Abbott World Marathon Majors group.",
      "Official event page says the race hosts participants from more than 150 countries.",
      "Placed three weeks before Berlin in the autumn major-marathon rhythm.",
    ],
    medalists: [],
    ticketInfo: "Entry, travel, charity, and course information are handled through the official TCS Sydney Marathon website.",
    sponsor: "TCS Sydney Marathon partner programme",
    status: "Upcoming",
    dateLabel: "30 August 2026",
    series: "Abbott World Marathon Majors",
    tier: "Road major",
    officialUrl: "https://www.tcssydneymarathon.com/marathon",
    watchReason:
      "World Marathon Major-level road event and the newest global major; useful for elite road-running tracking.",
    evidenceLevel: "Official/organizer",
    evidenceNotes:
      "Official Sydney Marathon page references the 2026 race date, Abbott World Marathon Major status, and international participation context.",
    sourceUpdated,
    sourceLinks: [
      {
        label: "TCS Sydney Marathon official marathon page",
        href: "https://www.tcssydneymarathon.com/marathon",
        note: "Official race page used for 30 August 2026 and Abbott major context.",
      },
      olympicsMarathonMajorsSource,
    ],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "bmw-berlin-marathon-2026",
    slug: "bmw-berlin-marathon-2026",
    name: "BMW Berlin Marathon",
    type: "World Marathon Major",
    location: "Berlin, Germany",
    startDate: "2026-09-27",
    endDate: "2026-09-27",
    organizer: "BMW Berlin Marathon / Abbott World Marathon Majors",
    about:
      "The BMW Berlin Marathon is a World Marathon Major and one of the sport's fastest major-marathon courses. The official registration page confirms the 2026 race date as 27 September 2026 and references Abbott World Marathon Majors entry allocation.",
    events: ["Marathon", "Elite marathon", "Wheelchair marathon", "Mass participation"],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "World Marathon Major with a long reputation for fast marathon racing.",
      "Official registration page confirms 27 September 2026.",
      "Important elite road-running stop after Sydney and before Chicago/New York.",
    ],
    medalists: [],
    ticketInfo: "Entry information is available through the official BMW Berlin Marathon registration page.",
    sponsor: "BMW Berlin Marathon partner programme",
    status: "Upcoming",
    dateLabel: "27 September 2026",
    series: "Abbott World Marathon Majors",
    tier: "Road major",
    officialUrl: "https://www.bmw-berlin-marathon.com/en/registration/registration-information",
    watchReason:
      "World Marathon Major with historically fast elite fields and major record-chasing relevance.",
    evidenceLevel: "Official/organizer",
    evidenceNotes:
      "Official Berlin Marathon registration page confirms the date and Abbott World Marathon Majors entry context.",
    sourceUpdated,
    sourceLinks: [
      {
        label: "BMW Berlin Marathon registration information",
        href: "https://www.bmw-berlin-marathon.com/en/registration/registration-information",
        note: "Official organizer source for the 27 September 2026 race date.",
      },
      olympicsMarathonMajorsSource,
    ],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "bank-of-america-chicago-marathon-2026",
    slug: "bank-of-america-chicago-marathon-2026",
    name: "Bank of America Chicago Marathon",
    type: "World Marathon Major",
    location: "Chicago, United States",
    startDate: "2026-10-11",
    endDate: "2026-10-11",
    organizer: "Bank of America Chicago Marathon / Abbott World Marathon Majors",
    about:
      "The Bank of America Chicago Marathon is a World Marathon Major and a major elite road-running stop on a flat, fast city course. The official marathon site lists the 2026 race date as 11 October 2026.",
    events: ["Marathon", "Elite marathon", "Wheelchair marathon", "Mass participation"],
    participants: 0,
    countries: 0,
    records: 0,
    highlights: [
      "World Marathon Major and one of the fastest major-marathon settings.",
      "Official site confirms 11 October 2026.",
      "Key October road-running event between Berlin and New York.",
    ],
    medalists: [],
    ticketInfo: "Entry and event information are available through the official Chicago Marathon website.",
    sponsor: "Bank of America Chicago Marathon partner programme",
    status: "Upcoming",
    dateLabel: "11 October 2026",
    series: "Abbott World Marathon Majors",
    tier: "Road major",
    officialUrl: "https://www.chicagomarathon.com/",
    watchReason:
      "World Marathon Major with elite marathon and wheelchair fields, often relevant to global records and fast times.",
    evidenceLevel: "Official/organizer",
    evidenceNotes:
      "Official Chicago Marathon website confirms the 2026 date.",
    sourceUpdated,
    sourceLinks: [
      {
        label: "Bank of America Chicago Marathon official site",
        href: "https://www.chicagomarathon.com/",
        note: "Official organizer source for the 11 October 2026 race date.",
      },
      olympicsMarathonMajorsSource,
    ],
    isWorldLevel: true,
  }),
  makeCompetition({
    id: "tcs-new-york-city-marathon-2026",
    slug: "tcs-new-york-city-marathon-2026",
    name: "TCS New York City Marathon",
    type: "World Marathon Major",
    location: "New York City, United States",
    startDate: "2026-11-01",
    endDate: "2026-11-01",
    organizer: "New York Road Runners / Abbott World Marathon Majors",
    about:
      "The TCS New York City Marathon closes this app's current 2026 watch window. NYRR's marathon page lists Marathon Day as 1 November 2026 and frames the event as a five-borough race with world-scale participation.",
    events: ["Marathon", "Elite marathon", "Wheelchair marathon", "Mass participation"],
    participants: 0,
    countries: 130,
    records: 0,
    highlights: [
      "World Marathon Major and one of the largest annual marathon events.",
      "NYRR lists Marathon Day as 1 November 2026.",
      "Final late-year major in this calendar window.",
    ],
    medalists: [],
    ticketInfo: "Entry, qualifier, charity, and race-week information are available through NYRR's marathon hub.",
    sponsor: "TCS New York City Marathon partner programme",
    status: "Upcoming",
    dateLabel: "1 November 2026",
    series: "Abbott World Marathon Majors",
    tier: "Road major",
    officialUrl: "https://www.nyrr.org/tcsnycmarathon",
    watchReason:
      "World Marathon Major and a massive global road-running event; the last big elite road marker through November 2026.",
    evidenceLevel: "Official/organizer",
    evidenceNotes:
      "NYRR marathon materials and cached official page data identify Marathon Day as 1 November 2026; Olympics.com was used as a secondary major-calendar cross-check.",
    sourceUpdated,
    sourceLinks: [
      {
        label: "TCS New York City Marathon official site",
        href: "https://www.nyrr.org/tcsnycmarathon",
        note: "Official NYRR marathon hub for race-day and entry information.",
      },
      olympicsMarathonMajorsSource,
    ],
    isWorldLevel: true,
  }),
]

export const competitions: Competition[] = [
  ...championshipEvents.slice(0, 1),
  ...diamondLeagueMeets,
  ...continentalGoldMeets,
  championshipEvents.find((event) => event.id === "commonwealth-games-athletics-glasgow-2026")!,
  championshipEvents.find((event) => event.id === "world-athletics-u20-championships-oregon-2026")!,
  championshipEvents.find((event) => event.id === "european-athletics-championships-birmingham-2026")!,
  ...marathonMajors.slice(0, 1),
  championshipEvents.find((event) => event.id === "world-athletics-ultimate-championship-budapest-2026")!,
  championshipEvents.find((event) => event.id === "world-athletics-road-running-championships-copenhagen-2026")!,
  ...marathonMajors.slice(1),
].sort((a, b) => a.startDate.localeCompare(b.startDate) || a.name.localeCompare(b.name))

export const getCompetitionById = (idOrSlug: string) =>
  competitions.find((competition) => matchesIdOrSlug(competition, idOrSlug))

export const getCompetitionResultsByAthleteId = (athleteId: string) =>
  competitions.flatMap((competition) =>
    (competition.results ?? []).flatMap((eventBlock) =>
      eventBlock.entries
        .filter((entry) => entry.athleteId === athleteId)
        .map((entry) => ({
          meet: competition.name,
          date: competition.startDate,
          location: competition.location,
          event: eventBlock.event,
          result: entry.result,
          place: entry.place,
          source: entry.source ?? "Demo data",
        })),
    ),
  )

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
    evidenceLevel: "Secondary official",
    evidenceNotes: "Stub profile only; no source has been added yet.",
    sourceUpdated,
    sourceLinks: [],
    isStub: true,
  }
}
