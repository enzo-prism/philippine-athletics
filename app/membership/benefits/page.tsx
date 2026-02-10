import { Navigation } from "@/components/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

type MembershipBenefit = {
  id: "youth" | "adult" | "vip"
  title: string
  summary: string
  pricing: {
    base: string
    processing: string
    cardFee: string
    total: string
  }
  details: string[]
  bestFor: string[]
}

const benefitTiers: MembershipBenefit[] = [
  {
    id: "youth",
    title: "Individual Youth Membership",
    summary: "For athletes and supporters 18 years old and younger.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    details: [
      "Eligible for youth-sanctioned competitions",
      "Official athlete profile with verified results",
      "Age-group rankings and season progress tracking",
      "Member updates on youth meets, camps, and training opportunities",
      "Support pathways for young athletes and their families",
    ],
    bestFor: ["Student-athletes", "Parents and guardians", "School and club development programs"],
  },
  {
    id: "adult",
    title: "Individual Adult Membership",
    summary: "For athletes, coaches, officials, volunteers, and supporters 19+.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    details: [
      "Eligible for adult-sanctioned competitions",
      "Access to coach and official pathway resources",
      "Priority member updates, clinics, and announcements",
      "Official member profile for athlete, coach, official, or volunteer pathways",
      "Participation opportunities that support Philippine Athletics nationwide",
    ],
    bestFor: ["Competitive athletes", "Coaches and officials", "Volunteers and sport advocates"],
  },
  {
    id: "vip",
    title: "VIP Membership",
    summary: "For members who want premium access and added perks.",
    pricing: {
      base: "$20 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$20 / month",
    },
    details: [
      "Includes all Adult Membership benefits",
      "Priority access to select ticketed athletics events",
      "Exclusive partner discounts and VIP updates",
      "Elevated access to select experiences and member opportunities",
      "Additional recognition as a premium supporter of Philippine Athletics",
    ],
    bestFor: ["High-engagement supporters", "Corporate and community partners", "Members seeking premium access"],
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
    label: "Coach and official pathway resources",
    youth: false,
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
            Compare membership tiers and review detailed benefits before you join or renew. These details mirror the latest membership overview,
            including monthly pricing and updated feature highlights for each tier.
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
                <div className="pt-3 text-sm text-muted-foreground space-y-1">
                  <p>Base Price: {tier.pricing.base}</p>
                  <p>Processing Fee: {tier.pricing.processing}</p>
                  <p>Card Fee: {tier.pricing.cardFee}</p>
                  <p className="font-semibold text-foreground">Total Cost: {tier.pricing.total}</p>
                </div>
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
