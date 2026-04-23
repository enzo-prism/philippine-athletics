import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { AthleticsIcon, type AthleticsIconName } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro, PageSection } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import {
  disciplines,
  federationIdentity,
  federationPillars,
  federationStories,
  safetyResourceGroups,
  sponsorCategories,
} from "@/lib/data/federation"
import { athleteSummaries } from "@/lib/data/athletes"
import { clubs } from "@/lib/data/clubs"
import { competitions } from "@/lib/data/competitions"
import { coaches } from "@/lib/data/coaches"
import { membershipPathways } from "@/lib/data/membership-pathways"

const federationStats = [
  { label: "Athletes", value: athleteSummaries.length, note: "Profiles with result context" },
  { label: "Clubs", value: clubs.length, note: "Recognized training environments" },
  { label: "Events", value: competitions.length, note: "Calendar and result surfaces" },
  { label: "Pathways", value: membershipPathways.length, note: "Youth, adult, club, and LGU routes" },
]

const taskLinks = [
  {
    href: "/events",
    label: "Find events and results",
    description: "Track sanctioned meets, recent results, registration moments, and calendar context.",
    icon: "competition",
  },
  {
    href: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025",
    label: "Follow national rankings",
    description: "See season leaders with event, gender, age group, year, and source context preserved.",
    icon: "rankings",
  },
  {
    href: "/athletes",
    label: "Explore athlete bios",
    description: "Open athlete summaries, result evidence, sponsor links, and related profiles.",
    icon: "athlete",
  },
  {
    href: "/membership",
    label: "Choose a pathway",
    description: "Match athletes, clubs, LGUs, coaches, and supporters to the right entry point.",
    icon: "membership",
  },
  {
    href: "/data-portal",
    label: "Submit results",
    description: "Upload, map, validate, and preview results before local-only publication.",
    icon: "data",
  },
  {
    href: "/safe-sport",
    label: "Review Safe Sport",
    description: "Keep athlete welfare, youth privacy, and credential signals close to the work.",
    icon: "recognition",
  },
] satisfies Array<{ href: string; label: string; description: string; icon: AthleticsIconName }>

export default function Home() {
  const featuredAthlete = athleteSummaries[0]
  const featuredClub = clubs[0]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Philippine Athletics"
          title={federationIdentity.headline}
          description={federationIdentity.subhead}
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/events">
                  Open events
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/membership">Join the pathway</Link>
              </Button>
            </>
          }
          stats={federationStats}
          aside={
            <DemoAdSlot
              slotId="home-federation-spotlight"
              format="mrec"
              variant="spotlight"
              label="Official partner"
              preferBannerCreative
            />
          }
        />

        <section className="rounded-lg border border-primary/15 bg-primary px-5 py-5 text-primary-foreground shadow-[var(--shadow-soft)] sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-center">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-normal text-primary-foreground/70">
                National federation signal
              </p>
              <h2 className="text-2xl font-semibold tracking-normal text-balance">{federationIdentity.rally}</h2>
            </div>
            <p className="text-sm leading-6 text-primary-foreground/78">{federationIdentity.mission}</p>
          </div>
        </section>

        <PageSection
          eyebrow="What we do"
          title="A public athletics hub plus an operating layer"
          description="USATF's strongest pattern is that every page reinforces the organization behind the sport. This version keeps Philippine Athletics useful for daily work while making the federation role unmistakable."
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {federationPillars.map((pillar) => (
              <article key={pillar.title} className="directory-card">
                <span className="athletics-icon-tile" aria-hidden="true">
                  <AthleticsIcon name={pillar.icon} className="size-5" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold tracking-normal text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Command surface"
          title="Move by federation job, not by database silo"
          description="The first screen now points people toward the same jobs USATF foregrounds: find events, follow athletes, understand membership, support clubs, protect athletes, and grow the sport."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {taskLinks.map((item) => (
              <Link key={item.href} href={item.href} className="home-action-card group">
                <span className="home-action-icon" aria-hidden="true">
                  <AthleticsIcon name={item.icon} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{item.description}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Live federation surfaces"
          title="News, athlete proof, and upcoming moments should feel current"
          description="USATF uses news, athlete cards, videos, and events to make the site feel alive. Philippine Athletics can do that with the data already in this app."
        >
          <div className="grid gap-3 lg:grid-cols-3">
            {federationStories.map((story) => (
              <Link key={story.title} href={story.href} className="directory-card group">
                <div className="directory-card-meta">
                  <AthleticsIcon name={story.icon} className="size-4" aria-hidden="true" />
                  <span>{story.category}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-normal text-foreground group-hover:text-primary">
                    {story.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">{story.summary}</p>
                </div>
                <div className="mt-auto text-sm font-medium text-muted-foreground">Open surface</div>
              </Link>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <Link
              href={featuredAthlete?.href ?? "/athletes"}
              className="directory-card"
              aria-label={`Open featured athlete ${featuredAthlete?.name ?? "profile"}`}
            >
              <div className="directory-card-meta">
                <AthleticsIcon name="medal" className="size-4" aria-hidden="true" />
                <span>Featured athlete</span>
              </div>
              <h3 className="text-lg font-semibold tracking-normal text-foreground">
                {featuredAthlete?.name ?? "Athlete spotlight"}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {featuredAthlete?.specialty ?? "National performance profile"} with ranking, competition, and sponsor
                context.
              </p>
            </Link>

            <Link
              href={featuredClub?.slug ? `/clubs/${featuredClub.slug}` : "/clubs"}
              className="directory-card"
              aria-label={`Open featured club ${featuredClub?.name ?? "profile"}`}
            >
              <div className="directory-card-meta">
                <AthleticsIcon name="club" className="size-4" aria-hidden="true" />
                <span>Featured club</span>
              </div>
              <h3 className="text-lg font-semibold tracking-normal text-foreground">
                {featuredClub?.name ?? "Club directory"}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {featuredClub?.focus ?? "Club profile and roster"} connected to athletes, coaching, and pathway proof.
              </p>
            </Link>
          </div>
        </PageSection>

        <PageSection
          eyebrow="Disciplines"
          title="Give each sport pathway a home"
          description="Discipline pages help the site feel like a federation, not only a directory. They also give events, rankings, clubs, and education a better place to connect."
          actions={
            <Button asChild variant="outline" size="sm">
              <Link href="/disciplines">
                View all disciplines
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          }
        >
          <div className="grid gap-3 md:grid-cols-3">
            {disciplines.slice(0, 3).map((discipline) => (
              <Link key={discipline.slug} href={`/disciplines#${discipline.slug}`} className="directory-card">
                <div className="directory-card-meta">
                  <AthleticsIcon name={discipline.icon} className="size-4" aria-hidden="true" />
                  <span>{discipline.name}</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{discipline.summary}</p>
                <div className="mt-auto text-sm font-medium text-muted-foreground">Open discipline</div>
              </Link>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Safe Sport"
          title="Protecting athletes is part of the product, not a footer link"
          description="USATF separates Safe Sport resources by audience. Philippine Athletics should do the same while keeping youth privacy and operational reporting visible near real tasks."
          actions={
            <Button asChild variant="outline" size="sm">
              <Link href="/safe-sport">
                Safe Sport resources
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          }
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {safetyResourceGroups.slice(0, 3).map((group) => (
              <div key={group.audience} className="stat-tile">
                <div className="directory-card-meta">
                  <AthleticsIcon name={group.icon} className="size-4" aria-hidden="true" />
                  <span>{group.audience}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Partners"
          title="Sponsor visibility should feel official and intentional"
          description="Partners can be shown as official sponsors, suppliers, technology partners, and community partners, so support feels like part of the federation ecosystem instead of an ad block."
          actions={
            <Button asChild variant="outline" size="sm">
              <Link href="/sponsors">
                Partner directory
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          }
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {sponsorCategories.map((category) => (
              <article key={category.name} className="stat-tile">
                <p className="text-sm font-semibold text-foreground">{category.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
              </article>
            ))}
          </div>
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
