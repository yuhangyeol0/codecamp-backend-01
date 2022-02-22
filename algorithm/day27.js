//비밀지도
function solution(n, arr1, arr2) {
  var answer = "";

  for (let i in arr1) {
    arr1[i] = arr1[i].toString(2).padStart(n, "0");
    arr2[i] = arr2[i].toString(2).padStart(n, "0");
  }
  for (let l = 0; l < arr1.length; l++) {
    if (arr1[l] === "1" || arr2[l]) {
      answer[i] += "#";
    } else {
      answer[i] = +" ";
    }
  }
  return answer;
}
//메소드
function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, l) => {
      return acc + (cur === "1" || map2 === "1" ? "#" : " ");
    }, "");
  });
  return answer;
}
