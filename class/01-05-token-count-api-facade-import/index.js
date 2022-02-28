import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

// API 만들기

function createTokenOfPhone(myphone){
    // 1. 핸드폰 번호 자릿수 확인
    const isValid = checkValidationPhone(myphone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken(4)         
        // 3. 핸드폰 번호에 도큰 전송하기
        sendTokenToSMS(myphone,mytoken)
    }
}


//API 실행하기
createTokenOfPhone("01012345678")

