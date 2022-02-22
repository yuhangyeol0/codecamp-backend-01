function solution(s) {
    // var answer = '';
    let center = Math.floor(s.length/2)
    // let answer=s[center]
    // if(s.length%2===0){
    //     answer=s[center-1]+answer
    // }
    // return answer
    const answer = s.length%2===1
    ? s[center]
    : s.slice(center-1, center+1);
    
    return answer
     
}


function solution(seoul) {
    const x = seoul.indexOf('Kim')
    return `김서방은 ${x}에 있다`;
    
    

    // for(let i=0; i<seoul.length;i++){
    //     if(seoul[i]==="Kim"){
    //      return `김서방은 ${i}에 있다`;
    //     }
    //  }
}



function solution(s) {
    if(s.length!==4 && s.length!==6){
        return false
    }
    // var answer = true;
    // for(let i = 0; i<s.length ; i++){
    //     if(isNaN(s[i])){
    //         return false
    //     }
    // }
    // return true
    const answer= s.split("").filter(num=>{
        //num가 숫자가 아닌 문자타입만 남김, isNaN의 결과가 true인 결과만 남김
        return isNaN(num)
    })
    return answer.length===0;
    
}



function solution(n) {
    // var answer = 0;
    // for(let i = 1;i<=n;i++){
    //     if(n%i===0){
    //         answer+=i
    //     }
    // }
    // return answer;
    const answer=new Array(n).fill(1).reduce((cu, el, idx)=>{
        const num = el+idx
        return n%num === 0 ? cu+num : cu
    },0)
    
    return answer
    
}