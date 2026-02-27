import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Dumbbell,
  Footprints,
  Medal,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { DemoAdSlot } from "@/components/ads/DemoAdSlot";
import { OfficialPartnersPanel } from "@/components/home/OfficialPartnersPanel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { athleteSummaries } from "@/lib/data/athletes";
import { coaches } from "@/lib/data/coaches";
import { clubs } from "@/lib/data/clubs";
import { competitions } from "@/lib/data/competitions";
import { SectionBackground } from "@/components/SectionBackground";
import { TRACK_IMAGES } from "@/components/track-images";

const quickStats = [
  { label: "Clubs", value: clubs.length },
  { label: "Coaches", value: coaches.length },
  { label: "Athletes", value: athleteSummaries.length },
  { label: "Events", value: competitions.length },
];

const quickLinks = [
  {
    href: "/athletes",
    label: "Athletes",
    description: "Records, rankings, and profiles",
    icon: Footprints,
  },
  {
    href: "/coaches",
    label: "Coaches",
    description: "Mentors and training specialists",
    icon: Dumbbell,
  },
  {
    href: "/clubs",
    label: "Clubs",
    description: "Local teams across the country",
    icon: Building2,
  },
  {
    href: "/competitions",
    label: "Competitions",
    description: "Upcoming meets and official fixtures",
    icon: CalendarDays,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f8fb_0%,#eef1f6_100%)] text-foreground">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8 lg:py-10">
        <section className="home-hero-shell relative overflow-hidden border-l-4 border-l-accent">
          <SectionBackground
            imageUrl={TRACK_IMAGES.sprinterTeen}
            opacity={8}
            position="object-top"
            overlayClassName="absolute inset-0 bg-gradient-to-br from-background/85 via-background/92 to-background/95"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(130deg,rgba(15,39,69,0.08)_0%,rgba(15,39,69,0)_42%,rgba(181,18,43,0.06)_100%)]"
            aria-hidden="true"
          />

          <div className="home-hero-content relative z-10">
            <div className="grid gap-8 xl:grid-cols-[1.25fr_1fr]">
              <div className="space-y-5">
                <p className="institutional-kicker">
                  Philippine Athletics Platform
                </p>
                <h1 className="max-w-[13ch] text-5xl font-semibold leading-[0.95] text-primary sm:text-6xl lg:text-7xl font-accent">
                  One National System for Every Filipino Athlete
                </h1>
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                  From grassroots clubs to national champions, discover
                  athletes, verify sanctioned results, and align everyone on the
                  same official story.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary px-8 text-primary-foreground hover:bg-primary/92"
                  >
                    <Link href="/membership">
                      Become a Member
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/30 px-8 text-primary hover:bg-primary/10"
                  >
                    <Link href="/competitions">View Events</Link>
                  </Button>
                </div>
              </div>

              <OfficialPartnersPanel />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <Card className="border-border bg-card py-0">
                <CardContent className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="home-stat-chip">
                      <p className="text-3xl font-extrabold tracking-tight text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="home-panel-dark border-l-4 border-l-accent">
                <CardContent className="space-y-3 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <Zap className="h-3.5 w-3.5" />
                    Explore the network
                  </p>
                  <div className="space-y-1.5">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      Athletics Directory
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Jump directly to the teams, athletes, and events shaping
                      this season.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {quickLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="home-action-card group"
                      >
                        <span className="home-action-icon" aria-hidden="true">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-[11px] leading-snug text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden border-l-4 border-l-accent bg-card px-5 py-6 sm:px-7"
          data-testid="safe-sport-section"
        >
          <SectionBackground
            imageUrl={TRACK_IMAGES.shotput30s}
            opacity={6}
            overlayClassName="absolute inset-0 bg-gradient-to-r from-card/90 via-card/95 to-card/85"
          />
          <div className="relative z-10">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="space-y-2">
                <p className="institutional-kicker">Safe Sport</p>
                <h2 className="text-3xl font-semibold text-primary font-accent">
                  Athlete Safety Is Non-Negotiable
                </h2>
                <p className="text-sm text-muted-foreground">
                  Safe Sport standards are built into recognition, coaching
                  visibility, and institutional governance so families and
                  athletes can trust every pathway.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "Recognized Clubs",
                    text: "Only verified clubs and programs are highlighted for public discovery.",
                  },
                  {
                    title: "Certified Coaches",
                    text: "Coach credentials and compliance signals are surfaced where decisions are made.",
                  },
                  {
                    title: "Clear Reporting",
                    text: "Sanctioned event pathways support transparent and accountable results intake.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-border bg-background px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-2 grid gap-3">
          <DemoAdSlot
            slotId="home-inline-leaderboard-1"
            format="leaderboard"
            preferBannerCreative
          />
          <div className="sm:hidden">
            <DemoAdSlot slotId="home-inline-mobile-1" format="mobile" />
          </div>
        </section>

        <section className="home-feature-grid relative overflow-hidden">
          <SectionBackground
            imageUrl={TRACK_IMAGES.discus20s}
            opacity={5}
            overlayClassName="absolute inset-0 bg-gradient-to-t from-transparent via-background/95 to-background/90"
          />
          <div className="relative z-10 grid gap-4 grid-cols-1 sm:grid-cols-3">
            {[
              {
                icon: Medal,
                title: "National rankings",
                href: "/rankings",
                description:
                  "Follow top performers and official season leaders.",
              },
              {
                icon: Sparkles,
                title: "Featured athletes",
                href: "/athletes",
                description: "Discover standout talent from every region.",
              },
              {
                icon: Zap,
                title: "Upcoming meets",
                href: "/competitions",
                description:
                  "Plan around upcoming races and championship fixtures.",
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <Card className="h-full border-border bg-card py-0 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.title}
                      </p>
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
