const{Given,When,Then}=require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const playwright = require('@playwright/test');


        Given('user opens the page',async function () {
           await this.poManager.getLoginpage().URLhit();  
         });


        When('the user provide incorrect {string} and {string} and submit the page',async function (username, password) {
      
            await this.poManager.getLoginpage().login(username,password);
         });  


         Then('user verify error message is displayed',async function () {
           
             await this.poManager.getLoginpage().errorMSG();
         });