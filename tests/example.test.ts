import {test,expect} from '@playwright/test';
import { afterEach } from 'node:test';

test("Radio button test",async({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.locator("//input[@id='yesRadio']").check()
await expect(page.locator("//span[@class='text-success']")).toHaveText("Yes");
    console.log(await page.locator("//input[@id='impressiveRadio']").isEnabled())
    await page.locator("//input[@id='impressiveRadio']").check();
    console.log(await page.locator("//input[@id='impressiveRadio']").isChecked())
    await expect(page.locator("//span[@class='text-success']")).toHaveText("Impressive");
    
})
test("Check box test",async({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    const checkbox = page.locator("//span[@aria-label='Select Home']");
    await checkbox.check();
    await expect(page.locator("//span[@aria-label='Select Home']")).toBeChecked();
    await expect(page.locator("//span[normalize-space()='home']")).toContainText("home")
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    await checkbox.setChecked(true);
    await checkbox.setChecked(false);
})


test("Mouse actions", async ({ page }) => {

    await page.goto("https://omayo.blogspot.com/");

    await page.locator("//button[@class='dropbtn']").click();
    page.waitForTimeout(1000)
    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await page.locator("//button[@ondblclick='dblclickAlert()']").dblclick();page.waitForTimeout(1000)
    await page.locator("//button[@ondblclick='dblclickAlert()']").click({
        button: 'right'
    });page.waitForTimeout(1000)
    await page.locator("//button[@class='dropbtn']").hover();page.waitForTimeout(1000)
    await page.mouse.move(300, 300);page.waitForTimeout(1000)
    await page.mouse.down();page.waitForTimeout(1000)
    await page.mouse.move(500, 300);page.waitForTimeout(1000)
    await page.mouse.up();
    await page.mouse.wheel(0, 1000);
});
test("File upload and download",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator("//input[@id='uploadFile']").setInputFiles("C:\\Users\\tamil\\OneDrive\\Documents\\8. Online Movie Ticket Booking.pdf");
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("#downloadButton")
    ]);
    const path = await download.path();
    console.log("Downloaded file path:", path);
})
test("keyboard action", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    await page.locator("#userName").click();
    await page.keyboard.type("Tamil");
    await page.keyboard.press("Tab");
    await page.keyboard.type("tamil@gmail.com");

    await page.keyboard.press("Tab");
    await page.keyboard.type("Salem");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("Chennai");

    await page.locator("#submit").click();

    await expect(page.locator("#output")).toBeVisible();

});