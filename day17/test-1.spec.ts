import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in').click();
  await page.getByPlaceholder('Search Amazon.in').fill('mobile phones');
  await page.getByPlaceholder('Search Amazon.in').press('ArrowDown');
  await page.getByPlaceholder('Search Amazon.in').press('ArrowDown');
  await page.getByPlaceholder('Search Amazon.in').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 13 (128GB) - Midnight', exact: true }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/cart/add-to-cart/ref=dp_start-bbf_1_glance');
  await page1.goto('https://www.amazon.in/cart/smart-wagon?newItems=979b97a6-a9dd-407d-906c-83b1b98bcdfa,2&ref_=sw_refresh');
  await expect(page1.getByLabel('Proceed to Buy (2 items) Buy')).toBeVisible();
  await expect(page1.locator('#sw-subtotal')).toContainText('1,03,998.');
});