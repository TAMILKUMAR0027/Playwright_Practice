import loginData from '../test-data/loginData.json'
import {test,expect} from '../fixtures/baseFixtures'
test.describe("Login tests",()=>{
    test.beforeEach(async({hp})=>{
        await hp.navigate();
        await hp.clickMyaccount();
        await hp.clickLogin();
    })
    test("Valid login",async({lp})=>{
        await lp.login(loginData.Valid.username,loginData.Invalid.password);

    })
    test("Invalid login",async({lp})=>{
        await lp.login(loginData.Invalid.username,loginData.Invalid.password);
        await expect(lp.errorMessage).toHaveText("Warning: No match for E-Mail Address and/or Password.");
    })
})