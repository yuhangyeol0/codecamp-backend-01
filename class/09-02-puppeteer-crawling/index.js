import puppeteer from 'puppeteer'

async function startCrawling(){

    const browser = await puppeteer.launch({ headless : false }) //true하면 브라우저 꺼짐
    const page = await browser.newPage()
    await page.setViewport({ width:1280, height:720 })
    await page.goto("https://www.goodchoice.kr/product/search/2")
    await page.waitForTimeout(1000)


    const hotel = await page.$eval("#poduct_list_area > li:nth-child(5) > a > div > div.name > strong",el => el.textContent)
    const location = await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",el => el.textContent)
    //const price = await page.$eval("#product_list_area > li:nth-child(2) > a > div > div.price > p > b", el => el.textCount)


    console.log(hotel)
    //console.log(price)
    console.log(location.trim())

    await browser.close()
}

startCrawling()