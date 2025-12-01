# Philippine Athletics design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/enzo-design-prisms-projects/v0-philippine-athletics-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/t8Q4SvjK5jZ)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

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

- **Data sources:** Canonical entity data lives in `lib/data/*.ts`. Athletes merge detailed profiles with `lib/data/legacy-athlete-records.ts` to keep legacy IDs working. All links use slugs; detail resolvers accept either slug or ID.
- **Stubs instead of 404s:** Detail pages use `get*OrStub` helpers to render placeholder content when a record is missing. If you add new IDs/slugs, prefer updating the shared data modules to avoid stub banners.
- **Validation:** Run `pnpm data:check` to verify referential links (clubs/coaches/rosters). Warnings are non-fatal; missing references fail the check.
- **Scripts:** Standard Next scripts plus the validation above. Install deps first (`pnpm install`) to get `tsx` for the data check.
- **UI conventions:** Tailwind-first, App Router, and `@/` imports. Use slugs for hrefs (`/athletes/{slug}` etc.) to keep navigation consistent.
