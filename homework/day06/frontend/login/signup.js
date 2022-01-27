
// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async ( ) => {
  let phone2 = document.getElementById('PhoneNumber02').value
  let phone3 = document.getElementById('PhoneNumber03').value
  
  const myphone=`010${phone2}${phone3}`
  
  axios.post("http://localhost:3000/tokens/phone",{myphone})

}

// 회원 가입 API 요청
const submitSignup = async ( ) => {
  let name = document.getElementById('SignupName').value
  let personal = document.getElementById('SignupPersonal').value
  let email = document.getElementById('SignupEmail').value
  let passwd = document.getElementById('SignupPwd').value
  let prefer = document.getElementById('SignupPrefer').value
  let phone2 = document.getElementById('PhoneNumber02').value
  let phone3 = document.getElementById('PhoneNumber03').value
  
  const myphone=`010${phone2}${phone3}`


  axios.post("http://localhost:3000/users",{
    user:{
        name,
        prefer,
        personal,
        email,
        passwd,
        myphone
    }
  })

}
