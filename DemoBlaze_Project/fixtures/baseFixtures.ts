import { test as base,expect}from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage';
type Fixtures= {
    hp:HomePage;
    lp:LoginPage;
    dp:DashboardPage;
    cp:CartPage;
    pp:ProductPage;
}

export const test=base.extend<Fixtures>({
    hp:async({page},use)=>{
        await use(new HomePage(page));
    },
    lp:async({page},use)=>{
        await use(new LoginPage(page));
    },
    dp:async({page}, use)=>{
        await use(new DashboardPage(page))
    },
    cp:async({page},use)=>{
        await use(new CartPage(page))
    },
    pp:async({page},use)=>{
        await use(new ProductPage(page))
    }
})
export {expect}