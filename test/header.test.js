const puppeteer = require('puppeteer');

let browser,page;

beforeEach(async()=>{

     browser = await puppeteer.launch({
        headless:false
    }
    );

     page = await browser.newPage();
    await page.goto('localhost:3000');

},20000);

afterEach(async()=>{
    await browser.close();
});

test("Open Browser",async () => {

    
    const text = await page.$eval('a.brand-logo', el => el.innerHTML);

    expect(text).toEqual('Blogster');

});

test("Click and check url",async () => {

    
    await page.click('.right a')

    const url = page.url();
    expect(url).toMatch(/accounts\.google\.com/);
});