import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.errorMessage = page.locator('.validation-summary-errors');
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
    }

    async enterEmail(email) {
        await this.email.fill(email);
        await this.page.waitForTimeout(1000);
    }

    async enterPassword(password) {
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
    }

    async clickLogin() {
        await this.loginButton.click();
        await this.page.waitForTimeout(1000);
    }

    async isErrorMessageVisible() {
        return await this.errorMessage.isVisible();
    }

    async isLogoutVisible() {
        return await this.logoutLink.isVisible();
    }
    async clickLogout() {
    await this.logoutLink.click();
    await this.page.waitForTimeout(1000);
    }
}

export default LoginPage;