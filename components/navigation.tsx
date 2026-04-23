"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Menu } from "lucide-react"
import { GlobalSearchForm } from "@/components/global-search"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import {
  AthleteIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  DashboardIcon,
  DataIcon,
  DirectoryIcon,
  HomeIcon,
  MembershipIcon,
  RankingsIcon,
  RecognitionIcon,
  SponsorIcon,
  type AthleticsIconComponent,
} from "@/components/icons/athletics-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const ictsiTopBanner = {
  name: "ICTSI Foundation",
  imageUrl: "/sponsor-assets/ictsi-foundation.jpg",
  alt: "ICTSI Foundation banner",
}

type NavLink = {
  href: string
  label: string
  icon: AthleticsIconComponent
}

const primaryLinks: NavLink[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/disciplines", label: "Disciplines", icon: CompetitionIcon },
  { href: "/events", label: "Events", icon: CompetitionIcon },
  { href: "/rankings", label: "Rankings", icon: RankingsIcon },
  { href: "/athletes", label: "Athletes", icon: AthleteIcon },
  { href: "/clubs", label: "Clubs", icon: ClubIcon },
]

const secondaryLinks: NavLink[] = [
  { href: "/about", label: "About", icon: DashboardIcon },
  { href: "/search", label: "Search", icon: DirectoryIcon },
  { href: "/competitions", label: "Competition archive", icon: CompetitionIcon },
  { href: "/coaches", label: "Coaches & Officials", icon: CoachIcon },
  { href: "/membership", label: "Membership", icon: MembershipIcon },
  { href: "/safe-sport", label: "Safe Sport", icon: RecognitionIcon },
  { href: "/news", label: "News", icon: DataIcon },
  { href: "/sponsors", label: "Sponsors", icon: SponsorIcon },
  { href: "/data-portal", label: "Data Portal", icon: DataIcon },
  { href: "/recognition", label: "Recognition", icon: RecognitionIcon },
  { href: "/how-it-works", label: "How it works", icon: DashboardIcon },
  { href: "/changelog", label: "Updates", icon: DataIcon },
]

const accountLinks: NavLink[] = [
  { href: "/signup", label: "Sign up", icon: MembershipIcon },
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
    const match = [...primaryLinks, ...secondaryLinks, ...accountLinks].find((link) =>
      isActive(pathname, link.href),
    )
    return match?.label ?? "Menu"
  }, [pathname])

  return (
    <>
      <nav className="shell-surface">
        <div className="page-shell">
          <div className="shell-inner">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765124410/Philippine_Olympic_Committee.svg_eqska6.png"
                  alt="Philippine Olympic Committee logo"
                  className="size-8 object-contain"
                  width="32"
                  height="32"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-normal text-foreground">
                  Philippine Athletics
                </span>
                <span className="hidden text-[11px] text-muted-foreground sm:block">
                  National home for Filipino athletics
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center xl:flex" aria-label="Primary">
              <div className="flex items-center gap-1 rounded-lg border border-border bg-background/76 p-1">
                {primaryLinks.map((link) => {
                  const Icon = link.icon
                  const active = isActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-[color,background-color]",
                        active
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <GlobalSearchForm
                id="site-search-desktop"
                className="hidden min-w-[260px] max-w-[380px] flex-1 2xl:flex"
              />

              <Button
                asChild
                variant="ghost"
                size="icon-sm"
                className="2xl:hidden"
                aria-label="Search"
              >
                <Link href="/search">
                  <DirectoryIcon aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                <Link href="/signup">Sign up</Link>
              </Button>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    aria-label="Open navigation"
                  >
                    <Menu aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overscroll-contain p-0">
                  <SheetHeader className="border-b border-border/70">
                    <SheetTitle>Philippine Athletics</SheetTitle>
                    <SheetDescription>{activeLabel}</SheetDescription>
                  </SheetHeader>

                  <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-4">
                    <GlobalSearchForm id="site-search-mobile-menu" className="w-full" />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Primary navigation</p>
                      <div className="grid gap-2">
                        {primaryLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
                                {link.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Secondary</p>
                      <div className="grid gap-2">
                        {secondaryLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
                                {link.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Account</p>
                      <div className="grid gap-2">
                        {accountLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "outline"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
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
        </div>
      </nav>

      <div className="shell-partner-rail">
        <div className="page-shell py-2">
          <div className="hidden md:block">
            <DemoAdSlot
              slotId="global-top-leaderboard"
              format="leaderboard"
              variant="rail"
              creativeOverride={topAdOverride}
            />
          </div>
          <div className="md:hidden">
            <DemoAdSlot
              slotId="global-top-mobile"
              format="mobile"
              variant="rail"
              creativeOverride={topAdOverride}
            />
          </div>
        </div>
      </div>
    </>
  )
}
