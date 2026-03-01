# Ranking <-> Profile Consistency Guide

Updated: 2026-03-01

## Why This Exists

This project previously had two competing truth models:

- `/rankings` was derived from competition evidence.
- Athlete profile cards could still show static `athlete.events[]` values.

That caused visible drift in PB/rank values depending on where users looked. The current model resolves this by treating competition evidence as the primary source for ranking-facing metrics.

## Source of Truth Model

- Canonical engine: `lib/data/performance-evidence.ts`.
- Rankings wrapper: `lib/data/rankings.ts`.
- Profile, competitions, summaries, and data-portal previews all consume this shared engine.

Core shared helpers:

- `getMergedCompetitionResults`
- `getBestResultForEvent`
- `buildRankingsForAthletes`
- `getRankingEntryForAthlete`

## Canonical Normalization Rules

Normalization is centralized in `lib/data/utils.ts`:

- `4x100m relay` and `4×100m relay` normalize to one key.
- `10000m`, `10 000m`, `10,000m` normalize to one key.
- `100m hurdles (women)` normalizes to `100m hurdles`.
- `110m hurdles (men)` normalizes to `110m hurdles`.
- Event display labels are formatted with `formatEventLabel`.
- Dates are parsed by `parseDateToTimestamp` with ISO-first handling and deterministic year extraction via `getCompetitionYear`.
- Competition result dedupe uses `meet + date + canonical event + result`.

## Ranking Context Contract

When linking ranking slices to profile pages (or back), the strict context contract is:

- `event`
- `year`
- `gender`
- `ageGroup`

`highlight` is optional UI emphasis and must not change ranking logic.

## Profile Behavior Rules

Implemented in `app/athletes/[id]/page.tsx`:

- PB card uses all-time best evidence for the focused event.
- Rank card uses exact ranking slice when full context is present.
- If full context exists and athlete is not in that slice: show `Unranked in selected context`.
- If context is incomplete: default to latest ranking year + athlete gender + computed age group + primary event.
- Static `athlete.events[]` PB/rank values are fallback only when parseable evidence is unavailable.

## Deep-Link Contract Across Surfaces

- Rankings -> Profile links include `event`, `year`, `gender`, `ageGroup` (+ optional `highlight`).
- Profile event cards -> Rankings links include full context.
- Competition result athlete links include `event` + `year`, and append `gender` + computed `ageGroup` when athlete gender is known.
- Profiles opened from ranking context expose a `Back to this ranking slice` link.

## Data Portal Parity

`app/data-portal/page.tsx` now reuses shared evidence/ranking helpers for preview logic so intake previews and live pages follow the same ranking/PB rules.

## Guardrails and Regression Gates

`lib/data/validate.ts` includes consistency checks:

- `pb_consistency`
- `rank_consistency`
- `event_normalization`

Run before shipping:

1. `pnpm data:check`
2. `pnpm exec playwright test tests/flows/flow-ranking-profile-consistency.spec.ts --project=Desktop`
3. `pnpm build`

## Contributor Checklist for Data Updates

When editing athlete or competition data:

1. Prefer canonical event labels in source data.
2. Keep competition dates parseable (ISO strongly preferred).
3. Run `pnpm data:check` and resolve all `missing` issues.
4. Verify a ranking row opens a profile with matching PB/rank for the same context.
