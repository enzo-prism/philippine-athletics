export type ProductUpdateCategory =
  | "Experience"
  | "Branding"
  | "Monetization"
  | "Data"
  | "Competition"
  | "Membership"
  | "Reliability"
  | "Tooling"
  | "Components"
  | "Styling"

export type ProductUpdateEntry = {
  id: string
  date: string
  title: string
  category: ProductUpdateCategory[]
  summary: string
  highlights: string[]
  whyItMatters: string
}

export const productUpdates: ProductUpdateEntry[] = [
  {
    id: "2026-02-19-changelog-commit-feed-and-sync-hardening",
    date: "2026-02-19",
    title: "Changelog commit feed and sync hardening",
    category: ["Tooling", "Components", "Data"],
    summary:
      "Restored dual-mode changelog browsing with engineering commit cards and added automated checks so commit-feed data cannot drift silently.",
    highlights: [
      "Reintroduced commit-mode cards so users can explore every commit with summary, tags, and impact context.",
      "Updated commit log sync verification so stale snapshot data is detected during build/lint/push checks.",
      "Added a deterministic generator check and explicit update workflow (`pnpm data:commits`) to reduce manual drift.",
    ],
    whyItMatters:
      "Maintaining a trustworthy changelog improves release confidence and makes engineering history visible to the whole team.",
  },
  {
    id: "2026-02-19-shadcn-design-system-refresh",
    date: "2026-02-19",
    title: "Shadcn UI design-system migration and page cohesion refresh",
    category: ["Components", "Tooling", "Styling", "Experience"],
    summary: "Refreshed core UI primitives to the unified Radix baseline and aligned major screens to shared page-level utility patterns.",
    highlights: [
      "Consolidated UI dependencies from multiple `@radix-ui/react-*` packages into `radix-ui` for consistent imports and reduced package churn.",
      "Updated in-scope primitives (`avatar`, `badge`, `button`, `label`, `select`, `separator`, `sheet`, `tabs`, `dropdown-menu`) and direction-safe dropdown/select behavior with inline-side classes.",
      "Introduced reusable `app/globals.css` utility sections and applied them to homepage, athletes, search, and profile routes for consistent spacing and card rhythm.",
      "Synced repo status and changelog documentation entries so the design-system baseline is recorded clearly for the next sprint handoff.",
    ],
    whyItMatters: "A single, coherent UI baseline reduces visual drift and makes future screen work faster, safer, and easier to keep consistent.",
  },
  {
    id: "2026-02-10-membership-homepage-messaging",
    date: "2026-02-10",
    title: "Membership and homepage messaging refinement",
    category: ["Membership", "Experience"],
    summary: "Clarified conversion messaging across membership and homepage entry points.",
    highlights: [
      "Refreshed membership and benefits page copy to better explain package value, eligibility, and expected outcomes.",
      "Updated displayed membership pricing details and renamed the primary CTA from “Join” to “Register” for clearer action language.",
      "Revised homepage hero headline and supporting copy to improve first-time visitor comprehension.",
    ],
    whyItMatters: "Improves message clarity so users understand offerings faster and are more likely to take the intended next step.",
  },
  {
    id: "2026-02-10-homepage-ads-maps",
    date: "2026-02-10",
    title: "Homepage ad creative + club map reliability improvements",
    category: ["Monetization", "Reliability", "Experience"],
    summary: "Improved demo realism with visual ad creatives and fixed map embed behavior.",
    highlights: [
      "Added banner-style ad creatives on the homepage to make sponsor inventory feel production-like instead of placeholder-only.",
      "Fixed club practice map rendering by switching to embeddable Google Maps URLs on club profile pages.",
      "Improved overall demo trust by ensuring monetization surfaces and location details both look complete and function correctly.",
    ],
    whyItMatters: "Strengthens presentation quality while removing a visible reliability issue in core club profile content.",
  },
  {
    id: "2026-02-10-ad-placements",
    date: "2026-02-10",
    title: "Expanded demo display ad placements",
    category: ["Monetization", "Experience"],
    summary: "Rolled out more ad placements across key journeys using reusable slot patterns.",
    highlights: [
      "Added additional leaderboard, MREC, and mobile-style ad slots across homepage, competitions, events, membership, and recognition pages.",
      "Kept ad placement styling consistent by reusing standardized ad components instead of one-off markup.",
    ],
    whyItMatters: "Makes sponsor inventory easier to demo and validates ad layouts in realistic page contexts.",
  },
  {
    id: "2026-02-10-homepage-redesign",
    date: "2026-02-10",
    title: "Homepage visual redesign with Unicorn Studio",
    category: ["Experience", "Branding"],
    summary: "Shifted the homepage to a visual-first experience with clearer, quicker navigation choices.",
    highlights: [
      "Rebuilt the homepage layout to prioritize visual impact and reduce dense introductory copy.",
      "Integrated the Unicorn Studio WebGL hero scene (`TBeVNSgsX813yn7xC6FZ`) for a modern animated first impression.",
      "Simplified primary actions into concise cards and calls to action for faster pathfinding.",
    ],
    whyItMatters: "Improves first-impression quality and helps users discover core sections with less friction.",
  },
  {
    id: "2026-02-10-logo-collection",
    date: "2026-02-10",
    title: "Official logo collection integration",
    category: ["Branding", "Reliability"],
    summary: "Replaced placeholder brand marks with a centralized, reusable logo catalog.",
    highlights: [
      "Added a curated Cloudinary-backed logo set for federation and program branding assets.",
      "Replaced placeholder text badges with official logos in the homepage header, membership section, and footer.",
      "Updated navigation branding to consistently surface the official visual identity across the app.",
    ],
    whyItMatters: "Strengthens trust and brand consistency while reducing repeated logo setup work.",
  },
  {
    id: "2026-02-05-membership-sponsor-refresh",
    date: "2026-02-05",
    title: "Membership + sponsor experience refresh",
    category: ["Membership", "Monetization", "Experience"],
    summary: "Refined sponsor storytelling and member conversion paths across homepage and dedicated views.",
    highlights: [
      "Reworked homepage sponsor strip, member messaging, and featured athlete callouts around PATAFA positioning.",
      "Added tier-focused membership copy, CTAs, and demo badge previews for both member and member-club scenarios.",
      "Introduced a sanctioned events calendar preview plus a dedicated events page inspired by Sport:80 patterns.",
      "Expanded footer sponsor taxonomy (official sponsor, supplier, technology, medical network) for clearer partner roles.",
    ],
    whyItMatters: "Improves sponsor visibility and makes membership value propositions easier to understand and act on.",
  },
  {
    id: "2026-02-03-results-intake",
    date: "2026-02-03",
    title: "Results intake portal (demo)",
    category: ["Data", "Competition", "Tooling"],
    summary: "Delivered a full front-end data intake flow to simulate official meet result publishing.",
    highlights: [
      "Implemented CSV/TSV upload, column mapping, validation checks, warnings, and review controls.",
      "Added local-only submission persistence and downloadable JSON payload generation.",
      "Built impact previews for PB/SB movement, ranking changes, and downstream event effects.",
      "Added sandbox rendering previews for competition, athlete, and rankings pages.",
      "Added Data Portal navigation access plus project documentation in `docs/research/results-intake.md` and `docs/STATUS.md`.",
      "Expanded changelog usability with plain-language copy, weekly digest mode, and “why it matters” context.",
      "Added Playwright design-regression coverage and a helper for first-run browser/dependency setup.",
    ],
    whyItMatters: "Demonstrates a realistic data-operations workflow and improves confidence in data-to-UI output quality.",
  },
  {
    id: "2026-02-03-competition-polish",
    date: "2026-02-03",
    title: "Competition polish + sponsor roster fixes",
    category: ["Competition", "Data", "Reliability"],
    summary: "Corrected roster linking and improved event-state clarity for upcoming vs completed meets.",
    highlights: [
      "Fixed sponsor roster IDs so sponsor pages resolve to real athlete, coach, and club profiles.",
      "Added 2025 SEA Games demo result and medal data, and marked the event as completed.",
      "Suppressed premature medal/result blocks for upcoming competitions and replaced them with pending-state messaging.",
    ],
    whyItMatters: "Prevents broken profile links and avoids misleading placeholder results in competition views.",
  },
  {
    id: "2026-01-31-flow-foundation",
    date: "2026-01-31",
    title: "Demo flow foundation + product readiness",
    category: ["Experience", "Competition", "Data", "Reliability"],
    summary: "Established core discovery journeys and filled major functional gaps for demo readiness.",
    highlights: [
      "Introduced `DemoFlows.md` and refreshed README guidance around core demo scenarios.",
      "Improved homepage discoverability with a streamlined hero and global search entry point.",
      "Added Rankings and Competitions to top-level navigation and browse tiles.",
      "Implemented global search across athletes, coaches, and clubs with `/search` results routing.",
      "Built rankings filters, Top 3 presentation, best-of-year logic, and profile deep-linking.",
      "Expanded competition result experiences with event filtering and PB/SB callouts.",
      "Added Recognition pages and badge metadata (issuer + validity) for trust context.",
      "Added data source labels and fixed `/search` build behavior via Suspense handling.",
    ],
    whyItMatters: "Created a coherent end-to-end demo journey while reducing reliability risks in core navigation and search.",
  },
  {
    id: "2025-12-19-athlete-data",
    date: "2025-12-19",
    title: "Deeper athlete sample data",
    category: ["Data", "Experience"],
    summary: "Expanded athlete profile sample data to improve realism and profile depth.",
    highlights: ["Enriched athlete records to better represent full profile browsing scenarios."],
    whyItMatters: "Makes profile pages feel more complete and supports more representative demo walkthroughs.",
  },
  {
    id: "2025-12-16-ui-polish",
    date: "2025-12-16",
    title: "UI system + profile polish",
    category: ["Experience", "Reliability"],
    summary: "Standardized UI foundations and refined profile/authentication presentation.",
    highlights: [
      "Migrated key interface elements to shadcn primitives and Lucide iconography.",
      "Simplified athlete filtering and improved mobile navigation ergonomics.",
      "Added avatar placeholders, refined homepage category cards, and simplified how-to guidance.",
      "Added social sign-up UI patterns and reduced complexity in auth page flows.",
    ],
    whyItMatters: "Improves consistency, maintainability, and usability across high-traffic surfaces.",
  },
  {
    id: "2025-12-08-clubs-badges-hero",
    date: "2025-12-08",
    title: "Club experience + badges + hero motion",
    category: ["Experience", "Branding"],
    summary: "Enhanced club identity and homepage energy with richer visuals and recognition systems.",
    highlights: [
      "Added club avatar headshots and weekly training schedule context.",
      "Implemented coach and sponsor badge systems with custom icons.",
      "Added homepage hero animation and supporting visual assets in lower sections.",
    ],
    whyItMatters: "Makes club pages more informative and gives the product a stronger visual identity.",
  },
  {
    id: "2025-12-06-data-navigation",
    date: "2025-12-06",
    title: "Data model + club search + navigation refinements",
    category: ["Data", "Experience", "Reliability"],
    summary: "Replaced stub data and expanded search/navigation capabilities for clubs.",
    highlights: [
      "Swapped legacy placeholder data with structured athlete, coach, and club data models.",
      "Added club search, roster event details, contact modules, and practice map sections.",
      "Refined mobile bottom navigation and homepage hero messaging.",
      "Introduced a hero background video (later removed during 2026 simplification work).",
    ],
    whyItMatters: "Improved information architecture and laid groundwork for richer, more connected entity pages.",
  },
  {
    id: "2025-12-01-project-init",
    date: "2025-12-01",
    title: "Project initialized + athletics pages scaffolded",
    category: ["Tooling", "Data"],
    summary: "Bootstrapped the repository and shipped initial athletics page foundations.",
    highlights: [
      "Initialized repository structure and synced base application shell.",
      "Added core structured data and page scaffolding for athletes, clubs, coaches, and competitions.",
    ],
    whyItMatters: "Established the baseline architecture that all current app experiences build upon.",
  },
]

export const productUpdatesLastUpdated = productUpdates[0]?.date ?? ""
