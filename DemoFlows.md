# Philippine Athletics Demo Flow Index

Updated: 2026-02-26

## Required Audience Scripts
1. Governance: [docs/demo/flow-1-governance.md](/Users/enzo/pa/docs/demo/flow-1-governance.md)
2. Institutions: [docs/demo/flow-2-institutions.md](/Users/enzo/pa/docs/demo/flow-2-institutions.md)
3. LGUs: [docs/demo/flow-3-lgus.md](/Users/enzo/pa/docs/demo/flow-3-lgus.md)

## Runtime Rules
- Launch flows from `/demo`.
- Demo cookie `pa_demo_flow` activates strict route lock middleware.
- Off-script routes are redirected to `/demo/off-script`.

## Demo Identity Scope
- Search in demo mode is intentionally limited to 5 curated athletes.
- Membership-number lookup is enabled for these athletes.

## Results Intake Scope
- CSV-only uploads in this phase.
- Publish remains demo-local and browser-scoped.
- Sanctioned-event gate blocks unsanctioned competition names.
