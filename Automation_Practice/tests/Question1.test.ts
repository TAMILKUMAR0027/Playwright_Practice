import {test,expect,chromium,Page} from '@playwright/test';

test('Register test',async()=>{
    
    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', { name: ' Signup / Login' })
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill("Tamil")
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill("tamil10190918@gmail.com")
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.locator("//input[@id='password']").fill("1234");
    await page.locator("//input[@id='first_name']").fill("Tamil");
    await page.getByRole('textbox', { name: 'Last name *' }).fill("E");
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill("Salem");
    await page.getByRole('textbox', { name: 'State *' }).fill("Tamilnadu");
    await page.locator("//input[@id='city']").fill("Salem")
    await page.locator("//input[@id='zipcode']").fill("657480")
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill("9087654321");
    await page.getByRole('button', { name: 'Create Account' }).click();
    const msg=await page.locator("//b[normalize-space()='Account Created!']").textContent();
    await expect("Account Created!").toBe(msg);
})