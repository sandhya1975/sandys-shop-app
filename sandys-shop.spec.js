const { test, expect } = require('@playwright/test');

const APP = 'file:///Users/babukunadian/sandys-shop-app/index.html';

test('TC1: Valid login succeeds', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');
  await expect(page.locator('#loginSuccess')).toBeVisible();
});

test('TC2: Wrong password case fails', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#username', 'admin');
  await page.fill('#password', 'PASSWORD123');
  await page.click('#loginBtn');
  await expect(page.locator('#loginError')).toBeVisible();
});

test('TC3: Caps username fails', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#username', 'ADMIN');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');
  await expect(page.locator('#loginError')).toBeVisible();
});

test('TC4: Empty username fails', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');
  await expect(page.locator('#loginError')).toBeVisible();
});

test('TC5: Empty password fails', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#username', 'admin');
  await page.click('#loginBtn');
  await expect(page.locator('#loginError')).toBeVisible();
});

test('TC6: Valid contact form submits', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#name', 'Sandy');
  await page.fill('#email', 'sandy@email.com');
  await page.click('#submitBtn');
  await expect(page.locator('#formSuccess')).toBeVisible();
});

test('TC7: Empty name shows error', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#email', 'sandy@email.com');
  await page.click('#submitBtn');
  await expect(page.locator('#formError')).toBeVisible();
});

test('TC8: Empty email shows error', async ({ page }) => {
  await page.goto(APP);
  await page.fill('#name', 'Sandy');
  await page.click('#submitBtn');
  await expect(page.locator('#formError')).toBeVisible();
});
