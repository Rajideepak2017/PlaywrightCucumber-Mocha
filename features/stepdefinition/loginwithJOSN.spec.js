const{Given,When,Then}=require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const playwright = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require('../../Utility/Config.json')))






Given('the  user hit the website',async function () {
           
      console.log("Page:", this.page);   
      await this.poManager.getLoginpage().URLhit();
           
         });
When('the user provide username and password', async function () {
   
         const{username,password}=dataset.validUser;
         console.log(username,password);
          await this.poManager.getLoginpage().login(username,password)
         });         
Then('the user verifies the new page contains logged-in-successfully URL',async function () {
           const {pageURL,SuccessMSG}= dataset.PageURL;
           await this.poManager.getSuccessPage().successurl(pageURL);
           
         });        
Then('the user Verifies new page contains expected text Congratulations',async function () {
           const {SuccessMSG}= dataset.PageURL;
           await this.poManager.getSuccessPage().verifySuccessMessage(SuccessMSG);
         });

Then('the user verifies button Log out is displayed on the success page', async function () {

          await this.poManager.getSuccessPage().logoutText();
         });