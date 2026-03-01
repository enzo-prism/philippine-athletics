import { test, expect } from "@playwright/test";

const getVisibleAdIssues = async (page: import("@playwright/test").Page) =>
  page.evaluate(() => {
    const adSlots = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-testid^="demo-ad-"]:not([data-testid^="demo-ad-image-"]):not([data-testid^="demo-ad-text-fallback-"])',
      ),
    );

    const isVisible = (element: HTMLElement) => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const inViewport =
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= window.innerHeight &&
        rect.left <= window.innerWidth;
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        style.opacity !== "0" &&
        rect.width > 4 &&
        rect.height > 4 &&
        inViewport
      );
    };

    const issues: string[] = [];

    for (const slot of adSlots) {
      if (!isVisible(slot)) continue;

      const slotId = slot.getAttribute("data-testid") ?? "unknown-slot";
      const fallback = slot.querySelector<HTMLElement>(
        '[data-testid^="demo-ad-text-fallback-"]',
      );
      if (fallback && isVisible(fallback)) {
        issues.push(`${slotId}: fallback text rendered instead of a sponsor logo`);
        continue;
      }

      const image = slot.querySelector<HTMLImageElement>("img");
      if (!image) {
        issues.push(`${slotId}: missing both image and fallback content`);
        continue;
      }

      if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
        issues.push(`${slotId}: image failed to load (${image.getAttribute("src") ?? "no-src"})`);
        continue;
      }

      const imageStyle = window.getComputedStyle(image);
      if (imageStyle.objectFit !== "contain") {
        issues.push(`${slotId}: logo fit is not contain (object-fit=${imageStyle.objectFit})`);
      }

      const slotRect = slot.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      const widthRatio = slotRect.width > 0 ? imageRect.width / slotRect.width : 0;
      const heightRatio = slotRect.height > 0 ? imageRect.height / slotRect.height : 0;

      if (imageRect.width - slotRect.width > 1 || imageRect.height - slotRect.height > 1) {
        issues.push(
          `${slotId}: image overflows slot bounds (slot=${slotRect.width.toFixed(1)}x${slotRect.height.toFixed(1)}, image=${imageRect.width.toFixed(1)}x${imageRect.height.toFixed(1)})`,
        );
      }

      if (widthRatio < 0.18 && heightRatio < 0.62) {
        issues.push(
          `${slotId}: logo appears too small for responsive slot (w=${widthRatio.toFixed(2)}, h=${heightRatio.toFixed(2)}, src=${image.currentSrc || image.src})`,
        );
      }
    }

    return issues;
  });

test("Flow: ad slots render loaded creatives with healthy fill across key routes", async ({
  page,
}) => {
  const routeChecks: Array<{ route: string; viewport?: { width: number; height: number } }> = [
    { route: "/athletes" },
    { route: "/competitions" },
    { route: "/events" },
    { route: "/membership" },
    { route: "/" },
    { route: "/", viewport: { width: 390, height: 844 } },
  ];

  const issues: string[] = [];

  for (const check of routeChecks) {
    if (check.viewport) {
      await page.setViewportSize(check.viewport);
    }
    await page.goto(check.route);
    await page.waitForLoadState("networkidle");
    await page.waitForFunction(() => {
      const adSlots = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-testid^="demo-ad-"]:not([data-testid^="demo-ad-image-"]):not([data-testid^="demo-ad-text-fallback-"])',
        ),
      );

      const isVisible = (element: HTMLElement) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const inViewport =
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= window.innerHeight &&
          rect.left <= window.innerWidth;
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          style.opacity !== "0" &&
          rect.width > 4 &&
          rect.height > 4 &&
          inViewport
        );
      };

      return adSlots.every((slot) => {
        if (!isVisible(slot)) return true;
        const fallback = slot.querySelector<HTMLElement>('[data-testid^="demo-ad-text-fallback-"]');
        if (fallback && isVisible(fallback)) return true;
        const image = slot.querySelector<HTMLImageElement>("img");
        return image ? image.complete : true;
      });
    });

    const routeIssues = await getVisibleAdIssues(page);
    issues.push(...routeIssues.map((issue) => `${check.route}: ${issue}`));
  }

  expect(issues).toEqual([]);
});
