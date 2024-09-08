import { test } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";

test('verify case Creation', async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    //Login
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()
    // Click on the App Launcher toggle button
    await page.getByTitle("App Launcher").click()
    //await page.waitForTimeout(2000)
    await page.getByRole('button').filter({hasText: "View All"}).click()
    //await button1.click()
    //Service 
    await page.locator("(//input[@type='search'])[3]").fill("service")
    await page.locator("(//p[@class='slds-truncate'])[1]").click()
    //New Case Creation
    await page.locator("(//span[@class='slds-truncate'])[6]").click()
    //await page.getByTitle('Cases').click()
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='New']").click()
    await page.locator("(//input[@type='text'])[1]").click()
    await page.locator("//span[text()='New Contact']").click()
    await page.locator("(//a[@class='select'])[1]").click()
    await page.getByRole("option").nth(5).click()
    await page.locator("[placeholder='First Name']").fill("LionKing")
    await page.locator("[placeholder='Last Name']").fill("chapter05")
    await page.locator(".slds-button.slds-button_neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton").click();

    createJiraIssue("Salesforce-Service", "Testing it using Playwright");

})