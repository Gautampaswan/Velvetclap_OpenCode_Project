const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.overlay = page.locator('#cart-drawer-overlay');
    this.drawer = page.locator('#cart-drawer');
    this.btnClose = page.locator('#btn-close-cart');
    this.cartBadge = page.locator('#drawer-cart-badge');
    this.cartItemsContainer = page.locator('#cart-items-container');
    this.shippingProgressText = page.locator('#shipping-progress-text');
    this.shipName = page.locator('#ship-name');
    this.shipEmail = page.locator('#ship-email');
    this.shipPhone = page.locator('#ship-phone');
    this.shipPincode = page.locator('#ship-pincode');
    this.shipAddress = page.locator('#ship-address');
    this.btnCheckout = page.locator('#btn-checkout');
    this.btnCheckoutCOD = page.locator('#btn-checkout-cod');
    this.cartSubtotal = page.locator('#cart-subtotal-display');
    this.cartGrandTotal = page.locator('#cart-grand-total');
  }

  /**
   * Open the cart drawer.
   */
  async open() {
    await this.page.getByRole('button', { name: /Open bag/i }).click();
    await this.waitForVisible(this.drawer, 'cart drawer');
  }

  /**
   * Close the cart drawer.
   */
  async close() {
    await this.click(this.btnClose, 'close cart drawer');
  }

  /**
   * Assert cart is open.
   */
  async assertOpen() {
    await this.assertVisible(this.drawer, 'cart drawer');
  }

  /**
   * Assert cart item count badge.
   * @param {number} count
   */
  async assertItemCount(count) {
    await expect(this.cartBadge).toContainText(`${count} ITEMS`);
  }

  /**
   * Fill shipping details.
   * @param {object} details - { name, email, phone, pincode, address }
   */
  async fillShippingDetails(details) {
    await this.fill(this.shipName, details.name, 'shipping name');
    await this.fill(this.shipEmail, details.email, 'shipping email');
    await this.fill(this.shipPhone, details.phone, 'shipping phone');
    await this.fill(this.shipPincode, details.pincode, 'shipping pincode');
    await this.fill(this.shipAddress, details.address, 'shipping address');
  }

  /**
   * Click proceed to checkout.
   */
  async proceedToCheckout() {
    await this.click(this.btnCheckout, 'proceed to checkout');
  }

  /**
   * Click cash on delivery.
   */
  async selectCOD() {
    await this.click(this.btnCheckoutCOD, 'cash on delivery');
  }

  /**
   * Assert grand total is visible.
   */
  async assertTotalVisible() {
    await this.assertVisible(this.cartGrandTotal, 'grand total');
  }
}

module.exports = CartPage;
