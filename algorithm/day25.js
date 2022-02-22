//크레인 인형뽑기 게임
function solution(board, moves){
    let answer=0
    const bucket=[]

    //크레인이 이동하는 위치값을 구하는 반복문
    for(let i=0; i<moves.length; i++){
        //크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
        for(let l=0; l<board.length; l++){
            const doll = board[l][moves[i]-1]
            // 크레인이 이동하는 위치에 빈칸이 아니라면
            if(doll!==0){
                //뽑은 인형 위치를 빈칸으로 만들기
                board[l][moves[i]-1]=0
                //바구니에 인형 담을때, 바구니 맨 위 인형과 동일하다면 맨 위 인형 제거
                if(bucket[bucket.length-1]===doll){
                    // bucket.pop()
                    bucket.splice(bucket.length-1)
                    break
                }
                bucket.push(doll)
                //한번 인형을 뽑았다면 해당 위치의 크레인을 멈춘다
                break
            }
        }
    }
    return answer
}

//메소드
function solution(board, moves){
    let answer=0
    const bucket=[]

    array.forEach(move => {
        //반복문 더이상 실행시키지 않게 하는 변수, false일때만 foreach실행
        let pick=false
        board.forEach(location=>{
            const doll=location[move-1]
        if(pick===false{
            if(doll!==0){
                location[move-1]=0
                pick=true
                if(bucket[bucket.length-1]===doll){
                    answer+=2
                    bucket.pop()
                }else{
                    bucket.push(doll)
                }

               
            }
        })
            
        })
    });
    return answer
}