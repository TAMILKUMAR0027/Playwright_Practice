import { test, expect } from '@playwright/test';

const searchData=[
	{keyword: "Playwright", expectedtitle: "Playwright"},
	{keyword: "selenium", expectedtitle: "selenium"},
    {keyword:"Cypress",expectedtitle:"Cypress"}
];

test.describe("Google search with valid data",()=>{
    for(const data of searchData){
        test(`search data ${data.keyword}`,async({page})=>{
            await page.goto("https://www.google.com/");
            await page.locator("//textarea[@id='APjFqb']").fill(data.keyword);
            await page.keyboard.press("Enter");
            
        })
    }
})