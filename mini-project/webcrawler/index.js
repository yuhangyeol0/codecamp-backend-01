import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import{Starbucks} from './models/starbucks.model.js'


mongoose.connect("mongodb://localhost:27017/codecamp")

async function startCrawling(){

    const browser = await puppeteer.launch({ headless : false })
    const page = await browser.newPage()
    await page.setViewport({ width:1280, height:720 })
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    
    //const myIframePage = await page.frames().find(iframe => iframe.url().includes("/item/sise_day.naver?code=005930"))
  

    for(let i =1 ; i<=10; i++){
        await page.waitForTimeout(2000)
        // const myimg = url[i-1]
        const myname = await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,el => el.textContent)
        const myimg = await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`, (el)=>el.getAttribute('src'))
        const starbucks = new Starbucks({
                    name: myname,
                    img: myimg
        })
     

        await starbucks.save()
        console.log(`이름:${myname}, 이미지: ${myimg}`)
    }
    
  
    await browser.close()
}

startCrawling()