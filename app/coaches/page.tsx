import Link from "next/link"
import { Search } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreDirectoryHeader, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { cleanCoachPublicText, coaches, getCoachPublicRole } from "@/lib/data/coaches"

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
          getCoachPublicRole(coach),
          coach.specialty,
          coach.location,
          coach.club,
          cleanCoachPublicText(coach.experience),
          ...(coach.alsoKnownAs ?? []),
          ...(coach.badges ?? []),
          ...(coach.profileFacts?.flatMap((fact) => [
            cleanCoachPublicText(fact.label),
            cleanCoachPublicText(fact.value),
            cleanCoachPublicText(fact.detail),
          ]) ?? []),
        ]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(term)),
      )
    : coaches

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreDirectoryHeader title="Coaches" count={filteredCoaches.length} total={coaches.length} />

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
                  title={coach.name}
                  description={`${getCoachPublicRole(coach)} · ${coach.club}`}
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
