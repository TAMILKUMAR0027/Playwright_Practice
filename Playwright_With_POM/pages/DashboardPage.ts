import { Page, Locator }from '@playwright/test'
export class DashboardPage{
    readonly page:Page;
    readonly dashboardTitle:Locator;
    readonly quickLaunch:Locator;
    readonly timeatwork:Locator;
    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
        this.quickLaunch=page.locator("//p[normalize-space()='Quick Launch']")
        this.timeatwork=page.locator("//p[normalize-space()='Time at Work']")
    }
    async getDashboardTitle(){
        return await this.dashboardTitle.textContent();
    }
}