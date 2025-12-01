"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { athleteProfiles } from "@/lib/data/athletes"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { useSearchParams } from "next/navigation"

type RankingEntry = {
  name: string
  event: string
  level: string
  club: string
  location: string
  rank: string
  pb: string
}

const athleteRankingData: RankingEntry[] = athleteProfiles.flatMap((athlete) =>
  athlete.events.map((evt) => ({
    name: `${athlete.firstName} ${athlete.lastName}`,
    event: evt.name,
    level: "National",
    club: athlete.club,
    location: athlete.location,
    rank: evt.nationalRank || "—",
    pb: evt.personalBest,
  })),
)

const extraRankingData: RankingEntry[] = [
  { name: "Mia Gutierrez", event: "200m", level: "College", club: "UP Track", location: "Quezon City", rank: "#1 COL", pb: "23.15s" },
  { name: "Leo Dominguez", event: "100m", level: "Highschool", club: "Parañaque Speedworks", location: "Parañaque", rank: "#1 HS", pb: "10.80s" },
]

const rankingData: RankingEntry[] = [...athleteRankingData, ...extraRankingData]

const eventOptions = ["Select an event", "Sprints", "100m", "200m", "400m", "Middle Distance", "800m", "1500m", "Long Distance", "5000m", "10,000m", "Hurdles", "110m hurdles (men)", "100m hurdles (women)", "400m hurdles", "Steeplechase", "3000m steeplechase", "Relays", "4×100m relay", "4×400m relay", "Jumps", "High jump", "Pole vault", "Long jump", "Triple jump", "Throws", "Shot put", "Discus throw", "Hammer throw", "Javelin throw", "Combined Events", "Decathlon (men)", "Heptathlon (women)", "Road Events", "Marathon"]

const levelOptions = ["Highschool", "College", "National"]

const normalizeEvent = (eventParam: string | null) => {
  if (!eventParam) return "Select an event"
  return eventOptions.includes(eventParam) && eventParam !== "Select an event" ? eventParam : "Select an event"
}

const normalizeLevel = (levelParam: string | null) => {
  if (!levelParam) return "National"
  const normalized = levelParam.charAt(0).toUpperCase() + levelParam.slice(1).toLowerCase()
  return levelOptions.includes(normalized) ? normalized : "National"
}

const normalizeHighlight = (highlightParam: string | null) => highlightParam?.trim() || ""

function RankingsContent() {
  const searchParams = useSearchParams()

  const [selectedEvent, setSelectedEvent] = useState(() => normalizeEvent(searchParams.get("event")))
  const [selectedLevel, setSelectedLevel] = useState(() => normalizeLevel(searchParams.get("level")))
  const [highlightId, setHighlightId] = useState(() => normalizeHighlight(searchParams.get("highlight")))

  useEffect(() => {
    setSelectedEvent(normalizeEvent(searchParams.get("event")))
    setSelectedLevel(normalizeLevel(searchParams.get("level")))
    setHighlightId(normalizeHighlight(searchParams.get("highlight")))
  }, [searchParams])

  useEffect(() => {
    if (!highlightId) return
    const timer = setTimeout(() => setHighlightId(""), 2000)
    return () => clearTimeout(timer)
  }, [highlightId])

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
            <Emoji symbol={emojiIcons.trophy} className="text-base" aria-hidden />
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
            <Emoji symbol={emojiIcons.filter} className="text-base" aria-hidden />
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
            {filtered.map((athlete) => {
              const isHighlighted = highlightId && athlete.name.toLowerCase() === highlightId.toLowerCase()

              return (
                <div
                  key={`${athlete.name}-${athlete.event}`}
                  className={`p-4 rounded-lg border bg-card space-y-3 transition-colors ${
                    isHighlighted ? "border-accent ring-2 ring-accent/30" : "border-border"
                  }`}
                >
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
                    <Emoji symbol={emojiIcons.location} className="text-sm" aria-hidden />
                    {athlete.location}
                  </div>
                  <p className="text-xs text-muted-foreground">Club: {athlete.club}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Emoji symbol={emojiIcons.medal} className="text-base" aria-hidden />
                    <span className="font-semibold text-foreground">PB: {athlete.pb}</span>
                  </div>
                </div>
              )
            })}
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

export default function RankingsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-sm text-muted-foreground">
            Loading rankings...
          </div>
        </div>
      }
    >
      <RankingsContent />
    </Suspense>
  )
}
