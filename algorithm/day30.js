//키패드 누르기
const leftNumbers = [1, 4, 7];
const rightNumbers = [3, 6, 9];
function solution(numbers, hand) {
  var answer = "";
  const current = {
    left: 10,
    right: 12,
  };
  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      answer += "L";
      current["left"] = numbers[i]; //왼쪽 손가락 위치 변경
    } else if (rightNumbers.includes(numbers[i])) {
      //누를 번호가 오른쪽 키패드에 해당하는 경우(오른쪽 손가락으로 누를 경우)
      answer += "R";
      current["right"] = numbers[i]; //오른쪽 손가락 위치 변경
    } else {
      //가운데 번호 누를 때
      const locationObj = { ...current }; //왼쪽과 오른쪽 위치 차이 저장

      for (let hand in locationObj) {
        //0번 눌렀을때의 예외처리-> 0번은 11위치값으로 처리
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        //왼쪽과 오른쪽의 엄지손가락으로 부터 거리값을 구해옴
        let location = Math.abs(numbers[i] - locationObj[hand]);
        //상하로 이동 가능
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[hand] = location;
      }
      if (locationObj["left"] === locationObj["right"]) {
        //왼쪽 손가락의 위치와 오른쪽 손가락의 위치 동일할 경우 주로 사용하는 손가락 이용
        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          answer += "R";
          current["right"] = numbers[i];
        } else {
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return answer;
}
//메서드
const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
]; // 비구조화 할당
function solution(numbers, hand) {
  const current = {
    left: 10,
    right: 12,
  };
  const answer = numbers.reduce((acc, cur, i) => {
    let [useFinger, target, number] = ["", "", 0];
    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      const fingers = Object.entries(current).reduce((acc2, cur2) => {
        const targetHand = cur2[0];
        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);
        if (location > 2) {
          // ===>=3
          location = Math.trunc(location / 3) + (location % 3);
        }
        acc2[targetHand] = location;
        return acc2;
      }, {});
      if (fingers["left"] === fingers["right"]) {
        [useFinger, target, number] = [
          hand === "left" ? "L" : "R",
          hand === "left" ? hand : "right",
          cur,
        ];
      } else if (fingers["left"] > fingers["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }
    current[target] = number;
    return acc + useFinger;
  }, "");
  return answer;
}
