# Philippine Athletics design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/enzo-design-prisms-projects/v0-philippine-athletics-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/t8Q4SvjK5jZ)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Demo guide

The demo flows and narrative live in `DemoFlows.md`. Use it to keep product decisions aligned with the 5 core flows showcased in demos.

## Status snapshot

For a concise view of what is implemented, what is demo-ready, and what gaps remain, see `docs/STATUS.md`.

## Documentation index

- `DemoFlows.md` — 5 core demo flows plus the optional results intake flow.
- `docs/STATUS.md` — current build status, gaps, and recommended next steps.
- `docs/research/results-intake.md` — research basis and workflow rationale for manual results ingestion.
- `CLAUDE.md` — engineering notes for contributors and agent tooling.

## Results intake (manual data entry)

The Results Intake portal lives at `/data-portal`. It supports CSV/TSV upload, field mapping, validation, and previewing how new results would look across competitions, athlete pages, and rankings. Research rationale and workflow notes live in `docs/research/results-intake.md`.

## Changelog (demo-only)

The demo changelog lives at `/changelog` and reads from `lib/data/commit-log.ts`. Regenerate the commit dataset with `pnpm data:commits` whenever git history changes.

## Deployment

Your project is live at:

**[https://vercel.com/enzo-design-prisms-projects/v0-philippine-athletics-design](https://vercel.com/enzo-design-prisms-projects/v0-philippine-athletics-design)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/t8Q4SvjK5jZ](https://v0.app/chat/t8Q4SvjK5jZ)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Developer notes (for Codex & contributors)

- **Data sources:** Canonical sample data lives in `lib/data/athletes.ts`, `lib/data/coaches.ts`, and `lib/data/clubs.ts`. Each record is keyed by `id` and `slug`; detail pages accept either. `lib/data/legacy-athlete-records.ts` is a stub kept only for import stability.
- **Cross-links:** Use `clubId`/`coachId` (preferred) or `club`/`coach` names for relationships. Helpers `getClubAthletes`, `getClubCoaches`, and `getAthletesByCoach` resolve rosters using these keys.
- **Contact & map blocks:** Clubs include `contact.people` and `locationDetail` (name, address, lat/lng, mapUrl, notes). Coaches/athletes expose `contact` fields directly; keep emails/phones populated to avoid placeholder UI.
- **Stubs instead of 404s:** `get*OrStub` helpers fall back to placeholder content if a record is missing. When adding new IDs/slugs, update the shared data modules so stubs are rarely used.
- **Validation & build:** Run `pnpm data:check` for referential sanity (IDs/slugs) and `pnpm build` for Next.js compilation. Install deps via `pnpm install` first to ensure `tsx` is available.
- **UI conventions:** Tailwind-first, App Router, `@/` imports, and slugs in hrefs (`/athletes/{slug}` etc.) for consistent routing.
