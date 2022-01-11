function getToken(mycount){
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
    console.log(result)
}

getToken(5)

//-> 안전성uppppp