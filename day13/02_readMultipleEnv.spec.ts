import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
/**
 * $env:NODE_ENV
 * npx playwright test 02_readMultipleEnv.spec.ts
 * 
 *  $env:NODE_ENV = "production"
 * npx playwright test 02_readMultipleEnv.spec.ts
 * 
 * set NODE_ENV = 
 * $env:NODE_ENV;npx playwright test 02_readMultipleEnv.spec.ts
 */

const environment = process.env.NODE_ENV || 'testing'
const envPath = path.resolve(__dirname, `../../data/${environment}.env`);
dotenv.config({path:envPath});

test(`Test to read the data using .env file`, async ({page}) => {

    const username = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;
   await page.goto("https://login.salesforce.com");
   await page.fill("#username", username);
   await page.fill("#password", password);
   await page.click("#Login");
   const title = await page.title();
   console.log(`The title of the page is ${title}`);
   await expect(page).toHaveTitle("Home | Salesforce");
})