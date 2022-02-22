//문자열 p와y의 개수
function solution(s){
    s=s.toLowerCase()
    const obj = {p:0, y:0}
    //var answer = true;
    /*let p = 0
    let y = 0
    for(let i=0;i<=s.length;i++){
        if(s[i]==='p'){
            p++
        }else if(s[i]==='y'){
            y++
        }
    }*/
    /*for(let i = 0; i<s.length;i++){
        obj[s[i]===undefined] ? obj[s[i]]=1 : obj[s[i]]++
    }*/
    s.split("").forEach(str => {
        obj[str] === undefined ? obj[str]=1 : obj[str]++
    });

    return obj.p===obj.y
}

//이상한 문자 만들기
function solution(s) {
/*    var answer = '';
    let idx = 0
    for(let i=0;i<s.length;i++){
        if(s[i]==" "){
            //공백을 만나면 공백을 넣어줌(예외처리)
            answer+=" "
            idx = 0
        }else{
            answer+=idx%2===0 ? s[i].toUpperCase() : s[i].toLowerCase()
            idx++
        }
    }
    
    return answer;*/
    const answer=s.split(" ").map((word) => {
        return word.split("").map((letter, i)) => { 
            return i%2 ===0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join()
    }).join()
    return answer
}

//자연수 뒤집어 배열로 만들기
function solution(n) {
    n=n.toString()
    for(let i=n.length-1;i>=0;i--){
        answer.push(Number(n[i]))
    }
    return answer
//    return n=String(n).split('').reverse().map((x)=>Number(x))  
}


//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
/*    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor===0){
            answer.push(arr[i])
        }         
    }
    if(answer.length===0){
            answer.push(-1)
        }
  return answer.sort((a,b)=>a-b)*/
    const answer = arr.filter(number=>{return number%divisor})
    return answer.length===0 ? [-1] : answer.sort((a,b)=> a-b)
    
}