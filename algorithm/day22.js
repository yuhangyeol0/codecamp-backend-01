//숫자 문자열과 영단어

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(s) {
  //포문으로 쓰는법
  // for(let i=0; i<numbers.length;i++){
  //     while(s.includes(numbers[i])){
  //         s=s.replace(numbers[i],i)
  //     }
  // }
  // 메소드로 쓰는법
  // numbers.forEach((el, i)=>{s=s.split(el).join(i)})
  // return Number(s);

  //정규표현식
  //표현식 사용법 : 슬래시 사이에 검증할 문자열 넣어줌
  //g:문자열 전체에서 검색
  //     s=s.replace(/zero/g,0)
  //     s=s.replace(/one/g,1)
  //     s=s.replace(/two/g,2)
  //     s=s.replace(/three/g,3)
  //     s=s.replace(/four/g,4)
  //     ...
  //     return Number(s)
  for (let i = 0; i < numbers.length; i++) {
    const reg = new RegExp(numbers[i], "g");
    s = s.replace(reg);
  }
}
//소수만들기
function solution(nums) {
  //포문 돌리기
  //var answer = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let l = i + 1; l < nums.length; l++) {
  //       for (let j = l + 1; j < nums.length; j++) {
  //         const sum = nums[i] + nums(l) + nums[j];

  //         let count = 0;
  //         for (let o = 1; 0 <= sum; o++) {
  //           if (sum % o === 0) {
  //               //약수 구해오는것
  //             count++;

  //             if (count > 2) {
  //               break;
  //             }
  //           }
  //         }
  //         if (count === 2) {
  //           answer++;
  //         }
  //       }
  //     }
  //   }

  //   return answer;
  //메소드 사용
  var answer = 0;
  var index = 0;
  //첫i가 0일때
  nums.forEach((num1, i) => {
    index = i + 1; //i가 1부터
    nums.slice(index).forEach((num2) => {
      index += 1; //i가 2부터
      nums.slice(index).forEach((num3) => {
        const sum = num1 + num2 + num3;
        let count = 0;
        if (sum % 2 === 1) {
          //홀수일때만
          for (let o = 1; o <= sum; i++) {
            if (sum % o === 0) count++;
            if (count > 2) {
              answer++;
            }
          }
        }
      });
    });
  });
  return answer;
}
