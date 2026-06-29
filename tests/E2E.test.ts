import{test,expect} from '@playwright/test';
const searchData = [
  { keyword: "Mac", expected: "iMac" },
  { keyword: "Phone", expected: "iPhone" }
];
test.beforeEach(async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/");
});

test("Login Test1", async ({ page }) => {
    await page.locator("//span[normalize-space()='My Account']").click()
    await page.locator("//a[normalize-space()='Login']").click()
    await page.locator("//input[@id='input-email']").fill("tamilkumar@gmail.com")
    await page.locator("//input[@id='input-password']").fill("Kiot1234")
    await page.click("//input[@value='Login']");
    await expect(page.locator("//h2[normalize-space()='My Account']")).toHaveText("My Account")
});
test.skip("Skipped test",async({page})=>{
    console.log("this test is going to skip")
})
test.describe("Demo blaze authentication module",()=>{
    test("Login Test1", async ({ page }) => {
    await page.locator("//span[normalize-space()='My Account']").click()
    await page.locator("//a[normalize-space()='Login']").click()
    await page.locator("//input[@id='input-email']").fill("tamilkumar@gmail.com")
    await page.locator("//input[@id='input-password']").fill("Kiot1234")
    await page.click("//input[@value='Login']");
    await expect(page.locator("//h2[normalize-space()='My Account']")).toHaveText("My Account")
});
    test("Invalid login",async({page})=>{
       await page.locator("//span[normalize-space()='My Account']").click()
    await page.locator("//a[normalize-space()='Login']").click()
    await page.locator("//input[@id='input-email']").fill("tamilkumar@gmail.com")
    await page.locator("//input[@id='input-password']").fill("Kiot124")
    await page.click("//input[@value='Login']");
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText("Warning: No match for E-Mail Address and/or Password.")
    })
})
for (const data of searchData) {
  test(`Search product: ${data.keyword}`,{tag:"@search"}, async ({ page }) => {
    await page.locator("//input[@placeholder='Search']").fill(data.keyword);
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    await expect.soft(page.locator(`//a[normalize-space()='${data.expected}']`)).toBeVisible();
    await expect(page.locator(`//a[normalize-space()='${data.expected}']`)).toHaveText(data.expected);
  });
}
test("Visit product page ",async({page})=>{
    await page.locator("//a[normalize-space()='MacBook']").click();
    await expect("MacBook").toBe(await page.locator("//h1[normalize-space()='MacBook']").textContent())
})
test.afterEach(async({page},testInfo)=>{
    console.log("Test is completed");
    console.log("Title:", testInfo.title);
    console.log("Status:", testInfo.status);
    console.log("Duration:", testInfo.duration);
    await page.close();
})

