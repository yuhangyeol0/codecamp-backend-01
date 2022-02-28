//기능개발
//내 답

function solution(progresses, speeds) {
    var answer = [];
  	var day =[];
    var cnt=[]
  	var count = 1
  
  for(let i in progresses){
  	day.push(Math.ceil((100-progresses[i])/speeds[i]))
  }
  console.log(day)
  answer[0]=day[0]
  for(let i=1; i<=day.length; i++){
    if(answer[0]>=day[i]){
  		count++
      }else{
        cnt.push(count)
        answer[0]=day[i]
        count=1
      }
  }
    return cnt;
}

//메소드
function solution(progresses, speeds){
    let day=0
    const answer = progresses.map((el, i)=>{
        const process = Math.ceil((100-el)/speeds[i])
        if (process>day)day=process
        return day
    }).reduce((acc, cur, i, array)=>{
        if(cur!==answer[i-1]){
            acc[acc.length]=1
        }else{
            acc[acc.length-1]++
        }
        return acc
    },[])
}

//reduce만
function solution(progresses, speeds){
    let day=0
    const answer = progresses.reduce((acc, cur, i)=>{
        const process = Math.ceil((100-cur)/speeds[i])
        if(process>day){
            day=process
            acc[acc.length]=1
        }else if(process<=day){
            acc[acc.length-1]++
        }return acc
    },[])

}