const { test, expect } = require('../fixtures/base.fixture');

test.describe('Velvetclap Smoke Tests', () => {
test('@smoke @ui should load the homepage', async ({ homePage, page }) => {
    await homePage.goto();
    await expect(page.locator('#brand-home')).toBeVisible();
    await expect(page.locator('#search-input, #search-input-mobile').first()).toBeVisible();
});

  test('@smoke @ui should open and close cart drawer', async ({ homePage, cartDrawer }) => {
    await homePage.goto();
    await homePage.header.openCart();
    await cartDrawer.assertOpen();
    await cartDrawer.close();
    await cartDrawer.assertClosed();
  });

  test('@smoke @ui should search for a product', async ({ homePage, searchFlow }) => {
    await homePage.goto();
    await searchFlow.run('tee');
  });

  test('@smoke @ui should navigate to a category tab', async ({ homePage }) => {
    await homePage.goto();
    await homePage.openCategory('DROPS');
    await homePage.assertProductsVisible();
  });

  test('@smoke @ui should check delivery pincode', async ({ homePage }) => {
    await homePage.goto();
    await homePage.checkPincode('248001');
    await expect(homePage.pincodeResult).toBeVisible();
  });

  test('@smoke @ui should open and close profile menu', async ({ homePage }) => {
    await homePage.goto();
    await homePage.header.openProfile();
  });

  test('@smoke @ui should assert homepage fully loaded', async ({ homePage }) => {
    await homePage.goto();
    await homePage.assertLoaded();
  });

  test('@smoke @ui should toggle currency', async ({ homePage }) => {
    await homePage.goto();
    await homePage.header.btnCurrency.click();
  });
});
