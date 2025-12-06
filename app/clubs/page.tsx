 "use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { clubs } from "@/lib/data/clubs"

export default function ClubsPage() {
  const [query, setQuery] = useState("")
  const filteredClubs = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return clubs
    return clubs.filter(
      (club) =>
        club.name.toLowerCase().includes(term) ||
        club.focus.toLowerCase().includes(term) ||
        club.location.toLowerCase().includes(term),
    )
  }, [query])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Search Clubs</h1>
            <p className="text-muted-foreground">Explore track and field clubs across the Philippines</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-96 rounded-full border border-border bg-background px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-accent shadow-soft">
              <span className="text-base" aria-hidden>
                🔍
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by club, city, or focus..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <span className="text-xs text-muted-foreground sm:self-center">
              Showing {filteredClubs.length} of {clubs.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <ProfileCard
              key={club.id}
              name={club.name}
              subtitle=""
              location={club.location}
              details={[`Athlete Spots: ${club.spots}`]}
              href={`/clubs/${club.slug ?? club.id}`}
              type="club"
            />
          ))}
        </div>
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
