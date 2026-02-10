import Link from "next/link"
import { ArrowRight, Medal, Sparkles, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
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
    <div className="min-h-screen bg-[#040714] text-white">
      <Navigation />

      <main className="page-shell py-6 sm:py-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/40 shadow-2xl">
          <div className="absolute inset-0">
            <UnicornHomeScene />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.3),transparent_40%),linear-gradient(to_top,rgba(3,7,18,0.96),rgba(3,7,18,0.4))]" />

          <div className="relative z-10 flex min-h-[78vh] flex-col justify-between gap-10 p-6 sm:p-10 lg:p-14">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Philippine Athletics
              </div>
              <h1 className="max-w-[12ch] text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                Run the Future.
              </h1>
              <p className="max-w-md text-sm text-white/80 sm:text-base">Elite visuals. Real athletes. One national movement.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-white px-8 text-black hover:bg-white/85">
                  <Link href="/athletes">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 bg-white/10 px-8 text-white hover:bg-white/20"
                >
                  <Link href="/competitions">Watch Events</Link>
                </Button>
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

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Medal, title: "National rankings", href: "/rankings" },
            { icon: Sparkles, title: "Featured athletes", href: "/athletes" },
            { icon: Zap, title: "Upcoming meets", href: "/competitions" },
          ].map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="h-full rounded-2xl border-white/15 bg-gradient-to-br from-cyan-400/20 via-indigo-500/15 to-fuchsia-500/20 py-0 text-white transition hover:-translate-y-1 hover:border-white/30">
                <CardContent className="flex items-center justify-between p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em]">{item.title}</p>
                  <item.icon className="h-5 w-5" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
