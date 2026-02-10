"use client"

import { useMemo, useState } from "react"
import { CalendarDays, Clock, FileText, Filter, Search, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { commitLog } from "@/lib/data/commit-log"
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

const formatDate = (value: string) => {
  const parsed = parseChangelogDate(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
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
  const [viewMode, setViewMode] = useState<"highlights" | "commits">("highlights")

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

  const filteredCommits = useMemo(() => {
    const term = normalizeKey(query)

    return commitLog.filter((commit) => {
      const categoryMatch =
        activeCategory === "All" ||
        commit.plainSummary.includes(activeCategory) ||
        commit.tags.some((tag) => normalizeKey(tag).includes(normalizeKey(activeCategory)))

      if (!categoryMatch) return false
      if (!term) return true

      return (
        normalizeKey(commit.plainSummary).includes(term) ||
        commit.plainNotes.some((note) => normalizeKey(note).includes(term)) ||
        normalizeKey(commit.plainImpact).includes(term) ||
        normalizeKey(commit.author).includes(term)
      )
    })
  }, [activeCategory, query])

  const lastUpdated = useMemo(() => {
    const latestProductDate = productUpdates[0]?.date ? parseChangelogDate(productUpdates[0].date).getTime() : 0
    const latestCommitDate = commitLog[0]?.date ? parseChangelogDate(commitLog[0].date).getTime() : 0
    const latest = Math.max(latestProductDate, latestCommitDate)
    return latest ? new Date(latest).toISOString() : ""
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <FileText className="size-4" />
            Updates
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Project Updates</h1>
          <p className="text-sm text-muted-foreground max-w-3xl">
            A complete, plain-language timeline of what changed in the app and why each update matters. Browse product highlights or
            drill into the commit-level engineering feed.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <Card className="py-0">
              <CardContent className="p-4 space-y-1">
                <p className="text-xs uppercase font-semibold text-muted-foreground">Last updated</p>
                <p className="text-sm font-semibold text-foreground">{formatDate(lastUpdated)}</p>
              </CardContent>
            </Card>
            <Card className="py-0">
              <CardContent className="p-4 space-y-1">
                <p className="text-xs uppercase font-semibold text-muted-foreground">Product releases logged</p>
                <p className="text-sm font-semibold text-foreground">{productUpdates.length} major updates</p>
              </CardContent>
            </Card>
            <Card className="py-0">
              <CardContent className="p-4 space-y-1">
                <p className="text-xs uppercase font-semibold text-muted-foreground">Engineering changes tracked</p>
                <p className="text-sm font-semibold text-foreground">{commitLog.length} commit entries</p>
              </CardContent>
            </Card>
          </div>
        </header>

        <Card className="py-0 gap-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Label className="text-xs font-semibold uppercase">Search</Label>
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search updates, reasons, or contributors"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-foreground">View</span>
              <button
                type="button"
                onClick={() => setViewMode("highlights")}
                className={`rounded-full border px-3 py-1 ${
                  viewMode === "highlights" ? "border-accent text-accent" : "border-border text-foreground"
                }`}
              >
                Product highlights
              </button>
              <button
                type="button"
                onClick={() => setViewMode("commits")}
                className={`rounded-full border px-3 py-1 ${
                  viewMode === "commits" ? "border-accent text-accent" : "border-border text-foreground"
                }`}
              >
                Commit feed
              </button>
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

            <p className="text-xs text-muted-foreground">
              {viewMode === "highlights"
                ? `Showing ${filteredUpdates.length} product updates with clear context and impact.`
                : `Showing ${filteredCommits.length} commits from the engineering timeline.`}
            </p>
          </CardContent>
        </Card>

        {viewMode === "highlights" ? (
          <div className="space-y-4">
            {filteredUpdates.map((update) => (
              <Card key={update.id} className="py-0 gap-0">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{update.title}</CardTitle>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarDays className="size-3" />
                        {formatDay(update.date)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {update.category.map((category) => (
                        <Badge key={`${update.id}-${category}`} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <p className="text-sm text-foreground">{update.summary}</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    {update.highlights.map((point) => (
                      <li key={`${update.id}-${point}`}>{point}</li>
                    ))}
                  </ul>
                  <div className="rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground flex gap-2">
                    <Sparkles className="size-4 mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-semibold text-foreground">Why it matters:</span> {update.whyItMatters}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCommits.map((commit, index) => (
              <Card key={commit.hash} className="py-0 gap-0">
                <CardContent className="p-5 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{commit.plainSummary}</p>
                      {commit.plainNotes.length ? (
                        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                          {commit.plainNotes.map((note) => (
                            <li key={`${commit.hash}-${note}`}>{note}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="text-xs text-muted-foreground">
                        Why it matters: {commit.plainImpact}
                      </p>
                    </div>
                    <Badge variant="outline">Commit {index + 1}</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{commit.author}</span>
                    <span>•</span>
                    <span>{formatDate(commit.date)}</span>
                    <span>•</span>
                    <Clock className="size-3" />
                    <span>{commit.shortHash}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {commit.tags.map((tag) => (
                      <Badge key={`${commit.hash}-${tag}`} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
