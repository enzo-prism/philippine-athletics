"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, Loader2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

type SocialProviderId = "facebook" | "google" | "instagram"

type SocialState =
  | { status: "idle" }
  | { status: "connecting"; provider: SocialProviderId }
  | { status: "connected"; provider: SocialProviderId }

const socialProviders: Array<{
  id: SocialProviderId
  name: string
  label: string
  icon: ReactNode
  iconWrapperClassName: string
}> = [
  {
    id: "google",
    name: "Google",
    label: "Continue with Google",
    icon: (
      <span className="text-[#4285F4] font-extrabold text-base leading-none" aria-hidden>
        G
      </span>
    ),
    iconWrapperClassName: "bg-white border border-border",
  },
  {
    id: "facebook",
    name: "Facebook",
    label: "Continue with Facebook",
    icon: (
      <span className="text-white font-extrabold text-base leading-none" aria-hidden>
        f
      </span>
    ),
    iconWrapperClassName: "bg-[#1877F2] border border-[#1877F2]",
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "Continue with Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    iconWrapperClassName:
      "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] border border-white/10",
  },
]

const roleOptions = ["Athlete", "Coach", "Club Manager", "Fan / Supporter"] as const

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.24em]">{label}</p>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}

function SocialSignupButton({
  disabled,
  isConnecting,
  onClick,
  provider,
}: {
  disabled: boolean
  isConnecting: boolean
  onClick: () => void
  provider: (typeof socialProviders)[number]
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full inline-flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground",
        "hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent",
        "disabled:opacity-60 disabled:cursor-not-allowed",
      )}
      aria-busy={isConnecting || undefined}
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-md shrink-0",
            provider.iconWrapperClassName,
          )}
        >
          {provider.icon}
        </span>
        <span>{provider.label}</span>
      </span>

      {isConnecting ? (
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Connecting…
        </span>
      ) : null}
    </button>
  )
}

export function SignupPanel() {
  const [social, setSocial] = useState<SocialState>({ status: "idle" })
  const [showEmail, setShowEmail] = useState(false)
  const [signupComplete, setSignupComplete] = useState(false)
  const [role, setRole] = useState<(typeof roleOptions)[number]>("Athlete")
  const [location, setLocation] = useState("")

  const connectTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (connectTimerRef.current !== null) {
        window.clearTimeout(connectTimerRef.current)
      }
    }
  }, [])

  const providerLabel = useMemo(() => {
    if (social.status === "idle") return ""
    return socialProviders.find((p) => p.id === social.provider)?.name ?? ""
  }, [social])

  const cancelSocial = () => {
    if (connectTimerRef.current !== null) {
      window.clearTimeout(connectTimerRef.current)
      connectTimerRef.current = null
    }
    setSocial({ status: "idle" })
  }

  const reset = () => {
    cancelSocial()
    setShowEmail(false)
    setSignupComplete(false)
    setRole("Athlete")
    setLocation("")
  }

  const startSocial = (provider: SocialProviderId) => {
    cancelSocial()
    setSignupComplete(false)
    setShowEmail(false)
    setRole("Athlete")
    setLocation("")
    setSocial({ status: "connecting", provider })
    connectTimerRef.current = window.setTimeout(() => {
      setSocial({ status: "connected", provider })
      connectTimerRef.current = null
    }, 650)
  }

  if (signupComplete) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
            <p className="text-sm font-semibold text-foreground">Account created</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Go to profile
            </Link>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Start over
            </button>
          </div>
        </div>
      </div>
    )
  }

  const isConnecting = social.status === "connecting"

  return (
    <div className="max-w-xl mx-auto">
      <div className="p-6 rounded-lg border border-border bg-card space-y-6">
        <div className="space-y-3">
          {socialProviders.map((provider) => (
            <SocialSignupButton
              key={provider.id}
              provider={provider}
              disabled={isConnecting}
              isConnecting={social.status === "connecting" && social.provider === provider.id}
              onClick={() => startSocial(provider.id)}
            />
          ))}
        </div>

        {social.status !== "idle" ? (
          <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {social.status === "connected" ? (
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                ) : (
                  <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" aria-hidden="true" />
                )}
                <p className="text-sm font-semibold text-foreground">
                  {social.status === "connected" ? `Connected to ${providerLabel}` : `Connecting to ${providerLabel}…`}
                </p>
              </div>
              <button
                type="button"
                onClick={cancelSocial}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
            </div>

            {social.status === "connected" ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSignupComplete(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase">Role</label>
                    <select
                      value={role}
                      onChange={(event) => setRole(event.target.value as (typeof roleOptions)[number])}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      {roleOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase">Location</label>
                    <input
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      type="text"
                      placeholder="Quezon City"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Finish signup
                </button>
              </form>
            ) : null}
          </div>
        ) : null}

        <Divider label="or" />

        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setShowEmail((v) => !v)}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground",
              "hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent",
            )}
          >
            <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            {showEmail ? "Hide email signup" : social.status === "idle" ? "Continue with email" : "Use email instead"}
          </button>

          {showEmail ? (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSignupComplete(true)
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input
                    type="text"
                    placeholder="Maria"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input
                    type="text"
                    placeholder="Santos"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Role</label>
                  <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                    {roleOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Location</label>
                  <input
                    type="text"
                    placeholder="Quezon City"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Create account
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  )
}
