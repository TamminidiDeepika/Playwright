class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartIcon = '.shopping_cart_link';
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }

    async getCartCount() {
        return await this.page.textContent(this.cartIcon);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}

module.exports = InventoryPage;
