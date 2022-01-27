import axios from 'axios'


export function checkValidationPhone(myphone){
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러 발생 ! 핸드폰 번호를 제대로 입력해 주세요")
        return false
    }else {
        return true
    }
}


export function getToken(mycount){
    if (mycount ===undefined) {
        console.log("에러 발생 !")
        return
    } else if(mycount<=0){
        console.log("에러 발생 ! 1 이상의 수를 입력해 주세요")
        return
    } else if(mycount>10){
        console.log("에러 발생 ! 10 이하의 수를 입력해 주세요")
        return
    }
    const result = String(Math.floor(Math.random()*10**(mycount))).padStart(mycount,'0')
    return result
}


export async function sendTokenToSMS(a,b){
    const appKey = process.env.SMS_APP_KEY
    const XSecretKey = process.env.SMS_X_SECRET_KEY
    const sender = process.env.SMS_SENDER

    await axios.post(`https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`,
    {
        body:`안녕하세요. 인증번호는 [${b}]입니다.`,
        sendNo: sender,
        recipientList: [{internationalRecipientNo: a}]
    },
    {
        headers: {
            "X-Secret-Key": XSecretKey,
            "Content-Type": "application/json;charset=UTF-8"
    }
    })
    console.log('전송완료')
    // console.log(result)

    // console.log(a + "번호로 인증번호" + b + "를 전송합니다")
}