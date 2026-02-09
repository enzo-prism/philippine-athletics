import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

const sanctionedEvents = [
  {
    name: "Philippine National Open Championships",
    date: "Apr 24–27, 2026",
    location: "Pasig City, NCR",
    status: "Sanctioned",
    director: "Philippine Athletics",
  },
  {
    name: "PATAFA Youth Relay Festival",
    date: "May 18, 2026",
    location: "Cebu City, Central Visayas",
    status: "Sanctioned",
    director: "PATAFA Development Committee",
  },
  {
    name: "Mindanao Throws & Jumps Series",
    date: "Jun 8, 2026",
    location: "Davao City, Davao Region",
    status: "Permit Pending",
    director: "Mindanao Athletics Council",
  },
  {
    name: "Vermosa Summer Track Classic",
    date: "Jul 12, 2026",
    location: "Imus, Cavite",
    status: "Sanctioned",
    director: "Vermosa Sports Hub",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest">Sanctioned Events</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Sanctioned Events Calendar</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            A Sport:80-style view of PATAFA-sanctioned competitions. Browse upcoming meets, directors, and permit status.
          </p>
        </header>

        <Card className="py-0 gap-0 border-accent/30 bg-accent/5">
          <CardContent className="p-6 space-y-2">
            <p className="text-sm font-semibold text-foreground">Widget preview</p>
            <p className="text-sm text-muted-foreground">
              This demo mirrors the Sport:80 sanctioned events widget layout with filters and quick status tags.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {sanctionedEvents.map((event) => (
            <Card key={event.name} className="py-0 gap-0 shadow-soft">
              <CardContent className="p-5 space-y-3">
                <div>
                  <p className="text-lg font-semibold text-foreground">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <div className="text-sm text-muted-foreground">{event.location}</div>
                <div className="text-xs text-muted-foreground">Director: {event.director}</div>
                <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                  {event.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
