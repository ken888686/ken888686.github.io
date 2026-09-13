import { expect, test } from "@playwright/test";

test.describe("portfolio navigation", () => {
  test("loads the primary routes", async ({ page }) => {
    const routes = [
      ["/", "I turn complex requirements"],
      ["/about", "Engineering with a focus"],
      ["/experience", "Selected roles"],
      ["/projects", "Products built"],
      ["/blog", "Technical & Life Notes"],
    ] as const;

    for (const [path, heading] of routes) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(
        heading,
      );
    }
  });

  test("opens a blog article from the blog index", async ({ page }) => {
    await page.goto("/blog");
    const articleLinks = page.getByRole("link", { name: "Read article" });

    await expect(articleLinks).toHaveCount(4);
    await articleLinks.first().click();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Back to Blog" }),
    ).toHaveAttribute("href", /\/blog\/?$/);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article",
    );
  });
});

test.describe("homepage responsive behavior", () => {
  test("keeps the mobile layout within the viewport", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chrome", "mobile-only check");

    await page.goto("/");
    await expect(
      page.getByText("Open to thoughtful collaborations"),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "View resume" }),
    ).toHaveAttribute("href", "/resume/YungChun-Tu-Resume.pdf");

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });
});

test.describe("SEO endpoints", () => {
  test("publishes robots and sitemap metadata", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    const sitemap = await request.get("/sitemap.xml");

    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain(
      "Sitemap: https://ken888686.github.io/sitemap.xml",
    );
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain("/blog/2025-12-01-001");
  });
});
