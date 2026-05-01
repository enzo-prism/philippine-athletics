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
    id: "2026-05-01-club-online-links",
    date: "2026-05-01",
    title: "Club online links",
    category: ["Experience", "Data", "Reliability"],
    summary:
      "Added first-class club website and social-link fields so external websites are no longer mislabeled as map links.",
    highlights: [
      "Added typed club website and social-link data fields for official websites, Instagram, Facebook, and future external channels.",
      "Updated the FilAm Sports profile with its official website and Instagram link in a dedicated Online section.",
      "Expanded club search and flow coverage so website/social profile data remains discoverable and verified.",
    ],
    whyItMatters:
      "Keeps club contact and discovery links cleanly separated from location data, making profile pages easier to scan and less misleading.",
  },
  {
    id: "2026-05-01-daniella-daynata-profile",
    date: "2026-05-01",
    title: "Daniella Daynata athlete profile",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Added a sourced Daniella Daynata athlete profile with FilAm Sports linkage, World Athletics throws evidence, Asian competition results, and a local profile image.",
    highlights: [
      "Added Daynata as a Philippine National Team / FilAm Sports throws athlete with discus, javelin, and shot put personal-best evidence.",
      "Preserved the public FilAm spelling as Daniella Daynata while documenting the World Athletics spelling Daniela DAYNATA in the source facts.",
      "Linked her to FilAm Sports and Ed Lasquete's club-operator relationship so the athlete, club, and coach views reflect the current public roster.",
    ],
    whyItMatters:
      "Expands the live athlete graph with a source-backed national-team throws profile while keeping name variants, club support, and result claims auditable.",
  },
  {
    id: "2026-05-01-bernalyn-bejoy-profile",
    date: "2026-05-01",
    title: "Bernalyn Bejoy athlete profile",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Added a sourced Bernalyn Bejoy athlete profile with FilAm Sports linkage, World Athletics evidence, SEA Games context, and a local profile image.",
    highlights: [
      "Added Bejoy as a Philippine National Team / FilAm Sports athlete with an 800m-focused profile, local headshot asset, facts, verification badges, and source links.",
      "Linked Bejoy to FilAm Sports and Ed Lasquete's club-operator relationship so she appears in the club and coach relationship graph.",
      "Separated her 2023 SEA Games 800m fourth-place result from the reported 2025 SEA Games 800m bronze so the record stays accurate.",
    ],
    whyItMatters:
      "Expands the live athlete record set with a deeply sourced national-team 800m athlete while keeping every club and medal claim auditable.",
  },
  {
    id: "2026-05-01-athlete-headshots",
    date: "2026-05-01",
    title: "Athlete headshots",
    category: ["Experience", "Branding", "Data"],
    summary:
      "Added supplied headshot photos for Lauren Hoffman and Yacine Guermali on their athlete profile pages.",
    highlights: [
      "Stored Lauren Hoffman and Yacine Guermali's supplied AVIF images as stable public athlete assets.",
      "Added a typed athlete headshot field so profile media is part of the durable athlete data model.",
      "Updated the core profile hero to support restrained institutional profile media without changing the directory-first app structure.",
    ],
    whyItMatters:
      "Makes the national-team athlete profiles feel more complete and trustworthy while keeping the visual treatment aligned with the Philippine Athletics operating-system design.",
  },
  {
    id: "2026-05-01-ed-lasquete-coach-profile",
    date: "2026-05-01",
    title: "Ed Lasquete coach profile",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Added Ed Lasquete as a sourced coach/operator profile tied to FilAm Sports as owner / co-founder and former Philippine national-team pole vaulter.",
    highlights: [
      "Added Ed Lasquete to the coach directory with FilAm Sports ownership/co-founder role, contact details, source links, and evidence notes.",
      "Documented his Philippine National Track and Field Team pole-vault background, 1992 Barcelona Olympic appearance, 5.0m national-record jump, and SEA Games pole-vault medal history.",
      "Updated FilAm Sports so Ed appears as the linked club coach-operator rather than only a contact person.",
    ],
    whyItMatters:
      "Connects the FilAm Sports club profile to its key operator and makes Ed's athlete-to-coach lineage visible in the same relationship graph as Lauren Hoffman and Yacine Guermali.",
  },
  {
    id: "2026-05-01-filam-sports-club-linkage",
    date: "2026-05-01",
    title: "FilAm Sports club linkage",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Added FilAm Sports as a sourced club/support-organization profile and linked Lauren Hoffman and Yacine Guermali while preserving their National Team status.",
    highlights: [
      "Added a FilAm Sports club record with mission, operating focus, contact people, public website link, and source evidence.",
      "Updated Lauren Hoffman and Yacine Guermali so their club is FilAm Sports while their pathway and team affiliation remain National Team / Philippine National Team.",
      "Expanded club detail pages with operating-focus and source-link sections so external support relationships can be audited in context.",
    ],
    whyItMatters:
      "Makes the app model more realistic: elite athletes can belong to a club/support organization and still represent the Philippine National Team without those relationships overwriting each other.",
  },
  {
    id: "2026-05-01-global-athletics-event-calendar",
    date: "2026-05-01",
    title: "Global athletics event calendar",
    category: ["Data", "Experience", "Competition", "Reliability"],
    summary:
      "Added a sourced 2026 global athletics calendar for the major World Athletics, Diamond League, Continental Tour, regional championship, and road-running events through November.",
    highlights: [
      "Added event records for World Relays, every 2026 Diamond League stop, remaining Continental Tour Gold meets, the Ultimate Championship, Copenhagen road worlds, World U20s, Commonwealth athletics, European Championships, and late-year World Marathon Majors.",
      "Expanded event profiles with tier labels, watch rationale, official source links, source confidence, and date-discrepancy notes including the Diamond League Doha June 19 correction.",
      "Upgraded the events directory with category filtering and flow coverage around World Relays and Diamond League event discovery.",
    ],
    whyItMatters:
      "Turns the Events surface into a useful global athletics watch calendar while keeping every date and category tied to auditable official or organizer-level evidence.",
  },
  {
    id: "2026-05-01-national-team-coach-profiles",
    date: "2026-05-01",
    title: "National team coach profiles",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Added sourced coach profiles for the publicly visible Philippine national-team coaching group with evidence confidence and source links.",
    highlights: [
      "Added coach records for Dario De Rosas, Jeoffrey Chua, Isidro Del Prado, Sean Guevarra, Emerson Obiena, Karl Francisco, Roselyn Hamero, Bonifacio Loraña, Saturnino Salazar, Eduardo Buenavista, and Djundi Biñas.",
      "Expanded coach profiles with profile facts, evidence notes, source lists, and confidence labels so roster claims remain honest where PATAFA has not published a clean current staff page.",
      "Updated coach directory search and flow coverage so the new records are discoverable by name, role, specialty, alias, and evidence level.",
    ],
    whyItMatters:
      "Turns the coach directory into a credible national-team reference while avoiding false certainty about names that are only visible through social snippets or delegation coverage.",
  },
  {
    id: "2026-05-01-national-team-athlete-profiles",
    date: "2026-05-01",
    title: "National team athlete profiles",
    category: ["Data", "Experience", "Competition", "Reliability"],
    summary:
      "Added sourced athlete profiles for Lauren Hoffman and Yacine Guermali with official performance evidence and visible profile proof.",
    highlights: [
      "Added detailed athlete records, personal bests, recent results, and verification notes for Lauren Hoffman and Yacine Guermali.",
      "Expanded athlete profile pages with overview copy, verified facts, highlights, and source links so public records can be audited in-context.",
      "Updated athlete search and legacy ranking-flow coverage around the new national-team profiles.",
    ],
    whyItMatters:
      "Turns the clean athlete directory back into a useful elite-athlete discovery surface while keeping every headline stat tied to official evidence.",
  },
  {
    id: "2026-05-01-fresh-sample-data-reset",
    date: "2026-05-01",
    title: "Fresh sample data reset",
    category: ["Data", "Experience", "Reliability"],
    summary:
      "Cleared the active athletes, clubs, coaches, and events data so the app is ready for a clean replacement sample set.",
    highlights: [
      "Reset the core athlete, club, coach, and event arrays to zero records while preserving the TypeScript types and helper functions.",
      "Removed stale demo athlete spotlights, sanctioned-event examples, sponsor roster links, and intake fixture rows tied to the old sample records.",
      "Updated flow tests and visual snapshots around empty directory states.",
    ],
    whyItMatters:
      "Gives the next data import a clean baseline with no old demo records leaking into the public directory experience.",
  },
  {
    id: "2026-05-01-shadcn-core-component-refresh",
    date: "2026-05-01",
    title: "Shadcn core component refresh",
    category: ["Experience", "Components", "Styling", "Reliability"],
    summary:
      "Refreshed the focused public app around the latest shadcn composition patterns while preserving the core Home, Athletes, Clubs, Coaches, and Events route model.",
    highlights: [
      "Added Field, Input Group, Native Select, Button Group, Empty, Item, Breadcrumb, and Command primitives without overwriting local button/input styling.",
      "Reworked the shell command launcher, homepage jump control, directory filters, empty states, result rows, and detail breadcrumbs around shadcn components.",
      "Added Playwright flow coverage for the command launcher search handoff into the athlete directory.",
    ],
    whyItMatters:
      "Makes the app feel more current, premium, and maintainable while keeping the newest public UX narrow and directory-focused.",
  },
  {
    id: "2026-05-01-standard-icon-pack-refresh",
    date: "2026-05-01",
    title: "Standard icon pack refresh",
    category: ["Branding", "Styling", "Components", "Experience"],
    summary:
      "Moved the app icon system from custom-drawn Philippine Athletics glyphs to a Lucide-backed standard icon pack for a cleaner premium interface.",
    highlights: [
      "Replaced the custom product icon implementation with a compatibility wrapper that maps app concepts to `lucide-react` icons.",
      "Updated the shell mark, favicon SVGs, Open Graph mark, and partner placeholder marks to use the same clean-line icon language.",
      "Updated the root design contract so future UI work treats Lucide as the canonical icon system.",
    ],
    whyItMatters:
      "Gives the app a more familiar, modern, and cohesive visual language while preserving existing imports and route behavior.",
  },
  {
    id: "2026-05-01-minimal-core-app-redesign",
    date: "2026-05-01",
    title: "Minimal core app redesign",
    category: ["Experience", "Branding", "Competition", "Reliability", "Styling"],
    summary:
      "Rebuilt the public app around a sparse core directory experience focused only on Home, Athletes, Clubs, Coaches, and Events.",
    highlights: [
      "Simplified the shell and homepage into a minimal command hub with core navigation, search jump behavior, and subtle partner support.",
      "Converted athlete, club, coach, and event directories plus their detail pages into a consistent dense-list and compact-detail pattern.",
      "Added canonical `/events/[id]` pages and redirected retired public routes into the closest core destination.",
      "Updated flow tests and visual snapshots around the new core pages, representative detail pages, search/jump behavior, and redirects.",
    ],
    whyItMatters:
      "Keeps the newest app version focused on the surfaces users actually need while preserving existing data and route continuity behind a cleaner UX.",
  },
  {
    id: "2026-04-23-usatf-style-federation-positioning-pass",
    date: "2026-04-23",
    title: "USATF-style federation positioning pass",
    category: ["Experience", "Branding", "Membership", "Competition", "Monetization", "Data"],
    summary:
      "Reframed the public app around Philippine Athletics as the national home for Filipino athletics, with stronger federation messaging, hub routes, and sponsor structure.",
    highlights: [
      "Updated homepage, navigation, membership, athlete, rankings, clubs, coaches, events, search, signup, recognition, and sponsor copy around federation pathways.",
      "Added About, Disciplines, Safe Sport, and News routes so the site has national-body structure beyond directories and dashboards.",
      "Created a shared federation content layer for mission language, sport disciplines, Safe Sport audiences, partner categories, and story surfaces.",
    ],
    whyItMatters:
      "Makes the app feel closer to a national athletics federation website while preserving the modern operating-system design and existing data workflows.",
  },
  {
    id: "2026-04-23-institutional-operating-system-design-overhaul",
    date: "2026-04-23",
    title: "Institutional operating-system design overhaul",
    category: ["Experience", "Branding", "Monetization", "Components", "Styling", "Reliability"],
    summary:
      "Refreshed the whole app around a modern institutional athletics operating-system direction with tighter tokens, clearer workflows, and sponsor visibility that supports rather than blocks primary tasks.",
    highlights: [
      "Added a root `DESIGN.md` contract and repo-local UI skill so future frontend work has a durable visual source of truth.",
      "Expanded the shadcn/ui surface with table, alert, dialog, accordion, skeleton, tooltip, and toast primitives while keeping the configured New York style.",
      "Introduced a custom Philippine Athletics icon family from an imagegen reference sheet and wired it through navigation, search, directories, profiles, dashboards, and results intake.",
      "Tightened global tokens, cards, forms, navigation search, sponsor mastheads, rankings tables, data-intake workflow states, and accessible directory/profile links.",
    ],
    whyItMatters:
      "Makes Philippine Athletics feel more credible, modern, and operational for athletes, clubs, LGUs, federation stakeholders, and sponsors while preserving existing demo/data contracts.",
  },
  {
    id: "2026-04-20-pilot-dashboards-and-stakeholder-pathways",
    date: "2026-04-20",
    title: "Pilot dashboards and stakeholder pathways",
    category: ["Experience", "Membership", "Data", "Reliability", "Components", "Styling"],
    summary:
      "Introduced a pilot-ready stakeholder layer with LGU and club dashboards, youth-safe profiles, mobile demo surfaces, and pathway-based membership and signup routing.",
    highlights: [
      "Added read-only pilot routes for LGU dashboards, club-owner dashboards, youth participant profiles, and a mobile walkthrough built on static seeded pilot data.",
      "Reworked membership and signup around pilot pathways for LGUs, clubs, youth families, adult athletes, and sponsors instead of consumer-style package pricing.",
      "Extended adult athlete pages with pathway-stage, team-affiliation, and verification badges while keeping public ranking and evidence logic scoped to adult and elite profiles.",
      "Expanded Playwright coverage for pilot guardrails, stakeholder flows, signup routing, and new desktop/mobile visual snapshots.",
    ],
    whyItMatters:
      "Moves the product from a polished directory demo toward a believable pilot operating surface that better supports LGU funding conversations and stakeholder buy-in.",
  },
  {
    id: "2026-03-01-ranking-profile-consistency-remediation-competition-evidence-source",
    date: "2026-03-01",
    title: "Ranking/profile consistency remediation (competition evidence source)",
    category: ["Data", "Competition", "Reliability", "Experience"],
    summary:
      "Unified rankings and athlete profile PB/rank rendering around a shared competition-evidence engine with strict context deep-linking.",
    highlights: [
      "Added a canonical performance evidence layer used by rankings, profile PB/rank cards, athlete summaries, and data-portal previews.",
      "Standardized ranking/profile deep links with strict context params (`event`, `year`, `gender`, `ageGroup`) and explicit unranked handling.",
      "Expanded data integrity checks to hard-fail PB/rank mismatches and event normalization drift for non-stub athletes.",
    ],
    whyItMatters:
      "Eliminates cross-page stat drift so users see the same PB/rank values wherever they navigate, increasing trust in ranking outputs.",
  },
  {
    id: "2026-03-01-bbtmartires-subtle-accent-typography-system",
    date: "2026-03-01",
    title: "BBTMartires subtle accent typography system",
    category: ["Branding", "Styling", "Experience", "Tooling"],
    summary:
      "Introduced a controlled brand accent typography system using BBTMartires to improve identity consistency without overwhelming content density.",
    highlights: [
      "Added local BBTMartires font loading (Regular + Thin) and new utility classes for deterministic accent styling.",
      "Applied route-by-route accent placements across all public pages with strict 1–2 visible uses per page.",
      "Added flow-level Playwright checks for accent-count rules, font application, and small-size constraints while keeping ad rendering tests green.",
    ],
    whyItMatters:
      "Strengthens brand personality in subtle, repeatable ways while preserving readability and preventing typography overuse across high-traffic flows.",
  },
  {
    id: "2026-02-26-spec-complete-demo-overhaul",
    date: "2026-02-26",
    title: "Spec-complete demo overhaul and controlled presentation flows",
    category: ["Experience", "Branding", "Styling", "Data", "Competition", "Reliability"],
    summary:
      "Delivered the Philippine Athletics spec update across visual design, demo controls, architecture storytelling, and results-intake reliability constraints.",
    highlights: [
      "Migrated demo-critical routes to the new institutional visual language with full-width shells, sharp-corner styling, updated palette tokens, social header placeholders, and a Safe Sport homepage section.",
      "Implemented strict audience demo flow controls with route allowlists, dedicated audience entry routes, and off-script redirection for predictable live presentations.",
      "Added membership-number support across athlete data/search and upgraded results intake with CSV-only policy, sanctioned-event gating, and explicit demo-local publish scope messaging.",
      "Added a dedicated system architecture infographic route with inline SVG rendering and a static exported asset for presentations and print handoffs.",
    ],
    whyItMatters:
      "Creates a tighter, stakeholder-ready demo experience while reducing presentation risk and improving data-intake integrity without introducing backend complexity in this phase.",
  },
  {
    id: "2026-02-24-homepage-directory-ictsi-banner",
    date: "2026-02-24",
    title: "Homepage directory card redesign and ICTSI top-banner pin",
    category: ["Experience", "Styling", "Monetization"],
    summary:
      "Refined homepage section cohesion by redesigning the quick directory card and pinning ICTSI as the top homepage ad creative.",
    highlights: [
      "Reworked the quick-access card into a clearer directory panel with icon-led links, richer metadata, and stronger interaction states.",
      "Updated lower homepage panel styling so card depth and color treatment better align with the hero’s glass aesthetic.",
      "Pinned the ICTSI Foundation banner in the top homepage ad slot while preserving existing ad behavior for non-homepage routes.",
    ],
    whyItMatters:
      "Improves homepage visual consistency and readability while keeping sponsor visibility intentional and predictable in the primary landing experience.",
  },
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
