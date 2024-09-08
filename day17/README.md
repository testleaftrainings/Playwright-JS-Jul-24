## Table of Contents

1. [Retry Tests in Playwright](#retry-tests-in-playwright)
2. [Test Info](#test-info)
3. [Custom Fixture](#custom-fixture)
4. [Jira Integration](#jira-integration)
5. [Custom Reporters](#custom-reporters)
6. [GitHub Actions](#github-actions)
7. [Network Interception](#network-interception)
8. [Visual Testing](#visual-testing)
9. [Code Gen](#code-gen)

## Retry Tests in Playwright

### Description
Retrying tests in Playwright allows for automatic re-execution of failed tests, helping to improve test reliability and reduce flakiness.

### Implementation
To enable retries in Playwright, you can configure the `playwright.config.ts` file:

```javascript
export default defineConfig ({
  retries: 2, // Number of retry attempts
});
```

## Test Info

### Description
Test info in Playwright provides detailed information about the test execution, such as test title, status, error messages, and more.

### Usage
Access test info within your test using the `test.info()` method:

```javascript

test('example test', async ({ page }) => {
  const testInfo = test.info();
  console.log(testInfo.title);
});
```

## Custom Fixture

### Description
Custom fixtures in Playwright allow you to set up and tear down resources that are needed for your tests.

### Implementation
Define custom fixtures:

```javascript
export const test = baseTest.extend({
    page: async ({page},use) =>{

       //Set up the fixture

        await use(page);
}
})
```

## Jira Integration

### Description
Integrating Jira with Playwright helps in tracking test results and associating them with Jira issues.

### Implementation
Use the Jira API to report test results from Playwright:

```javascript
const jiraClient = require('jira-client');

const jira = new jiraClient({
  protocol: 'https',
  host: 'your-jira-domain.atlassian.net',
  username: 'your-username',
  password: 'your-api-token',
  apiVersion: '2',
  strictSSL: true,
});

jira.addNewIssue({
  fields: {
    project: { key: 'PROJ' },
    summary: 'Test Issue',
    description: 'Details about the issue',
    issuetype: { name: 'Bug' },
  },
});
```

## Custom Reporters

### Description
Custom reporters in Playwright allow you to create your own formats for test result output.

### Implementation
Create a custom reporter by extending the `Reporter` class:

```javascript
class MyReporter {
  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }
  onTestEnd(test, result) {
    console.log(`Test ${test.title} finished with status: ${result.status}`);
  }
  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export{MyReporter} 
```

## GitHub Actions

### Description
GitHub Actions allow you to automate workflows for building, testing, and deploying your code.

### Implementation
Create a workflow file in `.github/workflows` directory:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: npm install
    - name: Run Playwright tests
      run: npx playwright test
```

## Network Interception

### Description
Playwright provides capabilities to intercept and modify network requests and responses. This can be useful for mocking API responses, modifying requests, or blocking certain resources.

### Use Case
Network interception is valuable for testing how an application handles various network conditions and responses. It can also be used to simulate backend endpoints that are not yet implemented or are unreliable.

### Example
javascript

  await page.route('**/api/**', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: 'mocked response' })
    });
  });

  await page.goto('https://login.salesforce.com');
  // Additional test steps...

---

## Visual Testing

### Description
Visual testing in Playwright involves comparing screenshots of web pages or elements to ensure they appear as expected. This helps catch visual regressions in the UI.

### Use Case
Automated visual testing ensures that UI changes do not unintentionally affect the appearance of web pages. It’s especially useful for validating design consistency and catching unexpected layout shifts or styling issues.


## Code Gen

### Description
Playwright offers a code generation tool that records your browser interactions and generates code based on those actions. This can help in quickly creating test scripts by simply performing the desired actions in a browser.

### Use Case
Code generation is useful for quickly scaffolding test scripts, especially for complex user interactions. It helps in reducing the time and effort required to write initial test scripts from scratch.

### Example
Run the following command to start the code generator:
bash
npx playwright codegen https://www.amazon.in

This will open a browser where you can perform actions. Playwright will generate the corresponding code in real-time.
