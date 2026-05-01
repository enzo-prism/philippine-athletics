import { expect, test } from "@playwright/test"

const layoutRoutes = [
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

const legacyRedirects = [
  { from: "/competitions", to: /\/events\?status=All/ },
  { from: "/competitions/new-event?event=100m", to: /\/events\/new-event\?event=100m/ },
  { from: "/search?q=Fresh", to: /\/athletes\?q=Fresh/ },
  { from: "/rankings?event=100m", to: /\/athletes\?event=100m/ },
  { from: "/membership", to: /\/$/ },
  { from: "/dashboard/lgu/quezon-city", to: /\/$/ },
  { from: "/participants/aira-mendoza", to: /\/$/ },
]

test("Flow: core public surfaces stay minimal and avoid horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })

  for (const route of layoutRoutes) {
    await page.goto(route, { waitUntil: "networkidle" })

    await expect(page.getByRole("navigation").first()).toBeVisible()
    await expect(page.locator('[data-testid^="demo-ad-"]')).toHaveCount(0)

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `${route} has horizontal overflow`).toBeLessThanOrEqual(1)
  }
})

test("Flow: legacy public routes redirect into the core app", async ({ page }) => {
  for (const redirect of legacyRedirects) {
    await page.goto(redirect.from, { waitUntil: "networkidle" })
    await expect(page).toHaveURL(redirect.to)
    await expect(page.getByRole("navigation").first()).toBeVisible()
  }
})

test("Flow: shell navigation stays link-only without search launcher", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/", { waitUntil: "networkidle" })

  const nav = page.getByRole("navigation").first()
  await expect(nav.getByRole("link", { name: "Home", exact: true })).toBeVisible()
  await expect(nav.getByRole("link", { name: "Athletes", exact: true })).toBeVisible()
  await expect(nav.getByRole("button", { name: /jump|search/i })).toHaveCount(0)
  await expect(page.getByRole("button", { name: /jump/i })).toHaveCount(0)

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload({ waitUntil: "networkidle" })
  await page.getByRole("button", { name: /open navigation/i }).click()
  await expect(page.getByRole("dialog").getByRole("button", { name: /jump|search/i })).toHaveCount(0)
})
