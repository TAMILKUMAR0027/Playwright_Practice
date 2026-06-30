import {Page,Locator} from '@playwright/test';
export class LoginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton;
    constructor(page:Page){
        this.page=page;
        this.username=page.locator("#loginusername");
        this.password=page.locator("#loginpassword");
        this.loginButton=page.locator("//button[text()='Log in']")
    }
    async login(username:string,password:string){
        await this.username.fill(username);
        await this.password.fill(password)
        await this.loginButton.click()
    }
}