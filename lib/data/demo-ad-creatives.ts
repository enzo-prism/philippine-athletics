export type DemoAdFormat = "leaderboard" | "mrec" | "mobile"

export type DemoAdCreative = {
  name: string
  imageUrl: string
  alt: string
  formats?: DemoAdFormat[]
  fit?: "cover" | "contain"
}

export const sponsorLogoFallbackDataUri =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="300" viewBox="0 0 1200 300" role="img" aria-label="Sponsor fallback logo">
  <rect width="1200" height="300" fill="#f8fafc"/>
  <rect x="2" y="2" width="1196" height="296" fill="none" stroke="#cbd5e1" stroke-width="4"/>
  <g fill="#0f2745">
    <text x="600" y="132" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" text-anchor="middle" letter-spacing="6">SPONSOR</text>
    <text x="600" y="188" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="500" text-anchor="middle">Philippine Athletics Partner</text>
  </g>
</svg>`,
  )

const sponsorAssetPath = "/sponsor-assets"

const formatAnchoredCreatives: DemoAdCreative[] = [
  {
    name: "ICTSI Foundation",
    imageUrl: `${sponsorAssetPath}/ictsi-foundation.jpg`,
    alt: "ICTSI Foundation logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "Ayala Foundation",
    imageUrl: `${sponsorAssetPath}/ayala-foundation.jpg`,
    alt: "Ayala Foundation logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "Globe Telecom",
    imageUrl: `${sponsorAssetPath}/globe.svg`,
    alt: "Globe Telecom logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "UnionBank",
    imageUrl: `${sponsorAssetPath}/unionbank.svg`,
    alt: "UnionBank logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "Metrobank",
    imageUrl: `${sponsorAssetPath}/metrobank.svg`,
    alt: "Metrobank logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "BDO Unibank",
    imageUrl: `${sponsorAssetPath}/bdo.svg`,
    alt: "BDO Unibank logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
  {
    name: "PLDT Home",
    imageUrl: `${sponsorAssetPath}/pldt-home.png`,
    alt: "PLDT Home logo",
    formats: ["leaderboard", "mrec", "mobile"],
    fit: "contain",
  },
]

export const demoBannerAdCreatives = formatAnchoredCreatives

// `demoAdCreatives` remains for backward compatibility with the slot component.
export const demoAdCreatives = formatAnchoredCreatives

export const getDemoAdCreativesForFormat = (format: DemoAdFormat, preferBannerCreative = false) => {
  const pool = preferBannerCreative ? demoBannerAdCreatives : demoAdCreatives
  const byFormat = pool.filter((creative) => !creative.formats || creative.formats.includes(format))
  return byFormat.length ? byFormat : pool
}

export const getFallbackCreativeForFormat = (format: DemoAdFormat) => {
  return (
    demoBannerAdCreatives.find((creative) => creative.name === "ICTSI Foundation") ??
    {
      name: "Sponsor Fallback",
      imageUrl: sponsorLogoFallbackDataUri,
      alt: "Fallback sponsor logo",
      formats: [format],
      fit: "contain",
    }
  )
}
