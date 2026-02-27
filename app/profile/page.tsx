"use client"

import { useEffect, useMemo, useState, type ComponentProps, type Dispatch, type SetStateAction } from "react"
import { CheckCircle2, MapPin, Medal, ShieldCheck, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
    headline: "",
    tags: ["Athlete", "Club: Manila Speed Club"],
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
    preferences: [],
  },
  coach: {
    roleLabel: "Coach",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Manila",
    headline: "",
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
    preferences: [],
  },
  "club-owner": {
    roleLabel: "Club Owner",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Taguig (BGC)",
    headline: "",
    tags: ["Club Owner", "Admin", "Sprint & Relay"],
    stats: [
      { label: "Members", value: "42 athletes" },
      { label: "Coaches", value: "4" },
      { label: "Spots Open", value: "5 spots open" },
      { label: "Founded", value: "2021" },
    ],
    availability: "Reviewing new athlete applications; priority to 200/400m and relays.",
    achievements: ["4×400m relay national qualifier", "Hosted 6 club meets", "Partnered with local S&C facility"],
    preferences: [],
  },
  viewer: {
    roleLabel: "Viewer",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Quezon City",
    headline: "",
    tags: ["Viewer", "Fan"],
    stats: [
      { label: "Following", value: "24 profiles" },
      { label: "Notifications", value: "Competitions, new PBs" },
    ],
    availability: "Notifications enabled; ready to bookmark upcoming meets.",
    achievements: ["Saved favorite athletes", "Subscribed to meet alerts"],
    preferences: [],
  },
  sponsor: {
    roleLabel: "Sponsor",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Makati",
    headline: "",
    tags: ["Sponsor", "Partnerships", "Brand"],
    stats: [
      { label: "Active deals", value: "6" },
      { label: "Budget window", value: "Q3-Q4" },
      { label: "Sports focus", value: "Sprints / Distance" },
    ],
    availability: "Evaluating sponsorships for national-level athletes and relay pools.",
    achievements: ["Backed SEA Games medalists", "Funded 3 training camps", "Gear sponsorships delivered on time"],
    preferences: [],
  },
  admin: {
    roleLabel: "Admin",
    name: "Alex Navarro",
    email: "alex.navarro@example.com",
    location: "Manila",
    headline: "",
    tags: ["Admin", "Moderation", "Analytics"],
    stats: [
      { label: "Profiles managed", value: "640" },
      { label: "Pending approvals", value: "12" },
      { label: "Reported items", value: "2 open" },
    ],
    availability: "Monitoring verifications and content approvals.",
    achievements: ["Launched profile verification flow", "Reduced approval time by 30%"],
    preferences: [],
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

const PreviewRoleButtons = ({
  buttonClassName,
  buttonSize = "sm",
  onSelectRole,
  selectedRole,
}: {
  buttonClassName?: string
  buttonSize?: ComponentProps<typeof Button>["size"]
  onSelectRole: (role: ProfileType) => void
  selectedRole: ProfileType
}) => (
  <>
    {roleOptions.map((opt) => (
      <Button
        key={opt.value}
        type="button"
        variant="outline"
        size={buttonSize}
        onClick={() => onSelectRole(opt.value)}
        className={cn(
          "font-semibold hover:bg-muted hover:text-foreground",
          buttonClassName,
          selectedRole === opt.value &&
            "bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground",
        )}
      >
        {opt.label}
      </Button>
    ))}
  </>
)

const settingTabs = [
  { value: "overview", label: "Overview" },
  { value: "account", label: "Account Settings" },
  { value: "notifications", label: "Notifications" },
  { value: "privacy", label: "Privacy" },
]

const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <Card className="py-0 gap-0">
    <CardContent className="p-4">
      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">{label}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
      {hint ? <p className="text-xs text-muted-foreground mt-1">{hint}</p> : null}
    </CardContent>
  </Card>
)

export default function ProfilePage() {
  const [selectedRole, setSelectedRole] = useState<ProfileType>("athlete")
  const [selectedTab, setSelectedTab] = useState<string>("overview")
  const profile = useMemo(() => profileByType[selectedRole], [selectedRole])

  // Account form state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [location, setLocation] = useState("")
  const [club, setClub] = useState("")
  const [eventsForm, setEventsForm] = useState<{ event: string; pb: string; national: string; asian: string; global: string }[]>([])
  const [pastComps, setPastComps] = useState<string[]>([])
  const [upcomingComps, setUpcomingComps] = useState<string[]>([])
  const [sponsors, setSponsors] = useState<string[]>([])
  const [coaches, setCoaches] = useState<string[]>([])
  const [messaging, setMessaging] = useState<{ channel: string; value: string }[]>([
    { channel: "Email", value: "" },
    { channel: "Text", value: "" },
    { channel: "WhatsApp", value: "" },
    { channel: "Instagram", value: "" },
    { channel: "Facebook", value: "" },
    { channel: "LinkedIn", value: "" },
  ])

  // Reset form when role/profile changes
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const [fn = "", ...restName] = profile.name.split(" ")
    setFirstName(fn)
    setLastName(restName.join(" "))
    setLocation(profile.location || "")
    setClub(selectedRole === "athlete" ? "Manila Speed Club" : selectedRole === "coach" ? "Cebu Distance Runners" : "")
    setEventsForm(
      (profile.events || [""]).map((evt) => ({
        event: evt,
        pb: "",
        national: "",
        asian: "",
        global: "",
      })),
    )
    setPastComps(profile.achievements || [])
    setUpcomingComps(profile.preferences || [])
    setSponsors(["SprintLab", "HydraFuel", "StridePT"].slice(0, 2))
    setCoaches(selectedRole === "athlete" ? ["Coach Roberto Tan"] : [])
    setMessaging([
      { channel: "Email", value: profile.email || "" },
      { channel: "Text", value: "Text: +63..." },
      { channel: "WhatsApp", value: "WhatsApp: +63..." },
      { channel: "Instagram", value: "IG: @handle" },
      { channel: "Facebook", value: "FB: facebook.com/..." },
      { channel: "LinkedIn", value: "LinkedIn: your-url" },
    ])
  }, [profile, selectedRole])
  /* eslint-enable react-hooks/set-state-in-effect */

  const addRow = <T,>(setter: Dispatch<SetStateAction<T[]>>, empty: T) => () => setter((prev) => [...prev, empty])

  const renderSettingsContent = () => {
    switch (selectedTab) {
      case "account":
        return (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Account Settings</h2>
            <p className="text-sm text-muted-foreground">Sample edit form for key profile data (not connected to a backend).</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground uppercase">First Name</Label>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground uppercase">Last Name</Label>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground uppercase">Location</Label>
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground uppercase">Club</Label>
                  <Input
                    type="text"
                    value={club}
                    onChange={(e) => setClub(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Events &amp; Performance</Label>
                <div className="space-y-2">
                  {eventsForm.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                      <Input
                        placeholder="Event"
                        value={row.event}
                        onChange={(e) =>
                          setEventsForm((prev) => {
                            const next = [...prev]
                            next[idx] = { ...next[idx], event: e.target.value }
                            return next
                          })
                        }
                        className="h-8 px-2 text-xs"
                      />
                      <Input
                        placeholder="PB"
                        value={row.pb}
                        onChange={(e) =>
                          setEventsForm((prev) => {
                            const next = [...prev]
                            next[idx] = { ...next[idx], pb: e.target.value }
                            return next
                          })
                        }
                        className="h-8 px-2 text-xs"
                      />
                      <Input
                        placeholder="National"
                        value={row.national}
                        onChange={(e) =>
                          setEventsForm((prev) => {
                            const next = [...prev]
                            next[idx] = { ...next[idx], national: e.target.value }
                            return next
                          })
                        }
                        className="h-8 px-2 text-xs"
                      />
                      <Input
                        placeholder="Asian"
                        value={row.asian}
                        onChange={(e) =>
                          setEventsForm((prev) => {
                            const next = [...prev]
                            next[idx] = { ...next[idx], asian: e.target.value }
                            return next
                          })
                        }
                        className="h-8 px-2 text-xs"
                      />
                      <Input
                        placeholder="Global"
                        value={row.global}
                        onChange={(e) =>
                          setEventsForm((prev) => {
                            const next = [...prev]
                            next[idx] = { ...next[idx], global: e.target.value }
                            return next
                          })
                        }
                        className="h-8 px-2 text-xs"
                      />
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRow(setEventsForm, { event: "", pb: "", national: "", asian: "", global: "" })}
                    className="w-fit"
                  >
                    Add event
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Past competitions</Label>
                <div className="space-y-2">
                  {pastComps.map((item, idx) => (
                    <Input
                      key={idx}
                      value={item}
                      onChange={(e) =>
                        setPastComps((prev) => {
                          const next = [...prev]
                          next[idx] = e.target.value
                          return next
                        })
                      }
                      placeholder="Meet — event — result"
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRow(setPastComps, "")}
                    className="w-fit"
                  >
                    Add competition
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Upcoming competitions</Label>
                <div className="space-y-2">
                  {upcomingComps.map((item, idx) => (
                    <Input
                      key={idx}
                      value={item}
                      onChange={(e) =>
                        setUpcomingComps((prev) => {
                          const next = [...prev]
                          next[idx] = e.target.value
                          return next
                        })
                      }
                      placeholder="Meet — events — date"
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRow(setUpcomingComps, "")}
                    className="w-fit"
                  >
                    Add upcoming
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Messaging channels</Label>
                <div className="space-y-2">
                  {messaging.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <Input
                        value={item.channel}
                        readOnly
                        className="bg-muted text-muted-foreground"
                      />
                      <div className="sm:col-span-2">
                        <Input
                          value={item.value}
                          onChange={(e) =>
                            setMessaging((prev) => {
                              const next = [...prev]
                              next[idx] = { ...next[idx], value: e.target.value }
                              return next
                            })
                          }
                          placeholder={`${item.channel} handle/contact (optional)`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Sponsors</Label>
                <div className="space-y-2">
                  {sponsors.map((item, idx) => (
                    <Input
                      key={idx}
                      value={item}
                      onChange={(e) =>
                        setSponsors((prev) => {
                          const next = [...prev]
                          next[idx] = e.target.value
                          return next
                        })
                      }
                      placeholder="Sponsor — category"
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRow(setSponsors, "")}
                    className="w-fit"
                  >
                    Add sponsor
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-foreground uppercase">Coaches</Label>
                <div className="space-y-2">
                  {coaches.map((item, idx) => (
                    <Input
                      key={idx}
                      value={item}
                      onChange={(e) =>
                        setCoaches((prev) => {
                          const next = [...prev]
                          next[idx] = e.target.value
                          return next
                        })
                      }
                      placeholder="Coach name"
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRow(setCoaches, "")}
                    className="w-fit"
                  >
                    Add coach
                  </Button>
                </div>
              </div>

              <Button type="button" className="w-fit">
                Save (sample)
              </Button>
            </form>
          </div>
        )
      case "notifications":
        return (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            <p className="text-sm text-muted-foreground">
              Sample preferences: meet alerts, ranking updates, messages from coaches/clubs.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground space-y-1">
              <li>New PB / ranking alerts</li>
              <li>Competition invites and registrations</li>
              <li>Messages from verified coaches/clubs</li>
            </ul>
          </div>
        )
      case "privacy":
        return (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Privacy</h2>
            <p className="text-sm text-muted-foreground">
              Sample privacy controls: profile visibility, contact channels, sponsor visibility.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground space-y-1">
              <li>Profile visibility (public / followers / private)</li>
              <li>Show contact channels to verified users only</li>
              <li>Hide sponsorships or media until approved</li>
            </ul>
          </div>
        )
      case "overview":
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="md:hidden profile-sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="outline" className="border-dashed bg-muted/60 backdrop-blur">
              Preview role
            </Badge>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              {profile.roleLabel}
            </span>
          </div>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap gap-2 pb-1">
              <PreviewRoleButtons
                buttonClassName="rounded-full text-xs"
                buttonSize="sm"
                onSelectRole={setSelectedRole}
                selectedRole={selectedRole}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-shell page-stack pt-6 pb-12 sm:py-12 relative">
        <div className="profile-grid">
          <aside className="h-fit">
            <Card className="py-0 gap-0">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs text-muted-foreground font-semibold uppercase">Settings</p>
                <div className="space-y-2">
                  {settingTabs.map((tab) => {
                    const active = selectedTab === tab.value
                    return (
                      <Button
                        key={tab.value}
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedTab(tab.value)}
                        className={`w-full justify-start hover:bg-muted hover:text-foreground ${
                          active
                            ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground"
                            : ""
                        }`}
                      >
                        {tab.label}
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-6">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest">{profile.roleLabel}</p>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{profile.name}</h1>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{profile.headline}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="gap-1 bg-muted text-foreground">
                  <MapPin className="size-3.5 text-accent" />
                  {profile.location}
                </Badge>
                {profile.tags?.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted text-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              {profile.stats && profile.stats.length > 0 ? (
                <div className="profile-stats-grid">
                  {profile.stats.map((stat) => (
                    <StatCard key={stat.label} label={stat.label} value={stat.value} hint={stat.hint} />
                  ))}
                </div>
              ) : null}
            </header>

            {selectedTab === "overview" ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {profile.events && profile.events.length ? (
                    <section className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Medal className="w-4 h-4 text-accent" />
                        <h2 className="text-xl font-semibold text-foreground">Events</h2>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.events.map((evt) => (
                          <Badge key={evt} variant="outline" className="rounded-md bg-accent/10 text-accent border-accent/30">
                            {evt}
                          </Badge>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  {profile.achievements && profile.achievements.length ? (
                    <section className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
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
                  <Card className="ui-panel py-0 gap-0 bg-muted/40">
                    <CardContent className="p-6 space-y-2">
                      <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
                      <p className="text-sm text-foreground">{profile.email}</p>
                    </CardContent>
                  </Card>

                  {selectedRole === "admin" ? (
                    <Card className="ui-panel py-0 gap-0 border-accent/30 bg-accent/5">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <ShieldCheck className="w-4 h-4 text-accent" />
                          Admin Controls (concept)
                        </div>
                        <p className="text-xs text-muted-foreground">
                          View approvals, flagged content, and role management.
                        </p>
                      </CardContent>
                    </Card>
                  ) : null}
                </aside>
              </div>
            ) : (
              <Card className="py-0 gap-0">
                <CardContent className="p-6">{renderSettingsContent()}</CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Subtle preview mode toggle, anchored low and out of the flow */}
      <div className="hidden md:flex fixed right-4 bottom-4 flex-wrap gap-2 text-xs text-muted-foreground z-30">
        <Badge variant="outline" className="border-dashed bg-muted/60 backdrop-blur">
          Preview mode
        </Badge>
        <PreviewRoleButtons
          buttonClassName="h-auto py-1 text-xs"
          buttonSize="sm"
          onSelectRole={setSelectedRole}
          selectedRole={selectedRole}
        />
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
