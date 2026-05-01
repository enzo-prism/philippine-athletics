import Link from "next/link"
import { Search } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreDirectoryHeader, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { clubs } from "@/lib/data/clubs"

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

export default async function ClubsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const query = getParam(resolvedSearchParams, "q").trim()
  const term = query.toLowerCase()
  const filteredClubs = term
    ? clubs.filter((club) =>
        [
          club.name,
          club.focus,
          club.location,
          String(club.founded),
          String(club.spots),
          club.website?.label,
          club.website?.href,
          ...(club.socialLinks?.flatMap((link) => [link.platform, link.handle, link.href]) ?? []),
        ]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(term)),
      )
    : clubs

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreDirectoryHeader title="Clubs" count={filteredClubs.length} total={clubs.length} />

        <form method="get" className="core-filter-bar">
          <FieldGroup className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <Field>
              <FieldLabel htmlFor="club-query" className="sr-only">
                Search clubs
              </FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <Search aria-hidden="true" />
                </InputGroupAddon>
                <InputGroupInput id="club-query" name="q" type="search" defaultValue={query} placeholder="Search clubs" />
              </InputGroup>
            </Field>
            <ButtonGroup className="w-full sm:w-fit">
              <Button type="submit">Search</Button>
              {query ? (
                <Button asChild variant="ghost">
                  <Link href="/clubs">Reset</Link>
                </Button>
              ) : null}
            </ButtonGroup>
          </FieldGroup>
        </form>

        <CoreSection title="Club results">
          {filteredClubs.length ? (
            <div className="core-list">
              {filteredClubs.map((club) => (
                <CoreResultRow
                  key={club.id}
                  href={`/clubs/${club.slug ?? club.id}`}
                  eyebrow={club.isRecognized ? "Recognized club" : "Club"}
                  title={club.name}
                  description={club.focus}
                  facts={[club.location, `Founded ${club.founded}`, `${club.spots} spots`]}
                  meta="Open club"
                />
              ))}
            </div>
          ) : (
            <EmptyState title="No clubs found" description="Try a different city, event focus, club name, or capacity term." />
          )}
        </CoreSection>
      </main>

      <AppFooter />
    </div>
  )
}
