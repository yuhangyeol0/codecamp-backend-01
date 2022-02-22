//내적
function solution(a, b) {
  const answer = a.reduce((cu, el, i) => {
    return cu(el * b[i]);
  }, 0);

  // var answer = 0;

  // for(let i =0; i<a.length; i++){
  //     answer+=a[i]*b[i]
  // }
  return answer;
}

//행렬덧셈
function solution(arr1, arr2) {
  const answer = arr1.map((num1) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  //   var answer = [[]];

  //   for (let i = 0; i < arr1.length; i++) {
  //     // const b = [];
  //     for (let j = 0; j < arr2[i].length; j++) {
  //       //   b.push(arr1[i][j] + arr2[i][j]);
  //       const sum = arr1[i][j] + arr2[i][j];
  //       if (answer[i] === undefined) {
  //         //i에 해당되는 인덱스로 접근했을 때 배열이 없을 대는 빈 배열 생성
  //         answer[i] = [];
  //       }
  //       answer[i][l] = sum; //i와 l 인덱스값으로 해당 위치에 데이터 삽입
  //     }
  //     // answer.push(b);
  //   }
  return answer;
}
