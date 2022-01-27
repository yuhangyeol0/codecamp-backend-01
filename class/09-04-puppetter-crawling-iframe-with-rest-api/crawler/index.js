import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import{Stock} from './models/stock.model.js'


mongoose.connect("mongodb://localhost:27017/codecamp")

async function startCrawling(){

    const browser = await puppeteer.launch({ headless : false })
    const page = await browser.newPage()
    await page.setViewport({ width:1280, height:720 })
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    
    const myIframePage = await page.frames().find(iframe => iframe.url().includes("/item/sise_day.naver?code=005930"))


    for(let i =3 ; i<=7; i++){
        await page.waitForTimeout(2000)
       
        
        const mydate = await myIframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,el => el.textContent)
        const myprice = await myIframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,el => el.textContent)
        const stock = new Stock({
                    name: "삼성전자",
                    date: mydate,
                    price: Number(myprice.replace(",",""))
        })
     
        await stock.save()
        console.log(`날짜:${mydate},가격: ${myprice}`)
    }
    
  
    await browser.close()
}

startCrawling()