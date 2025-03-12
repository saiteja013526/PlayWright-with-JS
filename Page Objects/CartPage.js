class CartPage{
  constructor(page){
    this.page = page;
    this.checkoutbtn = page.locator('text=Checkout');

  }

  async clickCheckout(){
    await this.checkoutbtn.click();
  }

}
module.exports = {CartPage};