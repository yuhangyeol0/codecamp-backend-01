
// API 만들기


function createTokenOfPhone(myphone){
    // 1. 핸드폰 번호 자릿수 확인
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러 발생 ! 핸드폰 번호를 제대로 입력해 주세요")
        return
    }

    // 2. 핸드폰 토큰 6자리 만들기
    const mycount = 6
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
    
    
    // 3. 핸드폰 번호에 도큰 전송하기
    console.log(myphone + "번호로 인증번호" + result + "를 전송합니다")
}



//API 실행하기
createTokenOfPhone("01012345678")

