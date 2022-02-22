function boolean(input1, input2) {
    if(input1 || input2) {
        console.log('true')
    }else if(input1 && input2){
        console.log('false')
    }else
        console.log('false')
}

boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false


function evenOdd(num) {
    if(num===0){
        console.log('Zero')
    }else if(num%2==0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
evenOdd(12) // "Even"
evenOdd(15) // "Odd"
evenOdd(0)  // "Zero"


function temperature(num){
	if(24<=num){
        console.log('조금 덥습니다')
    }else if(19<=num && num<=23){
        console.log('날씨가 좋네요')
    }else if(num<=18){
        console.log('조금 춥네요')
    }
}

temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"



function days(month) {
    if(month==1 || month==3|| month==5|| month==7|| month==8|| month==10|| month==12){
        console.log(month+'월: 31일')
    }else if(month==4|| month==6|| month==9|| month==11){
        console.log(month+'월: 30일')
    }else if(month===2){
        console.log(month+'월: 28일')
    }
}
days(1) // 31
days(2) // 28
days(4) // 30


function calculator(num1, num2, operator){
	if (operator === "*") {
		console.log(num1*num2)

	} else if(operator ==="+") {
		console.log(num1+num2)

	}else if(operator ==="/"){
        console.log(num1/num2)
    }else if(operator ==="-"){
        console.log(num1-num2)
    }else{
        console.log('올바른 입력이 아닙니다.')
    }
        
}
calculator(10,5, '+')  // 15
calculator(10,5, '-')  // 5
calculator(10,5, '*')  // 50
calculator(10,5, '/')  // 2
calculator(10,5, 'a')