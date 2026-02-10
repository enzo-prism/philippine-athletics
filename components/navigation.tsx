"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Building2,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  FileText,
  Footprints,
  Menu,
  Search,
  ShieldCheck,
  Trophy,
  type LucideIcon,
  UserPlus,
  UserRound,
} from "lucide-react"
import { GlobalSearchForm } from "@/components/global-search"
import { headerLogos } from "@/lib/data/logo-assets"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"

type NavLink = { href: string; label: string; icon: LucideIcon }

// Keep the top bar intentionally minimal; everything else lives in the menu sheet.
const topLinks: NavLink[] = [
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
  { href: "/changelog", label: "Updates", icon: FileText },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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
            <div className="size-9 shrink-0 overflow-hidden rounded-lg border border-border bg-card transition-colors group-hover:bg-accent/10">
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
                <Button type="button" variant="outline" size="icon" aria-label="Open navigation">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <div className="border-b border-border bg-muted/20">
        <div className="page-shell py-3">
          <div className="hidden md:block">
            <DemoAdSlot slotId="global-top-leaderboard" format="leaderboard" />
          </div>
          <div className="md:hidden">
            <DemoAdSlot slotId="global-top-mobile" format="mobile" />
          </div>
        </div>
      </div>
    </>
  )
}
