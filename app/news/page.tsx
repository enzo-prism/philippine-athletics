import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AthleticsIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro, PageSection } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { athleteSummaries } from "@/lib/data/athletes"
import { competitions } from "@/lib/data/competitions"
import { federationStories } from "@/lib/data/federation"

export default function NewsPage() {
  const featuredAthlete = athleteSummaries[0]
  const upcomingEvent = competitions.find((competition) => competition.status === "Upcoming") ?? competitions[0]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="News and stories"
          title="Make the sport feel alive between events."
          description="USATF uses news, videos, athlete features, and event updates to keep fans and stakeholders connected. This page creates the same editorial surface for Philippine Athletics without requiring a full CMS yet."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/events">
                  Upcoming events
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/athletes">Athlete bios</Link>
              </Button>
            </>
          }
          stats={[
            { label: "Story lanes", value: federationStories.length, note: "Rankings, events, and pathway updates" },
            { label: "Featured athlete", value: featuredAthlete?.name ?? "Profile", note: featuredAthlete?.specialty ?? "Athlete spotlight" },
            { label: "Next event", value: upcomingEvent?.dateLabel ?? "TBD", note: upcomingEvent?.name ?? "Calendar update" },
          ]}
        />

        <PageSection
          eyebrow="Federation updates"
          title="Story cards connected to live product surfaces"
          description="Each story routes to a real app surface, so editorial moments reinforce tasks instead of becoming dead-end announcements."
        >
          <div className="grid gap-3 lg:grid-cols-3">
            {federationStories.map((story) => (
              <Link key={story.title} href={story.href} className="directory-card group">
                <div className="directory-card-meta">
                  <AthleticsIcon name={story.icon} className="size-4" aria-hidden="true" />
                  <span>{story.category}</span>
                </div>
                <h2 className="text-lg font-semibold tracking-normal text-foreground group-hover:text-primary">
                  {story.title}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">{story.summary}</p>
                <div className="mt-auto text-sm font-medium text-muted-foreground">Read update</div>
              </Link>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Featured moments"
          title="Athletes and events should carry the federation voice"
          description="These cards can later become CMS-driven news, video, and social proof modules."
        >
          <div className="grid gap-3 md:grid-cols-2">
            <Link href={featuredAthlete?.href ?? "/athletes"} className="directory-card">
              <div className="directory-card-meta">
                <AthleticsIcon name="athlete" className="size-4" aria-hidden="true" />
                <span>Athlete feature</span>
              </div>
              <h2 className="text-lg font-semibold tracking-normal text-foreground">
                {featuredAthlete?.name ?? "Athlete spotlight"}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Profile, result context, ranking links, and sponsor moments can form the core of a recurring athlete
                feature series.
              </p>
            </Link>

            <Link href={upcomingEvent ? `/competitions/${upcomingEvent.slug}` : "/events"} className="directory-card">
              <div className="directory-card-meta">
                <AthleticsIcon name="competition" className="size-4" aria-hidden="true" />
                <span>Event feature</span>
              </div>
              <h2 className="text-lg font-semibold tracking-normal text-foreground">
                {upcomingEvent?.name ?? "Upcoming event"}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Calendar entries can carry registration, selection, results, sponsor, and media context in one place.
              </p>
            </Link>
          </div>
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
