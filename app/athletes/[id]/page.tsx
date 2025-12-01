import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const athleteData: Record<string, any> = {
  "1": {
    name: "Maria Santos",
    specialty: "400m Sprinter",
    club: "Manila Speed Club",
    birthDate: "March 15, 1999",
    hometown: "Manila",
    personalBest: "52.34s",
    seasonBest: "52.89s",
    achievements: [
      "Philippine National Champion 2024 (400m)",
      "SEA Games Silver Medalist 2023 (4x400m Relay)",
      "National Record Holder (Indoor 400m)",
      "Commonwealth Games Qualifier 2022",
    ],
    coach: "Coach Roberto Tan",
    joinedYear: 2015,
    competitions: ["National Championships", "SEA Games 2023", "IAAF Regional Meet"],
  },
  "2": {
    name: "Juan Dela Cruz",
    specialty: "5000m Runner",
    club: "Cebu Distance Runners",
    birthDate: "July 22, 2000",
    hometown: "Cebu",
    personalBest: "14:28.5",
    seasonBest: "14:35.2",
    achievements: [
      "Philippine National Record (5000m)",
      "SEA Games Gold Medalist 2023 (5000m)",
      "IAAF World Championships Participant 2023",
      "Asian Games Silver Medalist 2022",
    ],
    coach: "Coach Maria Gonzales",
    joinedYear: 2016,
    competitions: ["SEA Games 2023", "Asian Games 2022", "IAAF World Championships"],
  },
  "3": {
    name: "Ana Reyes",
    specialty: "Long Jump",
    club: "Davao Athletics",
    birthDate: "November 8, 2001",
    hometown: "Davao",
    personalBest: "6.42m",
    seasonBest: "6.38m",
    achievements: [
      "Philippine National Champion 2024 (Long Jump)",
      "SEA Games Participant 2023",
      "National Junior Record Holder",
      "Emerging Talent Award 2023",
    ],
    coach: "Coach Antonio Reyes",
    joinedYear: 2018,
    competitions: ["National Championships", "SEA Games 2023", "Junior National Meet"],
  },
  "4": {
    name: "Rafael Gomez",
    specialty: "100m Sprinter",
    club: "Quezon City Sprinters",
    birthDate: "May 30, 1998",
    hometown: "Quezon City",
    personalBest: "10.42s",
    seasonBest: "10.51s",
    achievements: [
      "Philippine National Champion 2024 (100m)",
      "SEA Games Silver Medalist 2023 (100m)",
      "Philippines Fastest 100m Runner",
      "Olympic Trials Qualifier 2024",
    ],
    coach: "Coach Emmanuel Cruz",
    joinedYear: 2014,
    competitions: ["National Championships", "SEA Games 2023", "Olympic Trials 2024"],
  },
  "5": {
    name: "Linda Villegas",
    specialty: "High Jump",
    club: "Iloilo Track Club",
    birthDate: "September 12, 2002",
    hometown: "Iloilo",
    personalBest: "1.84m",
    seasonBest: "1.81m",
    achievements: [
      "Philippine National Champion 2024 (High Jump)",
      "National Junior Record Holder",
      "SEA Games Participant 2023",
      "Rising Star Award 2024",
    ],
    coach: "Coach Lisa Santos",
    joinedYear: 2019,
    competitions: ["National Championships", "Junior National Meet", "Regional Qualifying Meet"],
  },
  "6": {
    name: "Carlos Mendoza",
    specialty: "1500m Middle Distance",
    club: "Manila Distance Runners",
    birthDate: "January 25, 1997",
    hometown: "Manila",
    personalBest: "3:54.2",
    seasonBest: "3:56.8",
    achievements: [
      "Philippine National Champion 2024 (1500m)",
      "Sub-4 Minute Miler",
      "SEA Games Gold Medalist 2023 (1500m)",
      "Asian Athletics Championships Participant 2023",
    ],
    coach: "Coach Roberto Tan",
    joinedYear: 2013,
    competitions: ["National Championships", "SEA Games 2023", "Asian Athletics Championships"],
  },
}

export default function AthleteProfilePage({ params }: { params: { id: string } }) {
  const athlete = athleteData[params.id]

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/athletes" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Athletes
        </Link>

        {/* Profile Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Athlete Profile</p>
              <h1 className="text-5xl font-bold text-foreground">{athlete.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{athlete.specialty}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Personal Best</p>
              <p className="text-2xl font-bold text-accent">{athlete.personalBest}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Season Best</p>
              <p className="text-2xl font-bold text-accent">{athlete.seasonBest}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Club</p>
              <p className="text-lg font-bold text-foreground">{athlete.club}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Active Since</p>
              <p className="text-lg font-bold text-foreground">{athlete.joinedYear}</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Basic Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Date of Birth</p>
                  <p className="text-foreground">{athlete.birthDate}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Hometown</p>
                  <p className="text-foreground">{athlete.hometown}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Coach</p>
                  <p className="text-foreground">{athlete.coach}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Club</p>
                  <p className="text-foreground">{athlete.club}</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="space-y-2">
                {athlete.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Competitions */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Recent Competitions</h2>
              <div className="space-y-2">
                {athlete.competitions.map((comp: string, i: number) => (
                  <div key={i} className="p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                    <p className="text-foreground text-sm font-medium">{comp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-4">Quick Stats</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Profile Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-foreground">Active</span>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Career Start</p>
                  <p className="text-sm font-medium text-foreground">{athlete.joinedYear}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Years Active</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date().getFullYear() - athlete.joinedYear} years
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Specialty Events</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">{athlete.specialty}</p>
                <p className="text-xs text-muted-foreground mt-2">Member of {athlete.club}</p>
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
