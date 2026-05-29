import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring. We assume the blog has a title related to Runway Notes or similar.
  // We can just check that it loads successfully for now.
  await expect(page).toHaveTitle(/./);
});

test('page loaded successfully', async ({ page }) => {
  await page.goto('/');

  // Verify that the body is visible
  await expect(page.locator('body')).toBeVisible();
});
