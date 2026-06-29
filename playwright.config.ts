import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Read ENV variable
const envName = process.env.ENV || 'uat';

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
  workers: process.env.CI ? 1 : undefined,
  // Reports
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  timeout: 30000,
  globalTimeout:1000000,
  retries:2,
  expect: {
    
    timeout: 5000
  },
  // Common Settings
  use: {
    browserName: 'chromium',
    
    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
    actionTimeout:10000,
    navigationTimeout:10000,
    trace: 'on',
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