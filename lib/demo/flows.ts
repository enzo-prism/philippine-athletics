export type DemoAudienceId = "governance" | "institutions" | "lgus"

export type DemoStep = {
  title: string
  detail: string
}

export type DemoFlowConfig = {
  audienceId: DemoAudienceId
  label: string
  description: string
  entryRoute: string
  fallbackRoute: string
  allowedRoutePrefixes: string[]
  scriptSteps: DemoStep[]
}

export const DEMO_FLOW_COOKIE = "pa_demo_flow"

const commonAllowedRoutes = [
  "/",
  "/demo",
  "/demo/off-script",
  "/how-it-works",
]

export const demoFlowConfigs: Record<DemoAudienceId, DemoFlowConfig> = {
  governance: {
    audienceId: "governance",
    label: "Patafa / Philom Sports",
    description: "Governance, rankings trust, and athlete profile discovery.",
    entryRoute: "/demo/governance",
    fallbackRoute: "/demo/governance",
    allowedRoutePrefixes: [
      ...commonAllowedRoutes,
      "/demo/governance",
      "/athletes",
      "/search",
      "/rankings",
      "/clubs",
      "/coaches",
      "/competitions",
      "/recognition",
    ],
    scriptSteps: [
      {
        title: "Start with athlete search",
        detail: "Search one of the five prepared demo athletes and open their profile.",
      },
      {
        title: "Validate rankings evidence",
        detail: "Move to rankings and confirm profile-level evidence from competition results.",
      },
      {
        title: "Cross-link governance graph",
        detail: "Show how clubs, competitions, and recognition align inside one controlled system.",
      },
    ],
  },
  institutions: {
    audienceId: "institutions",
    label: "Department of Education / PSC / POC",
    description: "School enrollment, reporting, and performance pathway visibility.",
    entryRoute: "/demo/institutions",
    fallbackRoute: "/demo/institutions",
    allowedRoutePrefixes: [
      ...commonAllowedRoutes,
      "/demo/institutions",
      "/signup",
      "/membership",
      "/data-portal",
      "/changelog",
      "/search",
      "/athletes",
    ],
    scriptSteps: [
      {
        title: "Show enrollment and role pathways",
        detail: "Demonstrate structured sign-up and membership entry points for schools and programs.",
      },
      {
        title: "Demonstrate results reporting",
        detail: "Open Results Intake for CSV mapping, validation, and review narrative.",
      },
      {
        title: "Close with accountable reporting",
        detail: "Use changelog and profile/competition traceability as governance evidence.",
      },
    ],
  },
  lgus: {
    audienceId: "lgus",
    label: "LGUs",
    description: "Pilot-funder dashboard, youth pathway visibility, and club handoff proof.",
    entryRoute: "/demo/lgus",
    fallbackRoute: "/demo/lgus",
    allowedRoutePrefixes: [
      ...commonAllowedRoutes,
      "/demo/lgus",
      "/demo/mobile",
      "/dashboard",
      "/participants",
      "/signup",
      "/clubs",
      "/athletes",
      "/search",
      "/membership",
      "/events",
    ],
    scriptSteps: [
      {
        title: "Open the LGU pilot dashboard",
        detail: "Start on the pilot overview, then move into the selected city dashboard with funding, activity, and qualification proof.",
      },
      {
        title: "Follow a youth participant into the club layer",
        detail: "Open a youth-safe participant record, then show how the club-owner dashboard picks up the same roster and compliance story.",
      },
      {
        title: "Close on mobile and fallback coverage",
        detail: "Use the mobile demo and payment fallback UI to show how the pilot still works when LGU coverage is partial.",
      },
    ],
  },
}

export const allDemoFlows = Object.values(demoFlowConfigs)

const normalizePath = (pathname: string) =>
  pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

export const getDemoFlowConfig = (value: string | undefined) => {
  if (!value) return undefined
  if (value in demoFlowConfigs) return demoFlowConfigs[value as DemoAudienceId]
  return undefined
}

export const isRouteAllowedForFlow = (flow: DemoFlowConfig, pathname: string) => {
  const normalized = normalizePath(pathname)

  return flow.allowedRoutePrefixes.some((prefix) => {
    const normalizedPrefix = normalizePath(prefix)
    if (normalizedPrefix === "/") return normalized === "/"
    return normalized === normalizedPrefix || normalized.startsWith(`${normalizedPrefix}/`)
  })
}
