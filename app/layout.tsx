import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollReset } from "@/components/scroll-reset"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const accentDisplay = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-accent-display",
  weight: ["500", "600", "700"],
})

const brandAccent = localFont({
  src: [
    {
      path: "../BBTMartiresFree/BBTMartiresFree-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../BBTMartiresFree/BBTMartiresFree-Thin.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-brand-accent-display",
  display: "swap",
})

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("https://philippine-athletics.vercel.app")

export const metadata: Metadata = {
  metadataBase,
  title: "Philippine Athletics",
  description: "Track and field community profiles for the Philippines",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${accentDisplay.variable} ${brandAccent.variable} font-sans antialiased`}
      >
        <ScrollReset />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
