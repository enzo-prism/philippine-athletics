"use client"

import { useEffect, useRef } from "react"

const HERO_IMAGE_SRC =
  "https://assets.unicorn.studio/images/8luI6gavAXTzQREuoAqWkNxqfyp1/remix_Dynamic%20Motion%20Blur.png"

function drawGrain(ctx: CanvasRenderingContext2D, width: number, height: number, alpha: number) {
  const imageData = ctx.createImageData(width, height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.random() * 255
    data[i] = value
    data[i + 1] = value
    data[i + 2] = value
    data[i + 3] = alpha
  }

  ctx.putImageData(imageData, 0, 0)
}

export function HeroAnimationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.src = HERO_IMAGE_SRC

    let frameId = 0
    let stopped = false

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = (time: number) => {
      if (stopped) {
        return
      }

      const width = canvas.clientWidth
      const height = canvas.clientHeight

      context.clearRect(0, 0, width, height)

      const baseGradient = context.createLinearGradient(0, 0, width, height)
      baseGradient.addColorStop(0, "#02060d")
      baseGradient.addColorStop(0.65, "#091320")
      baseGradient.addColorStop(1, "#04080f")
      context.fillStyle = baseGradient
      context.fillRect(0, 0, width, height)

      if (image.complete) {
        const imageAspect = image.width / image.height
        const boxAspect = width / height
        const drawWidth = boxAspect > imageAspect ? width : height * imageAspect
        const drawHeight = boxAspect > imageAspect ? width / imageAspect : height
        const offsetX = (width - drawWidth) / 2
        const offsetY = (height - drawHeight) / 2

        context.save()
        context.globalAlpha = 0.95
        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
        context.restore()

        const motionScale = mediaQuery.matches ? 0 : 1
        const fogX = Math.sin(time * 0.00015) * 40 * motionScale
        const fogY = Math.cos(time * 0.0002) * 30 * motionScale

        context.save()
        context.globalAlpha = 0.18
        context.filter = "blur(32px)"
        context.fillStyle = "#e8f4ff"
        context.beginPath()
        context.ellipse(width * 0.45 + fogX, height * 0.42 + fogY, width * 0.35, height * 0.3, 0, 0, Math.PI * 2)
        context.fill()
        context.beginPath()
        context.ellipse(width * 0.7 - fogX, height * 0.6 - fogY, width * 0.24, height * 0.2, 0, 0, Math.PI * 2)
        context.fill()
        context.restore()

        context.save()
        context.globalAlpha = 0.28
        drawGrain(context, Math.floor(width), Math.floor(height), 16)
        context.restore()
      }

      const vignette = context.createRadialGradient(width / 2, height / 2, height * 0.2, width / 2, height / 2, height * 0.9)
      vignette.addColorStop(0, "rgba(0,0,0,0)")
      vignette.addColorStop(1, "rgba(0,0,0,0.55)")
      context.fillStyle = vignette
      context.fillRect(0, 0, width, height)

      if (!mediaQuery.matches) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    const observer = new ResizeObserver(() => {
      resize()
      render(performance.now())
    })

    observer.observe(canvas)
    resize()

    image.onload = () => {
      render(performance.now())
      if (!mediaQuery.matches) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(frameId)
      render(performance.now())
      if (!mediaQuery.matches) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    mediaQuery.addEventListener("change", handleMotionPreference)

    return () => {
      stopped = true
      observer.disconnect()
      mediaQuery.removeEventListener("change", handleMotionPreference)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-0 overflow-hidden rounded-3xl">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/60" />
    </div>
  )
}
