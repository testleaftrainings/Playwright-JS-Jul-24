## Table of Contents

- [Assertions](#assertions)
  - [Auto-Retrying Assertions](#auto-retrying-assertions)
  - [Non-Retrying Assertions](#non-retrying-assertions)
  - [Negating Matches](#negating-matches)
  - [Soft Assertions](#soft-assertions)
  - [Hard Assertions](#hard-assertions)
- [Playwright Config File](#playwright-config-file)
- [Auto-Waiting Mechanism](#auto-waiting-mechanism)


## Assertions

Playwright's assertion library is designed to work seamlessly with its locators, supporting both auto-retrying and non-retrying assertions.

### Auto-Retrying Assertions

These assertions automatically retry until a certain condition is met or a timeout is reached. Ideal for dynamic content or elements that may take time to appear:

- `expect(locator).toHaveText('text', { timeout: 3000 })`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveCount(3)`

### Non-Retrying Assertions

Non-retrying assertions are those that execute and evaluate conditions at a point in time without any retries:

- `expect(await locator.textContent()).toBe('static text')`

### Negating Matches

To negate any matcher, prepend `not` before the assertion:

- `expect(locator).not.toHaveText('forbidden text')`
- `expect(locator).not.toBeVisible()`

### Soft Assertions

Soft assertions allow tests to continue after a failed assertion, collecting and reporting all failures at the end of the test.

### Hard Assertions

Hard assertions are the default behavior in Playwright, where a failed assertion immediately stops the test execution.

## Playwright Config File

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 120 * 1000,
  //Assertion timeout
  expect:{
    timeout: 15000
  },
  //Test folder
  testDir: './tests',
  //Execute the test in parallel mode
  fullyParallel: true,
  //No. of times to retry the failed test 
  retries: 1,
  //No.of workers to opt parallel tests
  workers: 2,
  //Reporter
  reporter: 'html',

  use: {
    //Enable trace for all test execution 
    trace: 'on',
    //Run the test in headed mode
    headless: false,
    //Enable video for all test execution
    video: 'on',
    //Enable screenshot for all test execution
    screenshot:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //Run the test that matches 03_login.spec.ts
      testMatch: "03_login.spec.ts"
    },
  ],
});


## Select Dropdowns

Playwright provides methods to interact with `<select>` dropdowns by value, label, or index:

```javascript
// Select by value
await page.selectOption('select#yourSelectId', { value: 'optionValue' });

// Select by label
await page.selectOption('select#yourSelectId', { label: 'Option Label' });

// Select by index
await page.selectOption('select#yourSelectId', { index: 0 });
```

## Auto-Waiting Mechanism

Playwright performs a range of actionability checks on the elements before making actions 
to ensure these actions behave as expected. 

It auto-waits for all the relevant checks to pass and only then performs the requested action.

If the required checks do not pass within the given timeout, action fails with the TimeoutError.

### How Auto-Waiting Works Internally

1. *Actionability Checks*:
   - Before performing any action (e.g., click, type, navigate), Playwright checks if the element 
   is in an actionable state. This includes checks for visibility, enablement, stability, 
   and attached state.
   - *Visibility*: Ensures the element is visible and not hidden.
   - *Enablement*: Ensures the element is enabled and not disabled.
   - *Stability*: Ensures the element is not animating or moving.
   - *Attached State*: Ensures the element is attached to the DOM.

2. *Polling*:
   - Playwright continuously polls the condition at regular intervals until it is satisfied or a timeout is reached. This polling happens under the hood and is not something the user needs to manage.

3. *Timeouts*:
   - Each action or assertion has a default timeout (e.g., 30 seconds). If the condition is not met within this timeout, Playwright throws an error.
   - The timeout can be customized per action or globally in the Playwright configuration.

4. *Built-in Waits*:
   - *Navigation Waits*: Playwright waits for the page to navigate and load completely before proceeding with the next action.
   - *Locator Waits*: When using locators (e.g., page.locator), Playwright waits for the element to appear in the DOM and satisfy actionability checks.
   - *Assertion Waits*: Assertions automatically wait for the condition to be true within the specified timeout.

### Example of Auto-Waiting in Playwright

Here are examples demonstrating how auto-waiting works in Playwright:

#### Clicking an Element

javascript
import { test, expect } from '@playwright/test';

test('auto-waiting example for click', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  
  // Playwright waits for the element to be visible, enabled, stable, and attached before clicking
  await page.click('text=More information...');
  
  // Playwright waits for the new URL to load
  await expect(page).toHaveURL('http://leaftaps.com/opentaps/control/main');
});


#### Typing into an Input Field

javascript
import { test, expect } from '@playwright/test';

test('auto-waiting example for typing', async ({ page }) => {
  await page.goto('http://amazon.in/login');
  
  // Playwright waits for the input field to be visible and enabled before typing
  await page.fill('input[name="username"]', 'myusername');
  await page.fill('input[name="password"]', 'mypassword');
  
  // Click the login button
  await page.click('button[type="submit"]');
  
  // Playwright waits for the navigation to complete
  await expect(page).toHaveURL('https://amazon.in/dashboard');
});


### Configuring Timeouts

You can configure timeouts for actions and assertions to customize the auto-waiting behavior.

#### Per Action Timeout

javascript
await page.click('text=More information...', { timeout: 10000 }); // 10 seconds timeout


#### Global Timeout Configuration

You can set a global timeout in the Playwright configuration file (playwright.config.ts or 
playwright.config.js).

javascript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000, // 60 seconds for each test
  expect: {
    timeout: 10000, // 10 seconds for each assertion
  },
});
