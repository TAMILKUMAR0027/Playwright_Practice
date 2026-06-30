import { Page,Locator } from "@playwright/test";
export class CartPage{
    readonly page:Page;
    readonly placeOrder:Locator;
    readonly name:Locator;
    readonly country:Locator;
    readonly city:Locator;
    readonly creditCard:Locator;
    readonly month:Locator;
    readonly year:Locator;
    readonly purchaseBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.placeOrder=page.locator("//button[normalize-space()='Place Order']")
        this.name=page.getByRole('textbox', { name: 'Total: 360 Name:' })
        this.country=page.getByRole('textbox', { name: 'Country:' })
        this.city=page.getByRole('textbox', { name: 'City:' })
        this.creditCard=page.getByRole('textbox', { name: 'Credit card:' })
        this.month=page.getByRole('textbox', { name: 'Month:' })
        this.year=page.getByRole('textbox', { name: 'Year:' })
        this.purchaseBtn=page.getByRole('button', { name: 'Purchase' })
    }
    async clickPlaceHolder(name:string,country:string,city:string,creditCard:number,
    month: string | number,
    year: string | number){
        await this.placeOrder.click();
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.creditCard.fill(String(creditCard));
        await this.month.fill(String(month));
        await this.year.fill(String(year));
        await this.purchaseBtn.click();
    }
}