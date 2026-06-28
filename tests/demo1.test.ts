import { chromium,firefox,Browser,Page,test } from "@playwright/test";
test("demo test",async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext();
    const page=await context.newPage();
  
    await page.goto("https://www.demoblaze.com/")
    console.log(await page.title())
    console.log(await page.url())
    await page.goto("https://www.google.com/")
    await page.goBack()
    await page.goForward()

    await browser.close()     
})
