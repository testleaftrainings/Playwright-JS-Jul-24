/**
 * Handling windows / switching between the tabs
 * 1. const context1 = await browser.newContext();
 *    const page1 = await contex1.newPage();
 *    const page2 = await context1.newPage();
 *    const context2 = await browser.newContext();
 * 
 * 2. context.on('popup')
 * 
 * 3. context.waitForEvent("page")
 *      Sequential approach
 *      Concurrent approach
 */

/**
 * Sequential approach
 * 1. Create a promise in your code to tell that this will resolve into a new page
 *      const windowPromise = context.waitForEvent("page")
 * 2. Now perform the user action which is supposed to open a new window
 *      await page.locator("").click()
 * 3. Now wait for the promise to get completed (for the promise you created in step 1)
 *      const window = await windowPromise
 * 4. Switch to the new window for performing further actions
 *      window.bringToFront();
 */

import { expect, test } from "@playwright/test";

test(`Handling windows`, async({context, page}) => {
    const page_one = await context.newPage();
    await page.goto("https://www.amazon.in")
    await page_one.goto("https://leafground.com/window.xhtml");
    const page_two = await context.newPage();
    await page_two.goto("https://www.redbus.in");

    //To get the count of the opened pages inside the context
    const allPages = context.pages();
    // allPages = [Amazon, Leafground, redbus]
    console.log(allPages);
    
    console.log(`No.of opened pages: ${allPages.length}`);
    
    //To get the title of each page
    for(let page of allPages) {
        const title = await page.title();
        console.log(`The title of the page is ${title}`);        
    }

    //Using index
    await allPages[0].bringToFront();
    await page.waitForTimeout(3000);
})

test(`Handling windows using sequential approach`, async({context, page}) =>{
    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent("page"); //promise pending
    await page.getByText("Open", {exact:true}).click();
    const newWindow = await windowPromise; //promise fulfilled
    await expect(newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");

    //Interact with the new page
    await newWindow.fill("#email", "rr7@gmail.com");
    //await window.close();
    await page.bringToFront();
    await page.locator("//i[@class='pi pi-home layout-menuitem-icon']").click();
    await page.waitForTimeout(3000);
})

test(`Handling windows concurrently`, async ({context, page})=>{

    await page.goto("https://leafground.com/window.xhtml");
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open", {exact:true}).click()
    ])

    await expect(newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");

    //Interact with the new page
    await newWindow.fill("#email", "rr7@gmail.com");
    //await window.close();
    await page.bringToFront();
    await page.locator("//i[@class='pi pi-home layout-menuitem-icon']").click();
    await page.waitForTimeout(3000);
})

test.only(`Handling multiple windows`, async ({context, page}) => {

    await page.goto("https://leafground.com/window.xhtml");
    const [multiplePages] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open Multiple", {exact:true}).click()
    ])

    const pages = multiplePages.context().pages();
    console.log(`No.of pages: ${pages.length}`);

    pages.forEach(async tabs => {
        const url = tabs.url();
        console.log(`The url of the page: ${url}`);

        const title = await tabs.title();
        console.log(`The title of the page is ${title}`);
        
    })

    //Using index
    let webPage: any;
    for (let index = 0; index < pages.length; index++) {
        const pageTitle = await pages[index].title();
        console.log(`The title of the page: ${pageTitle}`);
        
        if(pageTitle === 'Web Table'){
            webPage = pages[index]
        }
        
    }
        await webPage.bringToFront();
        await webPage.fill("input[placeholder='Search']", "Amy Elsner");

        await webPage.waitForTimeout(3000);
})