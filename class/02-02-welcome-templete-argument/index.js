function getWelcomeTemplete(name, age, school){ //메일로 오는 화면 예시
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


const myname = '철수'
const myage = 8
const myschool = '다람쥐초등학교'

getWelcomeTemplete(myname, myage, myschool)