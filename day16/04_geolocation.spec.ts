import { chromium, test } from "@playwright/test";

test('Test to verify the application behaviour in different locations', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        geolocation: {
            latitude: 32.715736,
            longitude: -117.161087
        },
        permissions: ['geolocation']
    })
    const page = await context.newPage();
    await page.goto("https://www.google.com/maps");
    await page.waitForLoadState('domcontentloaded');
    await page.click("#sVuEFc");
    await page.waitForTimeout(10000);
    
})