import { expect, test } from "@playwright/test"

test("Flow: old ranking query lands on the athlete directory", async ({ page }) => {
  await page.goto("/rankings?event=100m")
  await expect(page).toHaveURL(/\/athletes\?event=100m/)
  await expect(page.getByRole("heading", { name: /^Athletes$/i })).toBeVisible()
  await expect(page.getByRole("link", { name: /Lauren Hoffman/i })).toBeVisible()
})
