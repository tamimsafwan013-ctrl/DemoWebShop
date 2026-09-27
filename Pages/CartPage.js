class CartPage {
    constructor(page) {
        this.page = page;

        this.productName = page.getByText('14.1-inch Laptop', { exact: true });
        this.quantity = page.locator('.qty-input');
    }
  async openCart() {
    await this.page.goto('https://demowebshop.tricentis.com/cart');
}
    async productIsVisible() {
        return await this.productName.isVisible();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getQuantity() {
        return await this.quantity.inputValue();
    }
    
}

export default CartPage;