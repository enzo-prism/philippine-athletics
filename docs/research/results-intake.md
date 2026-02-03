# Results Intake Research + Plan (TrackPH)

Date: 2026-02-03

## Research Summary (Why this workflow)

### 1) Results need fast, standardized submission to be useful
World Athletics requires results to be submitted quickly after a competition, and late submissions may not be accepted. The submission process also expects key competition metadata and the results themselves to be provided by an official contact. This informs a workflow where uploads are time-bound, structured, and tied to a responsible submitter.

### 2) Official results rely on compliant timing/wind measurement
World Athletics rules note that competitions must use fully automatic timing and wind measurement for track events in order to be eligible for official ranking/record systems. This means data entry should capture wind readings and timing standards for relevant events, or explicitly mark when wind data is unavailable.

### 3) Results tables show consistent fields we should capture
Official results pages consistently include event, round, wind, place, athlete name, birth year, country/affiliation, and mark/time. These fields inform the minimum viable schema for intake.

### 4) CSV is a practical intake format—but needs clear rules
RFC 4180 and the Library of Congress format description define CSV expectations: consistent fields per row, optional header rows, and quoting rules. This justifies using a CSV template plus a parser that handles quotes and newlines.

### 5) Validation UX should be explicit and non‑destructive
Government design guidance emphasizes clear error messages and keeping user input intact when validation fails. This motivates an intake flow that surfaces issues without losing the upload.

## What This Means for TrackPH

We will build a front-end-only “Results Intake” portal that supports two roles:
- **Contributor**: can submit results for review (demo flow).
- **Certified Data Steward**: can approve and “publish” to the demo data store.

Because this is a demo, “publish” will write to local browser storage and show previews. It will not update server-side data or the rest of the site until a future backend exists.

## Implementation Status (as of 2026-02-03)
- Results Intake portal exists at `/data-portal`.
- CSV/TSV upload, header mapping, validation, and review flows are implemented.
- Local-only submissions are stored in browser storage with a JSON export option.
- Preview tooling shows competition, athlete, and rankings sandbox views.

## Proposed Data Schema (MVP)

**Competition metadata**
- `name` (required)
- `location` (required)
- `startDate`, `endDate` (required)
- `organizer` (required)
- `type` (optional, e.g., National / Regional)
- `status` (Past / Upcoming)
- `source` (Demo data / World Athletics)

**Result row**
- `event` (required)
- `round` (optional)
- `athleteName` (required)
- `athleteId` (optional)
- `result` (required)
- `place` (required)
- `wind` (optional but recommended for 100m/200m/100/110H/Long Jump/Triple Jump)
- `note` (optional: SB/PB/NWI/DQ/DNF/DNS)

## Validation Rules (MVP)
- Required fields must be present; missing required fields block submission.
- `result` must parse as time or distance; if not, flagged.
- `wind` required for wind‑affected events; missing wind is a warning (still allows submission).
- Unknown `athleteId` or `athleteName` is a warning (system will create a stub in a future backend).
- Duplicate rows (same event, athlete, result, date) are flagged.

## Intake Flow (Demo UX)

1. **Upload**
   - Upload CSV or paste a table.
   - Provide a template and a “Use sample data” button.

2. **Map fields**
   - Map CSV headers to required fields.
   - Auto‑map based on header names when possible.

3. **Validate**
   - Show error summary + row‑level issues.
   - Warn for missing wind, unknown athletes, and duplicates.

4. **Review & submit**
   - Display a grouped preview by event.
   - Show impact previews for athlete pages and rankings.
   - Render sandbox previews for competition, athlete, and rankings pages.
   - Contributors submit to review queue.
   - Certified data stewards publish to demo storage.

## Planned Implementation (Front-End Only)

### Phase 1 — Results Intake Portal (Done)
- `/data-portal` route with a multi-step intake wizard.
- Local parsing (CSV/TSV) using an RFC 4180‑style parser.
- Validation + preview + local “publish” (browser storage).
- Audit list of previous submissions.

### Phase 2 — Data Visibility (Done)
- Preview mode shows how rankings and athlete pages would change.
- Competition page sandbox preview renders uploaded results.

### Phase 3 — Patch Export (Next)
- Export a JSON or TS patch to let maintainers merge into `lib/data/`.

### Phase 4 — Backend Integration (Later)
- Auth, role-based access, and server-side storage.
- Verified data merges into competitions/athletes/rankings.

## Sources

- World Athletics: Appendix A — Rules for the submission of results
  https://www.worldathletics.org/download/download?filename=649a5022-6cfa-4fdd-8cb5-5b3862f4c340.pdf&urlslug=appAppendixA
- World Athletics: World Ranking Rules (wind adjustments)
  https://www.worldathletics.org/records/world-ranking-rules
- World Athletics: Official results example (wind + rounds + marks)
  https://worldathletics.org/competition/calendar-results/results/7193359
- RFC 4180: CSV format
  https://www.rfc-editor.org/rfc/rfc4180
- Library of Congress: CSV format description
  https://www.loc.gov/preservation/digital/formats/fdd/fdd000323.shtml
- GOV.UK Design System: Error message guidance
  https://design-system.service.gov.uk/components/error-message/
