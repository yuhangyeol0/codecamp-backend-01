import axios from 'axios'
import cheerio from 'cheerio'

async function getOpenGraph(){

    const myaddress = mydata.contents.split(" ").filter((el)=>el.includes("http"))

    const html = await axios.get(myaddress[0])
    const $ = cheerio.load(html.data)
    console.log('a')
    $('meta').each((_, el)=>{

        /*if($(el).attr('property)){
            const key=$(el).attr('property).split(":")[1]
        } */
        
        const key = $(el).attr('property')?.split(':')[1] //og랑 타이틀로 나눠짐[1]은 타이틀
        console.log(key)
        if(key){
            const value = $(el).attr('content')
            console.log(key, value)
        }        
    })
    // console.log(html)
}


const mydata = {
    title:"안녕하세요~~~",
    contents: "여기 정말 좋아요 ~~~ 꼭 한번 놀러오세요 https://naver.com"
}

getOpenGraph()