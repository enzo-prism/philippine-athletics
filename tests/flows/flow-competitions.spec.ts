import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 4: Competition results", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open competitions", async () => {
    await page.goto("/competitions?status=Past")
    await expect(page.getByRole("heading", { name: /competitions/i })).toBeVisible()
  })

  await test.step("Open a competition", async () => {
    await page.getByRole("link", { name: /2025 Southeast Asian Games/i }).click()
    await expect(page.getByRole("heading", { name: /2025 Southeast Asian Games/i })).toBeVisible()
  })

  await checkA11y(page, testInfo, "competition-profile")

  await test.step("Filter results and open athlete", async () => {
    await page
      .getByTestId("competition-event-filter")
      .filter({ hasText: /400m hurdles/i })
      .first()
      .click()
    await expect(page.getByTestId("competition-results")).toBeVisible()
    await page
      .getByTestId("competition-result-entry")
      .filter({ hasText: /Lauren Hoffman/i })
      .first()
      .click()
    await expect(page.getByRole("heading", { name: /Lauren Hoffman/i })).toBeVisible()
  })
})
