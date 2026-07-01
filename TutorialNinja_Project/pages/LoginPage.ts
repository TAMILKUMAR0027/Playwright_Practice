import { Page,Locator } from "@playwright/test";
export class LoginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly submitButton:Locator;
    readonly errorMessage:Locator;
    constructor(page:Page){
        this.page=page;
        this.username=page.locator("//input[@id='input-email']")
        this.password=page.locator("//input[@id='input-password']")
        this.submitButton=page.locator("//input[@value='Login']")
        this.errorMessage=page.locator("//div[@class='alert alert-danger alert-dismissible']")
    }
    async login(username:string,password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }
    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
}