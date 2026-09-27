class BasePage {
    constructor(page) {
        this.page = page;
    }

    async pageOpen(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(1000);
    }
}

export default BasePage;