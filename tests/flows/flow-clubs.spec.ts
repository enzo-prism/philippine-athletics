import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: club roster opens athlete profile", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/clubs?q=Fresh")
  await expect(page.getByRole("heading", { name: /find the training environment/i })).toBeVisible()
  await expect(page.getByText(/No clubs found/i)).toBeVisible()

  await checkA11y(page, testInfo, "clubs-empty")

  await page.goto("/clubs/new-club")
  await expect(page.getByRole("heading", { name: /new club/i })).toBeVisible()
  await expect(page.getByText(/No athletes linked/i)).toBeVisible()
})
