import { athleteSummaries } from "./athletes"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "./clubs"
import { matchesIdOrSlug } from "./utils"

const isDefined = <T,>(value: T | undefined | null): value is T => value !== undefined && value !== null

export type VerificationBadgeTone = "accent" | "support" | "warning"

export type VerificationBadge = {
  label: string
  detail: string
  tone: VerificationBadgeTone
}

export type YouthParticipantProfile = {
  id: string
  slug: string
  displayName: string
  city: string
  province: string
  programName: string
  schoolOrTeam: string
  clubId: string
  attendanceRate: number
  qualificationStatus: string
  verificationBadges: VerificationBadge[]
  guardianContactState: string
  birthDate: string
  lguId: string
  paymentCoverage: "LGU-covered" | "Needs individual fallback"
  paymentNote: string
  teamLeader: string
  nextCheckpoint: string
}

export type DashboardMetric = {
  label: string
  value: string
  note: string
}

export type SpendProofItem = {
  title: string
  summary: string
  proof: string
}

export type TeamLeaderStatus = {
  name: string
  role: string
  coverage: string
  lastSync: string
}

export type LguDashboardModel = {
  id: string
  slug: string
  name: string
  region: string
  summary: string
  heroNote: string
  metrics: DashboardMetric[]
  spendProof: SpendProofItem[]
  paymentCoverage: DashboardMetric[]
  teamLeaders: TeamLeaderStatus[]
  participantIds: string[]
  clubIds: string[]
}

export type ComplianceRow = {
  label: string
  status: "On track" | "Needs attention"
  detail: string
}

export type RenewalRow = {
  label: string
  due: string
  status: "Current" | "Upcoming"
}

export type ClubDashboardModel = {
  clubId: string
  slug: string
  heroNote: string
  metrics: DashboardMetric[]
  complianceRows: ComplianceRow[]
  renewalRows: RenewalRow[]
  paymentCoverage: DashboardMetric[]
  pendingActions: string[]
  participantIds: string[]
  adultSpotlightIds: string[]
}

export const pilotYouthParticipants: YouthParticipantProfile[] = [
  {
    id: "participant-aira-mendoza",
    slug: "aira-mendoza",
    displayName: "Aira Mendoza",
    city: "Quezon City",
    province: "Metro Manila",
    programName: "Quezon City Athletics Pilot",
    schoolOrTeam: "Quezon City Science High relay squad",
    clubId: "club-manila-striders",
    attendanceRate: 94,
    qualificationStatus: "Qualified for NCR youth finals",
    verificationBadges: [
      { label: "LGU-funded", detail: "Covered inside the Quezon City pilot roster.", tone: "accent" },
      { label: "School verified", detail: "Enrollment confirmed through the school athletics coordinator.", tone: "support" },
      { label: "Guardian confirmed", detail: "Guardian intake completed and cleared for travel.", tone: "support" },
    ],
    guardianContactState: "Guardian confirmed and reachable by SMS",
    birthDate: "2011-08-09",
    lguId: "quezon-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "No individual payment required in this phase.",
    teamLeader: "Coach Ana Reyes",
    nextCheckpoint: "Relay pool confirmation on May 12",
  },
  {
    id: "participant-jonah-ramos",
    slug: "jonah-ramos",
    displayName: "Jonah Ramos",
    city: "Quezon City",
    province: "Metro Manila",
    programName: "Quezon City Athletics Pilot",
    schoolOrTeam: "Batasan Hills youth sprint team",
    clubId: "club-manila-striders",
    attendanceRate: 89,
    qualificationStatus: "One meet away from NCR youth finals",
    verificationBadges: [
      { label: "LGU-funded", detail: "Active roster spot funded by Quezon City.", tone: "accent" },
      { label: "Team leader cleared", detail: "Local team leader logged two consecutive weekly check-ins.", tone: "support" },
      { label: "Travel planning open", detail: "Still needs transport confirmation for the next qualifier.", tone: "warning" },
    ],
    guardianContactState: "Guardian confirmed; travel note pending",
    birthDate: "2010-04-21",
    lguId: "quezon-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Travel support is pending even though program fees are covered.",
    teamLeader: "Coach Mark Villanueva",
    nextCheckpoint: "NCR qualifier on May 18",
  },
  {
    id: "participant-sam-bautista",
    slug: "sam-bautista",
    displayName: "Sam Bautista",
    city: "Quezon City",
    province: "Metro Manila",
    programName: "Quezon City Athletics Pilot",
    schoolOrTeam: "Project 6 middle-distance crew",
    clubId: "club-manila-striders",
    attendanceRate: 91,
    qualificationStatus: "Qualified for city development camp",
    verificationBadges: [
      { label: "LGU-funded", detail: "Development-camp slot sponsored by the city pilot.", tone: "accent" },
      { label: "Attendance verified", detail: "Above the pilot’s 90 percent attendance threshold.", tone: "support" },
      { label: "Medical note cleared", detail: "School clearance received for the next block.", tone: "support" },
    ],
    guardianContactState: "Guardian and school contact both confirmed",
    birthDate: "2011-01-14",
    lguId: "quezon-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Covered through the LGU development-camp budget line.",
    teamLeader: "Coach Ana Reyes",
    nextCheckpoint: "Camp attendance review on May 20",
  },
  {
    id: "participant-mica-velasco",
    slug: "mica-velasco",
    displayName: "Mica Velasco",
    city: "Quezon City",
    province: "Metro Manila",
    programName: "Quezon City Athletics Pilot",
    schoolOrTeam: "Novaliches throws and jumps unit",
    clubId: "club-manila-striders",
    attendanceRate: 86,
    qualificationStatus: "Needs one more verified festival result",
    verificationBadges: [
      { label: "Payment fallback", detail: "LGU subsidy is partial until the next batch is approved.", tone: "warning" },
      { label: "School verified", detail: "Participant is active in the school athletics list.", tone: "support" },
      { label: "Roster held", detail: "Participant remains active while family follow-up is open.", tone: "accent" },
    ],
    guardianContactState: "Guardian follow-up scheduled for fallback payment",
    birthDate: "2010-12-03",
    lguId: "quezon-city",
    paymentCoverage: "Needs individual fallback",
    paymentNote: "Needs individual payment if the second LGU budget tranche is delayed.",
    teamLeader: "Coach Mark Villanueva",
    nextCheckpoint: "Guardian payment call on May 9",
  },
  {
    id: "participant-kayden-torres",
    slug: "kayden-torres",
    displayName: "Kayden Torres",
    city: "Cebu City",
    province: "Cebu",
    programName: "Cebu City Track Revival",
    schoolOrTeam: "Abellana district youth middle-distance unit",
    clubId: "club-cebu-distance-project",
    attendanceRate: 93,
    qualificationStatus: "Qualified for Visayas youth finals",
    verificationBadges: [
      { label: "LGU-funded", detail: "Covered through the Cebu City athletics revival pilot.", tone: "accent" },
      { label: "School verified", detail: "School athletics coordinator approved travel eligibility.", tone: "support" },
      { label: "Team leader active", detail: "Weekly check-ins are current.", tone: "support" },
    ],
    guardianContactState: "Guardian confirmed and travel-ready",
    birthDate: "2011-02-16",
    lguId: "cebu-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Travel and registration included in the current LGU batch.",
    teamLeader: "Coach Liza Tan",
    nextCheckpoint: "Visayas finals roster freeze on May 15",
  },
  {
    id: "participant-alyssa-go",
    slug: "alyssa-go",
    displayName: "Alyssa Go",
    city: "Cebu City",
    province: "Cebu",
    programName: "Cebu City Track Revival",
    schoolOrTeam: "Talisay relay pathway group",
    clubId: "club-cebu-distance-project",
    attendanceRate: 88,
    qualificationStatus: "Relay pool reserve for Visayas youth finals",
    verificationBadges: [
      { label: "LGU-funded", detail: "Seat funded in the current relay development cluster.", tone: "accent" },
      { label: "Guardian confirmed", detail: "Consent and contact verified.", tone: "support" },
      { label: "Camp review open", detail: "Needs final relay-pool confirmation next week.", tone: "warning" },
    ],
    guardianContactState: "Guardian confirmed; waiting on relay allocation",
    birthDate: "2012-09-28",
    lguId: "cebu-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Covered now, but relay travel finalization is still open.",
    teamLeader: "Coach Joel Mercado",
    nextCheckpoint: "Relay pool review on May 11",
  },
  {
    id: "participant-ian-culaba",
    slug: "ian-culaba",
    displayName: "Ian Culaba",
    city: "Cebu City",
    province: "Cebu",
    programName: "Cebu City Track Revival",
    schoolOrTeam: "South district endurance unit",
    clubId: "club-cebu-distance-project",
    attendanceRate: 90,
    qualificationStatus: "Qualified for city development camp",
    verificationBadges: [
      { label: "LGU-funded", detail: "Current camp slot covered by the pilot roster.", tone: "accent" },
      { label: "Attendance verified", detail: "Above the pilot’s consistency threshold.", tone: "support" },
      { label: "Club linked", detail: "Assigned to Cebu Distance Project follow-up support.", tone: "support" },
    ],
    guardianContactState: "Guardian confirmed and club linked",
    birthDate: "2010-06-05",
    lguId: "cebu-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Covered through camp and club follow-up budget.",
    teamLeader: "Coach Liza Tan",
    nextCheckpoint: "Camp selection update on May 19",
  },
  {
    id: "participant-lia-mercado",
    slug: "lia-mercado",
    displayName: "Lia Mercado",
    city: "Cebu City",
    province: "Cebu",
    programName: "Cebu City Track Revival",
    schoolOrTeam: "Cebu City schools sprint cluster",
    clubId: "club-cebu-distance-project",
    attendanceRate: 84,
    qualificationStatus: "Needs family confirmation before next qualifier",
    verificationBadges: [
      { label: "Payment fallback", detail: "Still waiting on LGU confirmation for the second intake wave.", tone: "warning" },
      { label: "School verified", detail: "School-based participation is active and confirmed.", tone: "support" },
      { label: "Roster protected", detail: "Participant stays in the pilot while family follow-up continues.", tone: "accent" },
    ],
    guardianContactState: "Guardian callback requested for fallback payment",
    birthDate: "2011-11-10",
    lguId: "cebu-city",
    paymentCoverage: "Needs individual fallback",
    paymentNote: "Needs a fallback payment path if the next LGU wave is not approved in time.",
    teamLeader: "Coach Joel Mercado",
    nextCheckpoint: "Guardian callback on May 8",
  },
  {
    id: "participant-miguel-layug",
    slug: "miguel-layug",
    displayName: "Miguel Layug",
    city: "Davao City",
    province: "Davao del Sur",
    programName: "Davao City Grassroots Field Pilot",
    schoolOrTeam: "Davao central jumps pipeline",
    clubId: "club-davao-field-jumps",
    attendanceRate: 95,
    qualificationStatus: "Qualified for Mindanao youth field festival",
    verificationBadges: [
      { label: "LGU-funded", detail: "Covered under the city’s grassroots field-events budget.", tone: "accent" },
      { label: "Facility verified", detail: "Session logs confirmed through the city oval coordinator.", tone: "support" },
      { label: "Guardian confirmed", detail: "Guardian cleared for travel and festival participation.", tone: "support" },
    ],
    guardianContactState: "Guardian confirmed and travel-ready",
    birthDate: "2010-07-01",
    lguId: "davao-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Festival participation is fully funded in the current pilot wave.",
    teamLeader: "Coach Ramon Castillo",
    nextCheckpoint: "Festival roster review on May 14",
  },
  {
    id: "participant-danica-castillo",
    slug: "danica-castillo",
    displayName: "Danica Castillo",
    city: "Davao City",
    province: "Davao del Sur",
    programName: "Davao City Grassroots Field Pilot",
    schoolOrTeam: "Mintal throws development unit",
    clubId: "club-davao-field-jumps",
    attendanceRate: 92,
    qualificationStatus: "Qualified for city field-events camp",
    verificationBadges: [
      { label: "LGU-funded", detail: "Camp slot funded in the city grassroots field pilot.", tone: "accent" },
      { label: "Team leader active", detail: "Coach has logged three consecutive weekly updates.", tone: "support" },
      { label: "School verified", detail: "School athletics list confirms active participation.", tone: "support" },
    ],
    guardianContactState: "Guardian confirmed",
    birthDate: "2011-03-19",
    lguId: "davao-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Camp fees and transport are currently covered.",
    teamLeader: "Coach Ramon Castillo",
    nextCheckpoint: "Camp onboarding on May 17",
  },
  {
    id: "participant-pauline-soriano",
    slug: "pauline-soriano",
    displayName: "Pauline Soriano",
    city: "Davao City",
    province: "Davao del Sur",
    programName: "Davao City Grassroots Field Pilot",
    schoolOrTeam: "Buhangin school athletics cluster",
    clubId: "club-davao-field-jumps",
    attendanceRate: 87,
    qualificationStatus: "Needs one more city verification result",
    verificationBadges: [
      { label: "LGU-funded", detail: "Main program fees are covered in this phase.", tone: "accent" },
      { label: "Guardian confirmed", detail: "Guardian is available for rapid follow-up.", tone: "support" },
      { label: "Travel note open", detail: "Travel support still needs final confirmation.", tone: "warning" },
    ],
    guardianContactState: "Guardian confirmed; travel note pending",
    birthDate: "2010-09-09",
    lguId: "davao-city",
    paymentCoverage: "LGU-covered",
    paymentNote: "Program fees are covered, but transport remains under review.",
    teamLeader: "Coach Ramon Castillo",
    nextCheckpoint: "City verification meet on May 22",
  },
  {
    id: "participant-zed-reyes",
    slug: "zed-reyes",
    displayName: "Zed Reyes",
    city: "Davao City",
    province: "Davao del Sur",
    programName: "Davao City Grassroots Field Pilot",
    schoolOrTeam: "Toril multisport transfer cohort",
    clubId: "club-davao-field-jumps",
    attendanceRate: 82,
    qualificationStatus: "Awaiting family confirmation for continued participation",
    verificationBadges: [
      { label: "Payment fallback", detail: "Needs family payment fallback if the next LGU batch slips.", tone: "warning" },
      { label: "Club linked", detail: "Club still holds a development slot for the participant.", tone: "support" },
      { label: "Roster protected", detail: "Participant remains visible to the LGU during follow-up.", tone: "accent" },
    ],
    guardianContactState: "Guardian callback needed this week",
    birthDate: "2012-01-24",
    lguId: "davao-city",
    paymentCoverage: "Needs individual fallback",
    paymentNote: "Needs individual fallback if the city’s second funding batch is delayed.",
    teamLeader: "Coach Ramon Castillo",
    nextCheckpoint: "Family follow-up on May 7",
  },
]

export const lguDashboardModels: LguDashboardModel[] = [
  {
    id: "lgu-quezon-city",
    slug: "quezon-city",
    name: "Quezon City",
    region: "National Capital Region",
    summary:
      "Primary pilot-funder story focused on youth participation, club support, and simple proof that local spend is creating visible athletic activity.",
    heroNote:
      "Quezon City is the strongest pilot-funder narrative in this phase: visible participation, one club partner, school leads already checking in, and clear proof of where funding lands.",
    metrics: [
      { label: "Active participants", value: "148", note: "Four spotlight records shown below; the dashboard story stays larger than the seed set." },
      { label: "Active teams", value: "12", note: "School and district units reporting this month." },
      { label: "Club partners", value: "1", note: "Manila Striders is the current operational club partner." },
      { label: "Qualified athletes", value: "36", note: "Participants already cleared for the next youth checkpoint." },
    ],
    spendProof: [
      {
        title: "Registration and roster continuity",
        summary: "Funding keeps young athletes registered in one visible roster rather than scattered across school and club lists.",
        proof: "148 active participant records with funding state, team leader, and next checkpoint visible in one flow.",
      },
      {
        title: "Club and school coordination",
        summary: "LGU spend is buying an actual operating loop between school leads and the club partner.",
        proof: "12 active teams, 2 live school leads, and Manila Striders tied into follow-up support.",
      },
      {
        title: "Qualification visibility",
        summary: "Funding is producing movement toward measurable checkpoints without exposing private youth performance details publicly.",
        proof: "36 qualified athletes and 18 more one meet away from the next city or NCR milestone.",
      },
    ],
    paymentCoverage: [
      { label: "LGU-covered", value: "112", note: "Primary roster fully covered in this pilot wave." },
      { label: "Needs fallback", value: "22", note: "Participants still in roster but waiting on family or second-wave confirmation." },
      { label: "Travel pending", value: "14", note: "Program fees covered; transport or festival support still open." },
    ],
    teamLeaders: [
      { name: "Coach Ana Reyes", role: "City sprint lead", coverage: "6 teams", lastSync: "Updated today" },
      { name: "Coach Mark Villanueva", role: "District relay coordinator", coverage: "6 teams", lastSync: "Updated yesterday" },
    ],
    participantIds: [
      "participant-aira-mendoza",
      "participant-jonah-ramos",
      "participant-sam-bautista",
      "participant-mica-velasco",
    ],
    clubIds: ["club-manila-striders"],
  },
  {
    id: "lgu-cebu-city",
    slug: "cebu-city",
    name: "Cebu City",
    region: "Central Visayas",
    summary:
      "Secondary pilot view showing stronger school-to-club continuity for middle-distance and relay development inside a city-led rollout.",
    heroNote:
      "Cebu City strengthens the rollout story: one club partner, multiple school clusters, and a clear development-camp pathway before full provincial expansion.",
    metrics: [
      { label: "Active participants", value: "102", note: "Four spotlight records shown below for the pilot narrative." },
      { label: "Active teams", value: "9", note: "School and district clusters currently live." },
      { label: "Club partners", value: "1", note: "Cebu Distance Project is the operational club partner." },
      { label: "Qualified athletes", value: "28", note: "Already positioned for city or Visayas checkpoints." },
    ],
    spendProof: [
      {
        title: "City-to-club handoff",
        summary: "The pilot shows how city-funded enrollment turns into real follow-up with a club partner instead of ending at registration.",
        proof: "Cebu Distance Project is linked directly to youth follow-up and camp readiness.",
      },
      {
        title: "Camp and relay readiness",
        summary: "Funding is buying more than participation; it is also building a progression into camps and relay pools.",
        proof: "28 qualified athletes, 15 relay-pool candidates, and 9 active school clusters.",
      },
      {
        title: "Fallback handling without roster loss",
        summary: "Youth participants can stay visible in the system even when some families need a fallback path.",
        proof: "The dashboard separates covered versus fallback states while keeping athletes inside the same city roster.",
      },
    ],
    paymentCoverage: [
      { label: "LGU-covered", value: "76", note: "Current pilot coverage for the first batch." },
      { label: "Needs fallback", value: "18", note: "Families requiring manual follow-up or delayed city approval." },
      { label: "Camp support pending", value: "8", note: "Program seats assigned, logistics still open." },
    ],
    teamLeaders: [
      { name: "Coach Liza Tan", role: "City middle-distance lead", coverage: "5 teams", lastSync: "Updated today" },
      { name: "Coach Joel Mercado", role: "Relay and endurance coordinator", coverage: "4 teams", lastSync: "Updated yesterday" },
    ],
    participantIds: [
      "participant-kayden-torres",
      "participant-alyssa-go",
      "participant-ian-culaba",
      "participant-lia-mercado",
    ],
    clubIds: ["club-cebu-distance-project"],
  },
  {
    id: "lgu-davao-city",
    slug: "davao-city",
    name: "Davao City",
    region: "Davao Region",
    summary:
      "Secondary pilot view centered on field events, city festivals, and a specialist club partner that can absorb grassroots talent quickly.",
    heroNote:
      "Davao City is the strongest field-events proof point: specialist club support, strong attendance, and a clear argument for why city funding should keep flowing.",
    metrics: [
      { label: "Active participants", value: "84", note: "Four spotlight records shown below from the city field-events pilot." },
      { label: "Active teams", value: "7", note: "School and district field-event groups live right now." },
      { label: "Club partners", value: "1", note: "Davao Field & Jumps Academy is already absorbing talent." },
      { label: "Qualified athletes", value: "21", note: "Festival and camp checkpoints already reached." },
    ],
    spendProof: [
      {
        title: "Specialist pathway support",
        summary: "Funding is connected to a real field-events club partner instead of a generic participation story.",
        proof: "The city roster flows directly into Davao Field & Jumps Academy follow-up support.",
      },
      {
        title: "Festival and camp visibility",
        summary: "The LGU can see which athletes are ready for the next festival or camp without publishing private youth metrics.",
        proof: "21 qualified athletes plus active checkpoints and team-leader reporting built into one dashboard.",
      },
      {
        title: "Fallback handling for at-risk families",
        summary: "Participants do not disappear when funding timing or family payment becomes uncertain.",
        proof: "The roster keeps fallback athletes visible and tied to club support while follow-up remains open.",
      },
    ],
    paymentCoverage: [
      { label: "LGU-covered", value: "61", note: "Main field-events cohort currently covered." },
      { label: "Needs fallback", value: "14", note: "Families needing second-wave city approval or manual fallback." },
      { label: "Travel pending", value: "9", note: "Festival support is active but not fully confirmed yet." },
    ],
    teamLeaders: [
      { name: "Coach Ramon Castillo", role: "City field-events lead", coverage: "5 teams", lastSync: "Updated today" },
      { name: "Teacher Pauline Sunga", role: "School cluster coordinator", coverage: "2 teams", lastSync: "Updated yesterday" },
    ],
    participantIds: [
      "participant-miguel-layug",
      "participant-danica-castillo",
      "participant-pauline-soriano",
      "participant-zed-reyes",
    ],
    clubIds: ["club-davao-field-jumps"],
  },
]

export const clubDashboardModels: ClubDashboardModel[] = [
  {
    clubId: "club-manila-striders",
    slug: "manila-striders-track-club",
    heroNote:
      "This operator view combines the public trust story of Manila Striders with the pilot-only roster and compliance details an LGU partner actually needs to see.",
    metrics: [
      { label: "Youth participants linked", value: "4", note: "Current Quezon City spotlight roster tied to this club." },
      { label: "Adult athlete profiles", value: String(getClubAthletes("club-manila-striders").length), note: "Public athletes still live in the discovery layer." },
      { label: "Coach affiliations", value: String(getClubCoaches("club-manila-striders").length), note: "Visible coach roster for pilot coordination." },
      { label: "Pending actions", value: "3", note: "Two youth follow-ups and one compliance renewal prep item." },
    ],
    complianceRows: [
      { label: "Philippine Athletics recognition", status: "On track", detail: "Club recognition is active and visible through Dec 2026." },
      { label: "SafeSport readiness", status: "On track", detail: "Staff are cleared; renewal prep begins next month." },
      { label: "Guardian contact completeness", status: "Needs attention", detail: "One fallback participant still needs family payment confirmation." },
    ],
    renewalRows: [
      { label: "Club recognition", due: "Dec 2026", status: "Current" },
      { label: "SafeSport refresh", due: "Jun 2026", status: "Upcoming" },
      { label: "LGU pilot review", due: "May 2026", status: "Upcoming" },
    ],
    paymentCoverage: [
      { label: "LGU-covered youth", value: "3", note: "Three spotlight youth participants are fully covered." },
      { label: "Fallback youth", value: "1", note: "One participant needs family follow-up if city funding slips." },
      { label: "Adult public profiles", value: "4", note: "Adult athlete discovery remains public and separate from youth records." },
    ],
    pendingActions: [
      "Confirm fallback payment path for Mica Velasco before the next qualifier.",
      "Prepare SafeSport refresh packet for June renewal.",
      "Keep Quezon City team-leader updates on a weekly cadence during the pilot.",
    ],
    participantIds: [
      "participant-aira-mendoza",
      "participant-jonah-ramos",
      "participant-sam-bautista",
      "participant-mica-velasco",
    ],
    adultSpotlightIds: ["athlete-lauren-hoffman", "athlete-jc-dela-cruz", "athlete-mia-santos"],
  },
  {
    clubId: "club-cebu-distance-project",
    slug: "cebu-distance-project",
    heroNote:
      "Cebu Distance Project is the cleanest school-to-club handoff example in the current pilot data: it ties city funding to camps, relay pools, and adult athlete continuity.",
    metrics: [
      { label: "Youth participants linked", value: "4", note: "Current Cebu City spotlight roster." },
      { label: "Adult athlete profiles", value: String(getClubAthletes("club-cebu-distance-project").length), note: "Adult public athletes remain available through the discovery layer." },
      { label: "Coach affiliations", value: String(getClubCoaches("club-cebu-distance-project").length), note: "Two coaches handling the current pilot scope." },
      { label: "Pending actions", value: "2", note: "One fallback family follow-up and one relay allocation review." },
    ],
    complianceRows: [
      { label: "Philippine Athletics recognition", status: "On track", detail: "Recognition remains active through Dec 2026." },
      { label: "SafeSport readiness", status: "On track", detail: "SafeSport compliance is current and visible in the club profile." },
      { label: "Fallback participant follow-up", status: "Needs attention", detail: "One family needs a callback if city funding timing slips." },
    ],
    renewalRows: [
      { label: "Club recognition", due: "Dec 2026", status: "Current" },
      { label: "SafeSport refresh", due: "Jun 2026", status: "Upcoming" },
      { label: "Relay pool review", due: "May 2026", status: "Upcoming" },
    ],
    paymentCoverage: [
      { label: "LGU-covered youth", value: "3", note: "Three spotlight youth participants are fully covered." },
      { label: "Fallback youth", value: "1", note: "One participant needs individual fallback if the next city wave slips." },
      { label: "Adult public profiles", value: "4", note: "Adult and elite visibility continues through the public layer." },
    ],
    pendingActions: [
      "Finish relay allocation review for Alyssa Go next week.",
      "Close fallback payment follow-up for Lia Mercado.",
    ],
    participantIds: [
      "participant-kayden-torres",
      "participant-alyssa-go",
      "participant-ian-culaba",
      "participant-lia-mercado",
    ],
    adultSpotlightIds: ["athlete-erika-villarin", "athlete-carlo-mendoza", "athlete-bernalyn-bejoy"],
  },
  {
    clubId: "club-davao-field-jumps",
    slug: "davao-field-and-jumps-academy",
    heroNote:
      "The Davao operator view is the best field-events case for the pilot: specialist development, visible attendance, and a very clear club-follow-up story.",
    metrics: [
      { label: "Youth participants linked", value: "4", note: "Current Davao City spotlight roster." },
      { label: "Adult athlete profiles", value: String(getClubAthletes("club-davao-field-jumps").length), note: "Adult public athletes remain in the discovery layer." },
      { label: "Coach affiliations", value: String(getClubCoaches("club-davao-field-jumps").length), note: "Specialist field-events staffing is already visible." },
      { label: "Pending actions", value: "3", note: "Two travel reviews and one fallback family follow-up remain open." },
    ],
    complianceRows: [
      { label: "Philippine Athletics recognition", status: "On track", detail: "Recognition remains current through Dec 2026." },
      { label: "SafeSport readiness", status: "On track", detail: "SafeSport compliance is current and still visible publicly." },
      { label: "Family follow-up", status: "Needs attention", detail: "One athlete needs fallback confirmation to stay fully covered." },
    ],
    renewalRows: [
      { label: "Club recognition", due: "Dec 2026", status: "Current" },
      { label: "SafeSport refresh", due: "Jun 2026", status: "Upcoming" },
      { label: "Festival travel review", due: "May 2026", status: "Upcoming" },
    ],
    paymentCoverage: [
      { label: "LGU-covered youth", value: "3", note: "Three spotlight youth participants are fully funded." },
      { label: "Fallback youth", value: "1", note: "One participant needs family fallback if the next city wave slips." },
      { label: "Adult public profiles", value: "4", note: "Adult field-events athletes remain public and shareable." },
    ],
    pendingActions: [
      "Confirm travel support for Pauline Soriano before the next city verification meet.",
      "Close fallback family follow-up for Zed Reyes.",
      "Prepare the next city field festival roster handoff.",
    ],
    participantIds: [
      "participant-miguel-layug",
      "participant-danica-castillo",
      "participant-pauline-soriano",
      "participant-zed-reyes",
    ],
    adultSpotlightIds: ["athlete-rico-navarro", "athlete-john-rey-bautista", "athlete-janry-ubas"],
  },
]

export const defaultPilotLguId = "quezon-city"

export const getPilotLguDashboard = (idOrSlug?: string) =>
  idOrSlug
    ? lguDashboardModels.find((entry) => matchesIdOrSlug(entry, idOrSlug))
    : lguDashboardModels.find((entry) => entry.slug === defaultPilotLguId) ?? lguDashboardModels[0]

export const getAllPilotLguDashboards = () => lguDashboardModels

export const getYouthParticipantProfile = (idOrSlug: string) =>
  pilotYouthParticipants.find((participant) => matchesIdOrSlug(participant, idOrSlug))

export const getYouthParticipantsForLgu = (lguId: string) =>
  pilotYouthParticipants.filter((participant) => participant.lguId === lguId)

export const getClubDashboard = (idOrSlug: string) =>
  clubDashboardModels.find(
    (dashboard) =>
      matchesIdOrSlug({ id: dashboard.clubId, slug: dashboard.slug }, idOrSlug),
  )

export const getClubDashboardOrThrow = (idOrSlug: string) => {
  const dashboard = getClubDashboard(idOrSlug)
  if (!dashboard) return undefined

  const club = getClubByIdOrStub(dashboard.clubId)
  const adultAthletes = dashboard.adultSpotlightIds
    .map((id) => athleteSummaries.find((athlete) => athlete.id === id))
    .filter(isDefined)

  return {
    ...dashboard,
    club,
    publicRoster: getClubAthletes(dashboard.clubId),
    coaches: getClubCoaches(dashboard.clubId),
    youthParticipants: dashboard.participantIds
      .map((id) => getYouthParticipantProfile(id))
      .filter(isDefined),
    adultAthletes,
  }
}

export const getPilotLguDashboardOrThrow = (idOrSlug: string) => {
  const dashboard = getPilotLguDashboard(idOrSlug)
  if (!dashboard) return undefined
  return {
    ...dashboard,
    participants: dashboard.participantIds
      .map((participantId) => getYouthParticipantProfile(participantId))
      .filter(isDefined),
    clubs: dashboard.clubIds.map((clubId) => getClubByIdOrStub(clubId)),
  }
}
