"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
            <Emoji symbol={emojiIcons.trophy} className="text-base" />
            Rankings
          </p>
          <h1 className="text-4xl font-bold text-foreground">Philippine Athletics Rankings</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Select an event to view rankings. Level defaults to National; switch to Highschool or College to preview other
            ladders. Sample data only.
          </p>
        </header>

        <Card className="py-0 gap-0">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Emoji symbol={emojiIcons.filter} className="text-base" />
              Filters
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Event</Label>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {eventOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Level</Label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levelOptions.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedEvent === "Select an event" ? (
          <Card className="py-0 gap-0 border-dashed bg-muted/40">
            <CardContent className="p-6 text-sm text-muted-foreground">Choose an event to load rankings.</CardContent>
          </Card>
        ) : filtered.length === 0 ? (
          <Card className="py-0 gap-0">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No rankings found for {selectedEvent} at {selectedLevel} level.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((athlete) => {
              const isHighlighted = highlightId && athlete.name.toLowerCase() === highlightId.toLowerCase()

              return (
                <Card
                  key={`${athlete.name}-${athlete.event}`}
                  className={`py-0 gap-0 transition-colors ${isHighlighted ? "border-accent ring-2 ring-accent/30" : ""}`}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{athlete.name}</p>
                        <p className="text-xs text-muted-foreground">{athlete.event}</p>
                      </div>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        {athlete.rank}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Emoji symbol={emojiIcons.location} className="text-sm" />
                      {athlete.location}
                    </div>
                    <p className="text-xs text-muted-foreground">Club: {athlete.club}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Emoji symbol={emojiIcons.medal} className="text-base" />
                      <span className="font-semibold text-foreground">PB: {athlete.pb}</span>
                    </div>
                  </CardContent>
                </Card>
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
