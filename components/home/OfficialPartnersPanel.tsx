import { PartnerLogoMark } from "@/components/icons/brand-mark"

type PartnerEntry = {
  id: string
  name: string
  role: string
}

const officialPartners: PartnerEntry[] = [
  {
    id: "philom-sports",
    name: "Philom Sports",
    role: "Program partner",
  },
  {
    id: "psc-poc",
    name: "PSC + POC",
    role: "Institutional partner",
  },
  {
    id: "masiv",
    name: "MASIV",
    role: "Technology partner",
  },
]

export function OfficialPartnersPanel() {
  return (
    <section className="space-y-3" aria-labelledby="official-partners-heading">
      <p id="official-partners-heading" className="institutional-kicker">
        Official Partners
      </p>

      <div className="grid gap-3">
        {officialPartners.map((partner) => (
          <article
            key={partner.id}
            className="group hover-stroke-surface relative overflow-hidden border border-primary/20 bg-[linear-gradient(120deg,rgba(15,39,69,0.08)_0%,rgba(247,248,251,0.95)_48%,rgba(181,18,43,0.1)_100%)] px-4 py-3 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-accent/80 transition-all duration-300 group-hover:w-1.5" aria-hidden="true" />
            <div className="grid gap-3 pl-3">
              <div className="group-hover-stroke-surface flex min-h-[102px] items-center border border-border bg-background/84 px-4 py-3 transition-[border-color,box-shadow,background-color] duration-300">
                <PartnerLogoMark name={partner.name} className="h-20 w-full" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-normal text-foreground">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
