# Philippine Athletics Design System

## North Star

Philippine Athletics should feel like a modern institutional athletics operating system: credible enough for federation and LGU stakeholders, fast enough for daily operators, clear enough for athletes and parents, and polished enough for sponsors to trust the surface.

The current public product is not a marketing landing page. It is a sparse discovery layer centered on five core surfaces: Home, Athletes, Clubs, Coaches, and Events. Every public screen should help someone answer one of these questions quickly:

- Who is this athlete, club, coach, or event?
- What proof supports this record?
- What action or pathway comes next?
- How does this connect to the broader Philippine Athletics ecosystem?

## Visual Language

- Use shadcn/ui `new-york`, Radix, Tailwind v4, lucide icons, and semantic tokens as the base.
- Cards and panels use an 8px default radius. Larger radii are reserved for app shell surfaces, dialogs, and phone frames.
- Use strong institutional contrast: warm white backgrounds, deep navy/ink foregrounds, Philippine flag accents, and restrained success/warning colors.
- Avoid generic gray card spam. Use tables, grouped lists, sidebars, and metric strips when they scan better than repeated cards.
- Keep sponsor visibility subtle in the core public app: footer or shell note only, never ad-style cards that compete with directories or profile proof.
- Typography should be compact and operational on utility pages. Hero-scale type is only for true landing/overview moments.

## Icon System

- Use `lucide-react` as the standard product icon pack for the app. It is the canonical source for navigation, directory concepts, proof badges, partner placeholders, controls, and utility glyphs.
- Keep `components/icons/athletics-icons.tsx` as the compatibility wrapper for product concepts, but its internals should map to Lucide icons rather than custom-drawn SVGs.
- Icons should be compact, single-stroke, and calm. Use semantic foreground/accent colors from the design tokens instead of multi-accent custom illustration.
- Use the `/icon.svg` Philippine Athletics logo asset for the app icon and shell logo so the brand mark stays consistent across browser chrome and the top navigation.

## Layout Rules

- Every core public route uses the same app shell: navigation, main content, and footer partner note.
- Core content comes before secondary proof modules on mobile.
- Directory and ranking pages should expose filters, counts, active state, and results without forcing excessive scrolling.
- Profile pages should lead with summary, proof, relationships, and next actions; avoid isolated stat blocks that do not explain what to do next.
- Pilot dashboards are denser than public pages but must share the same tokens, spacing, and status language.
- Do not place UI cards inside decorative page-section cards. If a section contains repeated items, the section is unframed or uses a simple panel header plus repeated cards/tables.

## Interaction Rules

- Use `Button`, `Field`, `InputGroup`, `NativeSelect`, `ButtonGroup`, `Item`, `Empty`, `Breadcrumb`, `Command`, `Tabs`, `Table`, `Alert`, `Dialog`, `Tooltip`, and `Sonner` before raw controls.
- Keep top navigation link-only: Home, Athletes, Clubs, Coaches, and Events. Search/jump controls belong in page content, not the shell.
- Links must have accessible names. Directory cards should expose the entity name in the link label.
- Filters and tab state should stay URL-addressable when they affect shareable product state.
- Use clear empty states and inline error/validation messages. Do not leave blank panels.
- Icon-only controls require `aria-label`; decorative icons require `aria-hidden`.
- Honor reduced motion. Animate only transform and opacity.

## Route Patterns

- Homepage: minimal command hub, not a splash page. Lead with one headline, compact search/jump, core path links, and only the most useful next-event context.
- Athlete, club, coach, and event directories: compact header, URL-addressable filters, count, empty state, and dense named result rows.
- Detail pages: shared pattern of back link, compact hero, 2-4 key facts, then the highest-value sections only.
- Athlete details: performance proof, results timeline, club relationship, and coach relationship.
- Club details: roster, coaches, schedule/location, and contact.
- Coach details: credentials, athletes coached, club relationship, and contact.
- Event details: event facts, event list, results, and athlete deep links.
- Legacy public routes such as rankings, competitions, membership, signup, sponsors, demos, dashboards, search, recognition, data portal, profile, and changelog redirect into the closest core route.

## Verification Expectations

- Run `pnpm data:check` after data-facing work.
- Run `pnpm build` after implementation.
- Run Playwright flow/design checks for major UI changes.
- Use agent-browser for desktop/mobile screenshots and snapshots when reviewing the live UX.
