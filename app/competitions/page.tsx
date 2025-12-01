"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { competitions } from "@/lib/data/competitions"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function CompetitionsPage() {
  const [statusFilter, setStatusFilter] = useState<"All" | "Upcoming" | "Past">("Upcoming")

  const filtered = useMemo(() => {
    if (statusFilter === "All") return competitions
    return competitions.filter((c) => c.status === statusFilter)
  }, [statusFilter])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Competitions</h1>
          <p className="text-muted-foreground">Track and field competitions across the Philippines and beyond</p>
        </div>

        <div className="p-4 border border-border rounded-lg bg-card mb-6 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Emoji symbol={emojiIcons.filter} className="text-sm" aria-hidden />
            Filters
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {(["Upcoming", "Past", "All"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-md border text-sm font-semibold transition-colors ${
                  statusFilter === status
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-foreground border-border hover:bg-muted"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((comp) => (
            <Link
              key={comp.id}
              href={`/competitions/${comp.slug}`}
              className="block p-4 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">{comp.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{comp.location}</p>
              <p className="text-xs text-muted-foreground">{comp.dateLabel}</p>
            </Link>
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
