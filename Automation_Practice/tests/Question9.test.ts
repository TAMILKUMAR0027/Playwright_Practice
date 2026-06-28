import { test, expect } from '@playwright/test';

async function dismissAds(page) {
  try {
    await page.evaluate(() => {
      document
        .querySelectorAll(
          "iframe, .adsbygoogle, [id*='google_ads'], [id*='aswift']"
        )
        .forEach((el) => el.remove());
    });
    console.log("Ads removed");
  } catch (error) {
    console.log("No ads found");
  }
}

test("Search Product", async ({ page }) => {
  await page.goto("https://automationexercise.com");
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator("//a[@href='/products']").click();

  await dismissAds(page);

  await page.locator("//input[@id='search_product']").fill("Shirt");
  await page.locator("//button[@id='submit_search']").click();

  await dismissAds(page);

  const search = await page
    .locator("//div[@class='overlay-content']//p[contains(text(),'Men Tshirt')]")
    .textContent();

  console.log(search);
});