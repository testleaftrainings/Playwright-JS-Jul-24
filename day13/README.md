# Playwright JS Data Reading Guide

This guide outlines how to efficiently read data from various sources such as JSON, CSV, and environment variables in your Playwright test scripts. Additionally, it includes instructions for enabling video capture and tracing.

## Table of Contents
- [JSON](#json)
- [CSV](#csv)
- [Environment Variables (ENV)](#environment-variables-env)
- [Storage State Using test.use()](#storage-state-using-testuse)
  - [Example](#example)
  - [Note](#note)
- [Persistent Context](#persistent-context)
  - [Example](#persistent-context-example)

## JSON

You can read data from a JSON file using the Node.js `fs` module or any other preferred library.

### Example

```javascript
import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Use jsonData in your tests
```

## CSV

To read data from a CSV file, you can utilize libraries like `csv-parse` combined with `fs`.

### Example

```javascript
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const loginData = parse(fs.readFileSync(path.join(__dirname, "testData.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
    test(`Learn to read data from CSV file for ${data.testId}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
    });
}
```

## Environment Variables (ENV)

Accessing environment variables in tests can be done using `process.env`.

### Example

```javascript
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Use username and password in your tests
```

## Storage State Using test.use()

Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

### Example

```javascript
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
```

### Note
Ensure to use the correct path to your storage state file.

## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();
```

## Final Notes

- **Ensure Correct Paths**: Always ensure the paths to your storage state files, user data directories, and other resources are correct.
- **Environment Variables**: Use environment variables to manage sensitive data and configuration settings securely.

