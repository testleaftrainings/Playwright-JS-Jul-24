import { chromium, devices, test } from "@playwright/test";

test('Test to check application across devices', async () => {
    const myDevice = devices['Galaxy S8'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...myDevice
    });
    const page = await context.newPage();
    await page.goto("https://www.testleaf.com/");
    
    await page.waitForTimeout(5000);
    
})