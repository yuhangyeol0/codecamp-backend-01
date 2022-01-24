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
    const url = []

    url[0] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
    url[1] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
    url[2] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
    url[3] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
    url[4] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
    url[5] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
    url[6] = "https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
    url[7] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
    url[8] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
    url[9] = "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"

    for(let i =1 ; i<=10; i++){
        await page.waitForTimeout(2000)
        const myimg = url[i-1]
        const myname = await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,el => el.textContent)
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