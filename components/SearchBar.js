const BasePage = require('../pages/BasePage');

class SearchBar extends BasePage {
  constructor(page) {
    super(page);
    this.inputDesktop = page.locator('#search-input');
    this.inputMobile = page.locator('#search-input-mobile');
    this.clearBtnMobile = page.locator('#btn-clear-search-mobile');
  }

  /**
   * Get the active search input based on viewport.
   */
  activeInput() {
    return this.page.locator('input[id="search-input"], input[id="search-input-mobile"]').first();
  }

  /**
   * Search for a term.
   * @param {string} term
   */
  async search(term) {
    const input = this.activeInput();
    await this.waitForVisible(input, 'search input');
    await input.click();
    await input.fill(term);
    await input.press('Enter');
  }

  /**
   * Clear mobile search.
   */
  async clearMobile() {
    if (await this.clearBtnMobile.isVisible()) {
      await this.click(this.clearBtnMobile, 'clear search mobile');
    }
  }
}

module.exports = SearchBar;
