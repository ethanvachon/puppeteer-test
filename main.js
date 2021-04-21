const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.click('.gLFyf')
  await page.keyboard.type("speed test")
  await page.keyboard.press('Enter')
  await page.waitForTimeout(1000)
  await page.click('.fSXkBc')
  await page.waitForTimeout(20000)
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();