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

const mobileFilterRoutes = [
  { route: "/athletes", searchName: "Search athletes" },
  { route: "/clubs", searchName: "Search clubs" },
  { route: "/coaches", searchName: "Search coaches" },
  { route: "/events", searchName: "Search events" },
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

test("Flow: mobile directory filters start collapsed and expand on demand", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })

  for (const route of mobileFilterRoutes) {
    await page.goto(route.route, { waitUntil: "networkidle" })

    const filterToggle = page.getByTestId("core-filter-toggle")
    await expect(filterToggle).toBeVisible()
    await expect(filterToggle).toHaveAttribute("aria-expanded", "false")
    await expect(page.getByTestId("core-filter-content")).toBeHidden()
    await expect(page.getByRole("searchbox", { name: route.searchName })).toHaveCount(0)

    await filterToggle.click()

    await expect(filterToggle).toHaveAttribute("aria-expanded", "true")
    await expect(page.getByTestId("core-filter-content")).toBeVisible()
    await expect(page.getByRole("searchbox", { name: route.searchName })).toBeVisible()
  }

  await page.goto("/athletes?q=Lauren&sort=name", { waitUntil: "networkidle" })
  await expect(page.getByTestId("core-filter-toggle")).toContainText("2 active")
  await expect(page.getByTestId("core-filter-toggle")).toContainText("Search: Lauren")
})

test("Flow: athlete rows use compact event text and aligned mobile metadata", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/athletes", { waitUntil: "networkidle" })

  const results = page.getByTestId("athlete-results-list")
  await expect(results).toContainText("400m hurdles · FilAm Sports")
  await expect(results).toContainText("middle distance · 1500m to 5000m · FilAm Sports")
  await expect(results).toContainText("800m · middle distance · FilAm Sports")
  await expect(results).toContainText("throws · discus, javelin, shot put · FilAm Sports")
  await expect(results).toContainText("Discus throw")
  await expect(results).not.toContainText("400 Metres Hurdles")
  await expect(results).not.toContainText("Discus Throw")

  const rowSideAlignment = await page.locator(".core-row-side").first().evaluate((element) => getComputedStyle(element).alignItems)
  expect(rowSideAlignment).toBe("flex-start")

  const arrowBox = await page.locator(".core-row-meta svg").first().boundingBox()
  expect(arrowBox?.width ?? 0).toBeLessThanOrEqual(18)
})
