import {test,expect} from '@playwright/test';
test('demo blaze login',async({page})=>{
    await page.goto(process.env.BASEURL!);
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']",process.env.UNAME!);
    await page.fill("//input[@id='loginpassword']",process.env.PASSWORD!);
    await page.click("//button[text()='Log in']")
    let message = await page.locator("//a[text()='Welcome TamilKumar']").textContent();
    await expect(message).toBe("Welcome TamilKumar")
})