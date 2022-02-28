const apple = 3
const banana = 2

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 갖고있다`) //템플릿리터럴 !

function getWelcomeTemplete(){ //메일로 오는 화면 예시
    const name = '철수'
    const age = 8
    const school = '다람쥐초등학교'
    const createdAt = '2022-01-10'

    return ` 
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다 !</h2>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${createdAt}/div>
        </body>
    </html>
    ` //백틱 예시 여러줄 작성 가능함
}

