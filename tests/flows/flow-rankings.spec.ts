import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 2: Rankings filters", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open rankings", async () => {
    await page.goto("/rankings")
    await expect(page.getByRole("heading", { name: /rankings/i })).toBeVisible()
  })

  await checkA11y(page, testInfo, "rankings")

  await test.step("Apply filters", async () => {
    await page.getByTestId("rankings-filter-event").selectOption("100m")
    await page.getByTestId("rankings-filter-gender").selectOption("Women")
    await page.getByTestId("rankings-filter-age").selectOption("Open")
    await page.getByTestId("rankings-filter-year").selectOption({ index: 0 })
    await page.getByTestId("rankings-apply").click()
    await expect(page.getByTestId("rankings-list")).toBeVisible()
    await expect(page.getByTestId("rankings-row").first()).toBeVisible()
  })

  await test.step("Open a ranked athlete", async () => {
    await page.getByTestId("rankings-row").first().click()
    await expect(page.getByText("Personal best", { exact: false })).toBeVisible()
  })
})
