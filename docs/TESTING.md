# Testing Guide

This project uses Playwright for two complementary test tracks:

- Flow tests for end-to-end journeys that mirror `DemoFlows.md`.
- Design snapshots for visual regression (`pnpm test:design`).
- Data integrity validation for ranking/profile consistency (`pnpm data:check`).

## Quick Commands

1. `pnpm test:flows` — fast desktop smoke for the key flows.
2. `pnpm test:flows:full` — all device projects (desktop, tablet, mobile).
3. `pnpm test:flows:ui` — interactive UI mode for click-around debugging.
4. `pnpm test:flows:codegen` — record a new flow with Playwright Codegen.
5. `pnpm test:design` — visual snapshots across key routes.
6. `pnpm data:check` — data integrity and consistency checks.
7. `pnpm build` — changelog sync gate + production build sanity check.

## Consistency-Specific Checks

Use these when touching rankings, profiles, competitions, or intake preview logic:

1. `pnpm data:check`
2. `pnpm exec playwright test tests/flows/flow-ranking-profile-consistency.spec.ts --project=Desktop`
3. `pnpm exec playwright test tests/flows/flow-rankings.spec.ts --project=Desktop`
4. `pnpm exec playwright test tests/flows/flow-ads-rendering.spec.ts --project=Desktop`

## Suggested Pre-Push Sequence

1. `pnpm data:check`
2. `pnpm test:flows`
3. `pnpm build`

## Flow Test Structure

- Flow specs live under `tests/flows/`.
- Fixtures live under `tests/fixtures/`.
- Shared utilities live under `tests/flows/a11y.ts`.

Key flow specs:

- `flow-ranking-profile-consistency.spec.ts` validates rank/PB parity when navigating rankings <-> athlete profile.
- `flow-rankings.spec.ts` validates ranking filter interactions and row-to-profile navigation.
- `flow-data-portal.spec.ts` and `flow-data-portal-sanctioning.spec.ts` cover intake workflow and sanctioned-event guardrails.
- `flow-brand-typography.spec.ts` enforces subtle brand-accent usage counts and font application.
- `flow-ads-rendering.spec.ts` checks ad-fill/rendering safety across key routes.

## UI Mode (Click-Around UX Reviews)

Use UI mode when you want to explore the app while capturing a reproducible test:

1. Run `pnpm test:flows:ui`.
2. Select a test and use the UI runner to step through it or debug selectors.
3. Add or update steps in the flow spec when you find issues.

## Codegen (Record a New Flow)

1. Run `pnpm test:flows:codegen`.
2. Click through the flow in the browser.
3. Copy the generated steps into the closest `tests/flows/*.spec.ts` file.

## Trace Viewer

Playwright captures traces on first retry by default. To inspect a trace:

1. Re-run the failing test with `--trace on` if needed.
2. Open the trace file using Playwright's trace viewer.

## Accessibility Checks

Flow tests run `@axe-core/playwright` scans after major transitions.

- Critical issues fail the test.
- Non-critical issues are attached to the test output as JSON for review.

## Data Check Severity Model

`pnpm data:check` classifies issues as:

- `missing` — hard failure (non-zero exit) used for broken references and unsupported evidence states.
- `warning` — soft signal for cleanup opportunities (normalization drift, stale fields, non-blocking parity warnings).
