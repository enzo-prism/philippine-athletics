import { Navigation } from "@/components/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

type MembershipBenefit = {
  id: "youth" | "adult" | "vip"
  title: string
  summary: string
  annualCost: string
  details: string[]
  bestFor: string[]
}

const benefitTiers: MembershipBenefit[] = [
  {
    id: "youth",
    title: "Individual Youth Membership",
    summary: "Ages 18 and under who are building their competitive foundation.",
    annualCost: "₱1,105 total annual cost",
    details: [
      "Eligibility for youth-sanctioned competitions and meets",
      "Official athlete profile with verified race and field results",
      "Access to age-group rankings, progress tracking, and PB history",
      "Member updates for youth camps, clinics, and development opportunities",
      "Parent/guardian-supported account management for youth safety",
    ],
    bestFor: ["Student-athletes", "Parents supporting youth athletes", "School-based youth programs"],
  },
  {
    id: "adult",
    title: "Individual Adult Membership",
    summary: "Ages 19+ for active athletes, coaches, officials, and supporters.",
    annualCost: "₱2,320 total annual cost",
    details: [
      "Eligibility for adult-sanctioned competitions and recognized races",
      "Full member profile for athlete, coach, official, or volunteer pathways",
      "Access to national rankings, competition history, and official result records",
      "Priority access to member education sessions and federation announcements",
      "Participation in member-driven programs supporting grassroots athletics",
    ],
    bestFor: ["Competitive athletes", "Coaches and officials", "Volunteers and sport advocates"],
  },
  {
    id: "vip",
    title: "VIP Membership",
    summary: "Premium membership with elevated access and added support impact.",
    annualCost: "₱8,770 total annual cost",
    details: [
      "Includes all Adult Membership benefits",
      "Priority notice and access to select national athletics events",
      "Exclusive updates, invitations, and partner offers for VIP members",
      "Enhanced recognition as a supporter of Philippine Athletics initiatives",
      "Concierge-style support for selected member services",
    ],
    bestFor: ["High-engagement supporters", "Corporate partners", "Members seeking premium access"],
  },
]

const comparisonRows = [
  {
    label: "Official profile + verified results",
    youth: true,
    adult: true,
    vip: true,
  },
  {
    label: "Competition eligibility",
    youth: true,
    adult: true,
    vip: true,
  },
  {
    label: "National ranking visibility",
    youth: true,
    adult: true,
    vip: true,
  },
  {
    label: "Education and member updates",
    youth: true,
    adult: true,
    vip: true,
  },
  {
    label: "Priority event/ticket access",
    youth: false,
    adult: false,
    vip: true,
  },
  {
    label: "Exclusive partner perks",
    youth: false,
    adult: false,
    vip: true,
  },
]

const checkCell = (enabled: boolean) => (enabled ? "Included" : "—")

export default function MembershipBenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="space-y-4">
          <a href="/membership" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-4">
            <ArrowLeft className="w-4 h-4" />
            Back to membership overview
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Membership Benefits</h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
            Compare membership tiers and review detailed benefits before you join or renew. Each membership helps grow the Philippine athletics
            ecosystem while giving you access to official pathways, records, and opportunities.
          </p>
        </section>

        <section className="rounded-lg border border-border overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Benefit</th>
                <th className="text-left p-3 font-semibold text-foreground">Youth</th>
                <th className="text-left p-3 font-semibold text-foreground">Adult</th>
                <th className="text-left p-3 font-semibold text-foreground">VIP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="p-3 text-foreground">{row.label}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.youth)}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.adult)}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.vip)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefitTiers.map((tier) => (
            <article key={tier.id} id={tier.id} className="rounded-lg border border-border bg-card p-5 space-y-4 scroll-mt-24">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{tier.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{tier.summary}</p>
                <p className="text-sm font-semibold text-accent mt-2">{tier.annualCost}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Detailed benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.details.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Best for</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {tier.bestFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Join / Renew
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
