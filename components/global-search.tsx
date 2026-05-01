"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { DirectoryIcon } from "@/components/icons/athletics-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type GlobalSearchFormProps = {
  actionLabel?: string
  buttonClassName?: string
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  className?: string
  defaultValue?: string
  id?: string
  inputClassName?: string
  variant?: "compact" | "hero"
}

export function GlobalSearchForm({
  actionLabel = "Search",
  buttonClassName,
  buttonVariant,
  className,
  defaultValue = "",
  id = "global-directory-search",
  inputClassName,
  variant = "compact",
}: GlobalSearchFormProps) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue)

  const isCompact = variant === "compact"
  const resolvedButtonVariant = buttonVariant ?? (isCompact ? "secondary" : "default")

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = value.trim()
    if (!query) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-background/88 p-1.5 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <Label htmlFor={id} className="sr-only">
        Search athletes, coaches, and clubs
      </Label>
      <div className="relative flex-1">
        <DirectoryIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          id={id}
          type="search"
          autoComplete="off"
          inputMode="search"
          name="q"
          data-testid="global-search-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search athletes, clubs, IDs…"
          className={cn(
            "border-0 bg-transparent pl-10 shadow-none ring-0 focus-visible:border-transparent focus-visible:ring-0",
            isCompact ? "h-10 text-sm" : "h-12 text-base",
            inputClassName,
          )}
        />
      </div>
      <Button
        type="submit"
        size={isCompact ? "sm" : "lg"}
        variant={resolvedButtonVariant}
        className={cn(
          isCompact ? "min-w-[5rem] px-3" : "px-6",
          resolvedButtonVariant === "outline" && "text-muted-foreground hover:text-foreground",
          buttonClassName,
        )}
        aria-label="Run search"
        data-testid="global-search-submit"
      >
        {actionLabel}
      </Button>
    </form>
  )
}
