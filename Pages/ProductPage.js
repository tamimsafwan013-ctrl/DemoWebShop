class ProductPage {
    constructor(page) {
        this.page = page;

        this.computers = page.locator('a[href="/computers"]').first();
        this.notebooks = page.locator('a[href="/notebooks"]').last();
        this.laptop = page.getByRole('link', { name: '14.1-inch Laptop', exact: true });
        this.addToCartButton = page.locator('#add-to-cart-button-31');
    }

    async selectComputers() {
        await this.computers.click();
        await this.page.waitForURL('**/computers');
    }

    async selectNotebooks() {
        await Promise.all([
            this.page.waitForURL('**/notebooks'),
            this.notebooks.click()
        ]);
    }

    async selectLaptop() {
    await this.laptop.click();
    await this.page.waitForURL('**/141-inch-laptop');
} 
    

  async addToCart() {
    await this.addToCartButton.click();
} 
}
export default ProductPage;