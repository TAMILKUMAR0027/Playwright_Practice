import { test, chromium, expect } from '@playwright/test';
test('get Attribute',async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    console.log(page.url())
    console.log(page.title())
    const actualValue=await page.locator("//input[@id='user-message']");
    console.log(await actualValue.getAttribute("placeholder"))
    console.log(await actualValue.inputValue())
     await page.locator('//input[@id="user-message"]').click();
    await page.locator('//input[@id="user-message"]').fill('Tamil');

    const message=await page.locator("//p[text()='Tamil']").textContent()
    console.log(message)
})
test("sum", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const a = 30;
    const b = 20;
    await page.getByPlaceholder("Please enter first value").pressSequentially(a.toString(), { delay: 100 });
    await page.getByPlaceholder("Please enter first value").fill(a.toString());
    await page.getByPlaceholder("Please enter second value").fill(b.toString());
    const boxing = await page.getByRole("button", { name: "Get Sum" }).boundingBox();
    console.log("Boxing: ", boxing);
    await page.getByRole("button", { name: "Get Sum" }).isEnabled();
    await page.getByRole("button", { name: "Get Sum" }).click();
    const existing = await page.locator("//p[@id='addmessage']").innerText();
    console.log("Result: ", existing);
    await expect(page.locator("#addmessage")).toHaveText((a + b).toString());
});


test("simplealert", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
        waitUntil:"networkidle"
    });
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    const but = page.locator("//p[text()='JavaScript Alerts']/button");
    await but.click();
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.locator("//p[@class='text-gray-900 text-size-16 mt-10 text-black font-bold']//button[@type='button'][normalize-space()='Click Me']").click()
    await expect("You pressed Cancel!").toBe(await page.locator("//p[@id='confirm-demo']").textContent())
    page.once("dialog",async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.accept("Tamil"))
    })
    await page.locator("//div[3]//p[1]//button[1]").click()
    console.log(await page.locator("//p[@id='prompt-demo']").textContent())
});




test("LeafGround Alert",async({page})=>{
    await page.goto("https://leafground.com/alert.xhtml;jsessionid=node06nuo3igdj29w1t1op8iakgtjm19487150.node0");
    await page.locator("//button[@id='j_idt88:j_idt91']//span[@class='ui-button-text ui-c'][normalize-space()='Show']").click();
    page.on("dialog",async alert=>{
        console.log(alert.message())
        await alert.accept();
    })
    await page.locator("//button[@id='j_idt88:j_idt91']//span[@class='ui-button-text ui-c'][normalize-space()='Show']").click();
    page.on("dialog",async alert=>{
        console.log(alert.message())
        await alert.dismiss();
    })
    await page.locator("//button[@id='j_idt88:j_idt95']//span[@class='ui-button-text ui-c'][normalize-space()='Show']").click();
})

test("select test", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/",{
        waitUntil:"networkidle"
    });
    const selectElement=await page.locator("//select[@id='select-demo']");
    await selectElement.selectOption({
        //label:"Wednesday"
        value:"Monday"
    })
   await page.locator("//select[@id='multi-select']").selectOption([{ label: "California" },{ value: "Ohio" }
]);
})
test("Frame", async({page})=>{
    await page.goto("https://letcode.in/frame");
    const myframe=page.frame("firstFr");
    await myframe?.locator("//input[@placeholder='Enter name']").fill("Tamil")
    await myframe?.locator("//input[@name='lname']").fill("E")
    await expect("You have entered Tamil E").toBe(await myframe?.locator("//p[@class='text-sm font-semibold text-center']").textContent());
})

test("Frame2 - Inner Frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  const firstFrame = page.frameLocator("iframe#firstFr");

const innerFrame = firstFrame.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("abc@gmail.com");
});
test("Window test",async ({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newWindow.waitForLoadState("domcontentloaded");
    const text = await newWindow.locator('#sampleHeading').textContent();
    console.log("New window text:", text);
    await expect(newWindow.locator('#sampleHeading')).toHaveText("This is a sample page");
    await newWindow.close();
    await expect(page).toHaveURL(/browser-windows/);
});
test("tabs",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    const [tab] =await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);
    await tab.waitForLoadState();

    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await window.waitForLoadState();
    const pages=context.pages();
    console.log("no of Pages: ",pages.length);
    for(const p of pages){
        console.log("------------------------");
        console.log("URL: ",p.url());
        console.log("Title: ",await p.title());
    }
})
test("Iterate window attribute",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    const [newTabe] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await newTabe.waitForLoadState("domcontentloaded")

    const pages = context.pages();

    console.log(`Total Pages Opened: ${pages.length}`);

    for(const p of pages){
        console.log("URL: ", p.url());

        if(p.url().includes("simple")){
            const text = await p.locator("simpleHeading").textContent();

            console.log("Simple Page heading: ", text)
        }
    }
})