import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ClipboardList,
  Medal,
  Search,
  ShieldCheck,
  Trophy,
} from "lucide-react"

import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { PageIntro, AppFooter } from "@/components/site/page-primitives"
import { athleteSummaries } from "@/lib/data/athletes"
import { clubs } from "@/lib/data/clubs"
import { competitions } from "@/lib/data/competitions"
import { coaches } from "@/lib/data/coaches"

const quickStats = [
  { label: "Athletes", value: athleteSummaries.length, note: "Profiles with result context" },
  { label: "Clubs", value: clubs.length, note: "Training environments and rosters" },
  { label: "Coaches", value: coaches.length, note: "Verified specialties and affiliations" },
  { label: "Competitions", value: competitions.length, note: "Sanctioned meets and calendars" },
]

const taskLinks = [
  {
    href: "/search",
    label: "Search the directory",
    description: "Jump straight to athletes, clubs, coaches, and IDs.",
    icon: Search,
  },
  {
    href: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025",
    label: "Open rankings",
    description: "See the current season leaders with ranking context preserved.",
    icon: Trophy,
  },
  {
    href: "/competitions",
    label: "Browse competitions",
    description: "Track sanctioned meets, fixtures, and recent results.",
    icon: CalendarDays,
  },
  {
    href: "/data-portal",
    label: "Use data portal",
    description: "Upload, map, validate, and preview results intake.",
    icon: ClipboardList,
  },
]

const liveSurfaces = [
  {
    title: "Featured athlete",
    value: athleteSummaries[0]?.name ?? "Athlete spotlight",
    description: athleteSummaries[0]?.specialty ?? "National performance profile",
    href: athleteSummaries[0]?.href ?? "/athletes",
    icon: Medal,
  },
  {
    title: "Featured club",
    value: clubs[0]?.name ?? "Club directory",
    description: clubs[0]?.focus ?? "Club profile and roster",
    href: clubs[0]?.slug ? `/clubs/${clubs[0].slug}` : "/clubs",
    icon: Building2,
  },
  {
    title: "Recognition",
    value: "Safe sport and trust",
    description: "Verification signals for clubs, coaches, and governance.",
    href: "/recognition",
    icon: ShieldCheck,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Philippine Athletics workspace"
          title="One clean system for search, rankings, and results."
          description="Find athletes, verify competition context, and move from directory search to rankings and intake workflows without switching mental models."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/search">
                  Search directory
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/membership">Membership</Link>
              </Button>
            </>
          }
          stats={quickStats}
          aside={
            <DemoAdSlot
              slotId="home-inline-leaderboard-1"
              format="mrec"
              variant="spotlight"
              preferBannerCreative
            />
          }
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div className="space-y-2">
              <p className="brand-eyebrow">Common tasks</p>
              <h2 className="section-title">Move through the product by job, not by silo</h2>
            </div>
            <p className="section-copy">
              Search, rankings, competition lookup, and results intake should feel like one product surface with one
              visual language.
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {taskLinks.map((item) => (
              <Link key={item.href} href={item.href} className="home-action-card group">
                <span className="home-action-icon" aria-hidden="true">
                  <item.icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.description}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="section-toolbar">
            <div className="space-y-2">
              <p className="brand-eyebrow">Live surfaces</p>
              <h2 className="section-title">The core public routes should scan the same way</h2>
            </div>
            <p className="section-copy">
              Each route keeps its own job, but the product should feel continuous from discovery to profile depth.
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {liveSurfaces.map((item) => (
              <Link key={item.href} href={item.href} className="directory-card">
                <div className="directory-card-meta">
                  <item.icon className="size-4" aria-hidden="true" />
                  <span>{item.title}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.value}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="mt-auto text-sm font-medium text-muted-foreground">Open</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="page-section" data-testid="safe-sport-section">
          <div className="section-toolbar">
            <div className="space-y-2">
              <p className="brand-eyebrow">Safe sport</p>
              <h2 className="section-title">Trust signals stay close to the task</h2>
            </div>
            <p className="section-copy">
              Recognition, coaching credentials, and sanctioned-event context should support search and ranking
              workflows without turning the product into a compliance dashboard.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Recognized clubs",
                text: "Verified club pathways remain obvious in directory and recognition routes.",
              },
              {
                title: "Certified coaches",
                text: "Coach credentials are attached to profiles and decision points.",
              },
              {
                title: "Clear reporting",
                text: "Results intake stays structured, validated, and easy to audit.",
              },
            ].map((item) => (
              <div key={item.title} className="stat-tile">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
