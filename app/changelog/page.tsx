"use client"

import { useMemo, useState } from "react"
import { Clock, FileText, Filter, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { commitLog, commitLogUpdatedAt } from "@/lib/data/commit-log"
import { normalizeKey } from "@/lib/data/utils"

const AREA_LABELS: Record<string, string> = {
  app: "App pages",
  components: "Components",
  lib: "Utilities",
  data: "Data modules",
  docs: "Documentation",
  public: "Public assets",
  styles: "Styling",
  scripts: "Scripts",
  config: "Config",
  other: "Other files",
}

const TAG_FOCUS: Record<string, string> = {
  Athletes: "athlete profiles",
  Competitions: "competition results",
  Rankings: "rankings",
  Clubs: "club discovery",
  Coaches: "coach profiles",
  Recognition: "trust and safety",
  Search: "search",
  "Results Intake": "results intake",
  Changelog: "changelog",
  Navigation: "navigation",
  Accounts: "accounts",
  "Demo Data": "demo data",
  Docs: "documentation",
  Styling: "visual polish",
  Assets: "assets",
  Tooling: "tooling",
  Config: "configuration",
  Components: "shared UI",
  "App Pages": "app pages",
}

const formatDate = (value: string) => {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleString()
}

export default function ChangelogPage() {
  const [query, setQuery] = useState("")
  const [activeArea, setActiveArea] = useState("All")
  const [viewMode, setViewMode] = useState<"weekly" | "all">("weekly")

  const areaOptions = useMemo(() => {
    const areas = new Set<string>()
    commitLog.forEach((commit) => commit.areas.forEach((area) => areas.add(area)))
    return ["All", ...Array.from(areas).sort((a, b) => a.localeCompare(b))]
  }, [])

  const filteredCommits = useMemo(() => {
    const term = normalizeKey(query)
    return commitLog.filter((commit) => {
      const matchesArea = activeArea === "All" || commit.areas.includes(activeArea)
      if (!matchesArea) return false
      if (!term) return true
      const fileMatch = commit.files.some((file) => normalizeKey(file.path).includes(term))
      return (
        normalizeKey(commit.subject).includes(term) ||
        normalizeKey(commit.plainSummary).includes(term) ||
        commit.plainNotes.some((note) => normalizeKey(note).includes(term)) ||
        normalizeKey(commit.plainImpact).includes(term) ||
        normalizeKey(commit.summary).includes(term) ||
        normalizeKey(commit.author).includes(term) ||
        fileMatch
      )
    })
  }, [query, activeArea])

  const weeklyDigest = useMemo(() => {
    const getWeekStart = (date: Date) => {
      const start = new Date(date)
      const day = start.getDay()
      const diff = day === 0 ? 6 : day - 1
      start.setDate(start.getDate() - diff)
      start.setHours(0, 0, 0, 0)
      return start
    }

    const buckets = new Map<string, { start: Date; commits: typeof filteredCommits; tagCounts: Map<string, number> }>()

    filteredCommits.forEach((commit) => {
      const parsed = new Date(commit.date)
      if (Number.isNaN(parsed.getTime())) return
      const weekStart = getWeekStart(parsed)
      const key = weekStart.toISOString().slice(0, 10)
      if (!buckets.has(key)) {
        buckets.set(key, { start: weekStart, commits: [], tagCounts: new Map() })
      }
      const bucket = buckets.get(key)
      if (!bucket) return
      bucket.commits.push(commit)
      commit.tags.forEach((tag) => {
        bucket.tagCounts.set(tag, (bucket.tagCounts.get(tag) ?? 0) + 1)
      })
    })

    return Array.from(buckets.values())
      .sort((a, b) => b.start.getTime() - a.start.getTime())
      .map((bucket) => {
        const focusTags = Array.from(bucket.tagCounts.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([tag]) => tag)

        const focusLabel = focusTags.length
          ? focusTags.map((tag) => TAG_FOCUS[tag] ?? tag).join(", ")
          : "general improvements"

        return {
          weekLabel: `Week of ${bucket.start.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}`,
          focusLabel,
          commits: bucket.commits,
        }
      })
  }, [filteredCommits])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <FileText className="size-4" />
            Changelog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Project Changelog</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Demo-only update browser synced from Git history. Use this to see what changed, when it changed, and which files
            were touched.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3" />
            Last synced: {formatDate(commitLogUpdatedAt)}
            <span>•</span>
            Total updates: {commitLog.length}
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
                  placeholder="Search updates, authors, or files"
                  className="pl-9"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">View</span>
              <button
                type="button"
                onClick={() => setViewMode("weekly")}
                className={`rounded-full border px-3 py-1 ${
                  viewMode === "weekly" ? "border-accent text-accent" : "border-border text-foreground"
                }`}
              >
                Weekly digest
              </button>
              <button
                type="button"
                onClick={() => setViewMode("all")}
                className={`rounded-full border px-3 py-1 ${
                  viewMode === "all" ? "border-accent text-accent" : "border-border text-foreground"
                }`}
              >
                All updates
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Filter className="size-3" />
              {areaOptions.map((area) => {
                const active = area === activeArea
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setActiveArea(area)}
                    className={`rounded-full border px-3 py-1 ${
                      active ? "border-accent text-accent" : "border-border text-foreground"
                    }`}
                  >
                    {area === "All" ? "All areas" : AREA_LABELS[area] ?? area}
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Showing {filteredCommits.length} updates in {viewMode === "weekly" ? `${weeklyDigest.length} weekly digests` : "all updates"}.
            </p>
          </CardContent>
        </Card>

        {viewMode === "weekly" ? (
          <div className="space-y-4">
            {weeklyDigest.map((week) => (
              <Card key={week.weekLabel} className="py-0 gap-0">
                <CardContent className="p-5 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{week.weekLabel}</p>
                      <p className="text-xs text-muted-foreground">Focus: {week.focusLabel}.</p>
                    </div>
                    <Badge variant="outline">{week.commits.length} enhancements</Badge>
                  </div>
                  <div className="space-y-2">
                    {week.commits.slice(0, 3).map((commit) => (
                      <div key={commit.hash} className="rounded-md border border-border bg-muted/40 p-3">
                        <p className="text-sm font-semibold text-foreground">{commit.plainSummary}</p>
                        <p className="text-xs text-muted-foreground">
                          Why it matters: {commit.plainImpact}
                        </p>
                      </div>
                    ))}
                  </div>
                  <details className="rounded-md border border-border bg-background p-3">
                    <summary className="cursor-pointer text-xs font-semibold text-foreground">
                      View all enhancements this week
                    </summary>
                    <div className="mt-3 space-y-3">
                      {week.commits.map((commit) => (
                        <div key={commit.hash} className="rounded-md border border-border bg-muted/40 p-3 space-y-2">
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
                            <Badge variant="outline">{commit.shortHash}</Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <span>{commit.author}</span>
                            <span>•</span>
                            <span>{formatDate(commit.date)}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {commit.tags.map((tag) => (
                              <Badge key={`${commit.hash}-${tag}`} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCommits.map((commit) => (
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
                      ) : (
                        <p className="text-xs text-muted-foreground">{commit.summary}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Why it matters: {commit.plainImpact}
                      </p>
                    </div>
                    <Badge variant="outline">{commit.shortHash}</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{commit.author}</span>
                    <span>•</span>
                    <span>{formatDate(commit.date)}</span>
                    <span>•</span>
                    <span>{commit.stats.summary}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {commit.tags.map((tag) => (
                      <Badge key={`${commit.hash}-${tag}`} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <details className="rounded-md border border-border bg-muted/40 p-3">
                    <summary className="cursor-pointer text-xs font-semibold text-foreground">Technical details</summary>
                    <div className="mt-3 space-y-2">
                      <div className="text-xs text-muted-foreground">
                      Update: {commit.subject}
                      </div>
                      {commit.body ? (
                        <div className="text-xs text-muted-foreground whitespace-pre-line">{commit.body}</div>
                      ) : null}
                      <div className="space-y-1">
                        {commit.notes.map((note, idx) => (
                          <div key={`${commit.hash}-note-${idx}`} className="text-xs text-muted-foreground">
                            {note}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {commit.files.map((file) => (
                          <div key={`${commit.hash}-${file.path}`} className="text-xs text-muted-foreground">
                            {file.additions !== null ? `+${file.additions}` : "+-"} {file.deletions !== null ? `-${file.deletions}` : "-"} {file.path}
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
