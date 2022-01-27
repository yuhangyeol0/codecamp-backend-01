import {getCreatedAt} from './utils.js';

export function checkValidationEmail(email){
    if(email === undefined || !email.includes('@')){
        console.log("이메일 형식을 확인해주세요")
        return false
    }else {
        return true
    }
}

export function getWelcomeTemplete({name, age, school}){ 
    const createdAt = getCreatedAt()

    return ` 
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다 !</h2>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${createdAt}/div>
        </body>
    </html>
    ` 
}

export function sendTempleteToEmail(email, mytemplete){
    console.log(email+'로' + mytemplete+'을 전송합니다.')
}