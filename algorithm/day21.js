//시저암호

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      continue;
    }
    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 //
        ? alphabet.slice(26, alphabet.length) //대문자
        : alphabet.slice(0, 26); //소문자
    index = word.indexOf(s[i]) + n; // n값만큼 밀어준다
    index += n; //n값 만큼 밀어준다
    if (word[index] === undefined) {
      index -= 26;
    }
    answer += word[index];
  }
  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장
function solution(s, n) {
  //   let answer = "";
  //   for (let i = 0; i < s.length; i++) {
  //       if(s[i]===" "){
  //           answer+=" "
  //           continue;
  //       }
  //     const word = lower.includes(s[i]) ? lower ? upper;
  //     let index = word.indexOf(s[i])+n
  //     if(index>=26){index-=26}
  //     answer +=word[index]
  //   }
  // return answer
  const answer = s.split(" ").map((str) => {
    if (str === " ") {
      return str;
    }
    const word = lower.includes(str) ? lower : upper;
    let index = word.indexOf(str) + n;
    if (index >= 26) {
      index -= 26;
    }
    return word[index];
  });
  return answer.join("");
}

//아스키코드 방법으로
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      //소문자 z 122를 넘어가거나
      //대문자 Z 90을 넘어가면서
      // 기존의 index값 (n밀어주기 전)의 값이 소문자인 경우
      index -= 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}
