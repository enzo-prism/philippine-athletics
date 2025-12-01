import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const coachData: Record<string, any> = {
  "1": {
    name: "Coach Roberto Tan",
    specialty: "Sprint Coach",
    club: "Manila Speed Club",
    birthDate: "June 10, 1965",
    hometown: "Manila",
    education: "BS Sports Science, University of the Philippines",
    experience: "25 years",
    certification: "IAAF Level 3 Certified Coach",
    specialization: "Sprint Training & Technique",
    achievements: [
      "Trained 15+ National Champions",
      "Produced 5 Olympic Athletes",
      "SEA Games Gold Medal Coach 2023",
      "IAAF Coaching Excellence Award 2022",
    ],
    athletesCoached: ["Maria Santos", "Rafael Gomez", "Carlos Mendoza"],
    philosophy: "Focus on proper technique, strength training, and mental preparation for optimal sprint performance.",
    language: "Filipino, English",
  },
  "2": {
    name: "Coach Maria Gonzales",
    specialty: "Distance Running Specialist",
    club: "Cebu Distance Runners",
    birthDate: "August 22, 1967",
    hometown: "Cebu",
    education: "BS Physical Education, Cebu Normal University",
    experience: "18 years",
    certification: "IAAF Level 3 Certified Coach",
    specialization: "Middle & Long Distance Training",
    achievements: [
      "Coached 2 Philippine Record Holders",
      "SEA Games Gold Medal 2023 (5000m)",
      "Asian Athletics Championships Medal Coach",
      "Published Coach of the Year 2021",
    ],
    athletesCoached: ["Juan Dela Cruz", "Carlos Mendoza"],
    philosophy: "Believe in periodized training, altitude work, and holistic athlete development for distance success.",
    language: "Cebuano, Filipino, English",
  },
  "3": {
    name: "Coach Antonio Reyes",
    specialty: "Field Events Coach",
    club: "Davao Athletics",
    birthDate: "March 5, 1970",
    hometown: "Davao",
    education: "MS Sports Coaching, De La Salle University",
    experience: "15 years",
    certification: "IAAF Level 2 Certified Coach",
    specialization: "Jumps & Throws Technique",
    achievements: [
      "Trained 8 National Champions in Field Events",
      "Specialized in Long Jump Development",
      "Youth Development Program Director",
      "Regional Coach of Excellence 2023",
    ],
    athletesCoached: ["Ana Reyes", "Linda Villegas"],
    philosophy: "Emphasis on biomechanics, explosive power, and technical excellence in field events.",
    language: "Bisaya, Filipino, English",
  },
  "4": {
    name: "Coach Emmanuel Cruz",
    specialty: "Sprint Specialist",
    club: "Quezon City Sprinters",
    birthDate: "November 18, 1963",
    hometown: "Quezon City",
    education: "BS Kinesiology, Ateneo de Manila University",
    experience: "22 years",
    certification: "IAAF Level 3 Certified Coach",
    specialization: "100m & 200m Sprinting",
    achievements: [
      "Trained Philippines Fastest 100m Runner",
      "Olympic Trials Coaching 2024",
      "National Team Assistant Coach",
      "Sprint Development Program Lead",
    ],
    athletesCoached: ["Rafael Gomez"],
    philosophy: "Sprint success requires perfect balance of speed, power, and technical execution.",
    language: "Filipino, English",
  },
  "5": {
    name: "Coach Lisa Santos",
    specialty: "Jumps & Throws Coach",
    club: "Iloilo Track Club",
    birthDate: "February 14, 1972",
    hometown: "Iloilo",
    education: "BS Physical Education, University of San Agustin",
    experience: "12 years",
    certification: "IAAF Level 2 Certified Coach",
    specialization: "High Jump & Technical Development",
    achievements: [
      "Developed 5 National Junior Champions",
      "Youth Olympics Coaching Staff 2023",
      "Emerging Coach Award 2024",
      "Technical Innovation in Field Events",
    ],
    athletesCoached: ["Linda Villegas"],
    philosophy: "Young athletes need strong fundamentals and confidence building for long-term success.",
    language: "Ilocano, Filipino, English",
  },
  "6": {
    name: "Coach Pedro Villalobos",
    specialty: "Head Coach",
    club: "Philippine National Team",
    birthDate: "September 8, 1960",
    hometown: "Manila",
    education: "MS Sports Management, Ateneo de Manila University",
    experience: "30 years",
    certification: "IAAF Elite Coach Certified",
    specialization: "Program Management & Elite Athletics",
    achievements: [
      "Former Olympic Athlete (1984, 1988)",
      "National Team Head Coach since 2015",
      "SEA Games Gold Medal Teams 2023",
      "Asian Games Team Manager 2022",
    ],
    athletesCoached: ["Multiple National Team Athletes"],
    philosophy: "Build a strong athletic culture through systematic training, nutrition, and mental strength.",
    language: "Filipino, English, Spanish",
  },
}

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/coaches" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <ChevronLeft className="w-4 h-4" />
          Back to Coaches
        </Link>

        {/* Profile Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Coach Profile</p>
              <h1 className="text-5xl font-bold text-foreground">{coach.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{coach.specialty}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Experience</p>
              <p className="text-2xl font-bold text-accent">{coach.experience}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Specialization</p>
              <p className="text-lg font-bold text-foreground">{coach.specialization}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Club</p>
              <p className="text-lg font-bold text-foreground">{coach.club}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Certification</p>
              <p className="text-sm font-bold text-foreground">{coach.certification}</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Background</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Date of Birth</p>
                  <p className="text-foreground">{coach.birthDate}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Hometown</p>
                  <p className="text-foreground">{coach.hometown}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Education</p>
                  <p className="text-foreground text-sm">{coach.education}</p>
                </div>
                <div className="p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">Languages</p>
                  <p className="text-foreground text-sm">{coach.language}</p>
                </div>
              </div>
            </div>

            {/* Coaching Philosophy */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Coaching Philosophy</h2>
              <p className="p-6 rounded-lg border border-accent/20 bg-accent/5 text-foreground leading-relaxed">
                {coach.philosophy}
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="space-y-2">
                {coach.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-4">Quick Info</p>
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
                  <p className="text-xs text-muted-foreground mb-1">Coaching Since</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date().getFullYear() - Number.parseInt(coach.experience)} years ago
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Athletes Coached</p>
                  <p className="text-sm font-medium text-foreground">{coach.athletesCoached.length}+</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Current Athletes</p>
              <div className="space-y-2">
                {coach.athletesCoached.map((athlete: string, i: number) => (
                  <p key={i} className="text-sm text-foreground">
                    {athlete}
                  </p>
                ))}
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
