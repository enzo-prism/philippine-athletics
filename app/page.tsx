import Link from "next/link"
import { BackgroundVideo } from "@/components/background-video"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/4] min-h-[260px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/16 via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/25 to-transparent pointer-events-none" />
            <BackgroundVideo
              src="https://res.cloudinary.com/dhqpqfw6w/video/upload/v1765031902/ej_pv_lruye1.mp4"
              className="opacity-95 object-cover object-center md:object-[50%_45%]"
            />
          </div>

          <div className="hero-panel p-6 sm:p-8 space-y-6 max-w-xl">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.24em]">
                Building the Next Generation of Philippine Track &amp; Field
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-foreground leading-[1.05] max-w-[20ch]">
                Building the Next Generation of Philippine Track &amp; Field
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The Official Grassroots Program empowering athletes nationwide.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[48ch]">
                Find a coach or join a club to start training with verified professionals and grow into world-class talent.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <Link
                href="/clubs"
                className="w-full sm:w-auto px-5 py-3 min-h-[48px] bg-primary text-primary-foreground rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity shadow-soft"
              >
                Join a Club
              </Link>
              <Link
                href="/coaches"
                className="w-full sm:w-auto px-5 py-3 min-h-[48px] rounded-full border border-border bg-card text-foreground text-sm sm:text-base font-semibold hover:bg-muted transition-colors"
              >
                Find a Coach
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-5 py-3 min-h-[48px] rounded-full border border-white/20 text-foreground text-sm sm:text-base font-semibold hover:bg-muted/70 transition-colors"
              >
                How it Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/athletes"
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors text-center"
            >
              <p className="text-sm font-semibold text-accent uppercase">Athletes</p>
              <p className="text-2xl font-bold text-foreground mt-2">240+</p>
            </Link>
            <Link
              href="/coaches"
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors text-center"
            >
              <p className="text-sm font-semibold text-accent uppercase">Coaches</p>
              <p className="text-2xl font-bold text-foreground mt-2">45+</p>
            </Link>
            <Link
              href="/clubs"
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors text-center"
            >
              <p className="text-sm font-semibold text-accent uppercase">Clubs</p>
              <p className="text-2xl font-bold text-foreground mt-2">28+</p>
            </Link>
            <Link
              href="/competitions"
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors text-center"
            >
              <p className="text-sm font-semibold text-accent uppercase">Competitions</p>
              <p className="text-2xl font-bold text-foreground mt-2">18+</p>
            </Link>
          </div>
        </div>
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
