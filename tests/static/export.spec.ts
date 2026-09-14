import { expect, test } from "@playwright/test";

test.describe("static export", () => {
  test("serves every top-level route with trailing slashes", async ({
    page,
  }) => {
    for (const route of [
      "/",
      "/about/",
      "/experience/",
      "/projects/",
      "/blog/",
    ]) {
      const response = await page.goto(route);

      expect(response?.ok()).toBe(true);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("serves published assets and search metadata", async ({ request }) => {
    for (const asset of [
      "/resume/YungChun-Tu-Resume.pdf",
      "/og.png",
      "/robots.txt",
      "/sitemap.xml",
    ]) {
      const response = await request.get(asset);
      expect(response.ok(), asset).toBe(true);
    }
  });
});
