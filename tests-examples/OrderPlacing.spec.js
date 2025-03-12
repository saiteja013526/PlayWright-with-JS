import{test,expect} from '@playwright/test';
import { LoginPage} from '../Page Objects/LoginPage.js';
import { DashboardPage } from '../Page Objects/DashboardPage.js';
import { CartPage} from '../Page Objects/CartPage.js';
import { OrderDetailsPage } from '../Page Objects/OrderDetailsPage.js';
import {OrderConfirmPage} from '../Page Objects/OrderConfirmPage.js';



// JS Object <--String <--Json   for better encoding dont directly parse it convert it in to strig and then parse it. and store it in a variabe to easily access it where ever the data required
const data = JSON.parse(JSON.stringify(require("../test data/LoginTestData.json")));

for(let singledata of data){
  test(`order placing by ${singledata.name}`, async ({page})=>{
    const username = 'test@123qwe.com';
    const password = 'Test@123';

    const loginPage = new LoginPage(page);
    await loginPage.openURL();
    await loginPage.validLogin(singledata.username , singledata.password);
    await page.waitForTimeout(2000);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProductToCart();
    await page.waitForTimeout(2000);
    await dashboardPage.gotoCartPage();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const orderDetailsPage = new OrderDetailsPage(page);
    await orderDetailsPage.selectCountry('ind');
    await orderDetailsPage.enterDetails(singledata.cvv , singledata.name);
    await orderDetailsPage.clickPlaceOrder();

    await page.waitForLoadState("domcontentloaded");
    //await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    const orderConfirmPage = new OrderConfirmPage(page);
    await  orderConfirmPage.getSuccessMessage();

    
  });
}