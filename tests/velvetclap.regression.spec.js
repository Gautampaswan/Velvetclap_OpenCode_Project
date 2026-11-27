const { test, expect } = require('../fixtures/base.fixture');

test.describe('Velvetclap Regression Tests', () => {
  test('@regression @ui should filter products by category pill', async ({ homePage }) => {
    await homePage.goto();
    await homePage.filterByCategory('tees');
    await homePage.assertProductsVisible();
  });

  test('@regression @ui should filter products by size', async ({ homePage }) => {
    await homePage.goto();
    await homePage.filterBySize('M');
    await homePage.assertProductsVisible();
  });

  test('@regression @ui should filter products by fit', async ({ homePage }) => {
    await homePage.goto();
    await homePage.filterByFit('Oversized');
    await homePage.assertProductsVisible();
  });

  test('@regression @ui should sort products by price low to high', async ({ homePage }) => {
    await homePage.goto();
    await homePage.sortBy('price-low');
    await homePage.assertProductsVisible();
  });

  test('@regression @ui should subscribe to newsletter', async ({ homePage }) => {
    await homePage.goto();
    await homePage.subscribeNewsletter('demo@velvetclap.test');
  });

  test('@regression @ui should open wishlist modal', async ({ homePage, header }) => {
    await homePage.goto();
    await header.openWishlist();
    await expect(header.page.locator('#wishlist-modal-overlay')).not.toHaveClass(/overlay-closed/);
  });

  test('@regression @ui cart drawer should show zero items initially', async ({ homePage, cartDrawer }) => {
    await homePage.goto();
    await homePage.header.openCart();
    await cartDrawer.assertItemCount(0);
    await cartDrawer.close();
  });

  test('@regression @ui should sort products by trending', async ({ homePage }) => {
    await homePage.goto();
    await homePage.sortBy('trending');
    await homePage.assertProductsVisible();
  });

  test('@regression @ui cart drawer should show total visible', async ({ homePage, cartDrawer }) => {
    await homePage.goto();
    await homePage.header.openCart();
    await cartDrawer.assertTotalVisible();
    await cartDrawer.close();
  });

  test('@regression @ui should fill shipping details and proceed to checkout', async ({ homePage, checkoutFlow }) => {
    await homePage.goto();
    await homePage.header.openCart();
    await checkoutFlow.run({
      name: 'Demo User',
      email: 'demo@velvetclap.test',
      phone: '9876543210',
      pincode: '248001',
      address: 'Demo Street, Demo City'
    });
  });

  test('@regression @ui should clear mobile search', async ({ homePage }) => {
    await homePage.goto();
    await homePage.searchBar.clearMobile();
  });

  test('@regression @ui wishlist count should stay zero initially', async ({ homePage, header }) => {
    await homePage.goto();
    await header.assertWishlistCount(0);
  });
});
