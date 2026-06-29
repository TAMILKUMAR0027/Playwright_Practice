import { test, expect } from "@playwright/test"

test("Login Test1", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect.soft(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: "Log out" })).toHaveText("Log ou");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome admin");
});

test.skip("Login Test 2", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome admin");
});

test("Login Test 3", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome admin");
});


test.describe("Grouping test case",()=>{
    test("Test 1",async()=>{
        console.log("Test 1")
    })
    test("Test 2",async()=>{
        console.log("Test 2")
    })
    test("Test 3",async()=>{
        console.log("Test 3")
    })
})
test.describe.skip("Skipping testcase",()=>{
    test("Test 1",async()=>{
        console.log("Test 1")
    })
    test("Test 2",async()=>{
        console.log("Test 2")
    })
    test("Test 3",async()=>{
        console.log("Test 3")
    })
})

test.describe("Nested describe",()=>{
    test.describe("nested describe",()=>{
        test("Test nested 1",async()=>{
            console.log("Hi")
        });
        test("Test nested 2",async()=>{
            console.log("Hello")
        });
    })
})