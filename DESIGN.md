# Philippine Athletics Design System

## North Star

Philippine Athletics should feel like a modern institutional athletics operating system: credible enough for federation and LGU stakeholders, fast enough for daily operators, clear enough for athletes and parents, and polished enough for sponsors to trust the surface.

The product is not a marketing landing page. It is a public discovery layer plus an operations workspace. Every screen should help someone answer one of these questions quickly:

- Who is this athlete, club, coach, event, or sponsor?
- What proof supports this record?
- What action or pathway comes next?
- How does this connect to the broader Philippine Athletics ecosystem?

## Visual Language

- Use shadcn/ui `new-york`, Radix, Tailwind v4, lucide icons, and semantic tokens as the base.
- Cards and panels use an 8px default radius. Larger radii are reserved for app shell surfaces, dialogs, and phone frames.
- Use strong institutional contrast: warm white backgrounds, deep navy/ink foregrounds, Philippine flag accents, and restrained success/warning colors.
- Avoid generic gray card spam. Use tables, grouped lists, sidebars, and metric strips when they scan better than repeated cards.
- Keep sponsor visibility high, but task-aware: masthead, side rail, inline proof moments, and sponsor directory depth.
- Typography should be compact and operational on utility pages. Hero-scale type is only for true landing/overview moments.

## Icon System

- Use the custom Philippine Athletics icon family in `components/icons/athletics-icons.tsx` for product concepts: directory, athlete, rankings, competition, club, coach, recognition, sponsor, data, membership, dashboards, mobile, profile, location, filters, medals, and checks.
- The icon family was art-directed with the generated reference sheet at `output/imagegen/philippine-athletics-icon-system-flat.png`, then implemented as crisp inline SVGs for accessibility, theming, and layout stability.
- Icons should be compact, line-based, and multi-accented with Philippine athletics colors from `--pa-icon-blue`, `--pa-icon-red`, `--pa-icon-gold`, and `--pa-icon-green`.
- Use lucide for universal controls only, such as arrows, close buttons, menus, loading states, and platform/social glyphs. Product navigation and page meaning should use the custom icons.

## Layout Rules

- Every route uses the same app shell: navigation, compact sponsor masthead, main content, and footer.
- Core content comes before secondary sponsor or proof modules on mobile.
- Directory and ranking pages should expose filters, counts, active state, and results without forcing excessive scrolling.
- Profile pages should lead with summary, proof, relationships, and next actions; avoid isolated stat blocks that do not explain what to do next.
- Pilot dashboards are denser than public pages but must share the same tokens, spacing, and status language.
- Do not place UI cards inside decorative page-section cards. If a section contains repeated items, the section is unframed or uses a simple panel header plus repeated cards/tables.

## Interaction Rules

- Use `Button`, `Input`, `Label`, `Select`, `Tabs`, `Table`, `Alert`, `Dialog`, `Tooltip`, and `Sonner` before raw controls.
- Links must have accessible names. Directory cards should expose the entity name in the link label.
- Filters and tab state should stay URL-addressable when they affect shareable product state.
- Use clear empty states and inline error/validation messages. Do not leave blank panels.
- Icon-only controls require `aria-label`; decorative icons require `aria-hidden`.
- Honor reduced motion. Animate only transform and opacity.

## Route Patterns

- Homepage: ecosystem command center, not a splash page. Make search, rankings, competitions, membership, data intake, and sponsor proof obvious.
- Search and directories: task-first filter toolbar, active chips, useful result density, and named result links.
- Rankings: table-first results with top performer context, preserved query params, and visible source trust.
- Results Intake: stepper workflow with upload, map fields, validate, and review. Use alerts and tables for errors.
- Membership and signup: pathway selection comes before generic account creation.
- Pilot dashboards: decision-maker proof first, then operational detail, then related actions.
- Sponsor surfaces: premium, visible, and contextual without blocking primary tasks.

## Verification Expectations

- Run `pnpm data:check` after data-facing work.
- Run `pnpm build` after implementation.
- Run Playwright flow/design checks for major UI changes.
- Use agent-browser for desktop/mobile screenshots and snapshots when reviewing the live UX.
