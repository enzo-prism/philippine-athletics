import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"

const clubs = [
  {
    id: 1,
    name: "Manila Speed Club",
    focus: "Sprint Training",
    location: "Manila",
    founded: "2008",
    href: "/clubs/1",
  },
  {
    id: 2,
    name: "Cebu Distance Runners",
    focus: "Long Distance Running",
    location: "Cebu",
    founded: "2010",
    href: "/clubs/2",
  },
  {
    id: 3,
    name: "Davao Athletics",
    focus: "Field Events",
    location: "Davao",
    founded: "2012",
    href: "/clubs/3",
  },
  {
    id: 4,
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City",
    founded: "2015",
    href: "/clubs/4",
  },
  {
    id: 5,
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo",
    founded: "2011",
    href: "/clubs/5",
  },
  {
    id: 6,
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna",
    founded: "2013",
    href: "/clubs/6",
  },
]

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Clubs</h1>
          <p className="text-muted-foreground">Explore track and field clubs across the Philippines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <ProfileCard
              key={club.id}
              name={club.name}
              subtitle={club.focus}
              details={[`Location: ${club.location}`, `Founded: ${club.founded}`]}
              href={club.href}
              type="club"
            />
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
