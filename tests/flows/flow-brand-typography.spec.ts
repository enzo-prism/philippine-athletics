import { expect, test } from "@playwright/test"

const routeChecks = [
  "/",
  "/athletes",
  "/athletes/new-athlete",
  "/clubs",
  "/clubs/new-club",
  "/coaches",
  "/coaches/new-coach",
  "/events",
  "/events/new-event",
]

type BrandNode = {
  className: string
  fontFamily: string
  fontSizePx: number
  text: string
}

const collectVisibleBrandNodes = async (page: import("@playwright/test").Page): Promise<BrandNode[]> =>
  page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".brand-eyebrow, .brand-subtext"))
    const isVisible = (element: HTMLElement) => {
      const style = window.getComputedStyle(element)
      const rect = element.getBoundingClientRect()
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        style.opacity !== "0" &&
        rect.width > 4 &&
        rect.height > 4
      )
    }

    return nodes
      .filter(isVisible)
      .map((node) => {
        const style = window.getComputedStyle(node)
        return {
          className: node.className,
          fontFamily: style.fontFamily,
          fontSizePx: Number.parseFloat(style.fontSize || "0"),
          text: node.textContent?.trim() || "",
        }
      })
  })

test("Flow: minimal shell typography stays restrained across core pages", async ({ page }) => {
  const issues: string[] = []

  await page.setViewportSize({ width: 1440, height: 900 })

  for (const route of routeChecks) {
    await page.goto(route, { waitUntil: "networkidle" })
    await page.waitForTimeout(120)

    const shellLink = page.getByRole("link", { name: /Philippine Athletics/i }).first()
    if (!(await shellLink.isVisible())) {
      issues.push(`${route}: missing primary shell brand link`)
    }

    const navLinks = await page.getByRole("navigation").first().getByRole("link").allTextContents()
    for (const expected of ["Home", "Athletes", "Clubs", "Coaches", "Events"]) {
      if (!navLinks.some((text) => text.includes(expected))) {
        issues.push(`${route}: missing ${expected} in core navigation`)
      }
    }

    if (navLinks.some((text) => /Membership|Sponsors|Rankings|Portal|Demo|Sign up/i.test(text))) {
      issues.push(`${route}: legacy navigation item is still visible`)
    }

    const brandNodes = await collectVisibleBrandNodes(page)
    if (brandNodes.length < 1) {
      issues.push(`${route}: expected at least one visible mono accent label`)
    }

    if (brandNodes.length > 32) {
      issues.push(`${route}: too many visible accent labels (${brandNodes.length})`)
    }

    for (const node of brandNodes) {
      const normalizedFontFamily = node.fontFamily.toLowerCase()
      if (!normalizedFontFamily.includes("geist")) {
        issues.push(`${route}: missing Geist system font (${node.className} => ${node.fontFamily})`)
      }

      if (node.fontSizePx > 13) {
        issues.push(`${route}: accent text too large (${node.fontSizePx}px, text="${node.text}")`)
      }
    }
  }

  expect(issues).toEqual([])
})
