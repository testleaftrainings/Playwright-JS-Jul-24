import { test } from "@playwright/test";

test.only(`Test to launch the browser`, async ({page}) => {

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //console.log(`The title of the page is ${await page.title()}`);

    //Enter username
    await page.locator("#username").fill("demosalesmanager");
    
    //Enter password
    await page.locator("#password").fill("crmsfa");

    await page.waitForTimeout(5000);
    //Click Login
    await page.locator(".decorativeSubmit").click(); 

})
