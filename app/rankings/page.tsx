"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Trophy, MapPin, Medal, SlidersHorizontal } from "lucide-react"

const rankingData = [
  { name: "Maria Santos", event: "400m", level: "National", club: "Manila Speed Club", location: "Taguig (BGC)", rank: "#1 PH", pb: "52.34s" },
  { name: "Rafael Gomez", event: "100m", level: "National", club: "Quezon City Sprinters", location: "Quezon City", rank: "#3 PH", pb: "10.42s" },
  { name: "Ana Reyes", event: "Long Jump", level: "National", club: "Davao Athletics", location: "Davao City", rank: "#1 PH", pb: "6.42m" },
  { name: "Juan Dela Cruz", event: "5000m", level: "National", club: "Cebu Distance Runners", location: "Cebu City", rank: "#2 PH", pb: "14:28.5" },
  { name: "Linda Villegas", event: "High Jump", level: "National", club: "Iloilo Track Club", location: "Iloilo City", rank: "#2 PH", pb: "1.84m" },
  { name: "Carlos Mendoza", event: "1500m", level: "National", club: "Manila Distance Runners", location: "Manila", rank: "#2 PH", pb: "3:54.2" },
  { name: "Mia Gutierrez", event: "200m", level: "College", club: "UP Track", location: "Quezon City", rank: "#1 COL", pb: "23.15s" },
  { name: "Leo Dominguez", event: "100m", level: "Highschool", club: "Parañaque Speedworks", location: "Parañaque", rank: "#1 HS", pb: "10.80s" },
]

const eventOptions = [
  "Select an event",
  "100m",
  "200m",
  "400m",
  "800m",
  "1500m",
  "5000m",
  "10,000m",
  "110m hurdles (men)",
  "100m hurdles (women)",
  "400m hurdles",
  "3000m steeplechase",
  "4×100m relay",
  "4×400m relay",
  "Long Jump",
  "Triple Jump",
  "High Jump",
  "Pole Vault",
  "Shot Put",
  "Discus Throw",
  "Hammer Throw",
  "Javelin Throw",
]

const levelOptions = ["Highschool", "College", "National"]

export default function RankingsPage() {
  const [selectedEvent, setSelectedEvent] = useState("Select an event")
  const [selectedLevel, setSelectedLevel] = useState("National")

  const filtered = useMemo(() => {
    if (selectedEvent === "Select an event") return []
    return rankingData.filter(
      (item) => item.event === selectedEvent && item.level.toLowerCase() === selectedLevel.toLowerCase(),
    )
  }, [selectedEvent, selectedLevel])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent" />
            Rankings
          </p>
          <h1 className="text-4xl font-bold text-foreground">Philippine Athletics Rankings</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Select an event to view rankings. Level defaults to National; switch to Highschool or College to preview other
            ladders. Sample data only.
          </p>
        </header>

        <div className="p-4 border border-border rounded-lg bg-card space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <SlidersHorizontal className="w-4 h-4 text-accent" />
            Filters
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground uppercase">Event</label>
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                {eventOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground uppercase">Level</label>
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levelOptions.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedEvent === "Select an event" ? (
          <div className="p-6 rounded-lg border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
            Choose an event to load rankings.
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-6 rounded-lg border border-border bg-card text-sm text-muted-foreground">
            No rankings found for {selectedEvent} at {selectedLevel} level.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((athlete) => (
              <div key={athlete.name} className="p-4 rounded-lg border border-border bg-card space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                    <p className="text-xs text-muted-foreground">{athlete.event}</p>
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-full">
                    {athlete.rank}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {athlete.location}
                </div>
                <p className="text-xs text-muted-foreground">Club: {athlete.club}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Medal className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground">PB: {athlete.pb}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
