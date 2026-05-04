"use client"

import { useId, useState, type ReactNode } from "react"
import { ChevronDown, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CoreFilterDisclosureProps = {
  title?: string
  summary: ReactNode
  activeCount?: number
  children: ReactNode
  className?: string
}

const formatActiveCount = (count: number) => {
  if (count <= 0) return "Default"
  return `${count} active`
}

export function CoreFilterDisclosure({
  title = "Search and filters",
  summary,
  activeCount = 0,
  children,
  className,
}: CoreFilterDisclosureProps) {
  const panelId = useId()
  const [expanded, setExpanded] = useState(false)

  return (
    <section className={cn("core-filter-disclosure", className)}>
      <Button
        type="button"
        variant="outline"
        className="core-filter-toggle md:hidden"
        data-testid="core-filter-toggle"
        data-expanded={expanded ? "true" : "false"}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((current) => !current)}
      >
        <span className="core-filter-toggle-main">
          <span className="core-filter-toggle-title">
            <SlidersHorizontal aria-hidden="true" />
            {title}
          </span>
          <span className="core-filter-toggle-summary">{summary}</span>
        </span>
        <span className="core-filter-toggle-side">
          <span className="core-filter-toggle-count">{formatActiveCount(activeCount)}</span>
          <ChevronDown className="core-filter-toggle-chevron" aria-hidden="true" />
        </span>
      </Button>

      <div
        id={panelId}
        data-testid="core-filter-content"
        className={cn("core-filter-content", !expanded && "hidden md:block")}
      >
        {children}
      </div>
    </section>
  )
}
