import {test,expect} from '../fixtures/baseFixtures'
import loginData from '../test-data/loginData.json'
test.describe("Dashboard tests",() =>{
    test.beforeEach(async({lp,dp})=>{
        await lp.navigate()
        await lp.login(loginData.validUser.username,loginData.validUser.password);
        await expect(dp.dashboardTitle).toHaveText("Dashboard")
    })
    test("Quick launch",async({dp})=>{
        await expect(dp.quickLaunch).toHaveText("Quick Launch");
    })
    test("Time at work",async({dp})=>{
        await expect(dp.timeatwork).toHaveText("Time at Work");
    })
    test.afterEach(async({hp,lp})=>{
        await hp.clickUser();
        await hp.clickLogout();
        await expect(lp.loginTitle).toHaveText("Login")
    });
})