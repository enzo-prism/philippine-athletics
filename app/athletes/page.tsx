"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AthleteSummary, athleteSummaries } from "@/lib/data/athletes"

const eventOptions = [
  { label: "All events", value: "All" },
  { label: "Sprints", value: "Sprints" },
  { label: "100m", value: "100m" },
  { label: "200m", value: "200m" },
  { label: "400m", value: "400m" },
  { label: "Middle Distance", value: "Middle Distance" },
  { label: "800m", value: "800m" },
  { label: "1500m", value: "1500m" },
  { label: "Long Distance", value: "Long Distance" },
  { label: "5000m", value: "5000m" },
  { label: "10,000m", value: "10,000m" },
  { label: "Hurdles", value: "Hurdles" },
  { label: "110m hurdles (men)", value: "110m hurdles (men)" },
  { label: "100m hurdles (women)", value: "100m hurdles (women)" },
  { label: "400m hurdles", value: "400m hurdles" },
  { label: "Steeplechase", value: "Steeplechase" },
  { label: "3000m steeplechase", value: "3000m steeplechase" },
  { label: "Relays", value: "Relays" },
  { label: "4×100m relay", value: "4×100m relay" },
  { label: "4×400m relay", value: "4×400m relay" },
  { label: "Jumps", value: "Jumps" },
  { label: "High jump", value: "High jump" },
  { label: "Pole vault", value: "Pole vault" },
  { label: "Long jump", value: "Long jump" },
  { label: "Triple jump", value: "Triple jump" },
  { label: "Throws", value: "Throws" },
  { label: "Shot put", value: "Shot put" },
  { label: "Discus throw", value: "Discus throw" },
  { label: "Hammer throw", value: "Hammer throw" },
  { label: "Javelin throw", value: "Javelin throw" },
  { label: "Combined Events", value: "Combined Events" },
  { label: "Decathlon (men)", value: "Decathlon (men)" },
  { label: "Heptathlon (women)", value: "Heptathlon (women)" },
  { label: "Road Events", value: "Road Events" },
  { label: "Marathon", value: "Marathon" },
]

const regionOptions = [
  { label: "All locations", value: "All" },
  { label: "Metro Manila", value: "Metro Manila" },
  { label: "Luzon", value: "Luzon" },
  { label: "Visayas", value: "Visayas" },
  { label: "Mindanao", value: "Mindanao" },
]

const categoryByEvent: Record<string, string> = {
  Sprints: "Sprints",
  "100m": "Sprints",
  "200m": "Sprints",
  "400m": "Sprints",
  "Middle Distance": "Middle Distance",
  "800m": "Middle Distance",
  "1500m": "Middle Distance",
  "Long Distance": "Long Distance",
  "5000m": "Long Distance",
  "10,000m": "Long Distance",
  Hurdles: "Hurdles",
  "110m hurdles (men)": "Hurdles",
  "100m hurdles (women)": "Hurdles",
  "400m hurdles": "Hurdles",
  Steeplechase: "Steeplechase",
  "3000m steeplechase": "Steeplechase",
  Relays: "Relays",
  "4×100m relay": "Relays",
  "4×400m relay": "Relays",
  Jumps: "Jumps",
  "High jump": "Jumps",
  "Pole vault": "Jumps",
  "Long jump": "Jumps",
  "Triple jump": "Jumps",
  Throws: "Throws",
  "Shot put": "Throws",
  "Discus throw": "Throws",
  "Hammer throw": "Throws",
  "Javelin throw": "Throws",
  "Combined Events": "Combined Events",
  "Decathlon (men)": "Combined Events",
  "Heptathlon (women)": "Combined Events",
  "Road Events": "Road Events",
  Marathon: "Road Events",
}

const athletes: AthleteSummary[] = athleteSummaries

const normalizeEvents = (events: string[]) => Array.from(new Set(events.filter(Boolean).map((e) => e.trim())))

const deriveEventsFromSpecialty = (specialty: string): string[] => {
  const lower = specialty.toLowerCase()
  const events: string[] = []

  if (lower.includes("110m hurdle")) events.push("110m hurdles (men)")
  if (lower.includes("100m hurdle") && !lower.includes("110m")) events.push("100m hurdles (women)")
  if (lower.includes("400m hurdle")) events.push("400m hurdles")
  if (lower.includes("steeple")) events.push("3000m steeplechase", "Steeplechase")

  if (lower.includes("4x100") || lower.includes("4×100")) events.push("4×100m relay")
  if (lower.includes("4x400") || lower.includes("4×400")) events.push("4×400m relay")
  if (lower.includes("relay")) events.push("Relays")

  if (lower.includes("100m") && !lower.includes("hurdle")) events.push("100m")
  if (lower.includes("200m") && !lower.includes("hurdle")) events.push("200m")
  if (lower.includes("400m") && !lower.includes("hurdle")) events.push("400m")
  if (lower.includes("sprinter")) events.push("Sprints")

  if (lower.includes("1500")) events.push("1500m")
  if (lower.includes("800")) events.push("800m")
  if (lower.includes("middle")) events.push("Middle Distance")

  if (lower.includes("5000")) events.push("5000m")
  if (lower.includes("10,000") || lower.includes("10000") || lower.includes("10k")) events.push("10,000m")
  if (lower.includes("marathon")) events.push("Marathon", "Road Events")
  if (lower.includes("distance") || lower.includes("endurance") || lower.includes("walk")) events.push("Long Distance")

  if (lower.includes("pole vault") || lower.includes("vault")) events.push("Pole vault")
  if (lower.includes("high jump")) events.push("High jump")
  if (lower.includes("triple jump")) events.push("Triple jump")
  if (lower.includes("long jump")) events.push("Long jump")
  if (lower.includes("jump")) events.push("Jumps")

  if (lower.includes("shot put") || lower.includes("shot")) events.push("Shot put")
  if (lower.includes("discus")) events.push("Discus throw")
  if (lower.includes("hammer")) events.push("Hammer throw")
  if (lower.includes("javelin")) events.push("Javelin throw")
  if (lower.includes("throw")) events.push("Throws")

  if (lower.includes("decathlon")) events.push("Decathlon (men)", "Combined Events")
  if (lower.includes("heptathlon")) events.push("Heptathlon (women)", "Combined Events")
  if (lower.includes("multi")) events.push("Combined Events")

  return normalizeEvents(events.length ? events : ["Other"])
}

const getDisplayEvents = (athlete: AthleteSummary) => {
  const base = athlete.events && athlete.events.length ? athlete.events : deriveEventsFromSpecialty(athlete.specialty)
  return normalizeEvents(base)
}

const getEventTags = (athlete: AthleteSummary) => {
  const events = getDisplayEvents(athlete)
  const tags = new Set(events)
  events.forEach((evt) => {
    const category = categoryByEvent[evt]
    if (category) tags.add(category)
  })
  return Array.from(tags)
}

export default function AthletesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("All")
  const [eventFilter, setEventFilter] = useState("All")
  const [sortOption, setSortOption] = useState("relevance")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const classifyRegion = (location: string) => {
    const metroManila = [
      "manila",
      "quezon city",
      "makati",
      "taguig",
      "bonifacio global city",
      "bgc",
      "pasay",
      "pasig",
      "mandaluyong",
      "san juan",
      "parañaque",
      "las piñas",
      "marikina",
      "caloocan",
      "valenzuela",
      "malabon",
      "navotas",
      "muntinlupa",
    ]
    const visayas = [
      "cebu",
      "iloilo",
      "bacolod",
      "mactan",
      "aklan",
      "capiz",
      "tacloban",
      "ormoc",
      "bohol",
      "mandaue",
    ]
    const mindanao = [
      "davao",
      "cagayan de oro",
      "iligan",
      "tagum",
      "digos",
      "general santos",
      "koronadal",
      "zamboanga",
      "dipolog",
      "pagadian",
      "surigao",
      "butuan",
      "siargao",
    ]

    const lower = location.toLowerCase()
    if (metroManila.some((city) => lower.includes(city))) return "Metro Manila"
    if (visayas.some((city) => lower.includes(city))) return "Visayas"
    if (mindanao.some((city) => lower.includes(city))) return "Mindanao"
    return "Luzon"
  }

  const parseRank = (rank: string | undefined) => {
    if (!rank) return Number.POSITIVE_INFINITY
    const match = rank.match(/#(\d+)/)
    return match ? parseInt(match[1], 10) : Number.POSITIVE_INFINITY
  }

  const parsePerformance = (perf: string | undefined) => {
    if (!perf) return { value: Number.POSITIVE_INFINITY, higherIsBetter: false }
    const lower = perf.toLowerCase()
    const hasColon = lower.includes(":")
    const endsWithSeconds = /\ds\b/.test(lower) || lower.endsWith("s")
    const isTime = hasColon || endsWithSeconds

    if (isTime) {
      if (hasColon) {
        const parts = perf.split(":").map((p) => parseFloat(p))
        const [first, second = 0, third = 0] = parts
        const totalSeconds = parts.length === 3 ? first * 3600 + second * 60 + third : first * 60 + second
        return { value: totalSeconds, higherIsBetter: false }
      }
      return { value: parseFloat(perf), higherIsBetter: false }
    }

    const numeric = parseFloat(perf)
    const higherIsBetter = lower.includes("m") || lower.includes("pt") || lower.includes("pts")
    return { value: numeric, higherIsBetter }
  }

  const filteredAthletes = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    let result = athletes.filter((athlete) => {
      const events = getDisplayEvents(athlete)
      const matchesSearch =
        !term ||
        athlete.name.toLowerCase().includes(term) ||
        athlete.specialty.toLowerCase().includes(term) ||
        athlete.club.toLowerCase().includes(term) ||
        athlete.location.toLowerCase().includes(term) ||
        events.some((evt) => evt.toLowerCase().includes(term))

      const region = classifyRegion(athlete.location)
      const eventTags = getEventTags(athlete)
      const matchesRegion = regionFilter === "All" || region === regionFilter
      const matchesEvent = eventFilter === "All" || eventTags.includes(eventFilter)

      return matchesSearch && matchesRegion && matchesEvent
    })

    const sorter = (a: (typeof athletes)[number], b: (typeof athletes)[number]) => {
      switch (sortOption) {
        case "national_rank":
          return parseRank(a.nationalRank) - parseRank(b.nationalRank)
        case "asian_rank":
          return parseRank(a.asianRank) - parseRank(b.asianRank)
        case "global_rank":
          return parseRank(a.globalRank) - parseRank(b.globalRank)
        case "name":
          return a.name.localeCompare(b.name)
        case "personal_best": {
          const perfA = parsePerformance(a.pb)
          const perfB = parsePerformance(b.pb)
          if (perfA.higherIsBetter !== perfB.higherIsBetter) return 0
          if (perfA.higherIsBetter) {
            return perfB.value - perfA.value
          }
          return perfA.value - perfB.value
        }
        default:
          return 0
      }
    }

    return sortOption === "relevance" ? result : [...result].sort(sorter)
  }, [searchTerm, regionFilter, eventFilter, sortOption])

  const hasActiveFilters =
    Boolean(searchTerm.trim()) || regionFilter !== "All" || eventFilter !== "All" || sortOption !== "relevance"

  const activeFilterLabels = [
    regionFilter !== "All" ? `Region: ${regionFilter}` : null,
    eventFilter !== "All" ? `Event: ${eventFilter}` : null,
  ].filter(Boolean) as string[]

  const resetAll = () => {
    setSearchTerm("")
    setRegionFilter("All")
    setEventFilter("All")
    setSortOption("relevance")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

        <div className="page-shell py-10 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Search Athletes</h1>
        </div>

        <div className="sticky top-14 z-30 space-y-2">
          <Card className="py-0 gap-0 shadow-soft">
            <CardContent className="p-3 sm:p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  type="text"
                  placeholder="Search name, club, event..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-full pl-9"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="rounded-full w-full sm:w-[220px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="national_rank">National Rank</SelectItem>
                    <SelectItem value="asian_rank">Asian Rank</SelectItem>
                    <SelectItem value="global_rank">Global Rank</SelectItem>
                    <SelectItem value="personal_best">Personal Best</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>

                <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button type="button" variant="outline" className="rounded-full sm:w-auto w-full justify-center gap-2">
                      <SlidersHorizontal className="size-4" aria-hidden="true" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="gap-0 rounded-t-xl max-h-[85vh] overflow-hidden">
                    <SheetHeader className="border-b border-border">
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>

                    <div className="p-4 space-y-4 overflow-auto">
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-muted-foreground uppercase">Region</Label>
                        <Select value={regionFilter} onValueChange={setRegionFilter}>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {regionOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs font-semibold text-muted-foreground uppercase">Event</Label>
                        <Select value={eventFilter} onValueChange={setEventFilter}>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {eventOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <SheetFooter className="border-t border-border">
                      <Button type="button" onClick={() => setFiltersOpen(false)}>
                        Apply
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setRegionFilter("All")
                          setEventFilter("All")
                          setFiltersOpen(false)
                        }}
                      >
                        Clear
                      </Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              {activeFilterLabels.length ? (
                <div className="flex flex-wrap gap-2">
                  {activeFilterLabels.map((label) => (
                    <Badge key={label} variant="outline" className="bg-muted text-foreground">
                      {label}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Showing {filteredAthletes.length} of {athletes.length} athletes
            </span>
            {hasActiveFilters ? (
              <Button type="button" variant="link" className="h-auto p-0 text-accent" onClick={resetAll}>
                Reset
              </Button>
            ) : null}
          </div>
        </div>

        {filteredAthletes.length === 0 ? (
          <Card className="shadow-soft py-0 gap-0">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No athletes match your filters. Try adjusting search, region, or event.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {filteredAthletes.map((athlete) => {
              const badges = getEventTags(athlete).slice(0, 3)
              const rankLabel = [athlete.nationalRank, athlete.asianRank, athlete.globalRank].filter(Boolean).join(" · ")
              const details = [
                `Club: ${athlete.club}`,
                athlete.pb ? `PB: ${athlete.pb}` : undefined,
                rankLabel ? `Ranks: ${rankLabel}` : undefined,
              ].filter(Boolean) as string[]

              return (
                <ProfileCard
                  key={athlete.id}
                  name={athlete.name}
                  subtitle={athlete.specialty}
                  location={athlete.location}
                  badges={badges}
                  details={details}
                  href={athlete.href}
                  type="athlete"
                />
              )
            })}
          </div>
        )}
      </div>

      <div className="border-t border-border mt-16">
        <div className="page-shell py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
