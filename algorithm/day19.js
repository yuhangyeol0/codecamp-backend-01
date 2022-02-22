//모의고사

const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], //5개 패턴
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8개의 패턴
  //3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
];
function solution(answers) {
  var score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  const answer = [];
  const biggest = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

//메소드방법
function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  //최대로 맞춘 문제의 수를 가져옴
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  const answer = scoreList
    .filter((el) => {
      return biggest === el.score;
    })
    .map((el) => el.student);
  return answer;
}
