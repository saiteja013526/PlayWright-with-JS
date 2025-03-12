import{test,expect} from '@playwright/test';
import { LoginPage } from '../Page Objects/LoginPage.js';
//require('../Page Objects/LoginPage');
const data = JSON.parse(JSON.stringify(require("../test data/LoginTestData.json")));


for(let singledata of data){
test(`login test of ${singledata.name}`, async ({page})=>{
  //const username = 'test@123qwe.com';
  //const password = 'Test@123';
  //console.log(singledata);

  const loginPage = new LoginPage(page);
  await loginPage.openURL();

  await loginPage.validLogin(singledata.username, singledata.password);
  //await page.waitForTimeout(3000);
});
}