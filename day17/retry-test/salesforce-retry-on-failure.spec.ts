import { expect } from "@playwright/test";
import { test } from "./retry-logic.spec";

test(`Test to Verify Lead Creation and Conversion to Opportunity`, async ({page}) => {

    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com/");
    await page.delayedFill("#username", "ranjini.r@testleaf.com");
    await page.delayedFill("#password", "Testleaf@123");
    await page.clickAndDelay("Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
    //Click on the App Launcher toggle button.
    await page.click(".slds-icon-waffle");
    //Click on the View All link.
    await page.getByText("View All").click();

})