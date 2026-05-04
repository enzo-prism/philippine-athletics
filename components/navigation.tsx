"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  AthleteIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  HomeIcon,
  type AthleticsIconComponent,
} from "@/components/icons/athletics-icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavLink = {
  href: string
  label: string
  icon: AthleticsIconComponent
}

const coreLinks: NavLink[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/athletes", label: "Athletes", icon: AthleteIcon },
  { href: "/clubs", label: "Clubs", icon: ClubIcon },
  { href: "/coaches", label: "Coaches", icon: CoachIcon },
  { href: "/events", label: "Events", icon: CompetitionIcon },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="shell-surface">
        <div className="page-shell">
          <div className="shell-inner">
            <Link href="/" className="shell-brand group" aria-label="Philippine Athletics home">
              <span className="shell-brand-mark" aria-hidden="true">
                <span className="shell-brand-seal">
                  <Image
                    src="/brand/philippine-athletics-seal.png"
                    alt=""
                    width={44}
                    height={42}
                    priority
                    className="shell-brand-image"
                  />
                </span>
              </span>
              <span className="min-w-0">
                <span className="shell-brand-title">
                  Philippine Athletics
                </span>
                <span className="shell-brand-subtitle">
                  Athletes, clubs, coaches, events
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center md:flex" aria-label="Primary">
              <div className="shell-nav-cluster">
                {coreLinks.map((link) => {
                  const Icon = link.icon
                  const active = isActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      data-slot="nav-link"
                      data-active={active ? "true" : undefined}
                      aria-current={active ? "page" : undefined}
                      className={cn("shell-nav-link", active && "is-active")}
                    >
                      <span className="shell-nav-icon" aria-hidden="true">
                        <Icon className="size-4" />
                      </span>
                      <span className="shell-nav-label">{link.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="md:hidden"
                    aria-label="Open navigation"
                  >
                    <Menu data-icon="inline-start" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overscroll-contain p-0">
                  <SheetHeader className="border-b border-border/70">
                    <SheetTitle>Philippine Athletics</SheetTitle>
                  </SheetHeader>

                  <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-4" aria-label="Core navigation">
                    <div className="space-y-2">
                      <div className="grid gap-2">
                        {coreLinks.map((link) => {
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
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
