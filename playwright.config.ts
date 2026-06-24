import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Read ENV variable
const envName = process.env.ENV || 'qa';

// Load corresponding .env file
dotenv.config({
  path: `./env/.env.${envName}`
});

export default defineConfig({
  testDir: './tests',

  // Parallel Execution
  fullyParallel: true,

  // CI Settings
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reports
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  // Common Settings
  use: {
    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});