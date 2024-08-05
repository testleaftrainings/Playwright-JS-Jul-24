import { test } from "@playwright/test";

test('Test to create a lead', async ({page}) => {
   
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Enter username
    await page.getByLabel("Username").fill("demosalesmanager");

    await page.fill("#password", "crmsfa");

    //Click Login
    
    await page.click("//input[@class='decorativeSubmit']");

    //Click Login
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.getByRole("link", {name:'Leads'}).click();

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter company name
    await page.locator("input[class='inputBox']").nth(0).fill("Testleaf");

    //Enter first name
    await page.locator("[name='firstName']").last().fill("Sneha");

    //Enter last name
    await page.locator("#createLeadForm_lastName").fill("Suganya");

    //Select the Source dropdown
    //Locate the dropdown by value
    await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_DIRECTMAIL"});

    //Get the values in the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of values: ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());      
    }
    await page.waitForTimeout(3000);

    //Select Currency dropdown
    await page.selectOption("#createLeadForm_currencyUomId", {index:13});

    await page.waitForTimeout(3000);

    //Select Country dropdown
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});

    await page.waitForTimeout(3000);

    //Click Create Lead //Attribute based selectors
    await page.click("[name='submitButton']");


    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
})