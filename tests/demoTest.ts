import { chromium,firefox,Browser,Page } from "@playwright/test";
(async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.setViewportSize({width:1920,height:1080});
    await page.goto("https://www.google.com/")
    await browser.close()
})();
