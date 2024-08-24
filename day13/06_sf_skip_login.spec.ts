import { expect, test } from "@playwright/test";

test.use({storageState: "creds/sf_login_storage.json"})
test(`Test to Verify Lead Creation and Conversion to Opportunity`, async ({page}) => {
    const firstname = "Ranjini";
    const lastname = "R";
    const company = "Qeagle";
    const opportunityName = "Nedbank"
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://testleaf30-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
    //Click on the App Launcher toggle button.
    await page.click(".slds-icon-waffle");
    //Click on the View All link.
    await page.getByText("View All").click();
    //Type ‘Marketing’ in the search box and click on the Marketing link.
    await page.getByPlaceholder("Search apps or items...").fill("Marketing");    
    await page.click("//p[@class='slds-truncate']");
    //Navigate to the Leads tab from the Marketing dashboard.
    await page.click("//a[@title='Leads']/span");
    //Click on the New button to create a lead.
    await page.click("//a[@title='New']");
    //Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    await page.click("//label[text()='Salutation']/following::span[text()='--None--']");
    await page.click("//span[text()='Ms.']");
    await page.fill("//label[text()='First Name']/following::input[@name='firstName']", firstname);
    await page.fill("//label[text()='Last Name']/following::input[@name='lastName']", lastname);
    await page.fill("//label[text()='Company']/following::input[@name='Company']", company);
    //Click on the Save button.
    await page.click("button[name='SaveEdit']");
    //A confirmation message should also be displayed and verified.
    const toastMessage = await page.locator("//div[@class='toastContent slds-notify__content']").innerText();
    console.log(toastMessage);
    await page.waitForTimeout(5000);
    //In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
    await page.locator("//ul[@class='slds-button-group-list']/li").last().click();
    await page.locator("//a[@role='menuitem']/span").last().click();
    await expect(page.locator("//h1[contains(@class,'title')]")).toHaveText("Convert Lead ");
    //Click on the Opportunity Name input field, clear and enter a new opportunity name.
    await page.getByTitle("Qeagle-").click();
    await page.fill("//span[text()='Opportunity Name']/following::input[contains(@class,' input')]",opportunityName);
    //Click on the Convert button.
    await page.click("//button[text()='Convert']");
    //A confirmation message ‘Your lead has been converted’ should be displayed and verified.
    await expect(page.locator("//div[@class='title']/h2")).toHaveText("Your lead has been converted");
    //Click on the Go to Leads button.
    await page.getByText("Go to Leads").click();
    await page.waitForTimeout(5000);
    //Search the verified lead name in the Search box and verify the text ‘No items to display’.
    const search = page.locator("input[name='Lead-search-input']");
    await search.fill(firstname);
    await search.press('Enter');
    await page.waitForTimeout(5000);
    const status = page.locator("//div[contains(@class,'emptyContentInner')]//span");
    await status.click();
    await status.innerText();
    console.log(`The status is ${status}`);
    //Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    await page.click("//a[@title='Opportunities']/span");
    //Search the opportunity name created and click on the created opportunity name.
    const oppSearch = page.locator("input[name='Opportunity-search-input']");
    await oppSearch.fill(opportunityName);
    await oppSearch.press('Enter');
    await page.click("//div[contains(@class,'slds-page-header_object-home')]");
    await page.click(`//a[@title='${opportunityName}']`);
    //The created Opportunity Name should appear and verify the same.
    console.log(`The opportunity page title is ${await page.title()}`);
    await expect(page).toHaveTitle("Nedbank | Opportunity | Salesforce");
})