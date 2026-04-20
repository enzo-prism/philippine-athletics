import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { competitions } from "@/lib/data/competitions"

const statusOptions = ["Upcoming", "Past", "All"] as const

type StatusFilter = (typeof statusOptions)[number]

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const normalizeStatus = (value: string): StatusFilter =>
  statusOptions.includes(value as StatusFilter) ? (value as StatusFilter) : "Upcoming"

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const statusFilter = normalizeStatus(getParam(resolvedSearchParams, "status"))
  const filtered =
    statusFilter === "All" ? competitions : competitions.filter((competition) => competition.status === statusFilter)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Events calendar"
          title="Keep sanctioned events visible without losing the product rhythm."
          description="Browse upcoming and completed athletics events from the same clean workspace language used across search, rankings, and competition profiles."
          stats={[
            { label: "Current view", value: statusFilter, note: "Filter upcoming, past, or all events" },
            { label: "Events shown", value: filtered.length, note: "Live calendar entries in this route" },
          ]}
          actions={
            <>
              <div className="flex flex-wrap gap-3 text-sm">
                {statusOptions.map((status) => {
                  const active = statusFilter === status
                  const href = status === "Upcoming" ? "/events" : `/events?status=${encodeURIComponent(status)}`

                  return (
                    <Button
                      key={status}
                      asChild
                      type="button"
                      variant={active ? "secondary" : "outline"}
                      size="sm"
                      className="font-semibold"
                    >
                      <Link href={href}>{status}</Link>
                    </Button>
                  )
                })}
              </div>
              <Button asChild size="sm" variant="ghost">
                <Link href="/competitions">
                  Open competitions
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </>
          }
          aside={<DemoAdSlot slotId="events-inline-leaderboard-1" format="mrec" variant="spotlight" />}
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div className="space-y-2">
              <p className="brand-eyebrow">Event list</p>
              <h2 className="section-title">Calendar view</h2>
            </div>
            <p className="section-copy">
              `/events` remains a dedicated calendar route while reusing the same sponsor, layout, and scanning patterns
              as the wider public app.
            </p>
          </div>

          <div className="mt-6 grid gap-3" data-testid="events-list">
            {filtered.map((competition) => (
              <Link
                key={competition.id}
                href={`/competitions/${competition.slug}`}
                className="directory-card"
                aria-label={competition.name}
              >
                <div className="directory-card-meta">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <span>{competition.type}</span>
                  <span>{competition.status}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{competition.name}</h3>
                  <p className="text-sm text-muted-foreground">{competition.location}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>{competition.dateLabel}</span>
                  <span>{competition.organizer}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <DemoAdSlot slotId="events-inline-mrec-1" format="mrec" variant="inline" />
            <DemoAdSlot
              slotId="events-inline-mrec-2"
              format="mrec"
              variant="inline"
              className="hidden sm:block"
            />
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
