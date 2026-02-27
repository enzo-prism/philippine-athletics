import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 1: Athlete search", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open home", async () => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /One National System/i })).toBeVisible()
  })

  await test.step("Search for an athlete", async () => {
    await page.goto("/search")
    const searchInput = page.getByTestId("search-input")
    await searchInput.fill("PA-LAURENHOFF")
    await page.getByRole("button", { name: /^Search$/i }).click()
    await expect(page).toHaveURL(/\/search\?q=/)
  })

  await checkA11y(page, testInfo, "search")

  await test.step("Open athlete profile", async () => {
    const results = page.getByTestId("search-results")
    await results.getByRole("link", { name: /Lauren Hoffman/i }).first().click()
    await expect(page.locator("h1", { hasText: /Lauren Hoffman/i })).toBeVisible()
    await expect(page.getByText("Personal best", { exact: false })).toBeVisible()
    await expect(page.getByText("Philippines rank", { exact: false })).toBeVisible()
  })

  await checkA11y(page, testInfo, "athlete-profile")
})
