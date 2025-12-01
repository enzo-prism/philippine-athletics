"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { SlidersHorizontal } from "lucide-react"

const competitions = [
  {
    id: 1,
    name: "2025 Southeast Asian Games",
    type: "Regional",
    location: "Bangkok / Chonburi / Songkhla, Thailand",
    date: "Dec 11, 2025",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "2025 Asian Athletics Championships",
    type: "Continental",
    location: "Gumi, South Korea",
    date: "May 31, 2025",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Philippine National Championships / Selection Meets",
    type: "National",
    location: "Philippines (annual, e.g., ICTSI Philippine Athletics Championships 2025)",
    date: "Mar 15, 2025",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "World Athletics Continental Tour / Invitationals",
    type: "International",
    location: "Various global venues",
    date: "Apr 10, 2025",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 5,
    name: "2026 Asian Games",
    type: "Continental",
    location: "Aichi-Nagoya, Japan",
    date: "Sep 19, 2026",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "2026 World Athletics Cross Country Championships",
    type: "World",
    location: "Tallahassee, Florida, USA",
    date: "Jan 10, 2026",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 7,
    name: "2026 World Athletics Road Running Championships",
    type: "World",
    location: "Copenhagen, Denmark",
    date: "Sep 19, 2026",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 8,
    name: "2026 World Athletics Ultimate Championship (Inaugural)",
    type: "World",
    location: "Budapest, Hungary",
    date: "Sep 11, 2026",
    href: "#",
    status: "Upcoming",
  },
  {
    id: 9,
    name: "Philippine Nationals / Domestic Circuit 2026",
    type: "National",
    location: "Philippines (annual season)",
    date: "Mar 15, 2026",
    href: "#",
    status: "Upcoming",
  },
]

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
            <SlidersHorizontal className="w-4 h-4 text-accent" />
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
            <div key={comp.id} className="p-4 rounded-lg border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">{comp.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{comp.location}</p>
              <p className="text-xs text-muted-foreground">{comp.date}</p>
            </div>
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
