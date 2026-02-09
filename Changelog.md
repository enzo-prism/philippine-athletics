# Changelog

Feed-style log of major product changes. Add newest entries at the top.

Template (copy/paste for new entries):
## YYYY-MM-DD — Short title
- Change 1 (what changed + why it matters).
- Change 2 (what changed + why it matters).
- Change 3 (optional).

## 2026-02-05 — Membership + sponsor experience refresh
- Reworked the homepage branding, sponsor banner, and membership section to spotlight PATAFA messaging and membership tiers.
- Added a sanctioned events calendar preview plus a dedicated events page for sanctioned meet listings.
- Expanded the homepage footer with sponsor/supplier/partner groupings and membership badge coverage.

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
