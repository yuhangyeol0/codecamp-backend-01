//다트게임
const bouns = ["S", "D", "T"]; //보너스 잡아내기 위해 배열에 저장
const option = ["*", "#"]; //옵션을 잡아내기 위해 배열에 저장
function solution(dartResult) {
  const answer = [];
  let score = ""; //점수를 저장하기 위해 사용하는 변수
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      //숫자 타입으로 변환한 데이터가 NAN값이 아닌 경우(=숫자가 맞는 경우)
      score += dartResult[i];
    } else {
      //숫자 타입으로 변환한 데이터가 NaN값인 경우(숫자가 아닌경우)
      if (bouns.includes(dartResult[i])) {
        score = Number(score); //점수를 숫자 타입으로 변경
        if (dartResult[i] === "D") {
          //2재곱
          score = Math.pow(score, 2); //=score**2
        } else if (dartResult[i] === "T") {
          //3제곱
          score = Math.pow(score, 3);
        }
      }
      if (score !== "") {
        answer.push(score);
      }
      score = "";
    }
    if (option.includes(dartResult[i])) {
      //옵션이ㅣ 있는 경우
      if (dartResult[i] === "#") {
        //아차상인 경우, 해당 점수 -1 곱해줌
        answer[answer.length - 1] *= -1;
      } else {
        //스타상 *2
        answer[answer.length - 1] *= 2;
        if (answer.length > 1) {
          //앞에 점수가 있으므로 앞에 점수*2
          answer[answer.length - 2] *= 2;
        }
      }
    }
  }
  let sum = 0;
  for (let i in answer) {
    sum += answer[i];
  }
  return sum;
}
