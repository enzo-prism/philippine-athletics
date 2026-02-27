# Flow 2: Institutions (Department of Education / PSC / POC)

Updated: 2026-02-26

## Goal
Demonstrate institutional oversight: sanctioned intake, data quality checks, and accountable demo publishing.

## Route Script
1. Open `/demo/institutions`.
2. Navigate to `/data-portal`.
3. Upload CSV sample and confirm field mapping includes `membershipNumber`.
4. Show validation and sanctioned-event gate in review.
5. Publish to demo-local log and download JSON evidence.

## Proof Points
- CSV-only policy is enforced.
- Unsanctioned event names are blocked from publish.
- Publish is explicitly demo-local (no durable backend write).
