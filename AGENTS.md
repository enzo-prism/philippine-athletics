# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and route handlers. Dynamic routes live under folders like `athletes/[id]`.
- `components/`: Shared UI building blocks; prefer small, composable client components and keep server-only logic in `app/`.
- `lib/`: Utilities and helpers (e.g., data shaping, formatting).
- `styles/` and `public/`: Global styles and static assets.
- Path alias `@/*` maps to the repo root (set in `tsconfig.json`), so import with `@/components/...` instead of relative `../../` chains.

## Build, Test, and Development Commands
- `pnpm install`: Install dependencies.
- `pnpm dev`: Run the Next.js dev server (Turbopack) at `http://localhost:3000`.
- `pnpm build`: Production build; validates the app compiles and prerenders static routes.
- `pnpm start`: Serve the production build locally.
- `pnpm lint`: Runs `eslint .` (configure ESLint before relying on this; add `eslint-config-next` if missing).

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js 16, App Router). Keep server components as default; add `"use client"` only when needed.
- Components: PascalCase filenames; hooks start with `use*`; utility modules camelCase.
- Styling: Tailwind-first; prefer utility classes over ad-hoc CSS. Co-locate component-specific styles; keep globals in `styles/`.
- Imports: Use the `@/` alias for clarity; group imports (libs, components, local).
- Formatting: 2-space indent, trailing commas where allowed; keep props sorted and avoid unused exports.

## Testing Guidelines
- No formal test suite exists yet. When adding tests, colocate under `__tests__/` or `*.test.tsx` near the code under test.
- Use `@testing-library/react` for components and consider Playwright for basic flows (e.g., navigating to `/athletes/[id]`).
- Aim to cover key UI states (loading, empty, error) and data formatting utilities in `lib/`.

## Commit & Pull Request Guidelines
- Commits: Follow conventional commits (e.g., `feat: add club detail page`, `fix: handle empty coach roster`); keep commits scoped and meaningful.
- PRs: Provide a concise summary, linked issue (if any), screenshots for UI changes, and steps to validate (`pnpm dev`, `pnpm build`, relevant tests). Note any known warnings (e.g., lockfile root selection) if still present.

## Changelog
- Keep `Changelog.md` updated for major product changes.
- Newest entries go at the top, using short bullets for what changed and why it matters.

## Environment & Deployment Notes
- This repo targets Vercel; keep secrets in Vercel env vars, not committed files.
- Add a `.gitignore` that excludes `node_modules`, `.next`, and local env files before committing.
