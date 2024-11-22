const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageobjects/loginPage');
const InventoryPage = require('../pageobjects/inventoryPage');
const CartPage = require('../pageobjects/cartPage');

test('Add item to cart and verify cart count', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addToCart();

    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toContain('1');

    await inventoryPage.goToCart();
    const cartItems = await cartPage.getCartItems();
    expect(cartItems).toBe(1);

    const cartItemNames = await cartPage.getCartItemNames();
    expect(cartItemNames).toContain('Sauce Labs Backpack');
});
