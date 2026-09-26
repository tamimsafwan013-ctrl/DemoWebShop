import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('Invalid login should display error and user should not be logged in', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.pageOpen('https://demowebshop.tricentis.com/login');

    await loginPage.enterEmail('invalid@example.com');

    await loginPage.enterPassword('Safwan565656');

    await loginPage.clickLogin();

    expect(await loginPage.isErrorMessageVisible()).toBe(true);

    expect(await loginPage.isLogoutVisible()).toBe(false);
});