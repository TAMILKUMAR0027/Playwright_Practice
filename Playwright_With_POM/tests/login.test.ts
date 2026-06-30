
import {test,expect} from '../fixtures/baseFixtures';

import loginData from '../test-data/loginData.json'

test.describe("Login tests",()=>{
    test.beforeEach(async ({lp})=>{
        await lp.navigate();
    })
    test("Invalid login", async ({lp})=>{
        await lp.login(loginData.InvalidUser.username,loginData.InvalidUser.password);
        await expect(lp.errorMessage).toHaveText("Invalid credentials");
    })
    test("Valid login",async({lp,dp})=>{
        await lp.login(loginData.validUser.username,loginData.validUser.password);
        await expect(dp.dashboardTitle).toHaveText("Dashboard")
    })
})