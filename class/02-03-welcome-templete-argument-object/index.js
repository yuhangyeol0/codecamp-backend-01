function getWelcomeTemplete(user){ //메일로 오는 화면 예시
    const createdAt = '2022-01-10'//날짜부분은 백엔드에서 !!!
    return ` 
    <html>
        <body>
            <h1>${user.name}님 가입을 환영합니다 !</h2>
            <hr/>
            <div>이름 : ${user.name}</div>
            <div>나이 : ${user.age}</div>
            <div>학교 : ${user.school}</div>
            <div>가입일 : ${createdAt}/div>
        </body>
    </html>
    ` //백틱 예시 여러줄 작성 가능함
}

const myuser ={
    name = '철수',
    age = 8,
    school = '다람쥐초등학교'
}


getWelcomeTemplete(myuser)

/*이때 문제가 될 수 있는 부분 - 데이터 가짓수가 많았을 때 하나 빠지면 안됨 -> 구조분해할당 사용 !!!
구조분해할당(비구조화할당) : 
     객체일 때 const{name, age, school} = child => 순서가 중요하지 않음 키가 있기 때문에 키-밸류이기 때문에 키 명칭이 중요 !!
     배열일 때 const[child1, child2, child3(객체와 다르게 이름을 마음대로 정할 수 있음)] = classmates => 순서가 중요 !!!

(객체)
const age = child.age 
        -> const{age} = child
(배열)
function getClassmates(){
    return ['영희','철수']
}
const [child1, child2] = getClassmates()
console.log(child1)
console.log(child2)
*/