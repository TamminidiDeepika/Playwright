const { test } = require('@playwright/test');
const fs = require('fs');

test("School data", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://dublinusd.org/");
    await page.locator(".schools-list").click();
    await page.locator(".dropdown-menu li").nth(0).click();
    await page.locator("#nmP2").click();
    await page.waitForSelector("#nmP2", { state: "visible" });
    await page.locator("#nmP7").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#nmL10").click(); 
    await page.waitForLoadState('networkidle');
    const positions = {
        'President - Christine Shaw': 'presidentInfo',
        'Co-President - Robin Wilhite': 'coPresidentInfo',
        'Vice President - Paul Pattishall': 'vicePresidentInfo'
    };
    
    for (const [text, variableName] of Object.entries(positions)) {
        const info = await page.locator(`span:has-text('${text}')`).textContent();
        console.log(`${variableName}:`, info);
    }
    
});


