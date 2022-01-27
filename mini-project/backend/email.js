import {getCreatedAt} from './utils.js';
import axios from 'axios'
import cheerio from 'cheerio'

export function checkValidationEmail(email){
    if(email === undefined || !email.includes('@')){
        console.log("이메일 형식을 확인해주세요")
        return false
    }else {
        return true
    }
}

export function getWelcomeTemplete({name}){ 
    const createdAt = getCreatedAt()

    return ` 
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다 !</h2>
            <hr/>
            <div>이름 : ${name}</div>
            <div>가입일 : ${createdAt}</div>
        </body>
    </html>
    ` 
}

export async function sendTempleteToEmail(email, mytemplete){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey = process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER

    const result = await axios.post(`https://api-mail.cloud.toast.com//email/v2.0/appKeys/${appKey}/sender/mail`,
    {
        senderAddress: sender,
        title:`[gyeoriii.shop]안녕하세요. 가입을 환영합니다`,
        body: mytemplete,
        receiverList: [{receiveMailAddr: email, receiveType:"MRT0"}]
    },
    {
        headers: {
            "X-Secret-Key": XSecretKey,
            "Content-Type": "application/json;charset=UTF-8"
    }
    })
    // console.log('전송완료')
    // console.log(result)



    // console.log(email+'로' + mytemplete+'을 전송합니다.')
}

export async function getOpenGraph(prefer){
    const obj = {}
    if (prefer.includes('http')){ 
        const html = await axios.get(prefer)
        const $ = cheerio.load(html.data)
        $('meta').each((_, el)=>{
            const key = $(el).attr('property')?.split(':')[1]
            if(key){
                const value = $(el).attr('content')
                obj[key] = value
            }        
        })
    return obj
    }
  }


