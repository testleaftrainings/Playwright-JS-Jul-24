import { test } from "@playwright/test";

test('Test to create a lead', async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Enter username
    await page.getByLabel("Username").fill("demosalesmanager");

    //Enter password //Reusability of the locator
    // const password = page.getByLabel("Password");
    // await password.fill("crmsfa");

    await page.fill("#password", "crmsfa");

    //Click Login
    //await page.click(".decorativeSubmit");
    await page.click("//input[@class='decorativeSubmit']");

    //Click Login
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.getByRole("link", {name:'Leads'}).click();

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter company name
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Testleaf");

    //Enter first name
    await page.locator("#createLeadForm_firstName").fill("Sneha");

    //Enter last name
    await page.locator("#createLeadForm_lastName").fill("Suganya");

    //Click Create Lead //Attribute based selectors
    await page.click("[name='submitButton']");

    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
})