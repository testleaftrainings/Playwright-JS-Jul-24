import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{page:any}>({
    page: async ({page}, use) => {
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", "ranjini.r@testleaf.com");
        await page.fill("#password", "Testleaf@123");
        await page.click("#Login");

        await use(page);
    }
})