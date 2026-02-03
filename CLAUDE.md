# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Philippine Athletics is a Next.js 16 App Router website displaying track and field community profiles (athletes, coaches, clubs, competitions, sponsors). Built with v0.app and deployed on Vercel.

The demo also includes a front-end-only Results Intake portal at `/data-portal` for manual results upload, validation, and preview. Submissions are stored in local browser storage and do not update `lib/data/*` without manual merge.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server at localhost:3000 (Turbopack)
pnpm build            # Production build
pnpm data:check       # Validate referential integrity (IDs/slugs across data modules)
pnpm lint             # ESLint
```

## Architecture

### Data Layer (`lib/data/`)
All sample data is defined in TypeScript modules with consistent patterns:

- **Entity modules**: `athletes.ts`, `coaches.ts`, `clubs.ts`, `competitions.ts`, `sponsors.ts`
- **Each entity** has `id`, `slug`, and full profile data
- **Lookup functions**: `getXxxById(idOrSlug)` returns entity or undefined
- **Stub fallbacks**: `getXxxByIdOrStub(idOrSlug)` returns placeholder if missing (avoids 404s)
- **Cross-entity helpers**: `getClubAthletes()`, `getClubCoaches()`, `getAthletesByCoach()` resolve relationships

Relationships use `clubId`/`coachId` for lookups. The `club`/`coach` string fields are display names.

### Routing
Dynamic routes accept either `id` or `slug`:
- `/athletes/[id]` → `getAthleteProfileOrStub(id)`
- `/coaches/[id]` → `getCoachOrStub(id)`
- `/clubs/[id]` → `getClubByIdOrStub(id)`
- `/competitions/[id]` → `getCompetitionByIdOrStub(id)`
- `/sponsors/[id]` → `getSponsorByIdOrStub(id)`
- `/data-portal` → local-only results intake wizard with preview tooling

Use `decodeIdParam()` from `lib/data/utils.ts` to handle URL-encoded params.

### Validation
`lib/data/validate.ts` checks referential integrity:
- Athletes reference valid `clubId`/`coachId`
- Coaches reference valid `clubId`
- Clubs have mapped athletes/coaches
- Sponsor rosters resolve to valid entities

Run `pnpm data:check` after modifying data modules.

### Results Intake (Demo)
The Results Intake portal at `/data-portal` is front-end only:
- Uploads are parsed client-side and stored in local browser storage (`trackph:results-intake`).
- Previews show competition, athlete, and rankings impacts without mutating `lib/data/*`.
- Exported JSON payloads are intended for manual merge in a future workflow.

## Conventions

- **Imports**: Use `@/` alias (maps to repo root)
- **Components**: Server components by default; add `"use client"` only when needed
- **Styling**: Tailwind utilities; avoid custom CSS
- **URLs**: Use slugs in hrefs (`/athletes/{slug}`)

## Adding New Data

1. Add record to appropriate `lib/data/*.ts` module with unique `id` and `slug`
2. Set `clubId`/`coachId` to link relationships
3. Run `pnpm data:check` to verify integrity
4. Run `pnpm build` to confirm compilation
