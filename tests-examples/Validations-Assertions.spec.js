import {test, expect} from '@playwright/test';

/**
 * this test case is an example for handling different elements such as dropdowns check boxes links and child windows. after handling them we ginna verify the actual result with our expectations using the assertions.
 */


test('validations and assertions', async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");

  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  await page.locator(".checkmark").last().click();
  //await page.pause();
  await page.locator("#okayBtn").click();

  await expect(page.locator(".checkmark").last()).toBeChecked();

  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();  // or we can assert with a boolean condition. 
  expect(await page.locator("#terms").isChecked()).toBeTruthy();

  const blinkingtext = page.locator(".blinkingText");
  await expect (blinkingtext).toHaveAttribute('class','blinkingText');
   
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
});