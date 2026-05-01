"use client"

import { createElement, useEffect, type CSSProperties } from "react"

type LordIconProps = {
  src: string
  trigger?: string
  delay?: string
  stroke?: string
  colors?: string
  label?: string
  style?: CSSProperties
}

export function LordIcon({
  src,
  trigger = "loop",
  delay,
  stroke,
  colors,
  label,
  style,
}: LordIconProps) {
  useEffect(() => {
    if (document.getElementById("lordicon-runtime")) return

    const script = document.createElement("script")
    script.id = "lordicon-runtime"
    script.src = "https://cdn.lordicon.com/lordicon.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    createElement("lord-icon", {
      src,
      trigger,
      delay,
      stroke,
      colors,
      style,
      "aria-label": label,
      "aria-hidden": label ? undefined : "true",
    })
  )
}
