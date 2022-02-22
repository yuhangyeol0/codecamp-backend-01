//2016년
function solution(a, b) {
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();

  let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return arr[day];
}

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);
  return week[answer % 7];
  //   let answer = 0;
  //   for (let i = 1; i < a; i++) {
  //     answer += month[i];
  //   }
  //   answer += b - 1;
  //   return week[answer % 7];
}
