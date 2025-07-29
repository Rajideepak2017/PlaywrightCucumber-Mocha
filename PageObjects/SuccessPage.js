const { expect } = require("@playwright/test");

class SuccessPage{
    constructor(page){
        this.page = page;
        this.success = '.post-content strong';
        this.logout ='.wp-block-button a';
    }

    async successurl(URL)
    {
        console.log("current page" +this.page);
        console.log(URL);
        await expect(this.page).toHaveURL(URL);
    }

    async logoutText(){
        const button = await this.page.textContent(this.logout);
        const buttontext='Log out';
         expect(button).toContain(buttontext);
    }
    async verifySuccessMessage(Mesaage){
        const MSGText = await this.page.textContent(this.success);
        expect(MSGText).toContain(Mesaage);

    }
}
module.exports = {SuccessPage};