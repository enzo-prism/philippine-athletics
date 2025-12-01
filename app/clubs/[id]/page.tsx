import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CalendarRange, ChevronLeft, MapPin, Trophy } from "lucide-react"

type ClubProfile = {
  name: string
  focus: string
  location: string
  founded: string
  spots: string
  membersCount: number
  coaches: number
  facilities: string[]
  programs: string[]
  about: string
  achievements: string[]
  coach: string
  athletes: string[]
  contact: string
}

const clubData: Record<string, ClubProfile> = {
  "1": {
    name: "Manila Speed Club",
    focus: "Sprint Training",
    location: "Manila, NCR",
    founded: "2008",
    spots: "6 spots open",
    membersCount: 45,
    coaches: 5,
    facilities: ["400m Indoor Track", "Strength & Conditioning Center", "Recovery Room", "Sports Medicine Clinic"],
    programs: ["Sprints (100/200/400)", "Relays", "Speed Development"],
    about:
      "Dedicated to technical sprint development and relay excellence. Manila Speed Club supports elite and emerging sprinters with data-informed training.",
    achievements: ["12 National Champions (2015-2024)", "SEA Games 5 Gold Medals", "Asian Games 2 Medalists", "Olympic Team Members"],
    coach: "Coach Roberto Tan",
    athletes: ["Maria Santos", "Rafael Gomez"],
    contact: "contact@manilaspeedclub.ph",
  },
  "2": {
    name: "Cebu Distance Runners",
    focus: "Long Distance Running",
    location: "Cebu, Visayas",
    founded: "2010",
    spots: "4 spots open",
    membersCount: 38,
    coaches: 4,
    facilities: ["400m Outdoor Track", "Training Circuits", "Altitude Training Program", "Nutrition Lab"],
    programs: ["5K/10K", "Half/Marathon prep", "Altitude camps"],
    about:
      "Holistic distance program combining altitude blocks, nutrition support, and tactical race prep for track and road athletes.",
    achievements: ["8 Philippine Record Holders", "SEA Games 3 Gold Medals", "Asian Athletics Championships Participants", "National Champions in 5K & 10K"],
    coach: "Coach Maria Gonzales",
    athletes: ["Juan Dela Cruz", "Carlos Mendoza"],
    contact: "info@cebudistancerunners.ph",
  },
  "3": {
    name: "Davao Athletics",
    focus: "Field Events",
    location: "Davao, Mindanao",
    founded: "2012",
    spots: "8 spots open",
    membersCount: 32,
    coaches: 3,
    facilities: ["Multi-Event Field", "Long Jump Pit", "Throwing Circle", "High Jump Area"],
    programs: ["Long/Triple Jump", "Throws", "Youth Development"],
    about:
      "Specialized in jumps and throws with biomechanical analysis and progressive strength programs for field athletes.",
    achievements: ["6 National Champions in Field Events", "SEA Games 2 Medalists", "Technical Innovation Award 2023", "Youth Development Program Leaders"],
    coach: "Coach Antonio Reyes",
    athletes: ["Ana Reyes", "Linda Villegas"],
    contact: "training@davaoathletics.ph",
  },
  "4": {
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City, NCR",
    founded: "2015",
    spots: "5 spots open",
    membersCount: 28,
    coaches: 3,
    facilities: ["400m Track", "Relay Training Zone", "Speed Development Lab", "Video Analysis Center"],
    programs: ["100/200/400", "4×100m", "4×400m"],
    about:
      "Sprint-first club focused on relay chemistry and technical speed work for national relay pools and junior sprinters.",
    achievements: ["Philippines Fastest 100m Runner", "4×100m Relay National Record", "SEA Games Sprint Representatives", "Olympic Trials Qualifiers"],
    coach: "Coach Emmanuel Cruz",
    athletes: ["Rafael Gomez"],
    contact: "qcsprinters@ph-athletics.com",
  },
  "5": {
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo, Visayas",
    founded: "2011",
    spots: "3 spots open",
    membersCount: 35,
    coaches: 4,
    facilities: ["400m Track", "Multi-Purpose Field", "Training Gym", "Recovery Center"],
    programs: ["Youth multi-event", "High jump development", "Speed fundamentals"],
    about: "Comprehensive program serving beginners to elite athletes with tailored event coaching and mentorship.",
    achievements: ["7 National Champions", "SEA Games 2 Medalists", "Emerging Talent Program 2023", "Community Development Award"],
    coach: "Coach Lisa Santos",
    athletes: ["Linda Villegas"],
    contact: "info@iloilotrack.org",
  },
  "6": {
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna, CALABARZON",
    founded: "2013",
    spots: "10 spots open",
    membersCount: 50,
    coaches: 6,
    facilities: ["400m Training Track", "Youth Development Center", "Coaching Academy", "Science Lab"],
    programs: ["Youth sprints", "Throws basics", "Multi-event foundations"],
    about:
      "Focused on building future champions through fundamentals, education, and supportive community programs.",
    achievements: ["15+ Youth National Champions", "Junior Olympics Multiple Medalists", "Coach Education Program Leaders", "Athlete Development Award 2024"],
    coach: "Head Coach Team",
    athletes: ["25+ Youth Athletes"],
    contact: "academy@lagunaaathletics.ph",
  },
}

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">{label}</p>
    <p className="text-xl font-bold text-foreground">{value}</p>
  </div>
)

export default function ClubProfilePage({ params }: { params: { id: string } }) {
  const club = clubData[params.id]

  if (!club) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-muted-foreground">Club not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Link href="/clubs" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Clubs
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Club
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {club.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              {club.spots}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{club.name}</h1>
              <p className="text-base text-muted-foreground mt-2">{club.focus}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="mailto:clubs@philippineathletics.ph"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
              >
                Apply / Join
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Founded" value={club.founded} />
            <StatCard label="Spots Open" value={club.spots} />
            <StatCard label="Members" value={`${club.membersCount}`} />
            <StatCard label="Coaches" value={`${club.coaches}`} />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">About</h2>
              <p className="p-6 rounded-lg border border-border bg-card leading-relaxed text-sm text-foreground">{club.about}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Programs & Teams</h2>
              <div className="flex flex-wrap gap-2">
                {club.programs.map((program) => (
                  <span key={program} className="text-xs font-semibold px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
                    {program}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Achievements</h2>
              <div className="space-y-2">
                {club.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <Trophy className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Quick Info</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-foreground">{club.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarRange className="w-4 h-4 text-accent" />
                  <span className="text-foreground">Founded {club.founded}</span>
                </div>
                <div>
                  <p className="text-muted-foreground">Head Coach</p>
                  <p className="text-foreground font-medium">{club.coach}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Facilities</p>
              <div className="space-y-2">
                {club.facilities.map((facility, i) => (
                  <div key={i} className="text-sm text-foreground">
                    {facility}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/40 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Roster highlights</p>
              <div className="space-y-1 text-sm text-foreground">
                {typeof club.athletes[0] === "string" && !club.athletes[0].includes("+")
                  ? club.athletes.map((athlete) => <div key={athlete}>{athlete}</div>)
                  : club.athletes.map((a) => <div key={a}>{a}</div>)}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <p className="text-sm text-accent break-all">{club.contact}</p>
            </div>
          </aside>
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
