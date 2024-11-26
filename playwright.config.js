const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory containing test files
  timeout: 120 * 1000, // Increase the test timeout to 2 minutes
  expect: {
    timeout: 10000, // Increase expect timeout to 10 seconds
  },
  retries: 1, // Retry failing tests once
  reporter: [
    ['html', { open: 'on-failure' }], // Automatically open HTML report on failure
    ['line'], // Line reporter for better terminal output
  ],
  use: {
    browserName: 'chromium', // Define the default browser
    headless: process.env.CI ? true : false, // Run headless in CI, headed locally
    screenshot: 'on', // Take a screenshot for every test step
    video: 'retain-on-failure', // Record a video only if the test fails
    trace: 'retain-on-failure', // Capture a trace on failure
    baseURL: 'https://www.saucedemo.com', // Define base URL for all tests
    viewport: { width: 1280, height: 720 }, // Set default browser viewport size
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  outputDir: 'test-results/', // Directory to store test results
  fullyParallel: true, // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail tests if .only is left in the code during CI runs
  workers: process.env.CI ? 2 : undefined, // Limit workers in CI to prevent resource exhaustion
});
