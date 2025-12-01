import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CalendarRange, ChevronLeft, Mail, MapPin, Medal, MessageSquare, Phone, Star } from "lucide-react"

export const dynamic = "force-dynamic"
export const dynamicParams = true

type EventPerformance = {
  name: string
  personalBest: string
  seasonBest?: string
  nationalRank?: string
  asianRank?: string
  globalRank?: string
}

type CompetitionResult = {
  meet: string
  date: string
  location: string
  event: string
  result: string
  place: string
}

type UpcomingCompetition = {
  meet: string
  date: string
  location: string
  events: string[]
}

type Contact = {
  sms?: string
  whatsapp?: string
  email?: string
  instagram?: string
  facebook?: string
}

type Sponsor = {
  name: string
  category: string
  note?: string
}

type AthleteProfile = {
  id: string
  firstName: string
  lastName: string
  specialty: string
  location: string
  club: string
  coach: string
  events: EventPerformance[]
  birthDate: string
  hometown: string
  joinedYear: number
  achievements: string[]
  competitions: CompetitionResult[]
  upcoming: UpcomingCompetition[]
  bio: string
  contact: Contact
  sponsors: Sponsor[]
}

const athleteData: AthleteProfile[] = [
  {
    id: "1",
    firstName: "Maria",
    lastName: "Santos",
    specialty: "400m / 200m Sprinter",
    location: "Taguig (Bonifacio Global City)",
    club: "Manila Speed Club",
    coach: "Coach Roberto Tan",
    events: [
      { name: "400m", personalBest: "52.34s", seasonBest: "52.89s", nationalRank: "#1 PH", asianRank: "#4 Asia", globalRank: "#32 World" },
      { name: "200m", personalBest: "23.12s", seasonBest: "23.35s", nationalRank: "#2 PH", asianRank: "#12 Asia", globalRank: "#80 World" },
      { name: "4×400m relay", personalBest: "3:32.10 (split 52.1s)", nationalRank: "#1 PH", asianRank: "#5 Asia", globalRank: "#40 World" },
    ],
    birthDate: "March 15, 1999",
    hometown: "Manila",
    joinedYear: 2015,
    achievements: [
      "Philippine National Champion 2024 (400m)",
      "SEA Games Silver Medalist 2023 (4×400m Relay)",
      "National Record Holder (Indoor 400m)",
      "Commonwealth Games Qualifier 2022",
    ],
    competitions: [
      { meet: "Philippine National Championships", date: "Apr 2024", location: "Manila", event: "400m", result: "52.34s", place: "1st" },
      { meet: "SEA Games", date: "May 2023", location: "Cambodia", event: "4×400m relay", result: "3:32.10 (split 52.1s)", place: "2nd" },
      { meet: "Asian Championships", date: "Jul 2023", location: "Bangkok", event: "400m", result: "52.90s", place: "5th" },
    ],
    upcoming: [
      { meet: "Asian Grand Prix", date: "Aug 12, 2025", location: "Bangkok", events: ["400m", "4×400m relay"] },
      { meet: "World Relays Qualifier", date: "Sep 3, 2025", location: "Singapore", events: ["4×400m relay"] },
    ],
    bio: "Quarter-miler known for aggressive backstretch pacing and strong finishes. Focused on qualifying for world relays and continental finals.",
    contact: {
      sms: "+63 917 555 1234",
      whatsapp: "+63 917 555 1234",
      email: "maria.santos@samplemail.ph",
      instagram: "@maria400",
      facebook: "facebook.com/maria400",
    },
    sponsors: [
      { name: "SprintLab", category: "Apparel", note: "Race kit" },
      { name: "HydraFuel", category: "Nutrition", note: "Hydration & gels" },
      { name: "StridePT", category: "Recovery", note: "Physio support" },
    ],
  },
]

const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">{label}</p>
    <p className="text-xl font-bold text-foreground">{value}</p>
    {hint ? <p className="text-xs text-muted-foreground mt-1">{hint}</p> : null}
  </div>
)

const ContactItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-2 text-sm text-foreground">
    <Icon className="w-4 h-4 text-accent" />
    <span className="font-medium">{label}:</span>
    <span className="text-muted-foreground">{value}</span>
  </div>
)

function getAthleteById(id: string): AthleteProfile | undefined {
  return athleteData.find((a) => a.id === id)
}

export default function AthleteProfilePage({ params }: { params: { id: string } }) {
  const rawId = params?.id ?? ""
  const id = decodeURIComponent(rawId).trim().replace(/\/+$/, "")
  const athlete = getAthleteById(id) ?? getAthleteById("1")

  if (!athlete) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-muted-foreground">Athlete not found</p>
        </div>
      </div>
    )
  }

  const primaryEvent = athlete.events[0]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Link href="/athletes" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Athletes
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Athlete
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {athlete.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              Club: {athlete.club}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {athlete.firstName} {athlete.lastName}
              </h1>
              <p className="text-base text-muted-foreground mt-2">{athlete.specialty}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {athlete.events.map((evt) => (
                  <span key={evt.name} className="text-xs font-medium px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
                    {evt.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {athlete.contact.whatsapp ? (
                <Link
                  href={`https://wa.me/${athlete.contact.whatsapp.replace(/\D/g, "")}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Message (WhatsApp)
                </Link>
              ) : athlete.contact.sms ? (
                <Link
                  href={`sms:${athlete.contact.sms}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Message
                </Link>
              ) : null}
              {athlete.contact.email ? (
                <Link
                  href={`mailto:${athlete.contact.email}`}
                  className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
                >
                  Email
                </Link>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Primary Event" value={primaryEvent?.name || "—"} />
            <StatCard label="Personal Best" value={primaryEvent?.personalBest || "—"} />
            <StatCard label="National Rank" value={primaryEvent?.nationalRank || "—"} />
            <StatCard label="Global Rank" value={primaryEvent?.globalRank || "—"} />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">About</h2>
              </div>
              <p className="p-6 rounded-lg border border-border bg-card leading-relaxed text-sm text-foreground">
                {athlete.bio}
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Medal className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Event Performances</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {athlete.events.map((evt) => (
                  <div key={evt.name} className="p-4 rounded-lg border border-border bg-card space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">{evt.name}</p>
                      <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-full">
                        PB: {evt.personalBest}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>National: {evt.nationalRank || "—"}</p>
                      <p>Asian: {evt.asianRank || "—"}</p>
                      <p>Global: {evt.globalRank || "—"}</p>
                      {evt.seasonBest ? <p>Season: {evt.seasonBest}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Recent Competitions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {athlete.competitions.map((comp, i) => (
                  <div key={`${comp.meet}-${i}`} className="p-4 rounded-lg border border-border bg-card space-y-1">
                    <p className="text-sm font-semibold text-foreground">{comp.meet}</p>
                    <p className="text-xs text-muted-foreground">
                      {comp.date} • {comp.location}
                    </p>
                    <p className="text-xs text-foreground">
                      {comp.event} — {comp.result} ({comp.place})
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Upcoming Competitions</h2>
              </div>
              {athlete.upcoming.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming competitions listed.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {athlete.upcoming.map((up, i) => (
                    <div key={`${up.meet}-${i}`} className="p-4 rounded-lg border border-border bg-card space-y-1">
                      <p className="text-sm font-semibold text-foreground">{up.meet}</p>
                      <p className="text-xs text-muted-foreground">
                        {up.date} • {up.location}
                      </p>
                      <p className="text-xs text-foreground">Events: {up.events.join(", ")}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Profile</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Birth date</p>
                  <p className="text-foreground font-medium">{athlete.birthDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hometown</p>
                  <p className="text-foreground font-medium">{athlete.hometown}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Club</p>
                  <p className="text-foreground font-medium">{athlete.club}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Coach</p>
                  <p className="text-foreground font-medium">{athlete.coach}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Joined</p>
                  <p className="text-foreground font-medium">{athlete.joinedYear}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years Active</p>
                  <p className="text-foreground font-medium">{new Date().getFullYear() - athlete.joinedYear} years</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <div className="space-y-2">
                {athlete.contact.sms ? <ContactItem icon={Phone} label="Text" value={athlete.contact.sms} /> : null}
                {athlete.contact.whatsapp ? (
                  <ContactItem icon={MessageSquare} label="WhatsApp" value={athlete.contact.whatsapp} />
                ) : null}
                {athlete.contact.email ? <ContactItem icon={Mail} label="Email" value={athlete.contact.email} /> : null}
                {athlete.contact.instagram ? (
                  <ContactItem icon={MessageSquare} label="Instagram" value={athlete.contact.instagram} />
                ) : null}
                {athlete.contact.facebook ? (
                  <ContactItem icon={MessageSquare} label="Facebook" value={athlete.contact.facebook} />
                ) : null}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/40 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Sponsors</p>
              {athlete.sponsors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No sponsors listed.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {athlete.sponsors.map((sponsor) => (
                    <span
                      key={sponsor.name}
                      className="text-xs font-semibold px-2 py-1 rounded-md bg-white text-accent border border-accent/30"
                      title={sponsor.note}
                    >
                      {sponsor.name} • {sponsor.category}
                    </span>
                  ))}
                </div>
              )}
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
