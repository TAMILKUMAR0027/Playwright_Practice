import {Page,Locator}from '@playwright/test';
export class DashboardPage{
    readonly page:Page;
    readonly user:Locator;
    constructor(page:Page){
        this.page=page;
        this.user=page.locator("//a[@id='nameofuser']")
        
    }
}