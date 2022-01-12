function getWelcomeTemplete({email, id, phone, site}){ 
    return ` 
    <html>
        <body>
            <h1>가입을 환영합니다 !</h2>
            <hr/>
            <div>이메일 : ${email}</div>
            <div>주민번호 : ${id}</div>
            <div>휴대폰번호 : ${phone}</div>
            <div>내가 좋아하는 사이트 : ${site}/div>
        </body>
    </html>
    `
    
}


const myuser ={
    email : "abc@a.com",
    id : "123456-111111",
    phone : "010-1111-1111",
    site : "Google.com"
}

console.log(getWelcomeTemplete(myuser))