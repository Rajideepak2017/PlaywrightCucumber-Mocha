// global-setup.js
const playwright  = require('playwright');
const fs = require('fs');

module.exports = async () => {
  const browser = await playwright.chromium.launch({headless :false});
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  //await page.pause();
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  await page.click('#submit');

  await context.storageState({ path: 'storage/auth.json' });
  await browser.close();
};
