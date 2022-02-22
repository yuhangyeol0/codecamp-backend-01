//폰켓몬

function solution(nums) {
  var answer = new Set([]); //유니크한 값만 넣기 때문에 이미 있는 데이터는 넣지 않음

  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
    // if(answer.includes(nums[i])===false){
    //     answer.push(nums[i])
    // }
  }
  return answer.size;
}

var answer = new Set(nums).size; //유니크한 값만 넣기 때문에 이미 있는 데이터는 넣지 않음

const limit = nums.length / 2;

if (limit >= answer) {
  return answer;
}
return limit;
