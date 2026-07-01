import {test,expect}from '../fixtures/baseFixtures'
import { readLoginData, LoginUser } from '../utils/csvReader'
const users: LoginUser[]=readLoginData();
const validData=users.find(user=>user.type==='Valid')!;
const InvalidData=users.find(user=>user.type==='Invalid')!;
test.describe("Login test using csv",()=>{
    test.beforeEach(async({lp})=>{
        await lp.navigate();
    })
    test("Valid login using csv",async({lp,dp})=>{
        await lp.login(validData.username,validData.password)
        await expect(dp.dashboardTitle).toHaveText("Dashboard")
    })
    test("Invalid login using csv",async({lp})=>{
        await lp.login(InvalidData.username,InvalidData.password);
        await expect(lp.errorMessage).toHaveText("Invalid credentials")
    })
})
