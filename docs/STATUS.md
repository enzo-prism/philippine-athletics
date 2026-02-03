# TrackPH Status Snapshot

Date: 2026-02-03

## Current State

- Core public experience is live in the App Router: Athletes, Rankings, Clubs, Competitions, Recognition, Sponsors, Search, and How It Works.
- Demo data lives in `lib/data/*` with helper lookups and integrity checks (`pnpm data:check`).
- The Results Intake portal exists at `/data-portal` with a multi-step upload → map → validate → review flow.
- Intake submissions are stored locally in the browser and can be exported as JSON. No backend writes exist yet.
- Preview tooling now shows impact on competition pages, athlete pages, and rankings based on uploaded results.

## What Was Built Recently

- Added a full Results Intake portal for manual results submission with role toggles (Contributor vs Certified Steward).
- Implemented CSV/TSV parsing with header auto-mapping, validation, and warnings for missing wind data or unknown athletes.
- Added impact previews that calculate athlete PB/SB updates and ranking shifts from uploaded results.
- Added competition, athlete, and rankings sandbox previews to demonstrate how new results would look in production pages.
- Documented the research basis and workflow rationale in `docs/research/results-intake.md`.

## Demo-Ready Flows

- Athlete discovery and profile viewing.
- Rankings with filters and top-3 highlights.
- Club profiles with rosters and coaches.
- Competition results with event filtering and PB/SB callouts.
- Recognition badges for clubs and coaches.
- Results Intake portal with previews and local submission log.

## Gaps and Known Limitations

- No real authentication or role enforcement; roles are demo toggles only.
- Submissions do not mutate `lib/data/*` or the live site; previews are local-only.
- No persistent server storage; local storage can be cleared by the browser.
- Rankings and athlete updates in preview are computed from demo data, not real federation feeds.

## Recommended Next Steps

- Add a JSON/TS patch generator that outputs updates for `lib/data/competitions.ts` and `lib/data/athletes.ts`.
- Add a lightweight admin review queue view (pending vs published) with approval notes.
- Expand data validation to cover age groups, gender mismatches, and event normalization.

