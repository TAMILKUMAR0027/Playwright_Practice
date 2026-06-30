import {test,expect} from '../fixtures/baseFixtures'
import loginData from '../test-data/loginData.json'
test.describe("Dashboard tests",() =>{
    test.beforeEach(async({lp,dp})=>{
        await lp.navigate()
        await lp.login(loginData.validUser.username,loginData.validUser.password);
    })
    test("logout test",async({hp,lp})=>{
        await hp.clickUser()
        await hp.clickLogout()
        await expect(lp.loginTitle).toHaveText("Login")
    })
    test.afterEach(async ({},testInfo) => {
    console.log("Test completed");
    console.log("Title:", testInfo.title);
    console.log("Duration: ",testInfo.duration);
});
})