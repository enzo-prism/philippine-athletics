export type LogoAsset = {
  name: string
  url: string
  alt: string
  category: "federation" | "program" | "symbol" | "partner"
}

const appMarkPath = "/icon.svg"

export const logoAssets: LogoAsset[] = [
  {
    name: "Philippine Athletics Shield",
    alt: "Philippine Athletics shield mark",
    category: "federation",
    url: appMarkPath,
  },
  {
    name: "Philippine Athletics App Icon",
    alt: "Philippine Athletics app icon",
    category: "program",
    url: appMarkPath,
  },
  {
    name: "Partner System Mark",
    alt: "Minimal partner system mark",
    category: "partner",
    url: appMarkPath,
  },
  {
    name: "Athlete Pathway Symbol",
    alt: "Minimal athlete pathway symbol",
    category: "symbol",
    url: appMarkPath,
  },
]

export const headerLogos = logoAssets.slice(0, 2)
export const footerLogos = logoAssets
