import { expect, test } from "@playwright/test"

const layoutRoutes = [
  "/",
  "/search",
  "/athletes/athlete-lauren-hoffman",
  "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025",
  "/recognition",
  "/data-portal",
  "/profile",
]

test("Flow: public surfaces keep sponsor visibility, sticky behavior, and no horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })

  for (const route of layoutRoutes) {
    await page.goto(route, { waitUntil: "networkidle" })
    await expect(page.locator('[data-testid^="demo-ad-global-top"]').first()).toBeVisible()

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `${route} has horizontal overflow`).toBeLessThanOrEqual(1)
  }

  await page.goto("/rankings?event=100m&gender=Women&ageGroup=Open&year=2025", { waitUntil: "networkidle" })
  const filterBar = page.locator(".filter-bar").first()
  await expect(filterBar).toBeVisible()

  await page.evaluate(() => {
    window.scrollBy({ top: 1600, behavior: "instant" })
  })
  const box = await filterBar.boundingBox()
  expect(box?.y ?? 999).toBeLessThanOrEqual(140)
})

test("Flow: data portal sample import and profile settings remain usable", async ({ page }) => {
  await page.goto("/data-portal", { waitUntil: "networkidle" })
  await page.getByTestId("results-sample").click()
  await page.getByTestId("intake-tab-review").click()
  await expect(page.getByTestId("impact-preview")).toBeVisible()
  await expect(page.getByTestId("submission-log")).toBeVisible()

  await page.goto("/profile", { waitUntil: "networkidle" })
  await page.getByRole("button", { name: /Account Settings/i }).click()
  await expect(page.getByRole("heading", { name: /Account Settings/i })).toBeVisible()
  await page.getByRole("button", { name: /Notifications/i }).click()
  await expect(page.getByRole("heading", { name: /Notifications/i })).toBeVisible()
})
