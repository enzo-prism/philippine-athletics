import Link from "next/link"
import { Search } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { coaches } from "@/lib/data/coaches"

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

export default async function CoachesPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const query = getParam(resolvedSearchParams, "q").trim()
  const term = query.toLowerCase()
  const filteredCoaches = term
    ? coaches.filter((coach) =>
        [
          coach.name,
          coach.role,
          coach.specialty,
          coach.location,
          coach.club,
          coach.experience,
          coach.evidenceLevel,
          ...(coach.alsoKnownAs ?? []),
          ...(coach.badges ?? []),
          ...(coach.profileFacts?.flatMap((fact) => [fact.label, fact.value, fact.detail]) ?? []),
        ]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(term)),
      )
    : coaches

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreHero
          eyebrow="Coaches"
          title="Find the coach record."
          description="Search coaches by name, specialty, club, city, credential, or evidence level."
          stats={[{ label: "Showing", value: `${filteredCoaches.length} of ${coaches.length}` }]}
        />

        <form method="get" className="core-filter-bar">
          <FieldGroup className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <Field>
              <FieldLabel htmlFor="coach-query" className="sr-only">
                Search coaches
              </FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <Search aria-hidden="true" />
                </InputGroupAddon>
                <InputGroupInput id="coach-query" name="q" type="search" defaultValue={query} placeholder="Search coaches" />
              </InputGroup>
            </Field>
            <ButtonGroup className="w-full sm:w-fit">
              <Button type="submit">Search</Button>
              {query ? (
                <Button asChild variant="ghost">
                  <Link href="/coaches">Reset</Link>
                </Button>
              ) : null}
            </ButtonGroup>
          </FieldGroup>
        </form>

        <CoreSection title="Coach results">
          {filteredCoaches.length ? (
            <div className="core-list">
              {filteredCoaches.map((coach) => (
                <CoreResultRow
                  key={coach.id}
                  href={`/coaches/${coach.slug ?? coach.id}`}
                  eyebrow={coach.isRecognized ? "Recognized coach" : "Coach"}
                  title={coach.name}
                  description={`${coach.role ?? coach.specialty} · ${coach.club}`}
                  facts={[coach.location, coach.evidenceLevel ? `${coach.evidenceLevel} evidence` : coach.badges?.[0] ?? "Credentialed"]}
                  meta="Open coach"
                />
              ))}
            </div>
          ) : (
            <EmptyState title="No coaches found" description="Try a different name, specialty, club, city, or credential." />
          )}
        </CoreSection>
      </main>

      <AppFooter />
    </div>
  )
}
