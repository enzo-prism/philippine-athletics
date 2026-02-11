export type DemoAdCreative = {
  name: string
  imageUrl: string
  alt: string
}

export const demoBannerAdCreatives: DemoAdCreative[] = [
  {
    name: "Ayala banner ad (variant 1)",
    imageUrl: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770787887/ayala_dgcjmj.jpg",
    alt: "Ayala banner advertisement",
  },
  {
    name: "Ayala banner ad (variant 2)",
    imageUrl: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770787887/ayala_dgcjmj.jpg",
    alt: "Ayala banner advertisement",
  },
  {
    name: "320x56 mobile banner",
    imageUrl: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770787883/320x56_vusf3k.png",
    alt: "320 by 56 mobile banner ad",
  },
  {
    name: "728x90 leaderboard banner",
    imageUrl: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770787883/728x90_ortvd8.png",
    alt: "728 by 90 leaderboard banner ad",
  },
  {
    name: "300x250 MREC banner",
    imageUrl: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770787882/300x250_sz7mt8.png",
    alt: "300 by 250 medium rectangle banner ad",
  },
]

// Demo-only sponsor creatives for sampling ad placements across the site.
// Sources provided by the user; many are SVG via Wikimedia Commons Special:FilePath.
export const demoAdCreatives: DemoAdCreative[] = [
  ...demoBannerAdCreatives,
  {
    name: "Jollibee Foods Corporation",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jollibee_Foods_Corporation_logo.svg",
    alt: "Jollibee Foods Corporation logo",
  },
  {
    name: "SM Investments Corporation",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SM_Investments_Logo_(2022).svg",
    alt: "SM Investments Corporation logo",
  },
  {
    name: "SM Prime Holdings",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SM_Prime_logotype_(2022).svg",
    alt: "SM Prime Holdings logo",
  },
  {
    name: "Ayala Land",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ayala_Land_logo.svg",
    alt: "Ayala Land logo",
  },
  {
    name: "BDO Unibank",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/BDO_Unibank_(logo).svg",
    alt: "BDO Unibank logo",
  },
  {
    name: "Bank of the Philippine Islands (BPI)",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_BPI_Logo.svg",
    alt: "BPI logo",
  },
  {
    name: "Metrobank",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Metropolitan_Bank_and_Trust_Company.svg",
    alt: "Metrobank logo",
  },
  {
    name: "UnionBank",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Unionbank_2018_logo.svg",
    alt: "UnionBank logo",
  },
  {
    name: "Security Bank",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Security_Bank_logo.svg",
    alt: "Security Bank logo",
  },
  {
    name: "Philippine National Bank (PNB)",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Philippine-National-Bank-logo.svg",
    alt: "PNB logo",
  },
  {
    name: "PLDT Home",
    imageUrl: "https://pldthome.com/images/default-source/pbb/2025/1024/banner-v2/pldt-life-logo.png",
    alt: "PLDT Home logo",
  },
  {
    name: "Globe Telecom",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Globe_Telecom_logo.svg",
    alt: "Globe Telecom logo",
  },
  {
    name: "Smart Communications",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SmartCommunications_Primary_Logo_(4).png",
    alt: "Smart Communications logo",
  },
  {
    name: "DITO Telecommunity",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dito_Telco_logo.svg",
    alt: "DITO Telecommunity logo",
  },
  {
    name: "GCash",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/GCash_logo.svg",
    alt: "GCash logo",
  },
  {
    name: "Maya",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Maya_logo.svg",
    alt: "Maya logo",
  },
  {
    name: "Grab",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Grab_Logo.svg",
    alt: "Grab logo",
  },
  {
    name: "Lazada",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lazada_(2019).svg",
    alt: "Lazada logo",
  },
  {
    name: "Shopee",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Shopee_logo.svg",
    alt: "Shopee logo",
  },
  {
    name: "Cebu Pacific",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cebu_Pacific_wordmark.svg",
    alt: "Cebu Pacific wordmark logo",
  },
  {
    name: "Philippine Airlines",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Philippine_Airlines_logo.svg",
    alt: "Philippine Airlines logo",
  },
  {
    name: "San Miguel Corporation",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/San_Miguel_Corporation_logo.svg",
    alt: "San Miguel Corporation logo",
  },
  {
    name: "Aboitiz Equity Ventures",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aboitiz_Equity_Ventures_logo.svg",
    alt: "Aboitiz Equity Ventures logo",
  },
  {
    name: "Aboitiz Power",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aboitiz_Power_logo.svg",
    alt: "Aboitiz Power logo",
  },
  {
    name: "Megaworld",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Megaworld_logo_and_wordmark.svg",
    alt: "Megaworld logo",
  },
  {
    name: "DMCI Homes",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/DMCI_Homes_logo.svg",
    alt: "DMCI Homes logo",
  },
  {
    name: "ABS-CBN",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ABS-CBN_logo.svg",
    alt: "ABS-CBN logo",
  },
  {
    name: "Meralco",
    imageUrl: "https://meralcomain.s3.ap-southeast-1.amazonaws.com/images/ckeditor-images/logo-white_0.png",
    alt: "Meralco logo",
  },
  {
    name: "Robinsons Land Corporation",
    imageUrl: "https://robinsonsland.com/sites/default/files/inline-images/logo-rlc-blue_upd.png",
    alt: "Robinsons Land Corporation logo",
  },
  {
    name: "Coca-Cola Europacific Aboitiz Philippines",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Coca-Cola_Europacific_Aboitiz_Philippines_logo.svg",
    alt: "Coca-Cola Europacific Aboitiz Philippines logo",
  },
]
