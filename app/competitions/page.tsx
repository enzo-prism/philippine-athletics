import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { competitions } from "@/lib/data/competitions"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const statusOptions = ["Upcoming", "Past", "All"] as const

type StatusFilter = (typeof statusOptions)[number]

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const normalizeStatus = (value: string): StatusFilter =>
  statusOptions.includes(value as StatusFilter) ? (value as StatusFilter) : "Upcoming"

export default function CompetitionsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const statusFilter = normalizeStatus(getParam(searchParams, "status"))
  const filtered = statusFilter === "All" ? competitions : competitions.filter((c) => c.status === statusFilter)

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
              {statusOptions.map((status) => {
                const active = statusFilter === status
                const href = status === "Upcoming" ? "/competitions" : `/competitions?status=${encodeURIComponent(status)}`
                return (
                  <Button
                    key={status}
                    asChild
                    type="button"
                    variant="outline"
                    size="sm"
                    className={`font-semibold ${
                      active
                        ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90"
                        : "hover:bg-muted hover:text-foreground"
                    }`}
                    data-testid={`competition-filter-${status.toLowerCase()}`}
                  >
                    <Link href={href}>{status}</Link>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3" data-testid="competition-list">
          {filtered.map((comp) => (
            <Link key={comp.id} href={`/competitions/${comp.slug}`} className="block">
              <Card className="py-0 gap-0 hover:border-accent hover:bg-accent/5 transition-colors" data-testid="competition-item">
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
