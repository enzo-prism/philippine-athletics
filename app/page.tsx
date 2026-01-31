import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { GlobalSearchForm } from "@/components/global-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { athleteSummaries } from "@/lib/data/athletes"
import { coaches } from "@/lib/data/coaches"
import { clubs } from "@/lib/data/clubs"
import { competitions } from "@/lib/data/competitions"
import { getRankingEvents } from "@/lib/data/rankings"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -top-20 right-[-8rem] h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-6rem] h-72 w-72 rounded-full bg-[oklch(0.8_0.1_95_/0.25)] blur-3xl" />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.24em] animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              Building the Next Generation of Philippine Track &amp; Field
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-foreground leading-[1.05] max-w-[20ch] animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              Grassroots Program empowering athletes nationwide
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[48ch] animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
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
          <CardContent className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-lg font-bold text-accent">
                ?
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">How to get started</h3>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Sign up",
                  body: "Create your profile so coaches and clubs know who you are.",
                  href: "/signup",
                  cta: "Go to signup",
                },
                {
                  title: "Search nearby",
                  body: "Browse verified coaches or clubs in your area by specialty.",
                  href: "/clubs",
                  cta: "Browse clubs",
                },
                {
                  title: "Contact to start",
                  body: "Message the coach or club admin to begin your training plan.",
                  href: "/coaches",
                  cta: "Find a coach",
                },
              ].map((step, idx) => (
                <Link key={step.title} href={step.href} className="block">
                  <Card className="py-0 gap-0 shadow-none bg-muted/40 hover:bg-accent/10 transition-colors">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 border border-accent/30 text-sm">
                          {idx + 1}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                      <p className="text-xs font-semibold text-accent">{step.cta} →</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <Button asChild className="w-full sm:w-auto rounded-full">
              <Link href="/how-it-works">Learn more</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics. Track and field community.</p>
        </div>
      </div>
    </div>
  )
}
