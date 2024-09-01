import { test } from "@playwright/test";

test('Test to login page', {
    tag: ['@smoke', '@regression'],
}, async ({page}) => {
    
})

test.describe.configure({mode: 'parallel', retries: 2});
test.describe('Regression suite', () => {

    test('Test 1', async ({page}) => {

    });
    
    test('Test 2', async () => {
    
    })


})
test.use({storageState:""})

test.describe('Smoke suite', () => {
test.describe.configure({mode:'serial'})
    test.fail('Test 1', async ({page}) => {
        test.setTimeout(240000)
    
    });
    
    test('Test 2', async () => {
        test.slow()
    
    })


})

