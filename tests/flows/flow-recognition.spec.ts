import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 5: Recognition", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open recognition", async () => {
    await page.goto("/recognition")
    await expect(page.getByRole("heading", { name: /official & trusted/i })).toBeVisible()
  })

  await checkA11y(page, testInfo, "recognition")

  await test.step("Open recognized club", async () => {
    const clubsSection = page.getByTestId("recognized-clubs")
    await clubsSection.getByRole("link", { name: /Manila Striders Track Club/i }).click()
    await expect(page.getByTestId("club-roster")).toBeVisible()
  })
})
