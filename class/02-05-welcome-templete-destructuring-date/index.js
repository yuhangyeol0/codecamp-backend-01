
function getCreatedAt(){
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth()+1
    const dd = aaa.getDate()

    return `${yyyy}-${mm}-${dd}`
}
//utils.js라는 이름으로 생성하기 ~~!!! 재활용이 많이되기 때문~~~~



function getWelcomeTemplete({name, age, school}){ 
    //오늘 날짜 만들기 !! -> 함수로 만들것
    const createdAt = getCreatedAt()

    return ` 
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다 !</h2>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${createdAt}/div>
        </body>
    </html>
    ` //백틱 예시 여러줄 작성 가능함
}

const myuser ={
    name : '철수',
    age : 8,
    school : '다람쥐초등학교',
    email : "abc@a.com"
}


getWelcomeTemplete(myuser)

