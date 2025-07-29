const {testrequire}=('@playwright/test')

const {pOManager, POManager} = require('../PageObjects/POManager')
test('first',async (page)=>{
   const poManager = new POManager(page);
   const login =poManager.getLoginpage();
const success =poManager.getSuccessPage();
success.verifySuccessMessage();
login.URLhit();
}
)