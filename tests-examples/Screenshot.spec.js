import{test, expect} from '@playwright/test';

test('screenshot comparision', async ({page})=>{
  page.goto("https://google.com/");
  page.screenshot({path: 'google home page.png'});
  expect(await page.screenshot()).toMatchSnapshot('landingpage.png');
})