"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Building2,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  Facebook,
  FileText,
  Footprints,
  House,
  Instagram,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Twitter,
  Trophy,
  type LucideIcon,
  UserPlus,
  UserRound,
  Youtube,
} from "lucide-react"
import { GlobalSearchForm } from "@/components/global-search"
import { headerLogos } from "@/lib/data/logo-assets"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"

const ictsiTopBanner = {
  name: "ICTSI Foundation",
  imageUrl: "https://cdnweb.ictsi.com/users/user56/ICTSI%20Foundation%20unveils%20a%20fresh%20identity%20with%20new%20logo.jpg",
  alt: "ICTSI Foundation banner",
}

type NavLink = { href: string; label: string; icon: LucideIcon }

// Keep the top bar intentionally minimal; everything else lives in the menu sheet.
const topLinks: NavLink[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/athletes", label: "Athletes", icon: Footprints },
  { href: "/clubs", label: "Clubs", icon: Building2 },
  { href: "/competitions", label: "Competitions", icon: CalendarDays },
]

const exploreLinks: NavLink[] = [
  ...topLinks,
  { href: "/coaches", label: "Coaches", icon: Dumbbell },
  { href: "/rankings", label: "Rankings", icon: Trophy },
  { href: "/recognition", label: "Recognition", icon: ShieldCheck },
]

const accountLinks: NavLink[] = [
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/signup", label: "Sign Up", icon: UserPlus },
]

const utilityLinks: NavLink[] = [
  { href: "/data-portal", label: "Data Portal", icon: ClipboardList },
  { href: "/how-it-works", label: "How It Works", icon: Network },
  { href: "/changelog", label: "Updates", icon: FileText },
]

const socialLinks: Array<{
  label: string
  icon: LucideIcon
  href?: string
}> = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "X", icon: Twitter },
  { label: "YouTube", icon: Youtube },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const topAdOverride = pathname === "/" ? ictsiTopBanner : undefined

  const activeLabel = useMemo(() => {
    if (pathname === "/") return "Home"
    const match = [...exploreLinks, ...accountLinks, ...utilityLinks, { href: "/search", label: "Search", icon: Search }].find(
      (link) => isActive(pathname, link.href),
    )
    return match?.label ?? "Menu"
  }, [pathname])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell flex h-14 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-9 shrink-0 overflow-hidden rounded-none border border-border bg-card transition-colors group-hover:bg-accent/10">
              <img
                src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765124410/Philippine_Olympic_Committee.svg_eqska6.png"
                alt="Philippine Olympic Committee logo"
                className="h-full w-full object-contain p-1"
              />
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-foreground">Philippine Athletics</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {topLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    active
                      ? "text-foreground underline underline-offset-8 decoration-accent/60"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-1">
            <div className="hidden lg:flex items-center gap-1 border-l border-border pl-3">
              {socialLinks.map((item) => {
                const Icon = item.icon
                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground"
                      title={`${item.label} official channel`}
                      aria-label={`${item.label} official channel`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </Link>
                  )
                }

                return (
                  <button
                    key={item.label}
                    type="button"
                    className="inline-flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground transition-colors hover:text-foreground"
                    title={`${item.label} link coming soon`}
                    aria-label={`${item.label} link coming soon`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </button>
                )
              })}
            </div>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Link href="/search">
                <Search className="size-5" aria-hidden="true" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="text-foreground hover:text-foreground"
                  aria-label="Open navigation"
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetHeader className="border-b border-border">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>{activeLabel}</SheetDescription>
                </SheetHeader>

                <div className="p-4 space-y-5">
                  <GlobalSearchForm className="w-full" />

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
                    <div className="grid gap-2">
                      {exploreLinks.map((link) => {
                        const active = isActive(pathname, link.href)
                        const Icon = link.icon
                        return (
                          <Button
                            key={link.href}
                            asChild
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setOpen(false)}
                          >
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className="flex items-center gap-2"
                            >
                              <Icon className="size-4 shrink-0" aria-hidden="true" />
                              {link.label}
                            </Link>
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Account</p>
                    <div className="grid gap-2">
                      {accountLinks.map((link) => {
                        const active = isActive(pathname, link.href)
                        const Icon = link.icon
                        return (
                          <Button
                            key={link.href}
                            asChild
                            variant={active ? "secondary" : "outline"}
                            className={cn(
                              "w-full justify-start",
                              active ? "text-foreground" : "text-muted-foreground hover:text-accent-foreground",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className="flex items-center gap-2"
                            >
                              <Icon className="size-4 shrink-0" aria-hidden="true" />
                              {link.label}
                            </Link>
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">More</p>
                    <div className="grid gap-2">
                      {utilityLinks.map((link) => {
                        const active = isActive(pathname, link.href)
                        const Icon = link.icon
                        return (
                          <Button
                            key={link.href}
                            asChild
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setOpen(false)}
                          >
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className="flex items-center gap-2"
                            >
                              <Icon className="size-4 shrink-0" aria-hidden="true" />
                              {link.label}
                            </Link>
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Social</p>
                    <div className="grid grid-cols-4 gap-2">
                      {socialLinks.map((item) => {
                        const Icon = item.icon
                        if (item.href) {
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground"
                              aria-label={`${item.label} official channel`}
                              onClick={() => setOpen(false)}
                            >
                              <Icon className="size-4" aria-hidden="true" />
                            </Link>
                          )
                        }
                        return (
                          <div
                            key={item.label}
                            className="inline-flex h-9 items-center justify-center border border-dashed border-border text-muted-foreground"
                            title={`${item.label} link coming soon`}
                            aria-label={`${item.label} link coming soon`}
                          >
                            <Icon className="size-4" aria-hidden="true" />
                          </div>
                        )
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground">Official social links are being finalized for this demo.</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <div className="border-b border-border bg-muted/20">
        <div className="page-shell py-3">
          <div className="hidden min-h-[90px] md:block">
            <DemoAdSlot slotId="global-top-leaderboard" format="leaderboard" creativeOverride={topAdOverride} />
          </div>
          <div className="min-h-[56px] md:hidden">
            <DemoAdSlot slotId="global-top-mobile" format="mobile" creativeOverride={topAdOverride} />
          </div>
        </div>
      </div>
    </>
  )
}
