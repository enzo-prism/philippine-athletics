import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"

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
    title: "Youth Membership",
    summary:
      "Built for student-athletes, young competitors, and the families supporting them. Youth membership is the starting point for anyone under 18 who wants to compete, get ranked, and grow within the sport.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    details: [
      "Compete in youth-sanctioned events with official results",
      "Verified athlete profile visible in national rankings",
      "Age-group season tracking so progress is never lost",
      "Updates on youth meets, development camps, and training programs",
      "Support pathways for young athletes and their families",
    ],
    bestFor: ["Student-athletes", "Parents and guardians", "School and club development programs"],
  },
  {
    id: "adult",
    title: "Adult Membership",
    summary:
      "The go-to membership for anyone actively contributing to Philippine athletics. Whether you are on the track, behind the clipboard, or in the stands volunteering, this is where you plug in.",
    pricing: {
      base: "$10 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$10 / month",
    },
    details: [
      "Compete in adult-sanctioned events with official results",
      "Access coach and official certification pathways",
      "Priority updates on clinics, meets, and member programs",
      "Official profile as an athlete, coach, official, or volunteer",
      "Direct participation in initiatives strengthening the sport nationwide",
    ],
    bestFor: ["Competitive athletes", "Coaches and officials", "Volunteers and sport advocates"],
  },
  {
    id: "vip",
    title: "VIP Membership",
    summary:
      "For members who want the full experience. VIP membership includes everything in the Adult tier plus priority event access, exclusive partner perks, and recognition as a premium supporter of Philippine athletics.",
    pricing: {
      base: "$20 / month",
      processing: "$0",
      cardFee: "$0",
      total: "$20 / month",
    },
    details: [
      "Everything in the Adult Membership",
      "Priority access to select ticketed events and experiences",
      "Exclusive discounts from official partners",
      "Early access to select member opportunities",
      "Recognized as a premium supporter of the sport",
    ],
    bestFor: ["High-engagement supporters", "Corporate and community partners", "Members who want premium access"],
  },
]

const comparisonRows = [
  { label: "Official profile + verified results", youth: true, adult: true, vip: true },
  { label: "Competition eligibility", youth: true, adult: true, vip: true },
  { label: "National ranking visibility", youth: true, adult: true, vip: true },
  { label: "Education and member updates", youth: true, adult: true, vip: true },
  { label: "Coach and official pathway resources", youth: false, adult: true, vip: true },
  { label: "Priority event/ticket access", youth: false, adult: false, vip: true },
  { label: "Exclusive partner perks", youth: false, adult: false, vip: true },
]

const checkCell = (enabled: boolean) => (enabled ? "Included" : "—")

export default function MembershipBenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Plan comparison"
          title="Membership benefits at a glance"
          description="See exactly what each tier includes before you join or renew. All memberships give you access to the official Philippine athletics ecosystem."
          actions={
            <Button asChild variant="outline" size="lg">
              <Link href="/membership">
                <ArrowLeft className="size-4" />
                Back to membership overview
              </Link>
            </Button>
          }
          stats={[
            { label: "Youth", value: "$10 / month" },
            { label: "Adult", value: "$10 / month" },
            { label: "VIP", value: "$20 / month" },
          ]}
        />

        <section className="page-section overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted/70">
              <tr>
                <th className="p-3 text-left font-semibold text-foreground">Benefit</th>
                <th className="p-3 text-left font-semibold text-foreground">Youth</th>
                <th className="p-3 text-left font-semibold text-foreground">Adult</th>
                <th className="p-3 text-left font-semibold text-foreground">VIP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-border/80">
                  <td className="p-3 text-foreground">{row.label}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.youth)}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.adult)}</td>
                  <td className="p-3 text-muted-foreground">{checkCell(row.vip)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {benefitTiers.map((tier) => (
            <article key={tier.id} id={tier.id} className="directory-card scroll-mt-24">
              <div className="space-y-2">
                <p className="brand-eyebrow">{tier.title}</p>
                <p className="text-sm leading-6 text-muted-foreground">{tier.summary}</p>
                <div className="rounded-[1.25rem] border border-border/80 bg-background/74 p-4 text-sm text-muted-foreground">
                  <p>Base price: {tier.pricing.base}</p>
                  <p>Processing fee: {tier.pricing.processing}</p>
                  <p>Card fee: {tier.pricing.cardFee}</p>
                  <p className="mt-2 font-semibold text-foreground">Total: {tier.pricing.total}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Detailed benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.details.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Best for</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {tier.bestFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button asChild>
                  <Link href="/signup">Join / Renew</Link>
                </Button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
