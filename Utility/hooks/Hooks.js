const{Before,After,AfterStep,Status} = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const {POManager}= require('../../PageObjects/POManager')
const fs = require('fs');
const path = require('path');

const configPath = JSON.parse(JSON.stringify(require('../Config.json')));




Before(async function (scenario) {
  console.log("Before hook executing...");

  const tags = scenario.pickle.tags.map(tag => tag.name);
  let browserType = configPath.default;

  for (const tag of tags) {
    if (configPath.tagMapping[tag]) {
      browserType = configPath.tagMapping[tag];
      console.log(`Running ${scenario.pickle.name} on ${browserType}`);

      break;
    }
  }

  const browser = await playwright[browserType].launch({headless :false});
  const context = await browser.newContext({storageState : 'storage/auth.json'});
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

After(async function () {
  if (this.page) {
    const context = this.page.context();
    const browser = context.browser();

    // Close page first
    await this.page.close();

    // Then close context
    if (context) {
      await context.close();
    }

    // Finally close browser
    if (browser) {
      await browser.close();
    }
  }
});

