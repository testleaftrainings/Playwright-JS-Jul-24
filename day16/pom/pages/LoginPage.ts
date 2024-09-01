import { Page, BrowserContext } from "@playwright/test";

export class LoginPage {

    readonly page:Page;
    readonly context:BrowserContext;

    constructor(page:Page, context:BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async navigateTo() {
        await this.page.goto("https://login.salesforce.com");
    }
    async enterUsername() {
        await this.page.fill("#username", "ranjini.r@testleaf.com");
    }
    async enterPassword() {
        await this.page.fill("#password", "Testleaf@123");
    }
    async clickLogin() {
        await this.page.click("#Login");
    }
}