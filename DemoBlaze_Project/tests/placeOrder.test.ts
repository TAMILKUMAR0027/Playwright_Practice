import path from "path";
import { expect, test } from "../fixtures/baseFixtures";
import { readExcel } from "../utils/excelReader";
import { LoginUser,readLoginData } from "../utils/csvReader";
const filePath = path.resolve(__dirname, "../test-data/orderData.xlsx");

const users:LoginUser[]=readLoginData();
const validData=users.find(user=>user.type=="valid")!;
const excelData: any = readExcel(filePath, "Sheet1");
const data = excelData[0];

test.describe("Place order test", () => {
    test.beforeEach(async ({ hp ,lp}) => {
        await hp.navigate();
        await hp.clickLoginLink()
        await lp.login(validData?.username,validData?.password);
    });
    test("Place order", async ({ hp, pp, cp,dp, page }) => {
        page.on("dialog", async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await hp.clicksamsung();
        await pp.clickaddtocart();
        await hp.clickcart();
        await cp.clickPlaceHolder(
            data.name,
            data.country,
            data.city,
            data.creditCard,
            data.month,
            data.year
        );
        await expect(dp.user).toHaveText("Welcome TamilKumar")
    });
});