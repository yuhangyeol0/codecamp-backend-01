//음양 더하기

function solution(absolutes, signs) {
    // var answer = 0;
    // for(let i=0; i<absolutes.length; i++){
    //     answer+=signs[i] === true
    //     ? absolutes[i]
    //     : -absolutes[i]
    // }
    const answer = absolutes.reduce((cu, el, i)=> {
        return signs[i]? cu+el : eu - el
    },0)


    return answer;
}

//JadenCase문자열 만들기

function solution(s) {
    // var answer = '';
    // s=s.toLowerCase()
    
    // let idx=0
    // for(let i =0; i<s.length; i++){
    //     let word=s[i]
    //     if(s[i]===' '){
    //         idx = 0
    //     }else{
    //         if(idx===0){
    //             word=s[i].toUpperCase()
    //         }
    //         idx++
    //     }answer+=word
    // }
    // return answer;

    s=s.toLowerCaser().split(" ").map(str=>{return str === "" ? str : str[0].toUpperCase()+str.substr(1)}).join(" ")
    return s
}