import { test } from "@playwright/test";

test(`Test to handle dialogs`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");

    //Simple Dialog
    await page.locator("text = Show").first().click();

    await page.waitForTimeout(2000);

    //Confirm Dialog
    await page.locator(".card").filter({hasText: "(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);

})

test.only(`Test to handle dialogs using event listeners`, async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async dialog =>{
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of alert is: ${type}`);
        if(type === "confirm"){
            await dialog.accept();
        } else if(type === "prompt"){
            await dialog.accept("Ranjini");
        } else{
            await dialog.dismiss();
        }
    })

    //Simple Dialog
    await page.locator("text = Show").first().click();

    await page.waitForTimeout(2000);

    //Confirm Dialog
    await page.locator(".card").filter({hasText: "(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
    
})

test(`Test to handle specific dialogs using event listeners`, async({page})=> {
    await page.goto("https://leafground.com/alert.xhtml");

    page.once("dialog", async dialog =>{
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of alert is: ${type}`);
        dialog.accept();
    })

    //Simple Dialog
    await page.locator("text = Show").first().click();

    await page.waitForTimeout(2000);

    page.once("dialog", async dialog =>{
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of alert is: ${type}`);
        dialog.dismiss();
    })

    //Confirm Dialog
    await page.locator(".card").filter({hasText: "(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
})

