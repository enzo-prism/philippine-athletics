import type { AthleticsIconName } from "@/components/icons/athletics-icons"

export type FederationPillar = {
  title: string
  description: string
  icon: AthleticsIconName
}

export type Discipline = {
  slug: string
  name: string
  summary: string
  pathway: string
  events: string[]
  resources: string[]
  icon: AthleticsIconName
}

export type SafetyResourceGroup = {
  audience: string
  description: string
  resources: string[]
  icon: AthleticsIconName
}

export type FederationStory = {
  title: string
  category: string
  summary: string
  href: string
  icon: AthleticsIconName
}

export type SponsorCategory = {
  name: string
  description: string
  examples: string[]
}

export const federationIdentity = {
  headline: "The national home for Filipino athletics.",
  subhead:
    "From school meets to national teams, Philippine Athletics connects athletes, clubs, coaches, competitions, rankings, and partner support in one trusted public system.",
  rally: "Build the sport. Support the team. Join the journey.",
  mission:
    "Develop competitive excellence, grow participation nationwide, protect athlete welfare, and make trustworthy athletics information easier to find and use.",
}

export const federationPillars: FederationPillar[] = [
  {
    title: "Develop national teams",
    description:
      "Connect domestic performances, rankings, selection context, and international competition pathways.",
    icon: "medal",
  },
  {
    title: "Grow participation",
    description:
      "Make it easier for athletes, parents, clubs, LGUs, schools, and volunteers to find the right pathway.",
    icon: "membership",
  },
  {
    title: "Operate trusted events",
    description:
      "Keep sanctioned competitions, results intake, records context, and calendar discovery in one workflow.",
    icon: "competition",
  },
  {
    title: "Protect the ecosystem",
    description:
      "Keep Safe Sport, coaching credentials, club recognition, and audit-ready data close to each public task.",
    icon: "recognition",
  },
]

export const whatWeDo = [
  "Maintain public discovery for athletes, clubs, coaches, competitions, rankings, and sponsors.",
  "Support results intake from upload through validation and review.",
  "Give clubs, LGUs, and federation stakeholders clearer operating views for pathway decisions.",
  "Keep sponsor visibility connected to real athlete, event, and development moments.",
  "Create a safer youth pathway by separating public recognition from private operational detail.",
  "Make federation proof easier to present through dashboards, profiles, records, and story surfaces.",
]

export const federationProof = [
  { label: "Athlete directory", value: "47", note: "Profiles with result context" },
  { label: "Club network", value: "3", note: "Recognized training environments" },
  { label: "Competition records", value: "9", note: "Calendar and result surfaces" },
  { label: "Operating pathways", value: "4", note: "Youth, adult, club, and LGU routes" },
]

export const disciplines: Discipline[] = [
  {
    slug: "track-field",
    name: "Track & Field",
    summary:
      "The core stadium program across sprints, hurdles, relays, jumps, throws, middle distance, and distance events.",
    pathway: "School meets, club circuits, national championships, and international selection.",
    events: ["100m", "400m hurdles", "Relays", "Long jump", "Javelin", "5000m"],
    resources: ["Rankings", "Athlete bios", "Competition profiles"],
    icon: "competition",
  },
  {
    slug: "road-running",
    name: "Road Running",
    summary:
      "Road races and endurance pathways that connect community participation with elite national team goals.",
    pathway: "Certified routes, open events, club teams, and national road championships.",
    events: ["5km", "10km", "Half marathon", "Marathon"],
    resources: ["Event calendar", "Course proof", "Result validation"],
    icon: "location",
  },
  {
    slug: "race-walking",
    name: "Race Walking",
    summary:
      "A technical endurance discipline that needs clear coaching, officiating, and competition education.",
    pathway: "Coach education, official oversight, athlete development, and international standards.",
    events: ["10,000m walk", "20km walk", "Team events"],
    resources: ["Coaches", "Officials", "Rules context"],
    icon: "coach",
  },
  {
    slug: "cross-country",
    name: "Cross Country",
    summary:
      "Team and individual racing over natural terrain, ideal for school, club, and development pipelines.",
    pathway: "School leagues, regional selection, national championships, and international teams.",
    events: ["U20 races", "Open races", "Mixed relay", "Masters"],
    resources: ["Team selection", "Event calendar", "Club rosters"],
    icon: "club",
  },
  {
    slug: "para-athletics",
    name: "Para Athletics",
    summary:
      "Inclusive track and field pathways with classification, competition support, and sponsor-visible athlete stories.",
    pathway: "Classification, accessible competition, national recognition, and international team context.",
    events: ["Sprints", "Throws", "Jumps", "Road events"],
    resources: ["Athlete profiles", "Recognition", "Safe Sport"],
    icon: "recognition",
  },
]

export const safetyResourceGroups: SafetyResourceGroup[] = [
  {
    audience: "Athletes",
    description:
      "Know how profiles, results, recognition, and reporting are handled across public and private surfaces.",
    resources: ["Profile visibility", "Result evidence", "Report a concern"],
    icon: "athlete",
  },
  {
    audience: "Parents and guardians",
    description:
      "Understand youth-safe defaults, LGU-funded pathways, club roles, and what information stays private.",
    resources: ["Youth privacy", "Guardian context", "Club contact points"],
    icon: "membership",
  },
  {
    audience: "Coaches and clubs",
    description:
      "Keep credentials, rosters, training environments, and athlete welfare signals clear and reviewable.",
    resources: ["Coach credentials", "Club recognition", "Roster checks"],
    icon: "coach",
  },
  {
    audience: "Event directors",
    description:
      "Submit structured results, resolve validation issues, and keep competition records audit-ready.",
    resources: ["Results intake", "Validation issues", "Competition profile"],
    icon: "data",
  },
  {
    audience: "Volunteers and officials",
    description:
      "Give meet staff and officials a shared view of event standards, roles, and issue escalation.",
    resources: ["Officials pathway", "Meet operations", "Incident routing"],
    icon: "check",
  },
]

export const federationStories: FederationStory[] = [
  {
    title: "National rankings stay connected to evidence",
    category: "Rankings & Records",
    summary:
      "Ranking filters, highlighted athletes, and competition source context stay URL-addressable for sharing.",
    href: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025",
    icon: "rankings",
  },
  {
    title: "Domestic events become easier to follow",
    category: "Events & Results",
    summary:
      "Calendar entries, registration moments, results, and sanctioning context can live in the same event surface.",
    href: "/events",
    icon: "competition",
  },
  {
    title: "Athlete pathways are visible without exposing youth data",
    category: "Membership",
    summary:
      "Youth, adult, club, and LGU routes keep the operating story clear for stakeholders and families.",
    href: "/membership",
    icon: "membership",
  },
]

export const sponsorCategories: SponsorCategory[] = [
  {
    name: "Official Sponsors",
    description:
      "Premium partners tied to national visibility, athlete pathways, events, and federation storytelling.",
    examples: ["Season presenting partner", "National team support", "Event activation"],
  },
  {
    name: "Official Suppliers",
    description:
      "Brands providing apparel, equipment, hydration, recovery, transport, media, or operational support.",
    examples: ["Performance gear", "Recovery support", "Travel and logistics"],
  },
  {
    name: "Technology Partners",
    description:
      "Systems that help make profiles, rankings, results, dashboards, and media surfaces more reliable.",
    examples: ["Timing data", "Result validation", "Broadcast and content tools"],
  },
  {
    name: "Community Partners",
    description:
      "LGUs, schools, foundations, and local organizations that help grow access to competition nationwide.",
    examples: ["Youth enrollment", "Venue support", "Local development programs"],
  },
]
