import { chromium, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test(`Verify login test functionality`, async ({page,context}) => {

    const login = new LoginPage(page,context);
    await login.navigateTo();
    await login.enterUsername();
    await login.enterPassword();
    await login.clickLogin();
    
})