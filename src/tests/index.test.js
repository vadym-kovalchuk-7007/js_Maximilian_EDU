const puppeteer = require('puppeteer');
const { prom } = require('../prom');

test('Check prom', async () => {
	return prom().then(data => {
		expect(data).toMatch(/promise/);
	});
});

test('Check brows', async () => {
	const browser = await puppeteer.launch({
		ignoreDefaultArgs: ['--disable-extensions'],
		headless: false,
	});
	const page = await browser.newPage();
	await page.goto('http://localhost:3030/');
	await page.locator('button#jokeBtn').click();
	const para = await page.waitForSelector('#someP');
	const textP = await para?.evaluate(el => el.textContent);
	expect(textP).toMatch(/Pi/);
}, 10_000);