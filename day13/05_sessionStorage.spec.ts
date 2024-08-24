import { test } from "@playwright/test";

test(`Test to generate login session state`, async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@123");
    await page.click("#Login");
    //Get the login details (cookies)
    await page.context().storageState({path:"creds/sf_login_storage.json"});
})