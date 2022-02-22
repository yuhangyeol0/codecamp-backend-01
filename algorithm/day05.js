function solution(arr)
{
    var answer = [];
    for(let i in arr){
      if(answer[answer.length-1]!==arr[i]){
         answer.push(arr[i])
         }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

function solution(phone_number) {
    var answer = '';
    answer=answer.padStart(phone_number.length-4,'*')
    answer+=phone_number.slice(-4)
    return answer;
}

function solution(num) {
    // var answer = '';
    return num % 2 ===0 ? "Even" : "Odd"
    
    // if(num%2===0){
    //     return 'Even'
    // }else
    //     return 'Odd'
    // return answer;
}


function solution(arr) {
    // var answer = 0;
    //     for(let i=0;i<arr.length;i++){
    //     answer+=arr[i]
    // }
    // answer/=arr.length
    // return answer;
    const sum=arr.reduce((cu, el)=>{
        console.log(cu, el)
        return cu+el
    })
}