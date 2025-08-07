const {test,expect}=require('@playwright/test');

const {POManager} = require('../PageObjects/POManager');

const { BeforeAll, context } = require('@cucumber/cucumber');
const dataset = JSON.parse(JSON.stringify(require('../Utility/Config.json')));

test.use({ storageState: 'storage/auth.json' });

test('Access dashboard with saved session', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});



test('@web first test',async ({page})=>{
   const poManager = new POManager(page);
   const login =poManager.getLoginpage();
   const success =poManager.getSuccessPage();
   
   await login.URLhit();
   await expect(page).toHaveTitle(dataset.PageURL.PageTitle);
   await login.login(dataset.validUser.username,dataset.validUser.password);
   await success.successurl(dataset.PageURL.pageURL);
   await success.verifySuccessMessage(dataset.PageURL.SuccessMSG);
   await success.logoutText();

}
)


test('second test',async ({page})=>{
   const poManager = new POManager(page);
   const login =poManager.getLoginpage();
   const success =poManager.getSuccessPage();
   
   await login.URLhit();
   await expect(page).toHaveTitle(dataset.PageURL.PageTitle);
   await login.login(dataset.invalidUser.username,dataset.invalidUser.password);
   await login.errorMSG();
   

}
)