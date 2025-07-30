const {test,expect}=require('@playwright/test');
const {POManager} = require('../PageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../Utility/Config.json')));

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