import Link from "next/link"
import { BackgroundVideo } from "@/components/background-video"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { athleteSummaries } from "@/lib/data/athletes"
import { coaches } from "@/lib/data/coaches"
import { clubs } from "@/lib/data/clubs"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/4] min-h-[260px] animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/16 via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/25 to-transparent pointer-events-none" />
            <BackgroundVideo
              src="https://res.cloudinary.com/dhqpqfw6w/video/upload/v1765031902/ej_pv_lruye1.mp4"
              className="opacity-95 object-cover object-center md:object-[50%_45%]"
            />
          </div>

          <div className="hero-panel p-6 sm:p-8 space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/60 px-5 py-4 w-fit transition duration-300 ease-out hover:scale-105 hover:-rotate-1 hover:shadow-soft hover:shadow-accent/30 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <img
                src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765124410/Philippine_Olympic_Committee.svg_eqska6.png"
                alt="Philippine Olympic Committee"
                className="h-16 w-auto opacity-85"
                loading="lazy"
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.24em] animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Building the Next Generation of Philippine Track &amp; Field
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-foreground leading-[1.05] max-w-[20ch] animate-fade-in-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                Grassroots Program empowering athletes nationwide
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[48ch] animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                Find a coach or join a club to start training with verified professionals and grow into world-class talent.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 animate-fade-in-up opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/clubs" className="block">
              <Card className="py-0 gap-0 shadow-none hover:bg-accent/10 transition-colors text-center">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-accent uppercase">Clubs</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{clubs.length}</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/coaches" className="block">
              <Card className="py-0 gap-0 shadow-none hover:bg-accent/10 transition-colors text-center">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-accent uppercase">Coaches</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{coaches.length}</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/athletes" className="block">
              <Card className="py-0 gap-0 shadow-none hover:bg-accent/10 transition-colors text-center">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-accent uppercase">Athletes</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{athleteSummaries.length}</p>
                </CardContent>
              </Card>
            </Link>
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
