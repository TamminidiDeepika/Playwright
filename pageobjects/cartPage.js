class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = '.cart_item';
    }

    async getCartItems() {
        return await this.page.locator(this.cartItems).count();
    }

    async getCartItemNames() {
        return await this.page.$$eval('.inventory_item_name', items => items.map(item => item.textContent));
    }
}

module.exports = CartPage;
