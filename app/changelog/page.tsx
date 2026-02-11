"use client"

import { useMemo, useState } from "react"
import { CalendarDays, FileText, Filter, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { productUpdates } from "@/lib/data/changelog-updates"
import { normalizeKey } from "@/lib/data/utils"

const DATE_ONLY_VALUE = /^\d{4}-\d{2}-\d{2}$/

const parseChangelogDate = (value: string) => {
  if (DATE_ONLY_VALUE.test(value)) {
    const [year, month, day] = value.split("-").map(Number)
    return new Date(year, month - 1, day)
  }

  return new Date(value)
}

const formatDay = (value: string) => {
  const parsed = parseChangelogDate(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function ChangelogPage() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categoryOptions = useMemo(() => {
    const categories = new Set<string>()
    productUpdates.forEach((update) => update.category.forEach((tag) => categories.add(tag)))
    return ["All", ...Array.from(categories).sort((a, b) => a.localeCompare(b))]
  }, [])

  const filteredUpdates = useMemo(() => {
    const term = normalizeKey(query)

    return productUpdates.filter((update) => {
      const matchesCategory = activeCategory === "All" || update.category.includes(activeCategory as (typeof update.category)[number])
      if (!matchesCategory) return false
      if (!term) return true

      const searchable = [
        update.title,
        update.summary,
        update.whyItMatters,
        ...update.highlights,
        ...update.category,
      ]

      return searchable.some((item) => normalizeKey(item).includes(term))
    })
  }, [activeCategory, query])
  const lastUpdated = productUpdates[0]?.date ?? ""

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <header className="space-y-5">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <FileText className="size-4" />
            Updates
          </p>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Project Updates</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            A clean, focused timeline of product changes. Each update highlights what shipped, when it happened, and the key
            takeaways.
          </p>
          <div className="text-xs text-muted-foreground">Last updated {formatDay(lastUpdated)}</div>
          <div className="text-xs text-muted-foreground">
            Showing {filteredUpdates.length} update{filteredUpdates.length === 1 ? "" : "s"}
          </div>
        </header>

        <Card className="py-0 gap-0">
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Label className="text-xs font-semibold uppercase">Search</Label>
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search title, details, or takeaways"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Filter className="size-3" />
              {categoryOptions.map((category) => {
                const active = category === activeCategory
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3 py-1 ${
                      active ? "border-accent text-accent" : "border-border text-foreground"
                    }`}
                  >
                    {category === "All" ? "All categories" : category}
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {filteredUpdates.map((update) => (
            <Card key={update.id} className="gap-0 py-0">
              <CardHeader className="space-y-5 p-8 pb-0 sm:p-10 sm:pb-0">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl leading-tight sm:text-3xl">{update.title}</CardTitle>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="size-4" />
                      {formatDay(update.date)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {update.category.map((category) => (
                      <Badge key={`${update.id}-${category}`} variant="outline" className="px-3 py-1 text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8 sm:p-10">
                <p className="text-base leading-relaxed text-foreground">{update.summary}</p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Key takeaways</p>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {update.highlights.map((point) => (
                      <li key={`${update.id}-${point}`} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Why it matters:</span> {update.whyItMatters}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
