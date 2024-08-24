/**
 * CSV - comma separated value
 */
import { expect, test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync(path.join(__dirname,'../../data/login.csv')),{
    columns: true,
    skip_empty_lines: true
})

for(const record of records) {
    test(`Test ${record.testId} to read the dynamic data using csv file `, async ({page}) => {

        await page.goto("https://login.salesforce.com");
        await page.fill("#username", record.username);
        await page.fill("#password", record.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
     })
    }
