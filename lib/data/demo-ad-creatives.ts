export type DemoAdFormat = "leaderboard" | "mrec" | "mobile"

export type DemoAdCreative = {
  name: string
  formats?: DemoAdFormat[]
}

const formatAnchoredCreatives: DemoAdCreative[] = [
  {
    name: "ICTSI Foundation",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "Ayala Foundation",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "Globe Telecom",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "UnionBank",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "Metrobank",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "BDO Unibank",
    formats: ["leaderboard", "mrec", "mobile"],
  },
  {
    name: "PLDT Home",
    formats: ["leaderboard", "mrec", "mobile"],
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
      name: "Philippine Athletics Partner",
      formats: [format],
    }
  )
}
