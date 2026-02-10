import Link from "next/link"
import { ArrowRight, Medal, Sparkles, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { UnicornHomeScene } from "@/components/unicorn-home-scene"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { athleteSummaries } from "@/lib/data/athletes"
import { coaches } from "@/lib/data/coaches"
import { clubs } from "@/lib/data/clubs"
import { competitions } from "@/lib/data/competitions"

const quickStats = [
  { label: "Clubs", value: clubs.length },
  { label: "Coaches", value: coaches.length },
  { label: "Athletes", value: athleteSummaries.length },
  { label: "Events", value: competitions.length },
]

const quickLinks = [
  { href: "/athletes", label: "Athletes" },
  { href: "/coaches", label: "Coaches" },
  { href: "/clubs", label: "Clubs" },
  { href: "/competitions", label: "Competitions" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(168,85,247,0.13),transparent_32%),#040714] text-white">
      <Navigation />

      <main className="page-shell py-6 sm:py-8 lg:py-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/40 shadow-2xl">
          <div className="absolute inset-0">
            <UnicornHomeScene />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.3),transparent_40%),linear-gradient(to_top,rgba(3,7,18,0.96),rgba(3,7,18,0.4))]" />

          <div className="relative z-10 flex min-h-[76vh] flex-col justify-between gap-12 p-6 sm:p-10 lg:p-14">
            <div className="grid items-end gap-10">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
                  Philippine Athletics
                </div>
                <h1 className="max-w-[12ch] text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                  Run the Future.
                </h1>
                <p className="max-w-md text-sm text-white/80 sm:text-base">
                  Elite visuals. Real athletes. One national movement. Discover clubs, coaches, and competitions in one place.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-white px-8 text-black hover:bg-white/85">
                    <Link href="/membership">
                      Become a Member
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/40 bg-white/10 px-8 text-white hover:bg-white/20"
                  >
                    <Link href="/competitions">View Events</Link>
                  </Button>
                </div>
                <div className="relative pt-3">
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.26),transparent_55%)] blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-3xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/70">
                        Official partners
                      </p>
                      <p className="text-xs text-white/55">Trusted by the Philippine athletics ecosystem.</p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 px-2 pb-1 sm:gap-x-12 lg:gap-x-16">
                      <div className="flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697128/FAS_LOGO_SQUARE_WHITE_iprxox.png"
                          alt="FAS logo"
                          className="h-20 w-auto opacity-95 drop-shadow-[0_14px_30px_rgba(4,16,32,0.35)] transition duration-300 hover:scale-[1.03] sm:h-24"
                        />
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-[0_20px_45px_-24px_rgba(5,10,24,0.75)]">
                          <img
                            src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697128/PSC_POC_LOGO_tjd8qv.jpg"
                            alt="PSC and POC logo"
                            className="h-16 w-auto transition duration-300 hover:scale-[1.03] sm:h-20"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697127/MASIV_LOGO_pf1sgn.png"
                          alt="MASIV logo"
                          className="h-16 w-auto opacity-95 drop-shadow-[0_14px_30px_rgba(4,16,32,0.35)] transition duration-300 hover:scale-[1.03] sm:h-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <Card className="rounded-3xl border-white/20 bg-black/45 py-0 text-white backdrop-blur-xl">
                <CardContent className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center">
                      <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/65">{stat.label}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-white/20 bg-black/45 py-0 text-white backdrop-blur-xl">
                <CardContent className="space-y-3 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                    <Zap className="h-3.5 w-3.5" />
                    Quick access
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl border border-white/20 bg-white/10 px-3 py-4 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-3">
          <DemoAdSlot slotId="home-inline-leaderboard-1" format="leaderboard" />
          <div className="sm:hidden">
            <DemoAdSlot slotId="home-inline-mobile-1" format="mobile" />
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Medal, title: "National rankings", href: "/rankings", description: "Follow top performers and season leaders." },
            { icon: Sparkles, title: "Featured athletes", href: "/athletes", description: "Discover standout talent from every region." },
            { icon: Zap, title: "Upcoming meets", href: "/competitions", description: "Plan around upcoming races and championship fixtures." },
          ].map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="h-full rounded-2xl border-slate-200 bg-white py-0 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">{item.title}</p>
                    <item.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
