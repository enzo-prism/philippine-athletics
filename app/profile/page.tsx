"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { CalendarRange, CheckCircle2, MapPin, Medal, PencilLine, ShieldCheck, User } from "lucide-react"

type ProfileType = "athlete" | "coach" | "club-owner" | "viewer" | "sponsor" | "admin"

type Profile = {
  roleLabel: string
  name: string
  email: string
  location: string
  headline: string
  tags?: string[]
  stats?: { label: string; value: string; hint?: string }[]
  events?: string[]
  availability?: string
  achievements?: string[]
  preferences?: string[]
}

const profileByType: Record<ProfileType, Profile> = {
  athlete: {
    roleLabel: "Athlete",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Quezon City",
    headline: "400m / 200m sprinter, Manila Speed Club",
    tags: ["Athlete", "Relay Pool", "Club: Manila Speed Club"],
    stats: [
      { label: "Personal Best", value: "52.60s (400m)" },
      { label: "Season Best", value: "52.90s (400m)" },
      { label: "Coach", value: "Coach Roberto Tan" },
      { label: "Status", value: "Active", hint: "Joined 2022" },
    ],
    events: ["400m", "200m", "4×400m relay"],
    availability: "Open for relay pool camps and sponsored meets from July–September.",
    achievements: [
      "SEA Games Silver Medalist 2023 (4×400m)",
      "National Champion 2024 (400m)",
      "Indoor 400m National Record Holder",
    ],
    preferences: ["Relay camps", "Indoor meets", "Strength & conditioning support"],
  },
  coach: {
    roleLabel: "Coach",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Manila",
    headline: "Sprint coach — acceleration mechanics and relay chemistry",
    tags: ["Coach", "Sprint", "National Team Pool"],
    stats: [
      { label: "Experience", value: "12 years" },
      { label: "Certification", value: "World Athletics Level 2" },
      { label: "Athletes Coached", value: "18+" },
      { label: "Status", value: "Active", hint: "Available for camps" },
    ],
    events: ["100m", "200m", "4×100m relay"],
    availability: "Open for relay camps, private consults, and seasonal program design.",
    achievements: [
      "Coached 3 national champions",
      "SEA Games relay finalist coach",
      "Sprint development program lead",
    ],
    preferences: ["Relay projects", "Block starts", "Video analysis"],
  },
  "club-owner": {
    roleLabel: "Club Owner",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Taguig (BGC)",
    headline: "Owner — BGC Track Collective",
    tags: ["Club Owner", "Admin", "Sprint & Relay"],
    stats: [
      { label: "Members", value: "42 athletes" },
      { label: "Coaches", value: "4" },
      { label: "Spots Open", value: "5 spots open" },
      { label: "Founded", value: "2021" },
    ],
    availability: "Reviewing new athlete applications; priority to 200/400m and relays.",
    achievements: ["4×400m relay national qualifier", "Hosted 6 club meets", "Partnered with local S&C facility"],
    preferences: ["Sprint squads", "Relay depth", "Youth pipeline"],
  },
  viewer: {
    roleLabel: "Viewer",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Quezon City",
    headline: "Following athletes, coaches, and clubs across PH",
    tags: ["Viewer", "Fan"],
    stats: [
      { label: "Following", value: "24 profiles" },
      { label: "Notifications", value: "Competitions, new PBs" },
    ],
    availability: "Notifications enabled; ready to bookmark upcoming meets.",
    achievements: ["Saved favorite athletes", "Subscribed to meet alerts"],
    preferences: ["Meet updates", "Highlights", "New PB alerts"],
  },
  sponsor: {
    roleLabel: "Sponsor",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Makati",
    headline: "Brand partnerships for elite athletes and clubs",
    tags: ["Sponsor", "Partnerships", "Brand"],
    stats: [
      { label: "Active deals", value: "6" },
      { label: "Budget window", value: "Q3-Q4" },
      { label: "Sports focus", value: "Sprints / Distance" },
    ],
    availability: "Evaluating sponsorships for national-level athletes and relay pools.",
    achievements: ["Backed SEA Games medalists", "Funded 3 training camps", "Gear sponsorships delivered on time"],
    preferences: ["Media-ready athletes", "Relays", "Youth pipeline visibility"],
  },
  admin: {
    roleLabel: "Admin",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Manila",
    headline: "Platform admin — manage profiles, content, and approvals",
    tags: ["Admin", "Moderation", "Analytics"],
    stats: [
      { label: "Profiles managed", value: "640" },
      { label: "Pending approvals", value: "12" },
      { label: "Reported items", value: "2 open" },
    ],
    availability: "Monitoring verifications and content approvals.",
    achievements: ["Launched profile verification flow", "Reduced approval time by 30%"],
    preferences: ["Clean data", "Verified profiles", "Fast approvals"],
  },
}

const roleOptions: { value: ProfileType; label: string }[] = [
  { value: "athlete", label: "Athlete" },
  { value: "coach", label: "Coach" },
  { value: "club-owner", label: "Club Owner" },
  { value: "viewer", label: "Viewer" },
  { value: "sponsor", label: "Sponsor" },
  { value: "admin", label: "Admin" },
]

const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="p-4 rounded-lg border border-border bg-card">
    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">{label}</p>
    <p className="text-xl font-bold text-foreground">{value}</p>
    {hint ? <p className="text-xs text-muted-foreground mt-1">{hint}</p> : null}
  </div>
)

export default function ProfilePage() {
  const [selectedRole, setSelectedRole] = useState<ProfileType>("athlete")
  const profile = useMemo(() => profileByType[selectedRole], [selectedRole])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Developer toggle */}
        <div className="p-4 border border-dashed border-border rounded-lg bg-muted/40 flex flex-wrap gap-2 items-center">
          <p className="text-sm font-semibold text-foreground">Profile preview mode:</p>
          <div className="flex flex-wrap gap-2">
            {roleOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedRole(opt.value)}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors border ${
                  selectedRole === opt.value
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-foreground border-border hover:bg-muted"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
              <User className="w-6 h-6 text-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{profile.roleLabel}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted border border-border px-2 py-1 rounded-full">
                  <PencilLine className="w-3.5 h-3.5 text-accent" />
                  Editable
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{profile.name}</h1>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full">
                  <PencilLine className="w-3.5 h-3.5 text-accent" />
                  Edit name
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <p>{profile.email}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full">
                  <PencilLine className="w-3.5 h-3.5 text-accent" />
                  Edit email
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{profile.headline}</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {profile.location}
            </span>
            {profile.tags?.map((tag) => (
              <span key={tag} className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <PencilLine className="w-3.5 h-3.5 text-accent" />
              Edit tags & location
            </span>
          </div>
          {profile.stats && profile.stats.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {profile.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} hint={stat.hint} />
              ))}
            </div>
          ) : null}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {profile.events && profile.events.length ? (
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-accent" />
                  <h2 className="text-xl font-semibold text-foreground">Events / Focus</h2>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full">
                    <PencilLine className="w-3.5 h-3.5 text-accent" />
                    Edit events
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.events.map((evt) => (
                    <span key={evt} className="text-xs font-semibold px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
                      {evt}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            {profile.availability ? (
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <CalendarRange className="w-4 h-4 text-accent" />
                  <h2 className="text-xl font-semibold text-foreground">Availability</h2>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full">
                    <PencilLine className="w-3.5 h-3.5 text-accent" />
                    Edit availability
                  </span>
                </div>
                <p className="p-4 rounded-lg border border-border bg-card text-sm text-foreground leading-relaxed">
                  {profile.availability}
                </p>
              </section>
            ) : null}

            {profile.achievements && profile.achievements.length ? (
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full">
                    <PencilLine className="w-3.5 h-3.5 text-accent" />
                    Edit highlights
                  </span>
                </div>
                <div className="space-y-2">
                  {profile.achievements.map((achievement) => (
                    <div key={achievement} className="flex gap-3 p-3 rounded-lg border border-accent/20 bg-accent/5">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <p className="text-foreground text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6">
            {profile.preferences && profile.preferences.length ? (
              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <p className="text-xs text-muted-foreground font-semibold uppercase">Preferences</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full w-fit">
                  <PencilLine className="w-3.5 h-3.5 text-accent" />
                  Edit preferences
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.preferences.map((pref) => (
                    <span key={pref} className="text-xs font-semibold px-2 py-1 rounded-md bg-white text-accent border border-accent/30">
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="p-6 rounded-lg border border-border bg-muted/40 space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <p className="text-sm text-foreground">{profile.email}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-2 py-1 rounded-full w-fit">
                <PencilLine className="w-3.5 h-3.5 text-accent" />
                Edit contact
              </span>
            </div>

            {selectedRole === "admin" ? (
              <div className="p-6 rounded-lg border border-accent/30 bg-accent/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Admin Controls (concept)
                </div>
                <p className="text-xs text-muted-foreground">View approvals, flagged content, and role management.</p>
              </div>
            ) : null}
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
