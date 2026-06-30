import { Page,Locator } from "@playwright/test";
export class ProductPage{
    readonly page:Page;
    readonly addtocartButton:Locator;
    constructor(page:Page){
        this.page=page
        this.addtocartButton=page.locator("//a[@class='btn btn-success btn-lg']")
    }
    async clickaddtocart(){
        await this.addtocartButton.click();
    }
}