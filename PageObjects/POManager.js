const{LoginPage} = require('../PageObjects/LoginPage');
const {SuccessPage} = require('../PageObjects/SuccessPage');
/**
 * @class POManager
 * @description Manages all page object classes
 */

class POManager{

    constructor(page){
       // this.page =page;
        this.loginpage = new LoginPage(page);
        this.successPage = new SuccessPage(page);
    }
  /** @returns {LoginPage} */

     getLoginpage(){
        return this.loginpage ;
    }
    /** @returns {SuccessPage} */

     getSuccessPage(){
        return this.successPage;
    }
}
module.exports ={POManager};