

class OrderDetailsPage {
  
  constructor(page){
    this.page = page;
    this.selectCountrytxt = page.locator("input[placeholder='Select Country']");
    this.dropdown= page.locator(".ta-results");
    this.options =  this.dropdown.locator("button");
    const textboxes =  page.locator("input.input.txt");
    this.cvv = textboxes.nth(1);
    this.name = textboxes.nth(2);
    this.placeorder = page.locator(".btnn.btnn.action__submit.ng-star-inserted");
    
  }

  async selectCountry(countryName){
    await this.selectCountrytxt.pressSequentially(countryName);
    await this.dropdown.waitFor();
    const numOfOptions = await this.options.count();

    for (let i = 0; i < numOfOptions; i++) {
      let text = await this.dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
        await this.dropdown.locator("button").nth(i).click();
        break;
      }
      
    }


  }

  async enterDetails(cvv, name){
    await this.cvv.fill(cvv);
    await this.name.fill(name);

  }

  async clickPlaceOrder(){
    await this.placeorder.click();
    
  }

}
module.exports = {OrderDetailsPage};