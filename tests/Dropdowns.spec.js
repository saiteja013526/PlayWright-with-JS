import {test, expect} from '@playwright/test';

/**
 * this test case is an example for handling the dropdowns.
 */


test('handling the dropdowns in playwright', async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");

  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  await page.locator(".checkmark").last().click();
  //await page.pause();
  await page.locator("#okayBtn").click();

   
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
});