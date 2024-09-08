import { expect } from "playwright/test";
import { test } from "./custom-fixtures.spec";


test(`Verify login test functionality`, async ({page}) => {

    await page.waitForLoadState('load');
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
    //Click on the App Launcher toggle button.
    await page.click(".slds-icon-waffle");
    //Click on the View All link.
    await page.getByText("View All").click();

    
})