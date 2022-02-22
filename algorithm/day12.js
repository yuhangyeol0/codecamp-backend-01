//콜라츠추측
function solution(num) {
    var answer = 0;

    new Array(500).fill(1).forEach(el => {
        if(num!==1){
            answer++
            num= num%2 ===0 ? num/2 : (num*3)+1
        }
    })
    return num!==1?-1:answer

    // for(let i=0;i<500;i++){
    //     if(num===1){
    //         break
    //     }
    //   answer++
    //   if(num%2===0){
    //     num/=2
    //   }else{
    //     num=(num*3)+1
    //   }
    // }
    // return num!== 1? -1 : answer
}  


//두 개 뽑아서 더하기
function solution(numbers) {
    var answer = 0;
    for(let i=0;i<numbers.length;i++){
      for(let l=i+1; l<numbers.length; i++){
              const sum= numbers[i]+numbers[l]
              answer.add(sum)
            }
     }
    return Array.from(answer).sort((a,b)=>a-b)
    //     if(answer.includes(sum)===false){
    //         answer.push(sum)
    //       }
    //     }
    //   }
    // return answer.sort((a,b)=>a-b)
}
