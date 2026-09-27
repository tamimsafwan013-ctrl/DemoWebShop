class RegisterPage {
    constructor(page) {
        this.page = page;

        this.gender = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.registrationMessage = page.locator('.result');
       this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async pageOpen(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(1000);
    }

    async selectGender() {
        await this.gender.check();
        await this.page.waitForTimeout(1000);
    }

    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
        await this.page.waitForTimeout(1000);
    }

    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
        await this.page.waitForTimeout(1000);
    }

    async enterEmail(email) {
        await this.email.fill(email);
        await this.page.waitForTimeout(1000);
    }

    async enterPassword(password) {
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
    }

    async enterConfirmPassword(password) {
        await this.confirmPassword.fill(password);
        await this.page.waitForTimeout(1000);
    }

    async clickRegister() {
        await this.registerButton.click();
        await this.page.waitForTimeout(1000);
    }
    async registrationCompleted() {
    return await this.registrationMessage.isVisible();
    }

    async clickContinue() {
    await this.continueButton.click();
    await this.page.waitForTimeout(1000);
    }
}

export default RegisterPage;