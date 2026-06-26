import { chromium,test,expect } from "@playwright/test";

test("Login and logout", async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').clear()
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill("tamilkumar0027@gmail.com")
    await page.getByRole('textbox', { name: 'Password' }).fill("Kiot1234");
    await page.getByRole('button', { name: 'Login' }).click();
    const msg=await page.getByText('Logged in as TAMIL KUMAR').textContent();
    await expect(msg).toContain("TAMIL"); 
    await page.getByRole('link', { name: ' Logout' }).click();
    const logoutMsg=await page.getByRole('heading', { name: 'Login to your account' }).textContent();
    await expect("Login to your account").toBe(logoutMsg)

})