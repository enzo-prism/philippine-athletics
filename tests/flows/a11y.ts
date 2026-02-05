import AxeBuilder from "@axe-core/playwright"
import { expect, type Page, type TestInfo } from "@playwright/test"

export async function checkA11y(page: Page, testInfo: TestInfo, label: string) {
  const results = await new AxeBuilder({ page }).analyze()
  if (results.violations.length) {
    await testInfo.attach(`a11y-${label}.json`, {
      body: JSON.stringify(results.violations, null, 2),
      contentType: "application/json",
    })
  }

  const critical = results.violations.filter((violation) => violation.impact === "critical")
  expect(
    critical,
    `Critical accessibility violations on ${label}: ${critical.map((violation) => violation.id).join(", ")}`,
  ).toEqual([])
}
