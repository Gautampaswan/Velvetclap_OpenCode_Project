const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');

class SearchAndAddToCartFlow {
  constructor(page) {
    this.home = new HomePage(page);
    this.cart = new CartPage(page);
  }

  /**
   * Search for a product and open the cart drawer.
   * @param {string} term - search term
   */
  async run(term) {
    await this.home.searchBar.search(term);
    await this.home.assertProductsVisible();
    await this.home.header.openCart();
    await this.cart.assertOpen();
    await this.cart.assertTotalVisible();
  }
}

class CheckoutFlow {
  constructor(page) {
    this.cart = new CartPage(page);
  }

  /**
   * Fill shipping details and proceed to checkout.
   * @param {object} details - { name, email, phone, pincode, address }
   */
  async run(details) {
    await this.cart.assertOpen();
    await this.cart.fillShippingDetails(details);
    await this.cart.assertTotalVisible();
    await this.cart.proceedToCheckout();
  }
}

module.exports = { SearchAndAddToCartFlow, CheckoutFlow };
