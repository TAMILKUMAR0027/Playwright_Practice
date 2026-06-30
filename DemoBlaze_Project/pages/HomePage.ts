import {Page,Locator} from '@playwright/test';
export class HomePage{
    readonly page:Page
    readonly loginLink:Locator;
    readonly samsung:Locator;
    readonly cart:Locator;
    constructor(page:Page){
        this.page=page;
        this.loginLink=page.locator("//a[@id='login2']")
        this.samsung=page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]");
        this.cart=page.locator("//a[@id='cartur']")
    }
    async navigate(){
       await this.page.goto(process.env.BASEURL!)
    }
    async clickLoginLink(){
        await this.loginLink.click();
    }
    async clicksamsung(){
        await this.samsung.click();
    }
    async clickcart(){
        await this.cart.click();
    }
}