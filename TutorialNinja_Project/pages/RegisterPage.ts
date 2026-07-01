import { Page,Locator } from "@playwright/test";
export class RegisterPage{
    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly mobile:Locator;
    readonly password:Locator;
    readonly retypePassword:Locator;
    readonly email:Locator;
    readonly checkBox:Locator;
    readonly submit:Locator;
    constructor(page:Page){
        this.page=page;
        this.firstName=page.locator("//input[@id='input-firstname']")
        this.lastName=page.locator("//input[@id='input-lastname']")
        this.mobile=page.locator("//input[@id='input-telephone']");
        this.email=page.locator("//input[@id='input-email']");
        this.password=page.locator("//input[@id='input-password']");
        this.retypePassword=page.locator("//input[@id='input-confirm']");
        this.checkBox=page.locator("//input[@name='agree']");
        this.submit=page.locator("//input[@value='Continue']");
    }
    async register(fn:string,ln:string,mobile:number,email:string,password:string,retype:string){
        await this.firstName.fill(fn);
        await this.lastName.fill(ln);
        await this.mobile.fill(String(mobile));
        await this.email.fill(email);
        await this.password.fill(password);
        await this.retypePassword.fill(retype);
        await this.checkBox.click();
        await this.submit.click();
    }
}