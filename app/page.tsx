import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground max-w-3xl">
            Philippine<span className="text-accent"> Athletics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover profiles of athletes, coaches, clubs, and competitions from the track and field community across
            the Philippines.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/signup"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
            <Link
              href="/how-it-works"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              How it Works
            </Link>
          </div>
        </div>
      </div>

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
