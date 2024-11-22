const { test, expect, request } = require('@playwright/test');
test('Fetch products from Fake Store API and verify data', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://fakestoreapi.com/products');
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);
    const products = await response.json();

    products.forEach((product, index) => {
        console.log(`Product ${index + 1} - ID:`, product.id);
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('description');
        
        console.log(`Product ${index + 1} has all required properties.\n`);
    });

    console.log('All products have been verified for required properties.');
});

