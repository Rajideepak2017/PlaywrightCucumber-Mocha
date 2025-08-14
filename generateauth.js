const { chromium } = require('playwright');
const fs = require('fs');

if (!fs.existsSync('storage')) {
  fs.mkdirSync('storage');
}

(async () => {
  try {
    const browser = await chromium.launch({ headless: false }); // debug mode
    const page = await browser.newPage();

    console.log('Navigating to login page...');
    await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'domcontentloaded' });

    console.log('Waiting for username field...');
    await page.waitForSelector('#username', { timeout: 10000 });

    console.log('Filling credentials...');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');

    await page.context().storageState({ path: 'storage/auth.json' });
    await browser.close();

    console.log('✅ Session saved to storage/auth.json');
  } catch (err) {
    console.error('❌ Error in generateauth.js:', err);
    process.exit(1);
  }
})();