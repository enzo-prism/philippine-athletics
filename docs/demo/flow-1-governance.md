# Flow 1: Governance (PATAFA / Philom Sports)

Updated: 2026-03-01

## Goal
Show trusted athlete identity, result traceability, and ranking governance in a controlled route lock.

## Route Script
1. Open `/demo/governance`.
2. Search one of the 5 curated athletes using membership number on `/search`.
3. Open athlete profile and confirm PB, latest result, and rank evidence come from competition-linked records.
4. Open `/rankings` and verify ranking-to-profile consistency using full context (`event`, `year`, `gender`, `ageGroup`).
5. From rankings, open a profile and use “Back to this ranking slice” to confirm context fidelity.
6. Close on `/how-it-works` to show institutional data and authority flow.

## Proof Points
- Membership-number lookup is active.
- Rankings and athlete records are linked by strict context filters (no context-loss hops).
- Profile rank cards show explicit unranked state for unmatched strict contexts instead of stale rank values.
- Guard rails prevent off-script navigation.
