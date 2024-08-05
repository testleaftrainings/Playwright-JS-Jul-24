import { expect, test } from "@playwright/test";

test(`Test to assert the text box`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    //To check the text box is enabled
    await expect(typeName).toBeEnabled();
    //Enter the value
    await typeName.fill("Ranjini");

    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();
    await disabledTextbox.fill("Ranjini");
    await page.waitForTimeout(3000);  
})

test(`Assertion using hard assert`, async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect(appendTextbox).toBeEnabled({timeout: 20000});
    await appendTextbox.type("India");

    //Hard Assertion
    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeEnabled();    //assertion fails

    const clearBox = page.locator("//input[@value='Can you clear me, please?']");
    await expect(clearBox).toBeEnabled();
    await clearBox.clear();
    await clearBox.fill("Hi");
    await page.waitForTimeout(3000);
})

test.only(`Assertion using soft assert`, async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect(appendTextbox).toBeEnabled({timeout: 20000});
    await appendTextbox.fill("India");

    //Hard Assertion
    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect.soft(disabledTextbox).toBeEnabled();    //assertion fails

    const clearBox = page.locator("//input[@value='Can you clear me, please?']");
    await expect(clearBox).toBeEnabled();
    await clearBox.clear();
    await clearBox.fill("Hi");
    await page.waitForTimeout(3000);
})