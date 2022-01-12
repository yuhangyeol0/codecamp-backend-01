function getWelcomeTemplete({name, age, school}){ //한번에(객체 전체를) 받는데 나눠서(각각) 받는것 ~> 더 안전하고 효율적임
    const createdAt = '2022-01-10'//날짜부분은 백엔드에서 !!!
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
    school : '다람쥐초등학교'
    email : "abc@a.com"
}


getWelcomeTemplete(myuser)

