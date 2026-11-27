const { test: base } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');
const Header = require('../components/Header');
const SearchBar = require('../components/SearchBar');
const CartDrawer = require('../components/CartDrawer');
const { SearchAndAddToCartFlow, CheckoutFlow } = require('../flows/checkout.flow');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
  searchBar: async ({ page }, use) => {
    await use(new SearchBar(page));
  },
  cartDrawer: async ({ page }, use) => {
    await use(new CartDrawer(page));
  },
  searchFlow: async ({ page }, use) => {
    await use(new SearchAndAddToCartFlow(page));
  },
  checkoutFlow: async ({ page }, use) => {
    await use(new CheckoutFlow(page));
  }
});

module.exports = { test, expect: base.expect };
