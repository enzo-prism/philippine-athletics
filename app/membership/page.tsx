import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react"

type MembershipType = {
  key: "youth" | "adult" | "vip"
  name: string
  audience: string
  description: string
  pricing: {
    base: string
    processing: string
    cardFee: string
    total: string
  }
  highlights: string[]
  headerClassName: string
}

const membershipTypes: MembershipType[] = [
  {
    key: "youth",
    name: "Individual Youth Membership",
    audience: "For athletes and supporters 18 years old and younger",
    description:
      "Designed for the next generation of Filipino athletes. Youth members can compete in recognized competitions and build official profiles from the start of their journey.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    highlights: [
      "Eligible for youth-sanctioned competitions",
      "Official athlete profile with verified results",
      "Age-group rankings and season progress tracking",
    ],
    headerClassName: "bg-slate-500 text-white",
  },
  {
    key: "adult",
    name: "Individual Adult Membership",
    audience: "For athletes, coaches, officials, volunteers, and supporters 19+",
    description:
      "The most popular membership for active participation in Philippine Athletics. Adult members can compete, coach, officiate, volunteer, and support the sport nationwide.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    highlights: [
      "Eligible for adult-sanctioned competitions",
      "Access to coach and official pathway resources",
      "Priority member updates, clinics, and announcements",
    ],
    headerClassName: "bg-red-700 text-white",
  },
  {
    key: "vip",
    name: "VIP Membership",
    audience: "For members who want premium access and added perks",
    description:
      "Built for members who want to support Philippine Athletics at a deeper level while receiving elevated access to events, experiences, and partner offers.",
    pricing: {
      base: "$20 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$20 / month",
    },
    highlights: [
      "Includes all Adult Membership benefits",
      "Priority access to select ticketed athletics events",
      "Exclusive partner discounts and VIP updates",
    ],
    headerClassName: "bg-slate-900 text-white",
  },
]

const topActions = [
  { label: "Join / Renew", href: "/signup" },
  { label: "Current Member Login", href: "/login" },
]

const reasonsToJoin = [
  "Compete in recognized meets with official results",
  "Build a trusted athlete, coach, or club profile",
  "Get updates on events, rankings, and member programs",
  "Help strengthen Philippine Athletics nationwide",
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-4xl sm:text-5xl font-extrabold tracking-[0.16em] text-red-700 uppercase">Membership</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome to the Sport, the Team, the Journey</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Philippine Athletics brings together athletes, coaches, event directors, officials, volunteers, clubs, and supporters to grow
            track &amp; field, road running, and race walking across the country.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Join Team Philippine Athletics today by becoming a member. Whether you want to compete, contribute locally, or support high-
            performance goals, membership connects you to the official ecosystem of our sport.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            {topActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {action.label}
              </a>
            ))}
          </div>

          <a
            href="/membership/benefits"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            View detailed membership benefits
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        <DemoAdSlot slotId="membership-hero-leaderboard" format="leaderboard" />

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center">Choose Your Membership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {membershipTypes.map((membership) => (
              <article key={membership.key} className="rounded-lg border border-border bg-card overflow-hidden flex flex-col">
                <header className={`px-5 py-4 ${membership.headerClassName}`}>
                  <p className="text-xl leading-tight font-bold uppercase tracking-wide">{membership.name}</p>
                </header>

                <div className="p-5 space-y-4 flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-foreground">{membership.audience}</p>
                  <p className="text-sm text-muted-foreground">{membership.description}</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {membership.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-border text-sm text-muted-foreground space-y-1">
                    <p>Base Price: {membership.pricing.base}</p>
                    <p>Processing Fee: {membership.pricing.processing}</p>
                    <p>Card Fee: {membership.pricing.cardFee}</p>
                    <p className="font-semibold text-foreground">Total Cost: {membership.pricing.total}</p>
                  </div>

                  <div className="mt-auto space-y-2 pt-2">
                    <a
                      href={`/membership/benefits#${membership.key}`}
                      className="block w-full rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
                    >
                      Membership details
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="/signup"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90"
                      >
                        Join
                      </a>
                      <a
                        href="/signup"
                        className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted"
                      >
                        Renew
                      </a>
                    </div>
                    <a
                      href="/membership/benefits"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent font-semibold hover:underline underline-offset-4"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Why membership matters</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {reasonsToJoin.map((reason) => (
              <li key={reason} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
