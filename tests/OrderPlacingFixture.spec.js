import{test,expect} from '@playwright/test';
import{customtest} from '../utils/test-base.js';
import { LoginPage} from '../Page Objects/LoginPage.js';
import { DashboardPage } from '../Page Objects/DashboardPage.js';
import { CartPage} from '../Page Objects/CartPage.js';
import { OrderDetailsPage } from '../Page Objects/OrderDetailsPage.js';
import {OrderConfirmPage} from '../Page Objects/OrderConfirmPage.js';



// JS Object <--String <--Json   for better encoding dont directly parse it convert it in to strig and then parse it. and store it in a variabe to easily access it where ever the data required
const data = JSON.parse(JSON.stringify(require("../test data/LoginTestData.json")));


/** 
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
**/



/**
 * this below test case is run through a fixture with name called testData drom an object called customtest fixture which has some login datainit.
 * 
 * we will get the data from the fixture not from the json file
 * note: only a single set of data is possible.
 */


customtest(`order placing tesr case`, async ({page, testData})=>{
const username = 'test@123qwe.com';
const password = 'Test@123';

const loginPage = new LoginPage(page);
await loginPage.openURL();
await loginPage.validLogin(testData.username , testData.password);
await page.waitForTimeout(2000);

const dashboardPage = new DashboardPage(page);
await dashboardPage.addProductToCart();
await page.waitForTimeout(2000);
await dashboardPage.gotoCartPage();

const cartPage = new CartPage(page);
await cartPage.clickCheckout();

const orderDetailsPage = new OrderDetailsPage(page);
await orderDetailsPage.selectCountry('ind');
await orderDetailsPage.enterDetails(testData.cvv , testData.name);
await orderDetailsPage.clickPlaceOrder();

await page.waitForLoadState("domcontentloaded");
//await page.waitForNavigation({ waitUntil: "domcontentloaded" });
const orderConfirmPage = new OrderConfirmPage(page);
await  orderConfirmPage.getSuccessMessage();


});


