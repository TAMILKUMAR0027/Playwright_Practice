import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Parallel Execution
  fullyParallel: true,

  // CI Settings
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  // Common Settings
  use: {
    // Base URL
    baseURL: 'https://demo.com',

    // Browser Mode
    headless: true,

    // Screenshot
    screenshot: 'only-on-failure',

    // Video
    video: 'retain-on-failure',

    // Trace
    trace: 'on-first-retry',

    // Timeout Settings
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  // Test Timeout
  timeout: 30000,

  // Assertion Timeout
  expect: {
    timeout: 5000,
  },

  // Browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});