const BasePage = require('../pages/BasePage');

class Header extends BasePage {
  constructor(page) {
    super(page);
    this.logo = page.locator('#brand-home');
    this.searchInputDesktop = page.locator('#search-input');
    this.searchInputMobile = page.locator('#search-input-mobile');
    this.btnCurrency = page.locator('#btn-currency');
    this.btnWishlist = page.locator('#btn-open-wishlist');
    this.btnCart = page.locator('#btn-open-cart');
    this.btnProfile = page.locator('#btn-profile');
    this.cartCount = page.locator('#header-cart-count');
    this.cartTotal = page.locator('#header-cart-total');
    this.wishlistCount = page.locator('#header-wishlist-count');
    this.categoryTab = (name) => page.getByRole('button', { name: new RegExp(name, 'i') });
  }

  /**
   * Click the brand logo to go home.
   */
  async goHome() {
    await this.click(this.logo, 'brand logo');
  }

  /**
   * Open the cart drawer.
   */
  async openCart() {
    await this.click(this.btnCart, 'open cart button');
  }

  /**
   * Open the wishlist modal.
   */
  async openWishlist() {
    await this.click(this.btnWishlist, 'wishlist button');
  }

  /**
   * Open profile menu.
   */
  async openProfile() {
    await this.click(this.btnProfile, 'profile avatar');
  }

  /**
   * Click a category sub-nav tab.
   * @param {string} name - e.g. DROPS, MEN
   */
  async openCategory(name) {
    await this.click(this.categoryTab(name), `category tab: ${name}`);
  }

  /**
   * Assert cart count shows expected value.
   * @param {number} count
   */
  async assertCartCount(count) {
    await expect(this.cartCount).toHaveText(String(count));
  }

  /**
   * Assert wishlist count shows expected value.
   * @param {number} count
   */
  async assertWishlistCount(count) {
    await expect(this.wishlistCount).toHaveText(String(count));
  }
}

module.exports = Header;
