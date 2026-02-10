"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ArrowRight, BadgeCheck, CheckCircle2, Heart, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react"

type PersonaKey = "athlete" | "coach" | "club" | "sponsor" | "fan"


type MembershipPackage = {
  name: string
  price: string
  cadence: string
  description: string
  includes: string[]
}

const membershipPackages: MembershipPackage[] = [
  {
    name: "Starter",
    price: "₱499",
    cadence: "per year",
    description: "Best for athletes and supporters getting started with official profiles and rankings.",
    includes: [
      "Official member profile with verification badge",
      "Access to national rankings and certified results",
      "Save favorite athletes, clubs, and competitions",
      "Member updates for upcoming meets and announcements",
    ],
  },
  {
    name: "Performance",
    price: "₱1,499",
    cadence: "per year",
    description: "Ideal for active athletes and coaches who need deeper tools and season planning support.",
    includes: [
      "Everything in Starter",
      "Expanded performance history and progress tracking",
      "Priority support for profile and result correction requests",
      "Early access to selected Philippine Athletics member clinics",
    ],
  },
  {
    name: "Club Plus",
    price: "₱4,999",
    cadence: "per year",
    description: "Built for clubs and organizations managing teams, compliance, and visibility.",
    includes: [
      "Everything in Performance",
      "Club page with roster highlights and recognition badges",
      "Admin tools for member invites and roster confirmations",
      "Quarterly club spotlight opportunities on the platform",
    ],
  },
]

type Persona = {
  key: PersonaKey
  label: string
  blurb: string
  useItTo: string[]
  steps: string[]
  ctaLabel: string
}

const personas: Persona[] = [
  {
    key: "athlete",
    label: "Athletes",
    blurb:
      "Build a clean, official profile that shows your PBs, results, and ranking in the Philippines—and makes it easier for coaches, clubs, and sponsors to find you.",
    useItTo: [
      "See where you rank nationally (and globally when available) in your events",
      "Track progress with competition histories and PB/SB views",
      "Make it easy for coaches, clubs, and sponsors to review your performances",
      "Share one link with your full profile",
    ],
    steps: [
      "Create your athlete account with your legal name.",
      "Claim or create your profile; match to official results.",
      "Add location, age group, events, and current club.",
      "Review PBs/results; request corrections if needed.",
      "Link coach(es), club, and sponsors.",
      "Add upcoming competitions to follow your season.",
      "Add social/contact (youth contact may route via parent/club).",
      "Compete and let verified results update your rankings.",
    ],
    ctaLabel: "Join as athlete member",
  },
  {
    key: "coach",
    label: "Coaches",
    blurb:
      "Showcase your coaching credentials, keep track of the athletes you work with, and connect with clubs and competitions that fit your program.",
    useItTo: [
      "Display coaching certifications recognized by Philippine Athletics",
      "See your athletes’ PBs and rankings in one place",
      "Guide athletes to the right competitions",
      "Connect with clubs and potential new athletes",
    ],
    steps: [
      "Create your coach account and profile (experience, disciplines, bio).",
      "Add PA-recognized certifications and SafeSport completion.",
      "Join or create your club; link to athletes you coach.",
      "Confirm athlete requests and keep your roster current.",
      "Use rankings and calendars to plan training targets.",
    ],
    ctaLabel: "Join as coach member",
  },
  {
    key: "club",
    label: "Club Owners & Admins",
    blurb:
      "Put your club on the national map, manage your roster, and show parents, athletes, and sponsors that you meet Philippine Athletics standards.",
    useItTo: [
      "List your club on the official PA portal",
      "Show SafeSport and PA recognition status",
      "Recruit athletes searching by location/event",
      "Present your roster, results, and sponsors",
    ],
    steps: [
      "Create an admin account and claim or register your club.",
      "Complete your club profile (logo, location, contact, training info).",
      "Upload PA/SafeSport docs to display recognition badges.",
      "Invite athletes to link; confirm membership requests.",
      "Share your club profile to families, schools, LGUs, sponsors.",
    ],
    ctaLabel: "Join as club admin",
  },
  {
    key: "sponsor",
    label: "Sponsors & Brands",
    blurb:
      "Find athletes, clubs, and competitions that fit your brand—and track the story your support is helping to write.",
    useItTo: [
      "Discover athletes by event, age group, region, and performance level",
      "Identify clubs and competitions that align to your target audience",
      "Display your support on profiles, rankings, and news pages",
    ],
    steps: [
      "Create your sponsor account and brand profile.",
      "Add logo, brand description, and target audience.",
      "Tag current sponsorships across athletes, clubs, competitions.",
      "Define what you’re looking for (segments, event types, regions).",
      "Reach out via provided contacts to activate partnerships.",
    ],
    ctaLabel: "Join as sponsor member",
  },
  {
    key: "fan",
    label: "Fans & Supporters",
    blurb:
      "Follow your favorite athletes and clubs, check national rankings, and relive big performances—from school meets to world championships.",
    useItTo: [
      "Look up athletes by name, club, event, or region",
      "Check who’s #1 in any event or age group in the Philippines",
      "Browse competition results and relive big performances",
      "Discover new athletes and clubs to support",
    ],
    steps: [
      "Explore without an account—search and rankings are public.",
      "Create a fan account to save favorites and subscribe to updates.",
      "Share profiles, rankings, and news to grow PH track & field.",
    ],
    ctaLabel: "Explore rankings",
  },
]

const pillars = [
  { title: "Profiles", desc: "Athletes, coaches, clubs, and sponsors in one database.", icon: Users },
  { title: "Rankings & results", desc: "National rankings and verified competition results.", icon: Trophy },
  { title: "Connections", desc: "Tools to connect athletes, clubs, and sponsors around real performances.", icon: Heart },
]

const trustPoints = [
  {
    title: "Verified results & rankings",
    desc: "National rankings and records come from competitions certified by Philippine Athletics.",
  },
  {
    title: "Club recognition & SafeSport",
    desc: "Clubs show PA recognition and SafeSport compliance so families see trusted environments.",
  },
  {
    title: "Coaching & officials’ credentials",
    desc: "PA-recognized certifications display on profiles to help meet organizers and athletes find qualified people.",
  },
]

export default function MembershipPage() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("athlete")
  const persona = useMemo(() => personas.find((p) => p.key === activePersona)!, [activePersona])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest">Membership</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Membership with Philippine Athletics</h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Welcome To The Sport, The Team, The Journey. Become part of the official home for Filipino track &amp; field athletes,
                clubs, coaches, sponsors, and fans.
              </p>
              <p className="text-sm text-muted-foreground">
                Membership connects you to athlete profiles, club directories, national rankings, and verified competition results in one place.
              </p>
              <p className="text-sm text-muted-foreground">
                Whether you’re competing, coaching, running a club, sponsoring, or cheering, membership is where you find—and be found—in Philippine track &amp;
                field.
              </p>
              <div className="flex gap-3 pt-2 flex-wrap">
                <a
                  href="#packages"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Become a member
                </a>
                <a
                  href="/athletes"
                  className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
                >
                  Explore athletes
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <BadgeCheck className="w-4 h-4 text-accent" />
                Powered by Philippine Athletics
              </div>
              <p className="text-xs text-muted-foreground max-w-xs">
                Official governance for track & field in the Philippines: rankings, verified results, SafeSport, and club standards.
              </p>
            </div>
          </div>
        </section>

        <DemoAdSlot slotId="membership-inline-leaderboard-1" format="leaderboard" />


        <section className="space-y-5" id="packages">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Membership Packages</h2>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Choose the package that matches your role. Every membership supports athlete development, verified competition records,
              and a stronger national athletics ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {membershipPackages.map((pkg) => (
              <div key={pkg.name} className="rounded-lg border border-border bg-card p-5 space-y-4">
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-foreground">{pkg.name}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{pkg.cadence}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">What’s included</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What it is */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">One Official Platform. Many Ways to Use It.</h2>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Philippine Athletics is the official national governing body for track & field. This platform is its digital home base—combining a public stats hub, a member portal, and a discovery layer for sponsors and fans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-lg border border-border bg-card space-y-2">
                <div className="flex items-center gap-2">
                  <pillar.icon className="w-4 h-4 text-accent" />
                  <p className="text-sm font-semibold text-foreground">{pillar.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="space-y-4" id="personas">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Who It’s For</h2>
            <p className="text-sm text-muted-foreground">Tap your role to see how the platform fits you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {personas.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePersona(p.key)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  activePersona === p.key ? "border-accent bg-accent/10" : "border-border bg-card hover:bg-muted"
                }`}
              >
                <p className="text-sm font-semibold text-foreground">{p.label}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{p.blurb}</p>
              </button>
            ))}
          </div>
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          <DemoAdSlot slotId="membership-inline-mrec-1" format="mrec" />
          <DemoAdSlot slotId="membership-inline-mrec-2" format="mrec" className="hidden sm:block" />
        </div>

        {/* Persona slider */}
        <section className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {personas.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePersona(p.key)}
                className={`px-3 py-1.5 rounded-md border text-sm font-semibold transition-colors ${
                  activePersona === p.key ? "bg-accent text-accent-foreground border-accent" : "bg-card text-foreground border-border hover:bg-muted"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 rounded-lg border border-border bg-card">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">For {persona.label}</p>
              <p className="text-sm text-foreground">{persona.blurb}</p>
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                Current persona focus
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">You’ll use it to:</h3>
                <ul className="space-y-1 text-sm text-foreground">
                  {persona.useItTo.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Get started</h3>
                <ol className="space-y-2 text-sm text-foreground">
                  {persona.steps.map((step, idx) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-accent">{idx + 1}.</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <a
                  href="/signup"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  {persona.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Contact options for youth athletes may be limited or routed through parents or clubs for safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Behind the scenes */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Powered by Official Data and Standards</h2>
            <p className="text-sm text-muted-foreground">
              Behind the simple profiles and clean rankings is a full governance engine run by Philippine Athletics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="p-4 rounded-lg border border-border bg-card space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <p className="text-sm font-semibold text-foreground">{tp.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">{tp.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-accent" />
            Look for the PA-verified badge on profiles, clubs, and results to know that data has been validated by Philippine Athletics.
          </div>
        </section>

        <DemoAdSlot slotId="membership-inline-leaderboard-2" format="leaderboard" />

        {/* Final CTA */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">Ready to Get Started?</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="/signup?role=athlete"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              I’m an athlete
            </a>
            <a
              href="/signup?role=coach"
              className="px-4 py-2 rounded-md border border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              I’m a coach
            </a>
            <a
              href="/signup?role=club"
              className="px-4 py-2 rounded-md border border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              I run a club
            </a>
            <a
              href="/signup?role=sponsor"
              className="px-4 py-2 rounded-md border border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              I’m a sponsor
            </a>
            <a href="/rankings" className="text-sm text-accent font-semibold flex items-center gap-1">
              Just want to browse? Explore rankings
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
