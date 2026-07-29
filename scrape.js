const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto('https://0f649893-eac9-4792-a4d0-0747bef31178-render.magicpatterns.app/?', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 5000)); // wait for rendering
  await page.screenshot({ path: 'C:\\Files\\Projects\\pointz-3d-demo\\design.png', fullPage: true });
  const html = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('C:\\Files\\Projects\\pointz-3d-demo\\design.txt', html);
  await browser.close();
  console.log("Done");
})();
