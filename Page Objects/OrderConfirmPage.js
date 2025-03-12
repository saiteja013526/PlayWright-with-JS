class OrderConfirmPage{

  constructor(page){
    this.page = page;
    this.successMessage = page.locator(".hero-primary");
  }

  async getSuccessMessage(){
    
    //await this.page.waitForLoadState("domcontentloaded");
    await this.successMessage.waitFor({state: "visible", timeout: 5000});
    const message = await this.successMessage.textContent({timeout: 5000});
    console.log(message);
    await this.page.screenshot({path: 'success_order.png'});

  }
}
module.exports = {OrderConfirmPage};