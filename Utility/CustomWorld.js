// world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const {POManager} = require('../PageObjects/POManager');

class CustomWorld {
  constructor() {
    this.page = null;
    this.poManager = null;// helps your IDE detect available methods

  }

  // async init(page) {
  //   this.page = page;
  //   this.poManager = new POManager(page);
  // }
}

setWorldConstructor(CustomWorld);