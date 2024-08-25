import { chromium, expect, firefox, test } from "@playwright/test";

test.only(`Basic Authentication using persistent context`, async () => {
  
    const userDataDir = "./myUserDataDir";
    const context = await firefox.launchPersistentContext(userDataDir, {
        headless:false,
        permissions: ['notifications', 'geolocation'],
       // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
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
    await context.close(); 
})