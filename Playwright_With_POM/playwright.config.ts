import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Folder containing test files
  testDir: './tests',

  // Execute tests in parallel
  fullyParallel: true,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 1,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // Timeout for each test
  timeout: 30 * 1000,

  // Timeout for assertions
  expect: {
    timeout: 5000,
  },

  // Reporter
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  // Shared settings
  use: {
    // baseURL: 'https://www.demoblaze.com',

    headless: false,

    viewport: {
      width: 1366,
      height: 768,
    },

    actionTimeout: 10000,
    navigationTimeout: 30000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    ignoreHTTPSErrors: true,
  },

  // Browser Projects
  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],

  // Output folder for artifacts
  outputDir: 'test-results',
});