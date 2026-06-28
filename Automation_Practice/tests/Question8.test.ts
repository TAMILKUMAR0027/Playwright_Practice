import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Navigating to products page, Displaying 1st product ",async({page})=>{
    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise");
    await page.click("//a[@href='/products']")
    await page.click("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]")
    await expect(page.locator("//h2[normalize-space()='Blue Top']")).toHaveText("Blue Top") 
    await expect(page.locator("//b[normalize-space()='Brand:']")).toHaveText("Brand:")

});