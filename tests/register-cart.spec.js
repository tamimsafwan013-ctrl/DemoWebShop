import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage.js';
import LoginPage from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';

test('Register, login and add laptop to cart', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    const email = `test${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    await registerPage.pageOpen(
        'https://demowebshop.tricentis.com/register'
    );

    await registerPage.selectGender();
    await registerPage.enterFirstName('Safwan');
    await registerPage.enterLastName('Test');
    await registerPage.enterEmail(email);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
    await registerPage.clickRegister();

    expect(await registerPage.registrationCompleted()).toBe(true);

    await registerPage.clickContinue();

    await loginPage.clickLogout();

    await loginPage.pageOpen(
        'https://demowebshop.tricentis.com/login'
    );

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();

    await productPage.selectComputers();
await productPage.selectNotebooks();
await productPage.selectLaptop();
await productPage.addToCart();

    await cartPage.openCart();

    expect(await cartPage.productIsVisible()).toBe(true);

    expect(await cartPage.getProductName())
        .toContain('14.1-inch Laptop');

    expect(await cartPage.getQuantity()).toBe('1');
});