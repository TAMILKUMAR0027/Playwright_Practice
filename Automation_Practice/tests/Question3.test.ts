import { chromium,test,expect } from "@playwright/test";

test("Invalid login", async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill("tamilkumar027@gmail.com")
    await page.getByRole('textbox', { name: 'Password' }).fill("Kiot12348900");
    await page.getByRole('button', { name: 'Login' }).click();

    const msg=await page.getByText('Your email or password is').textContent();
    await expect("Your email or password is incorrect!").toBe(msg)
})