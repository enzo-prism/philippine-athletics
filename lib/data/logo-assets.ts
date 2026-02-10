export type LogoAsset = {
  name: string
  url: string
  alt: string
  category: "federation" | "program" | "symbol"
}

const cloudinaryBase = "https://res.cloudinary.com/dhqpqfw6w/image/upload"

export const logoAssets: LogoAsset[] = [
  {
    name: "PATAFA + PSC",
    alt: "PATAFA and Philippine Sports Commission combined logo",
    category: "federation",
    url: `${cloudinaryBase}/v1770697128/PATAFA_PSC_LOGO_xzerkv.jpg`,
  },
  {
    name: "PSC",
    alt: "Philippine Sports Commission logo",
    category: "federation",
    url: `${cloudinaryBase}/v1770697127/PSC_LOGO_jzlpsy.jpg`,
  },
  {
    name: "POA",
    alt: "Philippine Olympic affiliate logo",
    category: "federation",
    url: `${cloudinaryBase}/v1770697125/POA_LOGO_ccstcl.jpg`,
  },
  {
    name: "Olympic Rings",
    alt: "Olympic rings logo",
    category: "symbol",
    url: `${cloudinaryBase}/v1770697127/OLYMPIC_RINGS_LOGO_rxfgkr.jpg`,
  },
  {
    name: "Philippine Flag",
    alt: "Philippine flag",
    category: "symbol",
    url: `${cloudinaryBase}/v1770697123/PHI_FLAG_fgdort.jpg`,
  },
  {
    name: "Philippine Athletics Mark",
    alt: "Philippine athletics symbol mark",
    category: "program",
    url: `${cloudinaryBase}/v1770697127/PHI_LOGO_xnkkxv.jpg`,
  },
  {
    name: "FAS Primary",
    alt: "FAS primary logo",
    category: "program",
    url: `${cloudinaryBase}/v1770697126/FAS_LOGO_plwr8m.jpg`,
  },
  {
    name: "FAS Square",
    alt: "FAS square logo",
    category: "program",
    url: `${cloudinaryBase}/v1770697125/FAS_LOGO_SQUARE_cttltw.jpg`,
  },
]

export const headerLogos = logoAssets.slice(0, 5)
export const footerLogos = logoAssets
