import { chromium,test,expect } from "@playwright/test";

test("Contact form", async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', { name: ' Contact us' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill("Tamil");
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill("tamilkumar0027@gmail.com");
    await page.getByRole('textbox', { name: 'Subject' }).fill("Nothing");
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill("Good working execellent");
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles("C:\\Users\\tamil\\Downloads\\1. Sequence.pdf");
    await page.getByRole('button', { name: 'Submit' }).click()
});