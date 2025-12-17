"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

type NavLink = { href: string; label: string }

const emojiByPath: Record<string, string> = {
  "/": emojiIcons.home,
  "/athletes": emojiIcons.athlete,
  "/coaches": emojiIcons.coach,
  "/clubs": emojiIcons.club,
  "/competitions": emojiIcons.competitions,
  "/rankings": emojiIcons.rankings,
  "/sponsors": emojiIcons.sponsor,
  "/profile": emojiIcons.profile,
  "/signup": emojiIcons.sparkles,
}

const primaryLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/clubs", label: "Clubs" },
  { href: "/coaches", label: "Coaches" },
  { href: "/athletes", label: "Athletes" },
]

const bottomLinks = [
  { href: "/", label: "Home", symbol: "🏠" },
  { href: "/clubs", label: "Clubs", symbol: "👥" },
  { href: "/coaches", label: "Coaches", symbol: "💪" },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const activeLabel = useMemo(() => {
    const match = primaryLinks.find((link) => isActive(pathname, link.href))
    if (match) return match.label
    const bottomMatch = bottomLinks.find((link) => isActive(pathname, link.href))
    return bottomMatch?.label ?? "Home"
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell py-3 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center bg-card border border-accent transition-colors group-hover:bg-accent/10">
              <span className="text-foreground font-bold text-lg leading-none">🇵🇭</span>
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-foreground">Philippine Athletics</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(pathname, link.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Profile
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">{activeLabel}</span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground hover:bg-muted transition-colors"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="page-shell py-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive(pathname, link.href)
                        ? "border-accent text-foreground bg-accent/10"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Emoji symbol={emojiByPath[link.href] ?? "•"} className="text-base" aria-hidden />
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <Emoji symbol={emojiIcons.sparkles} className="text-base" aria-hidden />
                  Sign Up
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Emoji symbol={emojiIcons.profile} className="text-base" aria-hidden />
                  Profile
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 shadow-soft">
        <div className="grid grid-cols-3 gap-1 px-2 py-2 pb-safe text-[11px] font-semibold text-muted-foreground">
          {bottomLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 rounded-md px-2 py-1 transition-colors ${
                  active ? "bg-accent/10 text-accent" : "hover:bg-muted text-foreground"
                }`}
              >
                <Emoji symbol={link.symbol} className="text-base" aria-hidden />
                <span className="text-center leading-tight">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
