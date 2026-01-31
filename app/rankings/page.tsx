"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { buildRankings, getRankingEvents, getRankingYears, type AgeGroup, type Gender } from "@/lib/data/rankings"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const eventOptions = ["Select an event", ...getRankingEvents()]
const yearOptions = getRankingYears()
const genderOptions: Gender[] = ["Women", "Men"]
const ageGroupOptions: AgeGroup[] = ["Open", "Youth"]

const normalizeEvent = (eventParam: string | null) => {
  if (!eventParam) return "Select an event"
  return eventOptions.includes(eventParam) ? eventParam : "Select an event"
}

const normalizeGender = (genderParam: string | null) => {
  if (!genderParam) return "Women"
  return genderOptions.includes(genderParam as Gender) ? (genderParam as Gender) : "Women"
}

const normalizeAgeGroup = (ageParam: string | null) => {
  if (!ageParam) return "Open"
  return ageGroupOptions.includes(ageParam as AgeGroup) ? (ageParam as AgeGroup) : "Open"
}

const normalizeYear = (yearParam: string | null) => {
  const fallback = yearOptions[0] ?? new Date().getFullYear()
  const parsed = Number.parseInt(yearParam ?? "", 10)
  return Number.isNaN(parsed) ? fallback : parsed
}

const formatRank = (rank: number) => `#${rank}`

function RankingsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedEvent, setSelectedEvent] = useState(() => normalizeEvent(searchParams.get("event")))
  const [selectedGender, setSelectedGender] = useState<Gender>(() => normalizeGender(searchParams.get("gender")))
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>(() => normalizeAgeGroup(searchParams.get("ageGroup")))
  const [selectedYear, setSelectedYear] = useState<number>(() => normalizeYear(searchParams.get("year")))
  const highlightId = searchParams.get("highlight")?.trim() ?? ""

  useEffect(() => {
    setSelectedEvent(normalizeEvent(searchParams.get("event")))
    setSelectedGender(normalizeGender(searchParams.get("gender")))
    setSelectedAgeGroup(normalizeAgeGroup(searchParams.get("ageGroup")))
    setSelectedYear(normalizeYear(searchParams.get("year")))
  }, [searchParams])

  useEffect(() => {
    if (selectedEvent === "Select an event") return
    const params = new URLSearchParams()
    params.set("event", selectedEvent)
    params.set("gender", selectedGender)
    params.set("ageGroup", selectedAgeGroup)
    params.set("year", String(selectedYear))
    if (highlightId) params.set("highlight", highlightId)
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [selectedEvent, selectedGender, selectedAgeGroup, selectedYear, highlightId, router])

  const rankings = useMemo(() => {
    if (selectedEvent === "Select an event") return []
    return buildRankings({
      event: selectedEvent,
      gender: selectedGender,
      ageGroup: selectedAgeGroup,
      year: selectedYear,
    })
  }, [selectedEvent, selectedGender, selectedAgeGroup, selectedYear])

  const topThree = rankings.slice(0, 3)

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
            Filter by event, gender, age group, and year to see the best performances. Rankings use the best result in the
            selected year.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Data labels:</span>
            <Badge variant="outline" className="border-emerald-300/60 text-emerald-700 bg-emerald-50">
              World Athletics
            </Badge>
            <Badge variant="outline" className="border-border text-foreground bg-muted">
              Demo data
            </Badge>
          </div>
        </header>

        <Card className="py-0 gap-0">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Emoji symbol={emojiIcons.filter} className="text-base" />
              Filters
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <Label className="text-xs font-semibold text-foreground uppercase">Gender</Label>
                <Select value={selectedGender} onValueChange={(value) => setSelectedGender(value as Gender)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Age group</Label>
                <Select value={selectedAgeGroup} onValueChange={(value) => setSelectedAgeGroup(value as AgeGroup)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ageGroupOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Year</Label>
                <Select value={String(selectedYear)} onValueChange={(value) => setSelectedYear(Number.parseInt(value, 10))}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((year) => (
                      <SelectItem key={year} value={String(year)}>
                        {year}
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
        ) : rankings.length === 0 ? (
          <Card className="py-0 gap-0">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No rankings found for {selectedEvent} in {selectedYear}. Try another filter.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="py-0 gap-0">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Top 3</p>
                  <span className="text-xs text-muted-foreground">Best performances in {selectedYear}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {topThree.map((entry) => (
                    <Link
                      key={entry.id}
                      href={`${entry.href}?event=${encodeURIComponent(selectedEvent)}&year=${selectedYear}`}
                      className="block"
                    >
                      <div className="p-4 rounded-lg border border-border bg-card hover:border-accent transition-colors">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{entry.name}</p>
                          <Badge variant="outline" className="border-accent/40 text-accent">
                            {formatRank(entry.rank)}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{entry.result}</p>
                        <p className="text-xs text-muted-foreground">{entry.meet}</p>
                        <div className="pt-1">
                          <Badge
                            variant="outline"
                            className={
                              entry.source === "World Athletics"
                                ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                                : "border-border text-foreground bg-muted"
                            }
                          >
                            {entry.source ?? "Demo data"}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rankings.map((entry) => {
                const isHighlighted = highlightId && entry.name.toLowerCase() === highlightId.toLowerCase()
                return (
                  <Link
                    key={`${entry.id}-${entry.rank}`}
                    href={`${entry.href}?event=${encodeURIComponent(selectedEvent)}&year=${selectedYear}`}
                    className="block"
                  >
                    <Card
                      className={`py-0 gap-0 transition-colors hover:border-accent ${
                        isHighlighted ? "border-accent ring-2 ring-accent/30" : ""
                      }`}
                    >
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">{entry.name}</p>
                            <p className="text-xs text-muted-foreground">{entry.event}</p>
                          </div>
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                            {formatRank(entry.rank)}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Emoji symbol={emojiIcons.location} className="text-sm" />
                          {entry.location}
                        </div>
                        <p className="text-xs text-muted-foreground">Club: {entry.club}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Emoji symbol={emojiIcons.medal} className="text-base" />
                          <span className="font-semibold text-foreground">Best: {entry.result}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {entry.meet} • {entry.date}
                        </p>
                        <Badge
                          variant="outline"
                          className={
                            entry.source === "World Athletics"
                              ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                              : "border-border text-foreground bg-muted"
                          }
                        >
                          {entry.source ?? "Demo data"}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
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
