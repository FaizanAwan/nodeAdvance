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

test('check session',async()=> {

    const id = '5b49d37e33797d21dc486c12';

    const Buffer = require('safe-buffer').Buffer;
    const sessionObject = {
        passport:{
            user: id
        }
    };

    const sessionString = Buffer.from(
        JSON.stringify(sessionObject)).toString('base64');

    const Keygrip = require('keygrip');
    const keys = require('../config/keys');
    const keygrip = new Keygrip([keys.cookieKey]);
    const sig = keygrip.sign('session='+sessionString);
    console.log(sessionString,sig);

});