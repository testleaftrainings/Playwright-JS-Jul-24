import { expect, test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from "fs";
import path from "path";

loginAppData.forEach(testDataObject => {
    test(`Test to read the static data using json file ${testDataObject.testTitle}`, async ({page}) => {

        await page.goto("https://login.salesforce.com");
        await page.fill("#username", testDataObject.username);
        await page.fill("#password", testDataObject.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
     })
});

const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/login.json'), 'utf-8'));

for(const credentails of loginData) {
test.only(`Test ${credentails.testTitle} to read the dynamic data synchronously and parse it`, async ({page}) => {
    await page.goto("https://login.salesforce.com");
        await page.fill("#username", credentails.username);
        await page.fill("#password", credentails.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
})

}