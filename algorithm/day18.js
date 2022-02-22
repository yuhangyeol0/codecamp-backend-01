//완주하지 못한 선수

function solution(participant, completion) {
// splice쓰면 효율성 문제생김
    // var answer =''
    // for(let i=0; i<completion.length; i++){
    //     if(participant.includes(completion[i])){
    //         participant.splice(participant.indexOf(completion[i],1))
    //     }
    // }

    var answer=''
    participant.sort()
    // completion.sort()
    completion.sort((a,b)=>a>b?1:-1)

    // for(let i = 0 ;i<=completion.length; i++){
    //   if(participant[i]!==completion[i]){  
    //     return participant[i]
    //   }    
    // }
    const answer=participant.filter((name, i)=>{
        return name!==completion[i]
    })
    return answer[0]

}
