const { expect } = require('@playwright/test');
const BasePage = require('../pages/BasePage');

class CartDrawer extends BasePage {
  constructor(page) {
    super(page);
    this.overlay = page.locator('#cart-drawer-overlay');
    this.drawer = page.locator('#cart-drawer');
    this.btnClose = page.locator('#btn-close-cart');
    this.cartBadge = page.locator('#drawer-cart-badge');
    this.cartItemsContainer = page.locator('#cart-items-container');
    this.shipName = page.locator('#ship-name');
    this.shipEmail = page.locator('#ship-email');
    this.shipPhone = page.locator('#ship-phone');
    this.shipPincode = page.locator('#ship-pincode');
    this.shipAddress = page.locator('#ship-address');
    this.btnCheckout = page.locator('#btn-checkout');
    this.btnCheckoutCOD = page.locator('#btn-checkout-cod');
    this.cartGrandTotal = page.locator('#cart-grand-total');
  }

  /**
   * Assert cart drawer is open.
   */
  async assertOpen() {
    await this.assertVisible(this.drawer, 'cart drawer');
    await expect(this.overlay).not.toHaveClass(/overlay-closed/);
  }

  /**
   * Close the cart drawer via close button.
   */
  async close() {
    await this.click(this.btnClose, 'close cart drawer');
    await this.assertClosed();
  }

  /**
   * Assert cart drawer is closed.
   */
  async assertClosed() {
    await expect(this.overlay).toHaveClass(/overlay-closed/);
  }

  /**
   * Assert item count badge.
   * @param {number} count
   */
  async assertItemCount(count) {
    await expect(this.cartBadge).toContainText(`${count} ITEMS`);
  }

  /**
   * Assert grand total visible.
   */
  async assertTotalVisible() {
    await this.assertVisible(this.cartGrandTotal, 'grand total');
  }
}

module.exports = CartDrawer;
