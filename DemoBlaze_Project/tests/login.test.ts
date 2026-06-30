import { readLoginData, LoginUser } from "../utils/csvReader";
import {test,expect} from '../fixtures/baseFixtures'
const users:LoginUser[]=readLoginData();
const validData=users.find(user=>user.type=="valid")!;
const invalidData=users.find(user=>user.type=='invalid')!;
test.describe("Login via csv",()=>{
    test.beforeEach(async({hp})=>{
        await hp.navigate()
        await hp.clickLoginLink();
    });
    test("valid Login",async({lp,dp})=>{
        await lp.login(validData?.username,validData?.password);
        await expect(dp.user).toHaveText("Welcome TamilKumar")
    })
    test("Invalid login",async({page,lp})=>{
        page.once("dialog",async alert=>{
            await expect(alert.message()).toBe("Wrong password.")
            await alert.accept()
        })
        await lp.login(invalidData?.username,invalidData?.password);
    })
})