import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getCompetitionByIdOrStub } from "@/lib/data/competitions"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function CompetitionProfilePage({ params }: { params: { id: string } }) {
  const param = params.id?.trim() || ""
  const competition = getCompetitionByIdOrStub(param)
  const isStub = competition.isStub

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/competitions" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Competitions
        </Link>

        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Competition</p>
              <h1 className="text-5xl font-bold text-foreground">{competition.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{competition.type}</p>
            </div>
          </div>
          {isStub ? (
            <div className="mt-4 p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              Competition details are coming soon. Basic placeholder shown to avoid broken links.
            </div>
          ) : null}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Participants</p>
              <p className="text-2xl font-bold text-accent">{competition.participants}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Countries</p>
              <p className="text-2xl font-bold text-accent">{competition.countries}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Records Set</p>
              <p className="text-2xl font-bold text-accent">{competition.records}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Location</p>
              <p className="text-sm font-bold text-foreground">{competition.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="p-6 rounded-lg border border-border text-foreground leading-relaxed">{competition.about}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Events</h2>
              <div className="grid grid-cols-2 gap-2">
                {competition.events.map((event, i) => (
                  <div key={i} className="flex gap-2 p-3 rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{event}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Highlights</h2>
              <div className="space-y-2">
                {competition.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Medal Winners (Philippines)</h2>
              <div className="space-y-2">
                {competition.medalists.map((medalist, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                    <p className="text-foreground text-sm">{medalist}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-4">Key Information</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                  <p className="text-sm font-medium text-foreground">{competition.startDate}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">End Date</p>
                  <p className="text-sm font-medium text-foreground">{competition.endDate}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Organizer</p>
                  <p className="text-sm font-medium text-foreground">{competition.organizer}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Logistics</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tickets</p>
                  <p className="text-sm text-foreground">{competition.ticketInfo}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sponsors</p>
                  <p className="text-xs text-foreground">{competition.sponsor}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Competition Type</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">{competition.type}</p>
                <p className="text-xs text-muted-foreground mt-2">Participants: {competition.participants}</p>
                <p className="text-xs text-muted-foreground">Countries: {competition.countries}</p>
              </div>
            </div>
          </div>
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
