//없는 숫자 더하기
function solution(numbers) {
    const answer = new Array(9).fill(1).reduce((cu,el,i)=>{
                                                        const num = el + i
                                                        return numbers.includes(num)
                                                        ? cu
                                                        : cu + num
                                                    }, 0)
    return answer

    // var answer = 0;
    
    // for(let i = 1; i<=9;i++){
    //     if(numbers.includes(i)===false){
    //         answer+=i
    //     }
    // }
    // return answer;
}

//두 정수 사이의 합
function solution(a, b) {
    var answer = 0;
    
    if(a===b){
        return a
    }else{
        // const start = a > b ? b : a
        // const end = a > b ? a : b
        const start = Math.min(a,b)
        const end = Math.max(a,b)
        for(let i = start; i <= end ; i++){
            answer += i
        }
    }
    return answer;
}


//하샤드 수
function solution(x) {
    // let plus =0
    // let num =String(x)
    // for(let i =0; i<num.length;i++){
    //     plus += +num[i] 
    // }
    // return x%plus === 0
    const answer = String(x).split('').reduce((cu,el)=> { return cu+ Number(el)},0)
    return x%answer ===0;
}