"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { competitions } from "@/lib/data/competitions"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Search Competitions</h1>
          <p className="text-muted-foreground">Track and field competitions across the Philippines and beyond</p>
        </div>

        <Card className="py-0 gap-0 mb-6">
          <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Emoji symbol={emojiIcons.filter} className="text-sm" />
            Filters
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {(["Upcoming", "Past", "All"] as const).map((status) => (
              <Button
                key={status}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setStatusFilter(status)}
                className={`font-semibold ${
                  statusFilter === status ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90" : "hover:bg-muted hover:text-foreground"
                }`}
              >
                {status}
              </Button>
            ))}
          </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {filtered.map((comp) => (
            <Link key={comp.id} href={`/competitions/${comp.slug}`} className="block">
              <Card className="py-0 gap-0 hover:border-accent hover:bg-accent/5 transition-colors">
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-foreground">{comp.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{comp.location}</p>
                  <p className="text-xs text-muted-foreground">{comp.dateLabel}</p>
                </CardContent>
              </Card>
            </Link>
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
