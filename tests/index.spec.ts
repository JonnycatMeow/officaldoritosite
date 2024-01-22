import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/LinkTreeFreeClone/);

  const youtube = page.getByRole('link', { name: '📺 Youtube' });
  await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/c/yoandevco');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/yoanbernabeu/LinkTreeFreeClone');
});
