function bigNum(str){
    let biggest = 0
    for(let i in str){
        if(Number(str[i])>biggest){
            biggest=Number(str[i])
        }
    }
    return biggest
}
bigNum(12345) // 5
bigNum(87135) // 8


function grade(score){
    if(score>100 || score<0){
      console.log("잘못된 점수입니다")
    }else if(90<=score){
      console.log("a")
    }else if(80<=score){
      console.log("b")
    }else if(70<=score){
      console.log("c")
    }else if(60<=score){
      console.log("d")
    }else{
      console.log("f")
    }
  }
  
  grade(105)  // "잘못된 점수입니다"
  grade(-10)  // "잘못된 점수입니다"
  grade(97)   // "A"
  grade(86)   // "B"
  grade(75)   // "C"
  grade(66)   // "D"
  grade(52)   // "F"

  
  count=0
cost=0
grade=0

for(let a in myShopping){
  if(myShopping[a].category==="의류"){
    count+=1
    cost+=myShopping[a].price
  }
}

if(count>=5){
  grade='Gold'
}else if(count==3||count==4){
  grade='Silver'
}else
  grade='Bronze'
  
console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${cost}원이며 등급은 ${grade}입니다.`)


function solution(s) {
  var answer = 0;
  if(s[0]!==0){
      answer=Number(s)
  }
   return answer;
}