import { Page,Locator } from "@playwright/test";
export class HomePage{
    readonly page:Page;
    readonly MyaccountButton:Locator;
    readonly loginButton:Locator;
    readonly searchBox:Locator;
    readonly searchIcon:Locator;
    readonly mac:Locator;
    readonly noProduct:Locator;
    readonly registerButton:Locator;
    constructor(page:Page){
        this.page=page;
        this.MyaccountButton=page.locator("//span[normalize-space()='My Account']")
        this.loginButton=page.locator("//a[normalize-space()='Login']")
        this.searchBox=page.locator("//input[@placeholder='Search']");
        this.searchIcon=page.locator("//i[@class='fa fa-search']")
        this.mac=page.locator("//h1[normalize-space()='Search - mac']");
        this.noProduct=page.locator("//p[contains(text(),'There is no product that matches the search criter')]")
        this.registerButton=page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Register']")
    }
    async navigate(){
        await this.page.goto(process.env.BASEURL!);
    }
    async clickMyaccount(){
        await this.MyaccountButton.click()
    }
    async clickLogin(){
        await this.loginButton.click();
    }
    async search(keyword:string){
        await this.searchBox.fill(keyword);
        await this.searchIcon.click();
    }
    async clickRegister(){
        await this.registerButton.click();
    }
}