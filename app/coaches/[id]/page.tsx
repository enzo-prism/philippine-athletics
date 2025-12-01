import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CalendarRange, ChevronLeft, MapPin, Medal, Star } from "lucide-react"

type CoachProfile = {
  name: string
  specialty: string
  location: string
  club: string
  badges?: string[]
  experience: string
  certification: string
  specialization: string
  birthDate: string
  hometown: string
  education: string
  language: string
  achievements: string[]
  athletesCoached: string[]
  philosophy: string
  bio: string
  availability: string
}

const coachData: Record<string, CoachProfile> = {
  "1": {
    name: "Coach Roberto Tan",
    specialty: "Sprint Coach",
    location: "Manila",
    club: "Manila Speed Club",
    badges: ["National Team Coach"],
    experience: "25 years",
    certification: "World Athletics Level 3",
    specialization: "Speed & technical sprint mechanics",
    birthDate: "June 10, 1965",
    hometown: "Manila",
    education: "BS Sports Science, University of the Philippines",
    language: "Filipino, English",
    achievements: [
      "Trained 15+ National Champions",
      "Produced 5 Olympic Athletes",
      "SEA Games Gold Medal Coach 2023",
      "World Athletics Coaching Excellence Award 2022",
    ],
    athletesCoached: ["Maria Santos", "Rafael Gomez", "Carlos Mendoza"],
    philosophy: "Sprint success requires technical precision, smart load management, and confident race execution.",
    bio: "Head sprint coach with a focus on acceleration mechanics and repeatability. Leads sprint relays for national pool camps.",
    availability: "Open for relay camps, private consults, and seasonal program design.",
  },
  "2": {
    name: "Coach Maria Gonzales",
    specialty: "Distance Running Specialist",
    location: "Cebu City",
    club: "Cebu Distance Runners",
    badges: [],
    experience: "18 years",
    certification: "World Athletics Level 3",
    specialization: "Middle & long distance periodization",
    birthDate: "August 22, 1967",
    hometown: "Cebu",
    education: "BS Physical Education, Cebu Normal University",
    language: "Cebuano, Filipino, English",
    achievements: [
      "Coached 2 Philippine Record Holders",
      "SEA Games Gold Medal 2023 (5000m)",
      "Asian Athletics Championships Medal Coach",
      "Coach of the Year 2021",
    ],
    athletesCoached: ["Juan Dela Cruz", "Carlos Mendoza"],
    philosophy: "Holistic development: aerobic strength, race economy, nutrition, and mindset.",
    bio: "Distance coach balancing altitude blocks with sea-level sharpening; prioritizes healthy, sustainable volume builds.",
    availability: "Available for distance camps and virtual consults.",
  },
  "3": {
    name: "Coach Antonio Reyes",
    specialty: "Field Events Coach",
    location: "Davao City",
    club: "Davao Athletics",
    badges: [],
    experience: "15 years",
    certification: "World Athletics Level 2",
    specialization: "Jumps & throws technique",
    birthDate: "March 5, 1970",
    hometown: "Davao",
    education: "MS Sports Coaching, De La Salle University",
    language: "Bisaya, Filipino, English",
    achievements: [
      "Trained 8 National Champions in Field Events",
      "Specialized in Long Jump Development",
      "Youth Development Program Director",
      "Regional Coach of Excellence 2023",
    ],
    athletesCoached: ["Ana Reyes", "Linda Villegas"],
    philosophy: "Biomechanics first: consistent approach speed, clean takeoff angles, and safe landing mechanics.",
    bio: "Field events coach with strong focus on video analysis and progressive plyometric loading.",
    availability: "Open for technical clinics and competition prep camps.",
  },
  "4": {
    name: "Coach Emmanuel Cruz",
    specialty: "Sprint Specialist",
    location: "Quezon City",
    club: "Quezon City Sprinters",
    badges: [],
    experience: "22 years",
    certification: "World Athletics Level 3",
    specialization: "100m & 200m speed development",
    birthDate: "November 18, 1963",
    hometown: "Quezon City",
    education: "BS Kinesiology, Ateneo de Manila University",
    language: "Filipino, English",
    achievements: [
      "Trained Philippines Fastest 100m Runner",
      "Olympic Trials Coaching 2024",
      "National Team Assistant Coach",
      "Sprint Development Program Lead",
    ],
    athletesCoached: ["Rafael Gomez"],
    philosophy: "Speed comes from timing and rhythm; every rep should feel the same at race tempo.",
    bio: "Sprint technician focusing on block set-up, max-velocity posture, and controlled taper plans.",
    availability: "Open for short-term blocks and relay pool work.",
  },
  "5": {
    name: "Coach Lisa Santos",
    specialty: "Jumps & Throws Coach",
    location: "Iloilo City",
    club: "Iloilo Track Club",
    badges: [],
    experience: "12 years",
    certification: "World Athletics Level 2",
    specialization: "High jump & technical development",
    birthDate: "February 14, 1972",
    hometown: "Iloilo",
    education: "BS Physical Education, University of San Agustin",
    language: "Ilocano, Filipino, English",
    achievements: [
      "Developed 5 National Junior Champions",
      "Youth Olympics Coaching Staff 2023",
      "Emerging Coach Award 2024",
      "Technical Innovation in Field Events",
    ],
    athletesCoached: ["Linda Villegas"],
    philosophy: "Strong fundamentals, consistent cues, and confident athletes lead to long-term success.",
    bio: "Coach focused on foundational strength and individualized technical corrections for developing jumpers.",
    availability: "Available for youth development camps and seasonal coaching.",
  },
  "6": {
    name: "Coach Pedro Villalobos",
    specialty: "Head Coach",
    location: "Pasig",
    club: "Philippine National Team",
    badges: ["National Team Coach"],
    experience: "30 years",
    certification: "World Athletics Elite Coach",
    specialization: "Program management & elite performance",
    birthDate: "September 8, 1960",
    hometown: "Manila",
    education: "MS Sports Management, Ateneo de Manila University",
    language: "Filipino, English, Spanish",
    achievements: [
      "Former Olympic Athlete (1984, 1988)",
      "National Team Head Coach since 2015",
      "SEA Games Gold Medal Teams 2023",
      "Asian Games Team Manager 2022",
    ],
    athletesCoached: ["Multiple National Team Athletes"],
    philosophy: "Build culture through clear systems, honest feedback, and sustainable training loads.",
    bio: "Veteran coach overseeing national program alignment, talent ID, and staff development.",
    availability: "Selective consults; focused on national program delivery.",
  },
}

const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">{label}</p>
    <p className="text-xl font-bold text-foreground">{value}</p>
    {hint ? <p className="text-xs text-muted-foreground mt-1">{hint}</p> : null}
  </div>
)

export default function CoachProfilePage({ params }: { params: { id: string } }) {
  const coach = coachData[params.id]

  if (!coach) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-muted-foreground">Coach not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Link href="/coaches" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Coaches
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Coach
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {coach.location}
            </span>
            {coach.badges?.map((badge) => (
              <span key={badge} className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{coach.name}</h1>
              <p className="text-base text-muted-foreground mt-2">{coach.specialty}</p>
              <p className="text-sm text-muted-foreground mt-1">Club: {coach.club}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="mailto:coaches@philippineathletics.ph"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
              >
                Book Consult
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Experience" value={coach.experience} />
            <StatCard label="Certification" value={coach.certification} />
            <StatCard label="Specialization" value={coach.specialization} />
            <StatCard label="Athletes Coached" value={`${coach.athletesCoached.length}+`} />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">About & Philosophy</h2>
              </div>
              <div className="space-y-3">
                <p className="p-4 rounded-lg border border-border bg-card leading-relaxed text-sm text-foreground">{coach.bio}</p>
                <p className="p-4 rounded-lg border border-accent/30 bg-accent/5 leading-relaxed text-sm text-foreground">
                  {coach.philosophy}
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Medal className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Achievements</h2>
              </div>
              <div className="space-y-2">
                {coach.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Athletes Coached</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coach.athletesCoached.map((athlete, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border bg-card">
                    <p className="text-foreground text-sm font-medium">{athlete}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Profile</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Birth date</p>
                  <p className="text-foreground font-medium">{coach.birthDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hometown</p>
                  <p className="text-foreground font-medium">{coach.hometown}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Education</p>
                  <p className="text-foreground font-medium">{coach.education}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Languages</p>
                  <p className="text-foreground font-medium">{coach.language}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Focus areas</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white text-accent border border-accent/30">
                  {coach.specialization}
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white text-accent border border-accent/30">
                  Program design
                </span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/40 space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Availability</p>
              <p className="text-sm text-foreground">{coach.availability}</p>
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
