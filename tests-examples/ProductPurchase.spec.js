/**
 * we will be bypassing the login page with the help of api's and make the automation process more smoother and stable such that we can avoid the flakey situations and save the time
 * 
 */

import {test, expect, request} from '@playwright/test';

const loginPayload={userEmail: "test@123qwe.com", userPassword: "Test@123"};
let tokendetails;


test.beforeAll( async () => 
  {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
      {
        data: loginPayload
      })
      //console.log("this responce we get is:", loginResponse);

      
      expect(loginResponse.ok()).toBeTruthy(); 

      
      const loginResponseJson = await loginResponse.json(); // imp we need to wait untill we extract the token.
      tokendetails = loginResponseJson.token;
      console.log(tokendetails);


      });
  
  
test('purchasing a product', async({page})=>{

  await page.addInitScript(value =>{
    window.localStorage.setItem('token', value)
  }, tokendetails);

  await page.goto("https://rahulshettyacademy.com/client/");

  // await page.getByPlaceholder("email@example.com").fill('test@123qwe.com');
  // await page.getByPlaceholder("enter your passsword").fill("Test@123");
  // await page.locator('#login').click();
  //await page.waitForTimeout(3000);
  
  await page.locator("(//button[contains(text(),'Add To Cart')])[2]").click();
  await page.waitForTimeout(2000);
  await page.locator("[routerlink='/dashboard/cart']").click();
  await page.locator('text=Checkout').click();
  //await page.pause();
  await page.locator("input[placeholder='Select Country']").pressSequentially('ind');
  const dropdown= page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();

  for (let i = 0; i < optionsCount; i++) {
    let text = await dropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
    
  }
  const textboxes = await page.locator("input.input.txt")
  await textboxes.nth(1).fill("222");
  await textboxes.nth(2).fill("sai teja");

  await page.locator(".btnn").click();
  
  const successMessage = page.locator(".hero-primary");
  await successMessage.waitFor();
  
  await page.screenshot({path: 'screenshotProof.png'});

  await expect(successMessage).toContainText(" Thankyou for the order. ");
 
});