// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  let phone2 = document.getElementById('PhoneNumber02').value
  let phone3 = document.getElementById('PhoneNumber03').value
  const myphone=`010${phone2}${phone3}`
  axios.post("http://localhost:3001/tokens/phone",{myphone})
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  let phone2 = document.getElementById('PhoneNumber02').value
  let phone3 = document.getElementById('PhoneNumber03').value
  const myphone=`010${phone2}${phone3}`
  const token = document.getElementById('TokenInput').value
  await axios.patch("http://localhost:3001/tokens/phone",{myphone,token})
  // document.getElementById("TokenInput").innerText = token
  console.log('핸드폰 인증 완료')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  let name = document.getElementById('SignupName').value
  let personal1 = document.getElementById('SignupPersonal1').value
  let personal2 = document.getElementById('SignupPersonal2').value
  let email = document.getElementById('SignupEmail').value
  let passwd = document.getElementById('SignupPwd').value
  let prefer = document.getElementById('SignupPrefer').value
  let phone2 = document.getElementById('PhoneNumber02').value
  let phone3 = document.getElementById('PhoneNumber03').value
  
  
  const personal = personal1+'-'+personal2
  const myphone=`010${phone2}${phone3}`

  await axios.post("http://localhost:3001/user",{name, personal, email, passwd, prefer, myphone})
  console.log('회원 가입 완료')
}
