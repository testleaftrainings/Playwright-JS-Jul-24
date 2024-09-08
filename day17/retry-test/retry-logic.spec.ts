import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{page:any}>({
    page: async ({page}, use, testInfo) => {
        page.delayedFill = async (selector:string, value:string) => {
            //if it is going to be retried, then add a delay
            if(testInfo.retry) {
                await page.waitForTimeout(3000);
            }
            //call the original method
            await page.fill(selector, value);
        }

        page.clickAndDelay = async (selector:string) => {
            //call the original method
            await page.click(selector);

            if(testInfo.retry){
                await page.waitForTimeout(3000);
            }

        }
        await use(page);
    }
})