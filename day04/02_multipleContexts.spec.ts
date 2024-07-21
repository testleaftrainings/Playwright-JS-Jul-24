import { chromium, test } from "@playwright/test";

test(`Test to create multiple browser contexts`, async () => {

    const browser = await chromium.launch();
    //Create multiple browser contexts
    const context1 = await browser.newContext();
    //Create page inside context1
    const page1 = await context1.newPage();
    await page1.goto("https://amazon.in");

    await page1.waitForTimeout(3000);
    const page2 =  await context1.newPage();
    await page2.goto("http://leaftaps.com/opentaps/control/main");

    await page2.waitForTimeout(3000);
    //Create pages inside context2
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto("https://login.salesforce.com");

    await page3.waitForTimeout(3000);
    
})