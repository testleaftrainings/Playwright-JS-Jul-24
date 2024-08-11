import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to upload file`, async({page}) => {

    await page.goto("https://leafground.com/file.xhtml");

    //Directly upload the file to that particular location
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator("input[type='file']").setInputFiles([path.join(__dirname, "file-sample_150kB.pdf")]);
    
    await expect(page.locator(".card").filter({has:page.getByText("Basic Upload")})
        .locator(".ui-fileupload-filename")).toContainText("file-sample_150kB.pdf");
   
    await page.waitForTimeout(2000);
    
})

test.only(`Test to upload file using fileChooser`, async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePromise = page.waitForEvent("filechooser");
    await page.click("#drag-drop-upload");
    const fileChooser = await filePromise;
    await fileChooser.setFiles([path.join(__dirname, "file-sample_150kB.pdf")]);

    await expect(page.locator("#drag-drop-upload")).toHaveClass("dz-success-mark");
})