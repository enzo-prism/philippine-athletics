import Link from "next/link"
import { Search } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreDirectoryHeader, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { athleteSummaries, type AthleteSummary } from "@/lib/data/athletes"

const regionOptions = ["All", "Metro Manila", "Luzon", "Visayas", "Mindanao"] as const
const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "National rank", value: "national_rank" },
  { label: "Personal best", value: "personal_best" },
  { label: "Name", value: "name" },
] as const

const eventOptions = [
  "All",
  ...Array.from(new Set(athleteSummaries.flatMap((athlete) => athlete.events ?? [athlete.specialty]))).sort(),
]

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const classifyRegion = (location: string) => {
  const lower = location.toLowerCase()
  if (["manila", "pasig", "quezon city", "ncr", "makati", "taguig"].some((city) => lower.includes(city))) {
    return "Metro Manila"
  }
  if (["cebu", "iloilo", "visayas"].some((city) => lower.includes(city))) return "Visayas"
  if (["davao", "mindanao", "cagayan de oro"].some((city) => lower.includes(city))) return "Mindanao"
  return "Luzon"
}

const parseRank = (rank: string | number | undefined) => {
  if (rank === undefined || rank === null || rank === "") return Number.POSITIVE_INFINITY
  if (typeof rank === "number") return rank
  const match = rank.match(/#?(\d+)/)
  return match ? Number.parseInt(match[1], 10) : Number.POSITIVE_INFINITY
}

const formatRank = (rank?: string | number) => {
  if (rank === undefined || rank === null || rank === "") return "Unranked"
  const value = typeof rank === "number" ? String(rank) : rank.replace("#", "")
  return `#${value}`
}

const parsePerformance = (value: string | undefined) => {
  if (!value) return Number.POSITIVE_INFINITY
  const cleaned = value.toLowerCase().replace("s", "")
  if (cleaned.includes(":")) {
    const parts = cleaned.split(":").map((part) => Number.parseFloat(part))
    return parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts[0] * 60 + parts[1]
  }
  return Number.parseFloat(cleaned) || Number.POSITIVE_INFINITY
}

const filterAthletes = ({
  query,
  region,
  event,
  sort,
}: {
  query: string
  region: string
  event: string
  sort: string
}) => {
  const term = query.toLowerCase()
  const filtered = athleteSummaries.filter((athlete) => {
    const events = athlete.events ?? []
    const matchesQuery =
      !term ||
      [athlete.name, athlete.specialty, athlete.club, athlete.coach, athlete.location, athlete.membershipNumber]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(term)) ||
      events.some((item) => item.toLowerCase().includes(term))

    const matchesRegion = region === "All" || classifyRegion(athlete.location) === region
    const matchesEvent = event === "All" || events.includes(event)
    return matchesQuery && matchesRegion && matchesEvent
  })

  if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  if (sort === "national_rank") return [...filtered].sort((a, b) => parseRank(a.nationalRank) - parseRank(b.nationalRank))
  if (sort === "personal_best") return [...filtered].sort((a, b) => parsePerformance(a.pb) - parsePerformance(b.pb))
  return filtered
}

const athleteFacts = (athlete: AthleteSummary) =>
  [
    athlete.pb ? `PB ${athlete.pb}` : null,
    athlete.nationalRank ? `PH ${formatRank(athlete.nationalRank)}` : null,
    athlete.events?.[0],
  ].filter(Boolean) as string[]

export default async function AthletesPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const query = getParam(resolvedSearchParams, "q").trim()
  const region = regionOptions.includes(getParam(resolvedSearchParams, "region") as (typeof regionOptions)[number])
    ? getParam(resolvedSearchParams, "region")
    : "All"
  const event = eventOptions.includes(getParam(resolvedSearchParams, "event")) ? getParam(resolvedSearchParams, "event") : "All"
  const sort = sortOptions.some((option) => option.value === getParam(resolvedSearchParams, "sort"))
    ? getParam(resolvedSearchParams, "sort")
    : "relevance"
  const athletes = filterAthletes({ query, region, event, sort })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreDirectoryHeader title="Athletes" count={athletes.length} total={athleteSummaries.length} />

        <form method="get" className="core-filter-bar">
          <FieldGroup className="core-filter-grid !grid">
            <Field>
              <FieldLabel htmlFor="athlete-query" className="sr-only">
                Search athletes
              </FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <Search aria-hidden="true" />
                </InputGroupAddon>
                <InputGroupInput id="athlete-query" name="q" type="search" defaultValue={query} placeholder="Search athletes" />
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="athlete-event" className="sr-only">
                Event
              </FieldLabel>
              <NativeSelect id="athlete-event" name="event" defaultValue={event} aria-label="Event">
              {eventOptions.map((option) => (
                <NativeSelectOption key={option} value={option}>
                  {option}
                </NativeSelectOption>
              ))}
              </NativeSelect>
            </Field>
            <Field>
              <FieldLabel htmlFor="athlete-region" className="sr-only">
                Region
              </FieldLabel>
              <NativeSelect id="athlete-region" name="region" defaultValue={region} aria-label="Region">
              {regionOptions.map((option) => (
                <NativeSelectOption key={option} value={option}>
                  {option}
                </NativeSelectOption>
              ))}
              </NativeSelect>
            </Field>
            <Field>
              <FieldLabel htmlFor="athlete-sort" className="sr-only">
                Sort
              </FieldLabel>
              <NativeSelect id="athlete-sort" name="sort" defaultValue={sort} aria-label="Sort">
              {sortOptions.map((option) => (
                <NativeSelectOption key={option.value} value={option.value}>
                  {option.label}
                </NativeSelectOption>
              ))}
              </NativeSelect>
            </Field>
            <ButtonGroup className="w-full md:w-fit">
              <Button type="submit">Apply</Button>
              {query || region !== "All" || event !== "All" || sort !== "relevance" ? (
                <Button asChild variant="ghost">
                  <Link href="/athletes">Reset</Link>
                </Button>
              ) : null}
            </ButtonGroup>
          </FieldGroup>
        </form>

        <CoreSection title="Athlete results">
          {athletes.length ? (
            <div className="core-list">
              {athletes.map((athlete) => (
                <CoreResultRow
                  key={athlete.id}
                  href={athlete.href}
                  eyebrow={athlete.pathwayStage ?? "Athlete"}
                  title={athlete.name}
                  description={`${athlete.specialty} · ${athlete.club}`}
                  facts={athleteFacts(athlete)}
                  meta={athlete.location}
                />
              ))}
            </div>
          ) : (
            <EmptyState title="No athletes found" description="Adjust the search, event, region, or sort filter to widen the result set." />
          )}
        </CoreSection>
      </main>

      <AppFooter />
    </div>
  )
}
