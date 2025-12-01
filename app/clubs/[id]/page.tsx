import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft, Trophy } from "lucide-react"

const clubData: Record<string, any> = {
  "1": {
    name: "Manila Speed Club",
    focus: "Sprint Training",
    location: "Manila, NCR",
    founded: "2008",
    membersCount: 45,
    coaches: 5,
    facilities: ["400m Indoor Track", "Strength & Conditioning Center", "Recovery Room", "Sports Medicine Clinic"],
    about:
      "Manila Speed Club is dedicated to developing elite sprint athletes in the Philippines. We focus on technical excellence, explosive power, and competitive performance.",
    achievements: [
      "12 National Champions (2015-2024)",
      "SEA Games 5 Gold Medals",
      "Asian Games 2 Medalists",
      "Olympic Team Members",
    ],
    coach: "Coach Roberto Tan",
    athletes: ["Maria Santos", "Rafael Gomez"],
    contact: "contact@manilaspeedclub.ph",
    established: "March 2008",
  },
  "2": {
    name: "Cebu Distance Runners",
    focus: "Long Distance Running",
    location: "Cebu, Visayas",
    founded: "2010",
    membersCount: 38,
    coaches: 4,
    facilities: ["400m Outdoor Track", "Training Circuits", "Altitude Training Program", "Nutrition Lab"],
    about:
      "Cebu Distance Runners specializes in developing middle and long-distance runners. Our holistic approach combines periodized training, altitude work, and mental conditioning.",
    achievements: [
      "8 Philippine Record Holders",
      "SEA Games 3 Gold Medals",
      "Asian Athletics Championships Participants",
      "National Champions in 5K & 10K",
    ],
    coach: "Coach Maria Gonzales",
    athletes: ["Juan Dela Cruz", "Carlos Mendoza"],
    contact: "info@cebudistancerunners.ph",
    established: "June 2010",
  },
  "3": {
    name: "Davao Athletics",
    focus: "Field Events",
    location: "Davao, Mindanao",
    founded: "2012",
    membersCount: 32,
    coaches: 3,
    facilities: ["Multi-Event Field", "Long Jump Pit", "Throwing Circle", "High Jump Area"],
    about:
      "Davao Athletics is committed to excellence in field events. We provide specialized training in jumps and throws with cutting-edge biomechanical analysis.",
    achievements: [
      "6 National Champions in Field Events",
      "SEA Games 2 Medalists",
      "Technical Innovation Award 2023",
      "Youth Development Program Leaders",
    ],
    coach: "Coach Antonio Reyes",
    athletes: ["Ana Reyes", "Linda Villegas"],
    contact: "training@davaoathletics.ph",
    established: "August 2012",
  },
  "4": {
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City, NCR",
    founded: "2015",
    membersCount: 28,
    coaches: 3,
    facilities: ["400m Track", "Relay Training Zone", "Speed Development Lab", "Video Analysis Center"],
    about:
      "Quezon City Sprinters focuses on sprint excellence and relay teams. We combine technical coaching with advanced training methodologies.",
    achievements: [
      "Philippines Fastest 100m Runner",
      "4x100m Relay National Record",
      "SEA Games Sprint Representatives",
      "Olympic Trials Qualifiers",
    ],
    coach: "Coach Emmanuel Cruz",
    athletes: ["Rafael Gomez"],
    contact: "qcsprinters@ph-athletics.com",
    established: "February 2015",
  },
  "5": {
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo, Visayas",
    founded: "2011",
    membersCount: 35,
    coaches: 4,
    facilities: ["400m Track", "Multi-Purpose Field", "Training Gym", "Recovery Center"],
    about:
      "Iloilo Track Club provides comprehensive training for all track and field events. Our diverse program serves beginners to elite athletes.",
    achievements: [
      "7 National Champions",
      "SEA Games 2 Medalists",
      "Emerging Talent Program 2023",
      "Community Development Award",
    ],
    coach: "Coach Lisa Santos",
    athletes: ["Linda Villegas"],
    contact: "info@iloilotrack.org",
    established: "April 2011",
  },
  "6": {
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna, CALABARZON",
    founded: "2013",
    membersCount: 50,
    coaches: 6,
    facilities: ["400m Training Track", "Youth Development Center", "Coaching Academy", "Science Lab"],
    about:
      "Laguna Athletics Academy specializes in developing young athletes. We combine excellent coaching with educational programs to develop future champions.",
    achievements: [
      "15+ Youth National Champions",
      "Junior Olympics Multiple Medalists",
      "Coach Education Program Leaders",
      "Athlete Development Award 2024",
    ],
    coach: "Head Coach Team",
    athletes: ["25+ Youth Athletes"],
    contact: "academy@lagunaaathletics.ph",
    established: "September 2013",
  },
}

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/clubs" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Clubs
        </Link>

        {/* Profile Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Club Profile</p>
              <h1 className="text-5xl font-bold text-foreground">{club.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{club.focus}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Founded</p>
              <p className="text-2xl font-bold text-accent">{club.founded}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Members</p>
              <p className="text-2xl font-bold text-accent">{club.membersCount}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Coaches</p>
              <p className="text-2xl font-bold text-accent">{club.coaches}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Location</p>
              <p className="text-lg font-bold text-foreground">{club.location}</p>
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
              <p className="p-6 rounded-lg border border-border text-foreground leading-relaxed">{club.about}</p>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Facilities</h2>
              <div className="grid grid-cols-2 gap-3">
                {club.facilities.map((facility: string, i: number) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{facility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="space-y-2">
                {club.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <Trophy className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
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
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-foreground">Active</span>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Years Operating</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date().getFullYear() - Number.parseInt(club.founded)}
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Head Coach</p>
                  <p className="text-sm font-medium text-foreground">{club.coach}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Contact</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-xs text-accent break-all">{club.contact}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="text-xs text-foreground">{club.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Notable Athletes</p>
              <div className="space-y-2">
                {typeof club.athletes[0] === "string" && !club.athletes[0].includes("+") ? (
                  club.athletes.map((athlete: string, i: number) => (
                    <p key={i} className="text-sm text-foreground">
                      {athlete}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-foreground">{club.athletes[0]}</p>
                )}
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
