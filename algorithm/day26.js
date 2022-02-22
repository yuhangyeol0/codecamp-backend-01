//3진법 뒤집기
function solution(n) {
  n = n.toString(3);
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  return parseInt(reverse, 3);
}

//메소드
function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

//이진변환 반복하기
function solution(s) {
  let answer = 0;
  let remove = 0;

  while (s !== "1") {
    count++; //변환횟수 = 반복횟수
    //1. 0제거
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i]; //1만 들어옴
    }
    s = temp.length;
    s = s.toString(2); //결과가 1이 아니라면 다시 반복문 실행
  }

  return [count, remove];
}
//메소드
function solution(s) {
  let [count, remove] = [0, 0];
  function recursion(s) {
    if (s === "1") {
      return [count, remove];
    }
    const removeList = s.split("").filter((el) => el === "0");
    remove += removeList.length;
    s = s.split("").filter((el) => el !== "0");

    return recursion(s.toString(2));
  }
  return recursion(s);
}
