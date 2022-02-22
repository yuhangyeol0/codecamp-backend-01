function sum(num) {
    let count = 0
    for(let i = 0;i<=num;i++){
        count =count+ i
    }
    console.log(count)
}
sum(5) // 15
sum(3)


function countLetter(str) {
	let count = 0;
    for(i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='A'){
            count=count+1
        }
    }
    console.log(count)
}


countLetter("I am from Korea")                         // 2
countLetter("A day without laughter is a day wasted.") // 6


function makeNumber(num) {
	let str = '1';
    for(i=2;i<=num;i++){
        str = str + '-' + i
    }
    console.log(str)
}
makeNumber(5) // 1-2-3-4-5
makeNumber(7) // 1-2-3-4-5-6-7


function makeOdd(num) {
	let str = '';
    for(let i=0;i<=num;i++){
        if(i%2===1){
            str=str+i
        }
    }   
    console.log(str)
}

makeOdd(5) // 135
makeOdd(7)


function bigNum(str) {
	let biggest = 0;
    for(let i=0;i<=str.length;i++){
        if(Number(str[i])>=biggest){
            biggest=Number(str[i])
        }
    }
    console.log(biggest)
}

bigNum("12345") // 5
bigNum("87135") // 8