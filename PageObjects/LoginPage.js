const { expect } = require("@playwright/test");

class LoginPage{
    /**
        //@param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.username = '#username';
        this.password = '#password';
        this.submit = '#submit';
        this.error ='#error';
    }


    async login(username,password){
        
        await this.page.waitForSelector(this.username);

        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password)
        await this.page.click(this.submit)
        
       
    }

    async URLhit(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }


    async errorMSG(){
     const error =  await this.page.locator(this.error);
     console.log(await error.textContent());
     await expect(error).toBeVisible();

    }
}
module.exports = { LoginPage };
