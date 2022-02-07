const puppeteer = require('puppeteer');
const fs = require('fs/promises');
numeroAWB = "02029680906" ;

async function start(){
    const browser = await puppeteer.launch({ headless:false, args: [`--window-size=1280,720`], defaultViewport: {width:1280,height:720}});
    //delete headless:false, if you don't want to monitor the webpage activity

    const page = await browser.newPage();
    await page.goto("http://portal.tca.aero/gestion_web/tca-guias-aereas-web/guia.html");
    await page.waitForTimeout(200)
    await page.keyboard.type(numeroAWB,{delay: 100});
    await page.keyboard.press("Tab",{delay: 10});
    await page.keyboard.press('ArrowRight',{delay: 10});
    await page.keyboard.press("Tab",{delay: 10});
    await page.keyboard.press("Enter",{delay: 10});
    await page.waitForTimeout(1000)
    await page.screenshot({path:"TCA Ingreso "+numeroAWB+".png"});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Enter",{delay: 100});
    await page.waitForTimeout(1000)
    await page.screenshot({path:"TCA Ingreso "+numeroAWB+" 2 .png"});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Tab",{delay: 100});
    await page.keyboard.press("Enter",{delay: 100});
    await page.waitForTimeout(1000)
    await page.screenshot({path:"TCA Ingreso "+numeroAWB+" Acta de Dimension.png"});

    await browser.close();
}

start();
