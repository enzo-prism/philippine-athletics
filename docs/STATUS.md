# Philippine Athletics Status Snapshot

Date: 2026-03-01

## Current State

- Core public routes are live on App Router: Athletes, Rankings, Clubs, Competitions, Recognition, Sponsors, Search, Membership, and demo routes.
- Ranking-facing metrics now use a single competition-evidence source of truth via `lib/data/performance-evidence.ts`.
- Rankings and athlete profile links now carry strict context parameters: `event`, `year`, `gender`, `ageGroup`.
- Consistency contract details are documented in `docs/data/ranking-profile-consistency.md`.
- Athlete profile PB/rank cards now derive from evidence logic; static `athlete.events[]` values are fallback-only for missing parseable evidence.
- Results Intake (`/data-portal`) preview logic now reuses the same ranking/evidence helpers as live ranking pages.
- Data integrity checks include PB/rank consistency and event normalization guardrails in `lib/data/validate.ts`.
- Ad surfaces are responsive and logo-safe across tested viewports, and brand accent typography is rolled out with route-level usage limits.
- Demo flow guardrails remain active through `/demo` launch routes and middleware route locks.

## Verification Snapshot (2026-03-01)

- `pnpm data:check` passes with zero current `pb_consistency`, `rank_consistency`, and `event_normalization` issues.
- Ranking/profile consistency flow passes: `tests/flows/flow-ranking-profile-consistency.spec.ts`.
- Rankings navigation and filters pass: `tests/flows/flow-rankings.spec.ts`.
- Ad rendering flow passes: `tests/flows/flow-ads-rendering.spec.ts`.
- Build gate passes: `pnpm build`.

## Recently Landed Focus Areas

- Competition-evidence ranking/profile remediation, including strict deep-link contract and explicit unranked-state handling.
- Canonical event/date/performance normalization to reduce alias-based mismatches.
- Data portal ranking parity updates so preview outcomes match live ranking behavior.
- Route-by-route BBTMartires subtle accent typography contract (`1 required + 1 optional` usage).
- Sponsor-ad rendering hardening for responsive logo visibility and fallback behavior.

## Demo-Ready Flows

- Athlete discovery and profile validation.
- Rankings filtering and athlete deep-link validation.
- Club-to-athlete pathway walkthrough for LGU use cases.
- Competition result browsing with PB/SB evidence badges.
- Recognition and trust-signal walkthrough.
- Results Intake upload, mapping, validation, publish-to-local-log, and export.

## Gaps and Known Limitations

- No production auth/authorization model; role toggles are demo-only.
- Results Intake publish remains browser-local and non-persistent.
- Demo data is static and not connected to federation production feeds.
- Changelog commit snapshots require regeneration with `pnpm data:commits` when git history changes.
- Next.js root lockfile warning remains because a second lockfile is detected outside this workspace.

## Recommended Next Steps

- Add scheduled consistency audit output (machine-readable report) for CI trend tracking.
- Add fixture-driven tests for event alias normalization (`4x` vs `4×`, `10,000m` variants, hurdles aliases).
- Add an internal “data corrections” workflow to generate deterministic patch suggestions for athlete/competition records.
