import {chromium,test,expect} from '@playwright/test';
test('demo blaze login',async({})=>{
    const browser = await chromium.launch({
        headless: false
    })
    const context=await browser.newContext()
    const page=await context.newPage();
    await page.goto("https://www.demoblaze.com/")
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","TamilKumar");
    await page.fill("//input[@id='loginpassword']","Kiot1234");
    await page.click("//button[text()='Log in']")
    let message = await page.locator("//a[text()='Welcome TamilKumar']").textContent();
    await expect(message).toBe("Welcome TamilKumar")
    const page1=await context.newPage()
    await page1.goto("https://www.demoblaze.com/");
    await page1.waitForTimeout(10000)
    const newContext=await browser.newContext()
    const newPage=await newContext.newPage()
    await newPage.goto("https://www.demoblaze.com/")
    await newPage.waitForTimeout(10000);
    
})