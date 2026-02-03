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

const formatDate = (value: string) => {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleString()
}

export default function ChangelogPage() {
  const [query, setQuery] = useState("")
  const [activeArea, setActiveArea] = useState("All")

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
      normalizeKey(commit.summary).includes(term) ||
      normalizeKey(commit.author).includes(term) ||
      fileMatch
    )
  })
}, [query, activeArea])

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
            Demo-only commit browser synced from Git history. Use this to see what changed, when it changed, and which files
            were touched.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3" />
            Last synced: {formatDate(commitLogUpdatedAt)}
            <span>•</span>
            Total commits: {commitLog.length}
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
                  placeholder="Search commits, authors, or files"
                  className="pl-9"
                />
              </div>
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
            <p className="text-xs text-muted-foreground">Showing {filteredCommits.length} commits.</p>
          </CardContent>
        </Card>

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
                      Commit: {commit.subject}
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
      </div>
    </div>
  )
}
