import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 3: Club roster", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open clubs", async () => {
    await page.goto("/clubs")
    await expect(page.getByRole("heading", { name: /clubs/i })).toBeVisible()
  })

  await test.step("Open featured club", async () => {
    await page.getByRole("link", { name: /view club profile/i }).click()
    await expect(page.getByRole("heading", { name: /Manila Striders Track Club/i })).toBeVisible()
  })

  await checkA11y(page, testInfo, "club-profile")

  await test.step("Open athlete from roster", async () => {
    await expect(page.getByTestId("club-roster")).toBeVisible()
    await page.getByTestId("club-roster-item").first().click()
    await expect(page.getByText("Personal best", { exact: false })).toBeVisible()
  })
})
