import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Email already exists",async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.click("//a[normalize-space()='Signup / Login']");
    await page.fill("//input[@placeholder='Name']","Tamil")
    await page.fill("//input[@data-qa='signup-email']","tamilkumar0027@gmail.com")
    await page.click("//button[normalize-space()='Signup']")
    await expect(page.locator("//p[normalize-space()='Email Address already exist!']")).toContainText("Email Address already exist!")
});