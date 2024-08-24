import { chromium, expect, test } from "@playwright/test";

test.only(`Basic Authentication using persistent context`, async () => {
  
    const userDataDir = "./myUserDataDir";
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless:false,
        permissions: ['notifications', 'geolocation'],
        httpCredentials:{
            username:"admin",
            password:"testleaf",
        },
    })
    const page = await context.newPage();
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://leafground.com/auth.xhtml");
    await page.getByRole('button', {name: 'Basic Auth'}).click();
    await page.waitForTimeout(5000);   
    await page.context().storageState({path:"creds/persistent.json"});
})

test.skip(`Basic Authentication using incognito`, async () => {
  
    const context = await chromium.launch({
        headless:false
    })
    const page = await context.newPage();
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://leafground.com/auth.xhtml");
    await page.getByRole('button', {name: 'Basic Auth'}).click();
    await page.waitForTimeout(5000);    
})