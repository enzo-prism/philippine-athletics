import { cn } from "@/lib/utils"

type LogoSurface = "ink" | "paper"

type PartnerEntry = {
  id: string
  logoSrc: string
  logoAlt: string
  surface: LogoSurface
}

const officialPartners: PartnerEntry[] = [
  {
    id: "philom-sports",
    logoSrc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697128/FAS_LOGO_SQUARE_WHITE_iprxox.png",
    logoAlt: "Philom Sports logo",
    surface: "ink",
  },
  {
    id: "psc-poc",
    logoSrc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697128/PSC_POC_LOGO_tjd8qv.jpg",
    logoAlt: "Philippine Sports Commission and Philippine Olympic Committee logos",
    surface: "paper",
  },
  {
    id: "masiv",
    logoSrc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697127/MASIV_LOGO_pf1sgn.png",
    logoAlt: "MASIV logo",
    surface: "ink",
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
            className="group relative overflow-hidden border border-primary/20 bg-[linear-gradient(120deg,rgba(15,39,69,0.08)_0%,rgba(247,248,251,0.95)_48%,rgba(181,18,43,0.1)_100%)] px-4 py-3 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_18px_32px_-22px_rgba(15,39,69,0.55)]"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-accent/80 transition-all duration-300 group-hover:w-1.5 group-hover:bg-accent" aria-hidden="true" />
            <div className="pl-3">
              <div
                className={cn(
                  "flex min-h-[102px] items-center border px-4 py-3 transition-[border-color,box-shadow,background-color] duration-300",
                  partner.surface === "ink"
                    ? "border-primary/65 bg-[linear-gradient(160deg,rgba(15,39,69,1)_0%,rgba(24,52,86,1)_100%)] group-hover:border-accent/60 group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                    : "border-border bg-background group-hover:border-accent/45 group-hover:bg-white",
                )}
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "h-12 w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.04] sm:h-14",
                    partner.surface === "ink"
                      ? "contrast-125 brightness-105 group-hover:brightness-110"
                      : "contrast-110 group-hover:contrast-125",
                  )}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
