# Changelog

Feed-style log of major product changes. Add newest entries at the top.

Template (copy/paste for new entries):
## YYYY-MM-DD — Short title
- Change 1 (what changed + why it matters).
- Change 2 (what changed + why it matters).
- Change 3 (optional).

## 2026-05-01 — Club online links
- Added first-class club website and social-link fields so external websites are no longer mislabeled as map links.
- Updated the FilAm Sports profile with its official website and Instagram link in a dedicated Online section.
- Expanded club search and flow coverage so website/social profile data remains discoverable and verified.

## 2026-05-01 — Daniella Daynata athlete profile
- Added a sourced Daniella Daynata profile with FilAm Sports linkage, World Athletics throws evidence, Asian competition results, and a local profile image.
- Preserved the public FilAm spelling as Daniella Daynata while documenting the World Athletics spelling Daniela DAYNATA in the source facts.
- Linked Daynata to FilAm Sports and Ed Lasquete's club-operator relationship so the athlete, club, and coach views reflect the public roster.

## 2026-05-01 — Bernalyn Bejoy athlete profile
- Added a sourced Bernalyn Bejoy profile with FilAm Sports linkage, World Athletics evidence, SEA Games context, and a local profile image.
- Linked Bejoy to FilAm Sports and Ed Lasquete's club-operator relationship so the athlete, club, and coach views stay connected.
- Kept her 2023 SEA Games 800m fourth-place result separate from the reported 2025 SEA Games 800m bronze for cleaner evidence history.

## 2026-05-01 — Athlete headshots
- Added supplied headshot photos for Lauren Hoffman and Yacine Guermali on their athlete profile pages.
- Updated the core athlete hero layout so profile media appears as a restrained institutional visual, not a social-card treatment.
- Stored the images as stable public app assets so profile pages do not depend on Desktop-local files.

## 2026-05-01 — Ed Lasquete coach profile
- Added Ed Lasquete as a sourced coach/operator profile tied to FilAm Sports as owner / co-founder.
- Documented his Philippine National Track and Field Team pole-vault background, 1992 Barcelona Olympic appearance, SEA Games pole-vault medals, and FilAm Sports recruitment/logistics role.
- Updated FilAm Sports so Ed appears as the linked club coach-operator instead of only a contact name.

## 2026-05-01 — FilAm Sports club linkage
- Added FilAm Sports as a sourced club/support-organization profile with mission, contact, operating focus, and public source links.
- Linked Lauren Hoffman and Yacine Guermali to FilAm Sports while preserving their National Team pathway status and Philippine National Team affiliation.
- Expanded club profile pages with operating-focus and source sections so external club/support relationships stay auditable.

## 2026-05-01 — Global athletics event calendar
- Added a researched 2026 event calendar covering World Athletics Series championships, the full Wanda Diamond League season, remaining Continental Tour Gold meets, major regional championships, and late-year World Marathon Majors.
- Expanded event profiles with tier labels, watch rationale, source confidence, official source links, and source notes so date claims stay auditable.
- Upgraded `/events` with category filtering and flow coverage around World Relays and the Diamond League Doha date correction.

## 2026-05-01 — National team coach profiles
- Added sourced coach profiles for Dario De Rosas, Jeoffrey Chua, Isidro Del Prado, Sean Guevarra, Emerson Obiena, Karl Francisco, Roselyn Hamero, Bonifacio Loraña, Saturnino Salazar, Eduardo Buenavista, and Djundi Biñas.
- Expanded coach profile pages with evidence confidence, profile facts, evidence notes, and source links so public staff claims stay auditable.
- Updated coach directory search and flow coverage around the new evidence-backed records.

## 2026-05-01 — National team athlete profiles
- Added researched public profiles for Lauren Hoffman and Yacine Guermali with official World Athletics, Philippine Athletics, Duke, and Gonzaga source context.
- Expanded athlete detail pages with profile overview, verified facts, highlights, and source links so elite records are easier to audit from the app.
- Updated athlete search/ranking flow coverage so the directory reflects the new national-team records instead of the previous empty-data assumptions.

## 2026-05-01 — Fresh sample data reset
- Cleared the active athlete, club, coach, and event seed datasets so the core app starts from zero records.
- Removed stale demo athlete spotlights, sanctioned-event examples, sponsor roster links, and intake fixture rows that pointed at the old sample records.
- Updated flow tests and design snapshots around empty directory states so the app is ready for the next clean data set.

## 2026-05-01 — Shadcn core component refresh
- Added the latest shadcn Field, Input Group, Native Select, Button Group, Empty, Item, Breadcrumb, and Command primitives without overwriting the local button/input styling.
- Reworked the core shell, homepage jump, filters, empty states, dense result rows, and detail breadcrumbs to use shadcn composition instead of custom one-off markup.
- Added command-launcher flow coverage so the app’s newest quick-jump/search handoff remains verified across the core directory experience.

## 2026-05-01 — Standard icon pack refresh
- Replaced the custom Philippine Athletics icon implementation with a Lucide-backed product icon wrapper so the app uses a modern, standard, premium-feeling icon set.
- Updated the shell mark, app icon SVGs, Open Graph mark, and partner placeholder marks to match the Lucide shield/check and clean-line icon language.
- Updated `DESIGN.md` so future UI work treats `lucide-react` as the canonical icon system instead of returning to custom-drawn glyphs.

## 2026-05-01 — Minimal core app redesign
- Rebuilt the public app around the core Home, Athletes, Clubs, Coaches, and Events surfaces so users land in a sparse directory experience instead of a broad federation portal.
- Added the canonical `/events/[id]` detail route and redirected legacy public routes into the closest core destination, keeping older product lanes hidden from the shell.
- Updated browser flow coverage and visual snapshots around core directories, representative detail pages, homepage search/jump behavior, and legacy-route redirects.

## 2026-04-23 — USATF-style federation positioning pass
- Reframed the homepage, navigation, membership, athlete, rankings, clubs, coaches, events, and sponsor copy around Philippine Athletics as the national home for Filipino athletics.
- Added new About, Disciplines, Safe Sport, and News hub routes so the site has federation-style structure beyond directory and dashboard workflows.
- Added a shared federation content layer for mission language, sport disciplines, Safe Sport audiences, partner categories, and story surfaces to keep future pages aligned.

## 2026-04-23 — Institutional operating-system design overhaul
- Added a durable `DESIGN.md` contract and repo-local UI skill so future frontend work stays aligned with the institutional athletics operating-system direction.
- Reworked global tokens, shared surfaces, sponsor mastheads, navigation search, cards, forms, tables, and workflow primitives to make the app feel more modern, credible, and easier to scan.
- Introduced a custom Philippine Athletics icon family generated from an imagegen reference sheet and implemented as reusable inline SVGs across navigation, search, directories, profiles, dashboards, and results intake.
- Upgraded rankings, search, data intake, demo launcher, pilot dashboards, and recognition/profile link behavior with clearer task states, accessible link names, and route-safe sponsor visibility.

## 2026-04-20 — Pilot dashboards and stakeholder pathways
- Repositioned the product toward a pilot-ready stakeholder experience by adding LGU and club-owner dashboards, youth-safe participant profiles, and a phone-framed mobile walkthrough that tells the pilot-funder story clearly.
- Rebuilt membership and signup flows around real project pathways (`LGU / School Lead`, `Club Owner / Coach`, `Youth Participant / Parent`, `Adult / Elite Athlete`, `Supporter / Sponsor`) and removed pricing-first consumer framing while routing each path to the right next surface.
- Extended adult athlete pages with pathway-stage and verification badges, added static seeded pilot data plus URL-based pilot context continuity, and expanded Playwright coverage for pilot dashboards, signup routing, and demo guardrails.

## 2026-03-01 — Ranking/profile consistency remediation (competition evidence source)
- Introduced a shared performance evidence engine so rankings, athlete profile cards, and directory summary PB/rank values all derive from the same competition-linked logic.
- Added strict context deep-linking between rankings and athlete profiles (`event`, `year`, `gender`, `ageGroup`) and a profile “back to this ranking slice” affordance.
- Unified ranking preview logic in the Data Portal with production ranking builders and expanded data integrity checks for PB/rank consistency and event normalization.

## 2026-03-01 — BBTMartires subtle accent typography system
- Added local `BBTMartiresFree` font loading (Regular + Thin) through `next/font/local` and exposed brand typography utility classes for controlled accent usage.
- Introduced a deterministic `brand-eyebrow` and `brand-subtext` contract across public routes to keep accent typography subtle (1–2 placements per page) and avoid body-text overuse.
- Added a Playwright flow to enforce route-by-route accent counts, verify applied font family, and ensure accent type remains small and responsive without impacting ad rendering tests.

## 2026-03-01 — Sponsor slot responsiveness and logo-safe rendering hardening
- Moved sponsor creative files to blocker-safe asset paths (`/sponsor-assets/*`) and updated all ad creative references to reduce runtime image blocking in real browser environments.
- Hardened ad slot image rendering to preserve full sponsor logos across viewports with explicit contain-only behavior, centered positioning, and intrinsic max sizing.
- Added inline SVG fallback data-URI handling so sponsor slots can still render a visual fallback even when static image requests fail.
- Expanded ad flow Playwright assertions to check object-fit safety and slot overflow behavior across desktop, tablet, and mobile routes.

## 2026-02-26 — Spec-complete demo overhaul and controlled presentation flows
- Completed the Philippine Athletics visual system migration for demo-critical routes, including full-width layouts, institutional palette tokens, sharp-corner styling, social header placeholders, and a new Safe Sport homepage section.
- Added strict audience demo controls with route guard rails (`/demo/governance`, `/demo/institutions`, `/demo/lgus`) plus off-script redirection to keep live presentations on-script and predictable.
- Upgraded athlete and results workflows with membership-number support, demo-scoped search behavior, sanctioned-event upload gating, CSV-only intake enforcement, and explicit demo-local publish scope messaging.
- Added a new “How It Works” architecture infographic with inline SVG rendering and a matching static export for presentation portability.

## 2026-02-24 — Homepage directory card redesign and ICTSI top-banner pin
- Redesigned the homepage “Athletes / Coaches / Clubs / Competitions” quick-access card into a richer directory panel with stronger hierarchy, icon-led link tiles, and improved hover/focus behavior.
- Updated homepage panel styling to better match the hero section’s blue-purple glass language so the lower cards feel cohesive with the top storytelling surface.
- Pinned the ICTSI Foundation creative in the top homepage ad slot while keeping existing ad-slot behavior unchanged on non-homepage routes.

## 2026-02-19 — Changelog commit feed and sync hardening
- Restored `/changelog` dual-mode navigation with both product highlights and per-commit cards so every engineering change is visible again.
- Added per-commit card details (author, short hash, tags, impact summary, file-change signal) and improved filtering/search behavior in commit mode.
- Added self-checking commit-log freshness enforcement in `pnpm changelog:verify` so stale generated commit snapshots must be regenerated before build/lint/push.

## 2026-02-19 — Shadcn UI design-system migration and page cohesion refresh
- Migrated remaining in-scope UI primitives to the unified `radix-ui` package and updated shadcn-registered components to current New York styles while preserving APIs.
- Removed old `@radix-ui/react-*` package dependencies and ensured dropdown/select surfaces include `data-[side=inline-start|inline-end]` direction-safe class hooks.
- Refreshed homepage, athletes, search, and profile surfaces with shared utility classes in `app/globals.css` for consistent card rhythm, filter panels, and section spacing.
- Updated project documentation (`docs/STATUS.md`, `Changelog.md`) so the current visual-system state and follow-up expectations are recorded with exact date context.

## 2026-02-10 — Membership and homepage messaging refinement
- Refreshed membership and membership benefits page copy to better explain package value, eligibility, and expected outcomes for athletes, clubs, and coaches.
- Updated membership pricing details and renamed the key membership CTA from “Join” to “Register” so language is more direct and action-oriented.
- Revised homepage hero headline and supporting copy so first-time visitors immediately understand the platform purpose and next actions.

## 2026-02-09 — Homepage and visual iteration
- Iterated on homepage structure and interaction rhythm with simplified hero/footer card patterns to improve scan and selection.
- Added animated hero progression work culminating in the Unicorn Studio-centered presentation and cleaner action blocks.
- Standardized Cloudinary logo/brand asset usage across layout, membership, and footer surfaces.

## 2026-02-08 — Membership, sponsor, and documentation polish
- Refreshed membership and sponsor areas with updated content structure and stronger storytelling.
- Added and cleaned up changelog/status documentation language for non-technical readability and better planning context.
- Improved flow around documentation browsing and commit-history context within the app.

## 2026-02-10 — Homepage ad creative + club map reliability improvements
- Added demo banner ad creatives on the homepage so sponsor inventory appears in-context with actual visual assets instead of placeholder blocks.
- Fixed club practice map embeds to use embeddable Google Maps URLs, preventing broken map rendering on club profile pages.
- Improved demo credibility by making monetization placements and location details both presentable and consistently functional.

## 2026-02-10 — Changelog visual simplification
- Refocused `/changelog` on product updates only by removing the engineering commit feed toggle and dense status summary cards.
- Redesigned update cards with significantly more internal spacing so the title, date, tags, description, and key takeaways are easier to scan.
- Simplified supporting UI copy and styling to reduce visual noise and create cleaner breathing room around the most important release information.

## 2026-02-10 — Homepage CTA and membership packages update
- Updated the homepage hero CTA buttons to “Become a Member” and “View Events,” with direct links to membership and competitions for clearer next actions.
- Added a dedicated membership packages section with Starter, Performance, and Club Plus tiers, including pricing and included benefits.
- Pointed the membership hero “Become a member” action to the new packages section so visitors can immediately compare options.
## 2026-02-10 — Changelog feature overhaul (accurate + plain-language)
- Rebuilt `/changelog` into a dual-mode update center: product highlights for non-technical readers and a commit feed for engineering detail.
- Added structured, human-readable release entries that explain each major update with clear summaries, key highlights, and “why it matters” context.
- Fixed stale freshness indicators by deriving “Last updated” from the latest product release and commit activity instead of a hardcoded timestamp.

## 2026-02-10 — Expanded demo display ad placements
- Added more demo ad placements across homepage, competitions, events, membership, and recognition pages to preview sponsor inventory in realistic layouts.
- Reused standardized leaderboard, MREC, and mobile ad slot components so placements remain visually consistent and easy to tune.

## 2026-02-10 — Homepage visual redesign with Unicorn Studio
- Rebuilt the homepage into a dramatic, visual-first layout with reduced copy so visitors immediately focus on motion and atmosphere.
- Integrated the Unicorn Studio WebGL scene (`TBeVNSgsX813yn7xC6FZ`) as the hero centerpiece for a more modern, animated first impression.
- Simplified homepage actions into quick-access cards and concise CTAs to keep navigation fast while preserving core discovery paths.

## 2026-02-10 — Official logo collection integration
- Added a curated Cloudinary-powered logo asset catalog for federation, program, and symbol marks so branding can be reused consistently across pages.
- Replaced placeholder text badges in the homepage header/membership/footer with real partner logos to improve visual trust and identity.
- Updated global navigation branding to use an official logo mark, so the identity is visible throughout the app experience.

## 2026-02-05 — Membership + sponsor experience refresh
- Reworked the homepage branding strip, sponsor banner, and membership section to spotlight PATAFA messaging, tiers, and featured athlete callouts for the sponsorship story.
- Added membership-specific copy, CTAs, and badge previews (member + member club) alongside coach-submitted logo placeholders for the demo.
- Added a sanctioned events calendar preview on the homepage plus a dedicated events page to mirror a Sport:80 widget layout.
- Expanded the footer with official sponsor, supplier, technology partner, and medical network partner groupings aligned to the demo sponsor roster.

## 2026-02-03 — Results intake portal (demo)
- Added a front-end Results Intake portal with upload, field mapping, validation, and review flows to demonstrate how certified staff can submit official meet data.
- Implemented CSV/TSV parsing with header auto-mapping, validation rules, and warnings for missing wind data or unknown athletes.
- Implemented local-only submission storage and a downloadable JSON payload to simulate publishing without a backend.
- Added impact previews that compute PB/SB changes, ranking shifts, and event-level impacts from uploaded results.
- Added sandbox previews for competition, athlete, and rankings pages to show how the new data would render in the UI.
- Added navigation entry for the Data Portal to make the intake flow discoverable.
- Documented the research and plan for manual results ingestion in `docs/research/results-intake.md`.
- Added `docs/STATUS.md` as a progress snapshot for the project.
- Added a demo changelog page with git-synced commit history, searchable filters, and per-commit detail panels.
- Updated the demo changelog to show plain-language summaries and non-technical notes by default.
- Added weekly digest mode and “Why it matters” impact lines for non-technical audiences.
- Added a Playwright-based design regression test suite to snapshot key routes on mobile/tablet/desktop.
- Added a helper script so `pnpm test:design` auto-installs dependencies and Playwright browsers on first run.

## 2026-02-03 — Competition polish + sponsor roster fixes
- Fixed sponsor roster IDs so sponsor pages link to real athlete/club/coach profiles (removes “Unknown” entries).
- Added 2025 SEA Games demo results and medalists, and marked the event as past to support the competition results flow.
- Hide results and medalists for upcoming competitions with “results pending” callouts to avoid placeholder noise.

## 2026-01-31 — Demo flow foundation + product readiness
- Added `DemoFlows.md` and updated README to keep the team aligned on the 5 demo flows.
- Simplified the homepage hero (removed looping video/image square) and added a global hero search entry point.
- Added Rankings and Competitions to primary navigation and homepage browse tiles for clearer discovery.
- Added global search across athletes/coaches/clubs with a `/search` results page and nav search access.
- Built the rankings experience (event/gender/age/year filters, Top 3, best‑of‑year logic, deep links to profiles).
- Expanded competition results with athlete linking, event filtering, and PB/SB callouts.
- Added Recognition page plus recognition badges with issuer/validity details on club/coach pages.
- Introduced data‑source labels (World Athletics vs Demo data) across rankings, competitions, and athlete summaries.
- Fixed `/search` build by wrapping `useSearchParams` usage in a Suspense boundary.

## 2025-12-19 — Deeper athlete sample data
- Enriched athlete sample profiles to improve browsing and profile detail completeness.

## 2025-12-16 — UI system + profile polish
- Migrated UI components to shadcn-based primitives and Lucide icons.
- Simplified athletes filters and improved mobile navigation usability.
- Added profile avatar placeholders and refined homepage category cards and how‑to steps.
- Added social signup UI and simplified authentication pages.

## 2025-12-08 — Club experience + badges + hero motion
- Added avatar headshots and weekly schedules to club profiles.
- Implemented the badge system with custom icons for coaches and sponsors.
- Added hero animations and bottom‑section imagery to the homepage.

## 2025-12-06 — Data model + club search + navigation refinements
- Replaced legacy stub data with structured athlete/coach/club profiles.
- Added club search, roster event details, contact blocks, and practice maps.
- Refined mobile bottom navigation and homepage hero messaging.
- Introduced a hero background video (later removed in Jan 2026 simplification).

## 2025-12-01 — Project initialized + athletics pages scaffolded
- Initialized the repository and synced base v0 app.
- Added structured athletics data and core pages for athletes, clubs, coaches, and competitions.
