const BasePage = require('./BasePage');
const Header = require('../components/Header');
const SearchBar = require('../components/SearchBar');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.searchBar = new SearchBar(page);
    this.productGrid = page.locator('#product-grid');
    this.noProducts = page.locator('#no-products');
    this.categoryTab = (name) => page.getByRole('button', { name: new RegExp(name, 'i') });
    this.categoryPill = (cat) => page.locator(`[data-cat="${cat}"]`);
    this.sizeBtn = (size) => page.locator(`[data-size="${size}"]`);
    this.fitBtn = (fit) => page.locator(`[data-fit="${fit}"]`);
    this.sortSelect = page.locator('#sort-select');
    this.pincodeInput = page.locator('#pincode-input');
    this.btnCheckPincode = page.locator('#btn-check-pincode');
    this.pincodeResult = page.locator('#pincode-result');
    this.newsletterEmail = page.locator('#newsletter-email');
    this.newsletterForm = page.locator('#newsletter-form');
    this.footerNavLink = (text) => page.getByRole('link', { name: new RegExp(text, 'i') });
  }

  /**
   * Assert home page loaded.
   */
  async assertLoaded() {
    await this.assertVisible(this.page.locator('#brand-home'), 'brand logo');
    await this.assertVisible(this.searchBar.input, 'search input');
    await this.assertVisible(this.productGrid, 'product grid');
  }

  /**
   * Click a category tab in the sub-navigation.
   * @param {string} name - e.g. DROPS, MEN, WOMEN
   */
  async openCategory(name) {
    await this.click(this.categoryTab(name), `category tab: ${name}`);
  }

  /**
   * Apply a category filter pill.
   * @param {string} cat - e.g. tees, bottoms
   */
  async filterByCategory(cat) {
    await this.click(this.categoryPill(cat), `category pill: ${cat}`);
  }

  /**
   * Select a size filter.
   * @param {string} size - e.g. M, L
   */
  async filterBySize(size) {
    await this.click(this.sizeBtn(size), `size button: ${size}`);
  }

  /**
   * Select a fit filter.
   * @param {string} fit - e.g. Oversized, Boxy Fit
   */
  async filterByFit(fit) {
    await this.click(this.fitBtn(fit), `fit button: ${fit}`);
  }

  /**
   * Sort products by option value.
   * @param {string} value - e.g. price-low, trending
   */
  async sortBy(value) {
    await this.sortSelect.selectOption(value);
  }

  /**
   * Assert product grid is visible.
   */
  async assertProductsVisible() {
    await this.assertVisible(this.productGrid, 'product grid');
  }

  /**
   * Check delivery pincode.
   * @param {string} pincode
   */
  async checkPincode(pincode) {
    await this.fill(this.pincodeInput, pincode, 'pincode input');
    await this.click(this.btnCheckPincode, 'check courier button');
  }

  /**
   * Subscribe to newsletter.
   * @param {string} email
   */
  async subscribeNewsletter(email) {
    await this.fill(this.newsletterEmail, email, 'newsletter email');
    await this.click(this.newsletterForm.locator('button[type="submit"]'), 'newsletter submit');
  }
}

module.exports = HomePage;
