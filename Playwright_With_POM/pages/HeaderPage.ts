import {Page,Locator}from '@playwright/test';
export class HeaderPage{
    readonly page:Page;
    readonly user:Locator;
    readonly logoutLink:Locator;
    constructor(page:Page){
        this.page=page
        this.user=page.locator("//p[@class='oxd-userdropdown-name']");
        this.logoutLink=page.locator("//a[normalize-space()='Logout']")
    }
    async clickUser(){
        await this.user.click();
    }
    async clickLogout(){
        await this.logoutLink.click();
    }
}