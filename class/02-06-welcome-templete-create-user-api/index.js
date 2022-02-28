import {checkValidationEmail, getWelcomeTemplete, sendTempleteToEmail} from './email.js';


function createUser(user){
    //1. email이 정상인지 확인(이메일 존재여부, @여부)
    const isValid = checkValidationEmail(user.email)
    if(isValid){
        const mytemplete = getWelcomeTemplete(user)
     
    //2. 가입환영 템플릿 만들기 ~!! 
    
    //3. 이메일에 가입환영 템플릿 전송하기(지금은 아직 콘솔로 인출만)
    sendTempleteToEmail(user.email, mytemplete)
    }
}



const myuser ={
    name : '철수',
    age : 8,
    school : '다람쥐초등학교',
    email : "abc@a.com"
}


createUser(myuser)