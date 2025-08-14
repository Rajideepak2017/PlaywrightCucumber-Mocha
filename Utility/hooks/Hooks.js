const{Before,After,AfterStep,Status} = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const {POManager}= require('../../PageObjects/POManager')

Before (async function (scenario){
  console.log(" Before hook executing...");
const tags = scenario.pickle.tags.map(tag => tag.name);
  let browserType = 'chromium'; // default

  if (tags.includes('@firefox')) browserType = 'firefox';
    const browser = await playwright[browserType].launch({headless :false});
    const context= await browser.newContext({storageState : 'storage/auth.json'});
    const page = await context.newPage();
    this.page = page;
    this.poManager = new POManager(page);

});

AfterStep (async function({result}){
   if (result.status === Status.PASSED || result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `Screenshots/${result.status}-final-${Date.now()}.png`,
      fullPage: true
    });
     
  }


});

After (async function(){
    if(this.page){
        await this.page.close();
    }

    const context = this.page.context();
  if (context) {
    await context.close();
    const browser = context.browser();
    if (browser) {
      await browser.close();
    }
  }

});

