//신규 아이디 추천
const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  new_id = new_id.toLowerCase();
  let answer = "";
  for (let i in new_id) {
    if (filter.includes(new_id[i])) {
      answer = +new_id[i];
    }
  }
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substr(0, answer.length - 1);
    }
  }
  if (answer[0] === ".") {
    answer = answer.substr(1);
  }

  if (answer === "") {
    answer = "a";
  }
  if (answer.length >= 16) {
    answer = answer.substr(0, 15);
    removeLastDot();
  }
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

//메서드
const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  //1
  new_id = new_id.toLowerCase();
  //2
  let answer = new_id.split("").filter((str) => filter.includes(str));
  //3
  answer = answer.filter((str, i) => {
    return (str === "." && answer[i + 1] !== ".") || str !== ".";
  });
  //4
  if (answer[0] === ".") {
    answer.splice(0, 1);
  }
  //5
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1);
    }
  }

  //6
  if (answer.length === 0) {
    answer = ["a"];
  }
  //7
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }
  return answer.join("");
}
