import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: rankings redirect to athlete filters", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/rankings")
  await expect(page).toHaveURL(/\/athletes$/)
  await expect(page.getByRole("heading", { name: /find the athlete record/i })).toBeVisible()

  await checkA11y(page, testInfo, "athletes-from-rankings")

  await page.goto("/rankings?event=100m")
  await expect(page).toHaveURL(/\/athletes\?event=100m/)
  await expect(page.getByRole("heading", { name: /find the athlete record/i })).toBeVisible()
})
