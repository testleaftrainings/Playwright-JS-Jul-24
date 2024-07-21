import { chromium, firefox, test, webkit } from "@playwright/test";

test.only(`Test to launch the browser`, async () => {

    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: "msedge"});

    //Create the browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //console.log(`The title of the page is ${await page.title()}`);
    
    await page.waitForTimeout(5000);

    //Gracefully clearing the resources
    //Close the page
    await page.close();

    //Close the browser context 
    await browserContext.close();

    //Close the browser
    await browser.close();

})

test(`To launch the browser using firefox`, async () => {

    const browser = await firefox.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https:login.salesforce.com");
    await page.waitForTimeout(3000);
} )

test(`Test to launch the browser using the playwright configurations`, async () => {

    //Create a browser instance
    const browser = await chromium.launch();

    //Create the browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //console.log(`The title of the page is ${await page.title()}`);
    
    await page.waitForTimeout(5000);

    //Gracefully clearing the resources
    //Close the page
    await page.close();

    //Close the browser context 
    await browserContext.close();

    //Close the browser
    await browser.close();

})

