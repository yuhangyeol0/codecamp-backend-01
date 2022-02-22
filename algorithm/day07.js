function solution(n)
{
        var answer = 0;
        answer=String(n).split('').map(Number).reduce((a,c)=>a+c)
        
  
    return answer;
}


function solution(x, n) {
    var answer = [];
    for(let i=1;i<=n;i++){
        answer.push(i*x)
    }

//  const answer=new Array(n).fill(1).map((num,i)=>{return num+i}*x)

    return answer;
}



function solution(s) {
    var answer = '';
    
    let arr = []
    for(let i=0;i<s.length;i++){
        arr.push(s[i])
    }
    arr.sort((a,b)=>{
        return a > b ? -1 : 1 //내림차순
    })
    
    for(let i=0;i<arr.length;i++){
        answer+=(arr[i])
    }
    
/*  const answer=s.split("").sort((a,b)=>{return a>b?-1:1}).join("")*/

    return answer;
    
}


function solution(array, commands) {
/* const answer=commands.map(num=>{
    const result=array.slice(num[0]-1, num[1]).sort((a,b =>{return a-b})
    return result[num[2]-1])
})
return answer*/



    var answer = [];
    
    for(let idx=0;idx<commands.length;idx++){
        const i = commands[idx][0]
        const j = commands[idx][1]
        const k = commands[idx][2]
        
        const result = array.slice(i-1,j).sort((a,b)=>{return a-b})
    
        answer.push(result[k-1])
        }
    
    return answer;
}