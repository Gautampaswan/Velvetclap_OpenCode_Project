const { expect } = require('@playwright/test');
const logger = require('../utils/logger');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a path relative to baseURL.
   * @param {string} path
   */
  async goto(path = '/') {
    logger.info(`Navigating to ${path}`);
    await this.page.goto(path);
  }

  /**
   * Click an element with logging.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} name
   */
  async click(locator, name = 'element') {
    logger.info(`Clicking ${name}`);
    await locator.click();
  }

  /**
   * Fill an input field.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} value
   * @param {string} name
   */
  async fill(locator, value, name = 'field') {
    logger.info(`Filling ${name}`);
    await locator.fill(value);
  }

  /**
   * Wait for an element to be visible.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} name
   */
  async waitForVisible(locator, name = 'element') {
    logger.info(`Waiting for ${name} to be visible`);
    await locator.waitFor({ state: 'visible' });
  }

  /**
   * Assert element is visible.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} name
   */
  async assertVisible(locator, name = 'element') {
    await expect(locator).toBeVisible();
    logger.info(`${name} is visible`);
  }

  /**
   * Assert element contains text.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} text
   * @param {string} name
   */
  async assertContainsText(locator, text, name = 'element') {
    await expect(locator).toContainText(text);
    logger.info(`${name} contains "${text}"`);
  }

  /**
   * Assert element has exact text.
   * @param {import('@playwright/test').Locator} locator
   * @param {string} text
   * @param {string} name
   */
  async assertText(locator, text, name = 'element') {
    await expect(locator).toHaveText(text);
    logger.info(`${name} text is "${text}"`);
  }

  /**
   * Assert element count.
   * @param {import('@playwright/test').Locator} locator
   * @param {number} count
   * @param {string} name
   */
  async assertCount(locator, count, name = 'element') {
    await expect(locator).toHaveCount(count);
    logger.info(`${name} count is ${count}`);
  }

  /**
   * Assert URL contains a path fragment.
   * @param {string} pathFragment
   */
  async assertUrlContains(pathFragment) {
    await expect(this.page).toHaveURL(new RegExp(pathFragment));
    logger.info(`URL contains "${pathFragment}"`);
  }

  /**
   * Take a full-page screenshot.
   * @param {string} name
   */
  async screenshot(name = 'screenshot') {
    await this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }
}

module.exports = BasePage;
