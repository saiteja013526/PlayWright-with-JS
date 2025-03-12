class DashboardPage {

  constructor(page){
    this.page = page;
    this.addToCart = page.locator("(//button[contains(text(),'Add To Cart')])[2]");
    this.cart =  page.locator("[routerlink='/dashboard/cart']");
  }

  async addProductToCart(){
    await this.addToCart.click();
  }

  async gotoCartPage(){
    await this.cart.click();
    
  }

}
module.exports = {DashboardPage};