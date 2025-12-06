import Link from "next/link"
import { BackgroundVideo } from "@/components/background-video"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <BackgroundVideo
          src="https://res.cloudinary.com/dhqpqfw6w/video/upload/v1765031902/ej_pv_lruye1.mp4"
          className="opacity-70 object-cover object-center md:object-[50%_40%]"
        />
        <div className="hero-overlay" />

        <div className="page-shell relative py-16 sm:py-20 lg:py-28">
          <div className="hero-panel max-w-3xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">Philippine Athletics</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Track &amp; Field, in One Living Platform
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Discover athletes, coaches, clubs, and competitions across the Philippines. Search by event, region, or club and jump straight into
                verified profiles and rankings.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="px-5 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
              <Link
                href="/athletes"
                className="px-5 py-3 rounded-full border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Search Athletes
              </Link>
              <Link
                href="/how-it-works"
                className="px-5 py-3 rounded-full border border-white/20 text-foreground font-semibold hover:bg-muted/70 transition-colors"
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
