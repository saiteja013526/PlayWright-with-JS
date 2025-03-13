import { test, expect } from '@playwright/test';

test("waiting until the element loads", async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
  
  //await page.waitForLoadState('networkidle');

  await page.locator("h4.card-title").last().waitFor();   //  2.  this wait for doesnot support multiple elements..
  const titles = await page.locator("h4.card-title").allTextContents();  // 1.   this returns an empty array because allTextContents() do not wait untill the element loads.
  console.log(titles);
});