import Link from "next/link"
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react"

import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"

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
}

const membershipTypes: MembershipType[] = [
  {
    key: "youth",
    name: "Youth Membership",
    audience: "For athletes and supporters 18 and under",
    description:
      "Start with an official profile from day one. Youth members gain access to sanctioned competitions, age-group rankings, and a growing network of programs built for the next generation.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    highlights: [
      "Compete in youth-sanctioned events nationwide",
      "Official athlete profile with verified results",
      "Age-group rankings and season progress tracking",
    ],
  },
  {
    key: "adult",
    name: "Adult Membership",
    audience: "For athletes, coaches, officials, volunteers, and supporters 19+",
    description:
      "The core membership for anyone actively involved in Philippine athletics. Compete, coach, officiate, volunteer, or stay connected to the sport you care about.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    highlights: [
      "Compete in adult-sanctioned events nationwide",
      "Coach and official development resources",
      "Priority updates on clinics, meets, and announcements",
    ],
  },
  {
    key: "vip",
    name: "VIP Membership",
    audience: "For members who want to go further",
    description:
      "Everything in the Adult tier plus elevated access. VIP members get priority entry to select events, exclusive partner offers, and recognition as premium supporters of the sport.",
    pricing: {
      base: "$20 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$20 / month",
    },
    highlights: [
      "All Adult Membership benefits included",
      "Priority access to ticketed athletics events",
      "Exclusive partner discounts and VIP communications",
    ],
  },
]

const topActions = [
  { label: "Join / Renew", href: "/signup" },
  { label: "Current Member Login", href: "/login" },
]

const reasonsToJoin =
  "Membership is how you become part of the official Philippine athletics community. It gives you access to compete in recognized meets, build a verified profile, stay informed on what is happening across the sport, and contribute to something that is growing every year."

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Membership access"
          title="Membership"
          description="Philippine Athletics is the official home for athletes, coaches, officials, volunteers, clubs, and supporters of track and field, road running, and race walking nationwide."
          actions={
            <>
              {topActions.map((action) => (
                <Button key={action.label} asChild size="lg">
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
              <Button asChild size="lg" variant="outline">
                <Link href="/membership/benefits">
                  View benefits
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </>
          }
          stats={[
            { label: "Youth", value: "$10 / month", note: "Student-athletes and families" },
            { label: "Adult", value: "$10 / month", note: "Athletes, coaches, officials, and supporters" },
            { label: "VIP", value: "$20 / month", note: "Priority access and partner perks" },
          ]}
          aside={<DemoAdSlot slotId="membership-hero-leaderboard" format="mrec" variant="spotlight" />}
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div>
              <p className="brand-eyebrow">Choose your membership</p>
              <h2 className="section-title">Pick the right level of access</h2>
            </div>
            <p className="section-copy">The tier you choose determines how deep your access goes inside the ecosystem.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {membershipTypes.map((membership) => (
              <article key={membership.key} className="directory-card">
                <div className="space-y-2">
                  <p className="brand-eyebrow">{membership.name}</p>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{membership.audience}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{membership.description}</p>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {membership.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-[1.25rem] border border-border/80 bg-background/74 p-4 text-sm text-muted-foreground">
                  <p>Base price: {membership.pricing.base}</p>
                  <p>Processing fee: {membership.pricing.processing}</p>
                  <p>Card fee: {membership.pricing.cardFee}</p>
                  <p className="mt-2 font-semibold text-foreground">Total: {membership.pricing.total}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <Button asChild>
                    <Link href="/signup">Register</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/membership/benefits#${membership.key}`}>Membership details</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section-tight">
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Why membership matters</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{reasonsToJoin}</p>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
