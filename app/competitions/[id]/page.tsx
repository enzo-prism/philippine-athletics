import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const competitionData: Record<string, any> = {
  "1": {
    name: "Philippine National Championships 2024",
    type: "Track & Field",
    location: "Rizal Memorial Stadium, Manila",
    startDate: "April 15, 2024",
    endDate: "April 21, 2024",
    organizer: "Philippine Athletics Track & Field Association (PATFA)",
    about:
      "The National Championships is the premier track and field competition in the Philippines. Athletes compete for national titles across all track and field events.",
    events: [
      "100m Men & Women",
      "200m Men & Women",
      "400m Men & Women",
      "800m Men & Women",
      "1500m Men & Women",
      "5000m Men & Women",
      "10000m Men & Women",
      "4x100m Relay",
      "Long Jump",
      "High Jump",
      "Triple Jump",
      "Shot Put",
      "Discus Throw",
      "Javelin Throw",
      "Hammer Throw",
    ],
    participants: 240,
    countries: 1,
    records: 5,
    highlights: [
      "Maria Santos won 400m with 52.34s personal best",
      "Juan Dela Cruz set 5000m national record of 14:28.5",
      "Rafael Gomez claimed 100m title in 10.42s",
      "Multiple youth records set",
    ],
    medalists: [
      "Maria Santos - 400m (Gold)",
      "Juan Dela Cruz - 5000m (Gold)",
      "Rafael Gomez - 100m (Gold)",
      "Ana Reyes - Long Jump (Gold)",
    ],
    ticketInfo: "Free admission",
    sponsor: "Philippine Sports Commission, Local Government Units",
  },
  "2": {
    name: "SEA Games 2023",
    type: "Regional",
    location: "Multiple Venues, Southeast Asia",
    startDate: "May 5, 2023",
    endDate: "May 15, 2023",
    organizer: "Southeast Asian Games Federation",
    about:
      "The Southeast Asian Games is a biennial sport event involving athletes from the 11 countries of Southeast Asia. Track and field is a marquee event.",
    events: [
      "100m, 200m, 400m Men & Women",
      "800m, 1500m, 5000m Men & Women",
      "10000m Men & Women",
      "110m/100m Hurdles",
      "4x100m Relay",
      "4x400m Relay",
      "Marathon",
      "Race Walk",
      "Long Jump, High Jump, Triple Jump, Pole Vault",
      "Shot Put, Discus, Javelin, Hammer",
    ],
    participants: 600,
    countries: 11,
    records: 8,
    highlights: [
      "Juan Dela Cruz won gold in 5000m",
      "Philippine relay teams earned medals",
      "Rafael Gomez competed in 100m semifinals",
      "Strong showing by Filipino jumpers and throwers",
    ],
    medalists: [
      "Juan Dela Cruz - 5000m (Gold)",
      "Philippines - 4x400m Relay (Silver)",
      "Rafael Gomez - 100m (Silver)",
      "Ana Reyes - Long Jump (Bronze)",
    ],
    ticketInfo: "Various ticket prices for qualifying rounds",
    sponsor: "Host Country Government, Corporate Sponsors",
  },
  "3": {
    name: "Asian Athletics Championships 2023",
    type: "Continental",
    location: "Bangkok, Thailand",
    startDate: "June 20, 2023",
    endDate: "June 25, 2023",
    organizer: "Asian Athletics Association",
    about:
      "Premier continental championship featuring elite athletes from across Asia. Strong representation from Philippines team.",
    events: ["All Olympic Track & Field Events", "Marathon Men & Women", "Race Walk 20km", "All Field Events"],
    participants: 800,
    countries: 48,
    records: 3,
    highlights: [
      "Philippines team size of 18 athletes",
      "Juan Dela Cruz competed in 5000m final",
      "Rafael Gomez represented in sprints",
      "Strong team atmosphere and support",
    ],
    medalists: [
      "Juan Dela Cruz - Competed (Top 10)",
      "Rafael Gomez - Sprint Heats",
      "Multiple Philippine athletes competed",
    ],
    ticketInfo: "Paid admission to most sessions",
    sponsor: "Thai Government, International Sports Bodies",
  },
  "4": {
    name: "IAAF Regional Meet 2024",
    type: "International",
    location: "Various Cities, Asia-Pacific",
    startDate: "August 3, 2024",
    endDate: "August 25, 2024",
    organizer: "World Athletics (IAAF)",
    about:
      "Series of regional qualifying meets for international competitions. Important for athletes to gain exposure and qualifying standards.",
    events: ["All Track Events", "All Field Events", "Race Walk Events", "Marathon (Select Locations)"],
    participants: 1200,
    countries: 15,
    records: 2,
    highlights: [
      "Olympic qualifying opportunities",
      "High international competition level",
      "Multiple Philippines records challenged",
      "Strong Asian athlete participation",
    ],
    medalists: [
      "Philippine athletes competed across events",
      "Gaining international exposure",
      "Performance data collection",
    ],
    ticketInfo: "Varies by location",
    sponsor: "World Athletics, National Federations",
  },
  "5": {
    name: "Visayas Track & Field Open",
    type: "Regional",
    location: "Iloilo City Sports Complex",
    startDate: "March 10, 2024",
    endDate: "March 12, 2024",
    organizer: "Visayas Regional Athletics Committee",
    about: "Regional championship for Visayas area. Excellent competition for athletes to qualify for national teams.",
    events: ["100m to 10000m", "100m/110m Hurdles", "Relay Events", "Jumps & Throws", "Youth Categories"],
    participants: 250,
    countries: 1,
    records: 2,
    highlights: [
      "Strong Cebu Distance Runners representation",
      "Youth athletes showcasing talent",
      "Multiple sub-regional records",
      "Excellent training platform",
    ],
    medalists: [
      "Cebu Distance Runners - multiple golds",
      "Iloilo Track Club - regional dominance",
      "Rising youth stars emerging",
    ],
    ticketInfo: "Free admission",
    sponsor: "Iloilo City Government, Local Sponsors",
  },
  "6": {
    name: "Mindanao Athletics Championship",
    type: "Regional",
    location: "Davao City Sports Park",
    startDate: "February 24, 2024",
    endDate: "February 26, 2024",
    organizer: "Mindanao Regional Athletics Association",
    about: "Premier Mindanao region championship showcasing excellent field events and distance running talent.",
    events: [
      "100m to 10000m",
      "Hurdles & Steeplechase",
      "Relay Events",
      "Long Jump, High Jump, Triple Jump",
      "Shot Put, Discus, Javelin",
      "Youth & Masters Categories",
    ],
    participants: 200,
    countries: 1,
    records: 1,
    highlights: [
      "Davao Athletics field events dominance",
      "Strong distance running contingent",
      "Ana Reyes competing in field events",
      "Rising talent development",
    ],
    medalists: [
      "Davao Athletics - field events champions",
      "Ana Reyes - Long Jump (Gold)",
      "Regional qualifiers determined",
    ],
    ticketInfo: "Free to nominal admission",
    sponsor: "Davao City Government, Local Business",
  },
}

export default function CompetitionProfilePage({ params }: { params: { id: string } }) {
  const competition = competitionData[params.id]

  if (!competition) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-muted-foreground">Competition not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/competitions" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Competitions
        </Link>

        {/* Profile Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Competition</p>
              <h1 className="text-5xl font-bold text-foreground">{competition.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{competition.type}</p>
            </div>
          </div>
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="p-6 rounded-lg border border-border text-foreground leading-relaxed">{competition.about}</p>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Events</h2>
              <div className="grid grid-cols-2 gap-2">
                {competition.events.map((event: string, i: number) => (
                  <div key={i} className="flex gap-2 p-3 rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Highlights</h2>
              <div className="space-y-2">
                {competition.highlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medal Winners */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Medal Winners (Philippines)</h2>
              <div className="space-y-2">
                {competition.medalists.map((medalist: string, i: number) => (
                  <div key={i} className="p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                    <p className="text-foreground text-sm">{medalist}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
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
