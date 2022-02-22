//실패율
function solution(N, stages) {
  var failArr = [];
  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    failArr.push({
      stage: i, //스테이지 번호
      users: 0, //클리어 하지 못한 유저의 수
      fail: 0, //실패율
    });
  }
  let allusers = stages.length; //총 유저 수 저장
  for (let i = 0; i < stages.length; i++) {
    if (failArr[stages[i] - 1] !== undefined) {
      failArr[stages[i] - 1].users++;
    }
    if (stages[i] !== stages[i + 1]) {
      const fail = failArr[stages[i] - 1].users / allusers;
      allusers -= failArr[stages[i] - 1].users;

      failArr[stages[i] - 1].fail = fail;
    }
  }
  const answer = failArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => {
      return el.stage;
    });
  return answer;
}

//메서드
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let allusers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allusers;
      allusers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;
}
