// Auth setup project - Velvetclap has no password login (profile created from name + mobile at checkout).
// No credentials needed for browsing. This setup file exists for framework parity.
const { test } = require('@playwright/test');

test('auth setup placeholder', async ({ page }) => {
  // No login required to browse Velvetclap. Vault profile is auto-created at checkout.
  // If you add gated routes later, add login logic here and save storageState.
});
