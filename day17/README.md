## Table of Contents

1. [Retry Tests in Playwright](#retry-tests-in-playwright)
2. [Test Info](#test-info)
3. [Custom Fixture](#custom-fixture)
4. [Jira Integration](#jira-integration)
5. [Custom Reporters](#custom-reporters)
6. [GitHub Actions](#github-actions)

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
