export type MembershipPathwayId =
  | "lgu-sponsored-youth"
  | "individual-youth-fallback"
  | "club-operator"
  | "adult-elite-masters"

export type MembershipPathway = {
  id: MembershipPathwayId
  title: string
  audience: string
  summary: string
  highlights: string[]
  bestFor: string[]
  paymentStory: string
  profileVisibility: string
  ctaLabel: string
  ctaHref: string
  signupRoleLabel: string
  completionHref: string
  completionLabel: string
}

export const membershipPathways: MembershipPathway[] = [
  {
    id: "lgu-sponsored-youth",
    title: "LGU-sponsored youth",
    audience: "For LGUs, school leads, and team coordinators funding a local athletics cohort",
    summary:
      "Use this path when an LGU or school program is enrolling a group of young participants and needs clear proof of activity, coverage, and qualification progress.",
    highlights: [
      "Bulk onboarding story built for local governments and school-based pilots",
      "Youth-safe participant records focused on attendance, team placement, and qualification",
      "Dashboard view that connects registrations, active programs, and visible club support",
    ],
    bestFor: ["LGU pilot operators", "School athletics coordinators", "Province- or city-led youth rollout"],
    paymentStory: "LGU covers the primary participation cost and can see who is fully funded versus who needs follow-up.",
    profileVisibility: "Youth records stay private by default and surface only through pilot dashboards and guided flows.",
    ctaLabel: "Set up LGU flow",
    ctaHref: "/signup?pathway=lgu-sponsored-youth",
    signupRoleLabel: "LGU / School Lead",
    completionHref: "/dashboard/lgu/quezon-city?pilot=quezon-city&persona=lgu",
    completionLabel: "Open LGU dashboard",
  },
  {
    id: "individual-youth-fallback",
    title: "Individual youth fallback",
    audience: "For youth participants or parents joining when LGU coverage is partial or delayed",
    summary:
      "Use this path when a child is part of the pilot but still needs an individual confirmation or payment fallback rather than full LGU coverage.",
    highlights: [
      "Keeps the same youth-safe profile model as the LGU path",
      "Makes fallback payment state visible without exposing private performance data",
      "Preserves continuity from team enrollment into club and qualification tracking",
    ],
    bestFor: ["Parents and guardians", "Participants joining after the main LGU batch", "Manual follow-up enrollments"],
    paymentStory: "Shows a clear 'pay individually' fallback state while keeping the participant in the same pilot roster.",
    profileVisibility: "Participant pages show program, attendance, and qualification only; no PBs, ranks, or public birth dates.",
    ctaLabel: "Open youth fallback flow",
    ctaHref: "/signup?pathway=individual-youth-fallback",
    signupRoleLabel: "Youth Participant / Parent",
    completionHref:
      "/participants/aira-mendoza?pilot=quezon-city&club=club-manila-striders&persona=guardian",
    completionLabel: "Open youth participant view",
  },
  {
    id: "club-operator",
    title: "Club / coach operator",
    audience: "For club owners and coaches running a roster inside the pilot",
    summary:
      "Use this path when a club needs a read-only operations view of roster health, coach affiliations, compliance status, and youth-to-adult pathway coverage.",
    highlights: [
      "Operator dashboard for roster mix, youth coverage, and adult spotlights",
      "SafeSport, recognition, and renewal state made legible in one surface",
      "Direct links from club operations into youth participants and adult athlete profiles",
    ],
    bestFor: ["Club owners", "Head coaches", "Pilot partner clubs managing both youth and adult athletes"],
    paymentStory: "Shows how many athletes are LGU-covered, who needs fallback handling, and what the club is carrying operationally.",
    profileVisibility: "Club dashboards remain pilot-only while public club pages continue to serve discovery and trust.",
    ctaLabel: "Open operator flow",
    ctaHref: "/signup?pathway=club-operator",
    signupRoleLabel: "Club Owner / Coach",
    completionHref:
      "/dashboard/clubs/manila-striders-track-club?pilot=quezon-city&club=club-manila-striders&persona=club-owner",
    completionLabel: "Open club dashboard",
  },
  {
    id: "adult-elite-masters",
    title: "Adult / elite / masters athlete",
    audience: "For adult athletes who still need the public performance, rankings, and team-affiliation story",
    summary:
      "Use this path when the goal is public discovery, verified results, and pathway credibility for adult, elite, and masters athletes.",
    highlights: [
      "Keeps the current adult performance and ranking evidence surfaces intact",
      "Adds pathway-stage badges such as National Team, Developmental Team, and Masters",
      "Lets the public story coexist with the pilot dashboards without mixing youth records into search and rankings",
    ],
    bestFor: ["Adult competitors", "Elite athletes", "Masters athletes and veteran pathway examples"],
    paymentStory: "No payment UI is implemented in this phase; this path is about public athlete credibility and future-ready membership framing.",
    profileVisibility: "Adult profiles remain public and ranking-linked, using the existing competition-evidence engine.",
    ctaLabel: "Open athlete flow",
    ctaHref: "/signup?pathway=adult-elite-masters",
    signupRoleLabel: "Adult / Elite Athlete",
    completionHref: "/athletes/lauren-hoffman",
    completionLabel: "Open athlete profile",
  },
]

export const defaultMembershipPathwayId: MembershipPathwayId = "lgu-sponsored-youth"

export const getMembershipPathway = (id?: string) =>
  membershipPathways.find((pathway) => pathway.id === id) ??
  membershipPathways.find((pathway) => pathway.id === defaultMembershipPathwayId) ??
  membershipPathways[0]
