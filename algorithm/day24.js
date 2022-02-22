//예산
function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  // // console.log(d)
  // for(let i in d){
  //   budget-=d[i]
  //   if(budget>=0){
  //     answer++
  //   }
  // }
  // return answer;

  // while(budget -d[answer]>=0){
  //     budget-=d[answer]
  //     answer++
  // }
  // return answer
}
//메서드
function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money;
      if (budget >= 0) {
        return money;
      }
    });
  return answer.length;
}

//피보나치
function solution(n) {
  let prev = 0; //F[0]
  let next = 1; //F[1]
  let sum = 1; //F[0]+F[1]

  //     const answer=[]
  //     for(let i=2; i<=n;i++){
  //         sum=(prev+next)%1234567
  //         prev=next //n-1 값 할당
  //         next=sum //이전 피보나치 수의 값

  //         answer.push(sum)
  //     }
  //     return answer[n-2]

  const answer = new Array(n).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
  return answer;
}
