import {test,expect}  from '@playwright/test';
test('Login test',async({page})=>{
   await page.goto(process.env.BASEURL!);

   await page.fill("#username",process.env.UNAME!);
   await page.fill("#password",process.env.PASS!);
   await page.click("//button[@type='submit']");
   await expect(page.locator('.flash.success')).toBeVisible();
});