import { test, expect } from "@playwright/test"

test.describe("Desktop design snapshots", () => {
  const routes = [
    { name: "home", path: "/" },
    { name: "athletes", path: "/athletes" },
    { name: "athlete-profile", path: "/athletes/new-athlete" },
    { name: "clubs", path: "/clubs" },
    { name: "club-profile", path: "/clubs/new-club" },
    { name: "coaches", path: "/coaches" },
    { name: "coach-profile", path: "/coaches/new-coach" },
    { name: "events", path: "/events" },
    { name: "event-profile", path: "/events/new-event" },
  ]

  for (const route of routes) {
    test(`visual ${route.name}`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "Desktop", "Desktop-only snapshot suite")
      await page.emulateMedia({ reducedMotion: "reduce" })
      await page.goto(route.path, { waitUntil: "networkidle" })
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `,
      })
      await page.waitForTimeout(300)
      await expect(page).toHaveScreenshot(`${route.name}.png`, { fullPage: true })
    })
  }
})

test.describe("Mobile design snapshots", () => {
  const routes = [
    { name: "home-mobile", path: "/" },
    { name: "athletes-mobile", path: "/athletes" },
    { name: "athlete-profile-mobile", path: "/athletes/new-athlete" },
    { name: "clubs-mobile", path: "/clubs" },
    { name: "club-profile-mobile", path: "/clubs/new-club" },
    { name: "coaches-mobile", path: "/coaches" },
    { name: "coach-profile-mobile", path: "/coaches/new-coach" },
    { name: "events-mobile", path: "/events" },
    { name: "event-profile-mobile", path: "/events/new-event" },
  ]

  for (const route of routes) {
    test(`visual ${route.name}`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "Mobile", "Mobile-only snapshot suite")
      await page.emulateMedia({ reducedMotion: "reduce" })
      await page.goto(route.path, { waitUntil: "networkidle" })
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `,
      })
      await page.waitForTimeout(300)
      await expect(page).toHaveScreenshot(`${route.name}.png`, { fullPage: true })
    })
  }
})
