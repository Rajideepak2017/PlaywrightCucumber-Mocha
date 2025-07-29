const{Given,When,Then}=require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const playwright = require('@playwright/test');



  Given('the  user launch the website',async function () {
      console.log("PO Manager:", this.poManager); // Diagnostic check
      console.log("Page:", this.page);   
      await this.poManager.getLoginpage().URLhit();  
      await this.page.screenshot();  
         });

  When('the user provide {string} and {string}',async function (username, password) {
      console.log("when step  "+username, password)
      await this.poManager.getLoginpage().login(username,password)
      await this.page.screenshot();  
         });      

 Then('the user verifies the new page contains {string}', async function (URL) {
         
      await this.poManager.getSuccessPage().successurl(URL);
      await this.page.screenshot();  
         });  

 Then('the user Verifies new page contains expected text {string}', async function (Mesaage) {
      
      await this.poManager.getSuccessPage().verifySuccessMessage(Mesaage);
      await this.page.screenshot();  
 });
         
 Then('the user verifies button Log out is displayed on the new page', async function () {

      await this.poManager.getSuccessPage().logoutText();
      await this.page.screenshot();  
         });       