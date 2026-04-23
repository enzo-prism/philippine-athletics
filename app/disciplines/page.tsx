import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AthleticsIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro, PageSection } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { disciplines } from "@/lib/data/federation"

export default function DisciplinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Disciplines"
          title="Every athletics pathway needs a home."
          description="USATF uses discipline pages to connect education, events, national teams, and resources. Philippine Athletics can use the same structure for Filipino athletes, clubs, coaches, and organizers."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/events">
                  Find events
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/rankings">Open rankings</Link>
              </Button>
            </>
          }
          stats={[
            { label: "Discipline hubs", value: disciplines.length, note: "Track, road, walk, country, and para routes" },
            { label: "Primary use", value: "Pathways", note: "Events, rankings, education, and team context" },
          ]}
        />

        <PageSection
          eyebrow="Sport pathways"
          title="Connect each discipline to events, records, and people"
          description="These are intentionally compact now; each can grow into a deeper page when the federation has official copy, staff contacts, records, rules, or qualification standards ready."
        >
          <div className="grid gap-4">
            {disciplines.map((discipline) => (
              <article
                key={discipline.slug}
                id={discipline.slug}
                className="rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="athletics-icon-tile" aria-hidden="true">
                        <AthleticsIcon name={discipline.icon} className="size-5" />
                      </span>
                      <div>
                        <p className="brand-eyebrow">Discipline</p>
                        <h2 className="text-2xl font-semibold tracking-normal text-foreground">{discipline.name}</h2>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{discipline.summary}</p>
                    <p className="rounded-lg border border-border bg-background/76 p-4 text-sm leading-6 text-muted-foreground">
                      <span className="font-semibold text-foreground">Pathway: </span>
                      {discipline.pathway}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border bg-background/76 p-4">
                      <p className="brand-eyebrow">Event examples</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {discipline.events.map((event) => (
                          <Badge key={event} variant="outline" className="bg-card">
                            {event}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-border bg-background/76 p-4">
                      <p className="brand-eyebrow">Connected resources</p>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {discipline.resources.map((resource) => (
                          <li key={resource} className="flex items-start gap-2">
                            <AthleticsIcon name="check" className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
