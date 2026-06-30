import { test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { HeaderPage } from '../pages/HeaderPage';
type Fixtures={
    lp:LoginPage;
    dp:DashboardPage;
    hp:HeaderPage;
}
export const test=base.extend<Fixtures>({
    lp:async({page},use)=>{
        await use(new LoginPage(page));
    },
    dp:async({page},use)=>{
        await use(new DashboardPage(page));
    },
    hp:async ({page},use)=>{
        await use(new HeaderPage(page))
    }
});
export {expect };