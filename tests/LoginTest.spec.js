import{test,expect} from '@playwright/test';
import { LoginPage } from '../Page Objects/LoginPage.js';
//require('../Page Objects/LoginPage');

test('Login test', async ({page})=>{
  const username = 'test@123qwe.com';
  const password = 'Test@123';

  const loginPage = new LoginPage(page);
  loginPage.openURL();
  loginPage.validLogin(username,password);
  await page.waitForTimeout(3000);
})