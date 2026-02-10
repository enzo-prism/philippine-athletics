import Link from "next/link"
import { Badge } from "@/components/badge"
import { Navigation } from "@/components/navigation"
import { GlobalSearchForm } from "@/components/global-search"
import { HeroAnimationBackground } from "@/components/HeroAnimationBackground"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { athleteSummaries } from "@/lib/data/athletes"
import { coaches } from "@/lib/data/coaches"
import { clubs } from "@/lib/data/clubs"
import { competitions } from "@/lib/data/competitions"
import { getRankingEvents } from "@/lib/data/rankings"
import { footerLogos, headerLogos, logoAssets } from "@/lib/data/logo-assets"

const membershipTiers = [
  {
    title: "Community Member",
    price: "$10",
    description: "Support local clubs, grassroots meets, and youth development programs.",
  },
  {
    title: "Competitive Member",
    price: "$20",
    description: "Access sanctioned event listings, rankings, and member badge verification.",
  },
  {
    title: "Elite Supporter",
    price: "$50",
    description: "Fuel Olympic pathways with priority program updates and volunteer access.",
  },
]

const sanctionedEvents = [
  {
    name: "Philippine National Open Championships",
    date: "Apr 24–27, 2026",
    location: "Pasig City, NCR",
    status: "Sanctioned",
  },
  {
    name: "PATAFA Youth Relay Festival",
    date: "May 18, 2026",
    location: "Cebu City, Central Visayas",
    status: "Sanctioned",
  },
  {
    name: "Mindanao Throws & Jumps Series",
    date: "Jun 8, 2026",
    location: "Davao City, Davao Region",
    status: "Permit Pending",
  },
]

const footerSponsors = {
  sponsors: ["Ayala", "MILO", "Philippine Airlines", "ICTSI", "AIA Philippines"],
  suppliers: ["ASICS Philippines", "Manila Water", "CEL Logistics"],
  technology: ["GoTyme Bank", "Sport:80"],
  medical: ["Ajinomoto Philippines"],
}

export default function Home() {
  const featuredAthletes = athleteSummaries.slice(0, 3)
  return (
    <div className="min-h-screen bg-background">
      <section className="w-full border-b border-[#123a57] bg-[#0b2a45] py-2 sm:py-3">
        <div className="page-shell flex flex-col items-center gap-3 md:flex-row md:gap-4 md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {headerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex min-w-24 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white shadow-soft backdrop-blur"
              >
                <img src={logo.url} alt={logo.alt} className="h-8 w-8 shrink-0 rounded object-contain" />
                <p className="text-xs font-semibold leading-tight">{logo.name}</p>
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 md:text-sm">
            Discover &rarr;
          </div>
        </div>
      </section>
      <Navigation />

      <section className="page-shell py-8 sm:py-10">
        <div className="rounded-3xl border border-[#ead9b5] bg-[linear-gradient(120deg,#fff7e6,#ffffff,#f3f9ff)] p-6 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b86b00]">Official Sponsor</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ayala Corporation backs the next generation of Philippine track &amp; field.
              </h2>
              <p className="text-sm text-muted-foreground">
                Featuring standout athletes powered by grassroots programs, elite coaches, and community volunteers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">Ayala Sponsor Banner</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">PATAFA Featured Athletes</span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {featuredAthletes.map((athlete) => (
                <div
                  key={athlete.id}
                  className="rounded-2xl border border-border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                  <p className="text-xs text-muted-foreground">{athlete.specialty}</p>
                  <p className="text-xs text-muted-foreground mt-2">{athlete.club}</p>
                  {athlete.pb ? (
                    <p className="text-xs font-semibold text-accent mt-2">PB {athlete.pb}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-card shadow-soft px-6 py-10 sm:px-10 sm:py-14">
          <HeroAnimationBackground />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.24em] animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              Building the Next Generation of Philippine Track &amp; Field
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.05] max-w-[20ch] animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              Grassroots Program empowering athletes nationwide
            </h1>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-[48ch] animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Find a coach or join a club to start training with verified professionals and grow into world-class talent.
            </p>
            <GlobalSearchForm
              variant="hero"
              className="max-w-xl animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]"
              actionLabel="Search"
            />
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 animate-fade-in-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full shadow-soft">
                <Link href="/clubs">Join a Club</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                <Link href="/coaches">Search Coaches</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { label: "Clubs", value: clubs.length, href: "/clubs" },
              { label: "Coaches", value: coaches.length, href: "/coaches" },
              { label: "Athletes", value: athleteSummaries.length, href: "/athletes" },
              { label: "Rankings", value: getRankingEvents().length, href: "/rankings" },
              { label: "Competitions", value: competitions.length, href: "/competitions" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block">
                <Card className="py-0 gap-0 shadow-none hover:bg-accent/10 transition-colors text-center">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-accent uppercase">{item.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{item.value}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Card className="rounded-2xl shadow-soft py-0 gap-0">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Membership</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">MEMBERSHIP</h3>
              <p className="text-sm text-muted-foreground italic">Welcome To The Sport, The Team, The Journey</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Philippine Athletics unites athletes, coaches, event directors, community leaders, officials, volunteers, and fans into
              one national movement that champions safe, competitive, and inspiring track &amp; field experiences.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {membershipTiers.map((tier) => (
                <Card key={tier.title} className="py-0 gap-0 shadow-none bg-muted/40">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-semibold uppercase text-accent">{tier.title}</p>
                    <p className="text-2xl font-bold text-foreground">{tier.price}</p>
                    <p className="text-xs text-muted-foreground">{tier.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-accent">
              <Badge text="Member Badge" variant="accent" className="uppercase tracking-wide rounded-md" />
              <Badge text="Member Club Badge" variant="accent" className="uppercase tracking-wide rounded-md" />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
              {logoAssets.filter((logo) => logo.category === "program").map((logo) => (
                <span key={logo.name} className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1">
                  <img src={logo.url} alt={logo.alt} className="h-4 w-4 rounded object-contain" />
                  {logo.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button asChild className="w-full sm:w-auto rounded-full">
                <Link href="/membership">Join Team PATAFA Today By Becoming A Member</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Support the team, compete locally, and chase Olympic dreams.{" "}
                <Link href="/membership" className="text-accent font-semibold">
                  Click here to learn more
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-soft py-0 gap-0">
          <CardContent className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Sanctioned events</p>
                <h3 className="text-2xl font-bold text-foreground">Sanctioned Events Calendar</h3>
              </div>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/events">View full calendar</Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {sanctionedEvents.map((event) => (
                <Card key={event.name} className="py-0 gap-0 shadow-none bg-muted/40">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-sm font-semibold text-foreground">{event.name}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                    <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                      {event.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 rounded-2xl border border-border bg-muted/40 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Official marks from federation partners</p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {footerLogos.map((logo) => (
                <div key={logo.name} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background px-2 py-3 text-center">
                  <img src={logo.url} alt={logo.alt} className="h-10 w-10 object-contain" />
                  <span className="text-[10px] font-semibold leading-tight text-muted-foreground">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Official Sponsors</h4>
              <div className="grid gap-2">
                {footerSponsors.sponsors.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Official Suppliers</h4>
              <div className="grid gap-2">
                {footerSponsors.suppliers.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Official Technology Partners</h4>
              <div className="grid gap-2">
                {footerSponsors.technology.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Official Medical Network Partner</h4>
              <div className="grid gap-2">
                {footerSponsors.medical.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8">&copy; 2025 Philippine Athletics. Track and field community.</p>
        </div>
      </div>
    </div>
  )
}
