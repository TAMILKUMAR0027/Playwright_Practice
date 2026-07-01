
import {test as base, expect}from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
type Fixtures={
    hp:HomePage,
    lp:LoginPage,
    rp:RegisterPage
}
export const test=base.extend<Fixtures>({
    hp:async({page},use)=>{
        await use(new HomePage(page));
    },
    lp:async({page},use)=>{
        await use(new LoginPage(page));
    },
    rp:async({page},use)=>{
        await use(new RegisterPage(page))
    }
})
export {expect}
;    
