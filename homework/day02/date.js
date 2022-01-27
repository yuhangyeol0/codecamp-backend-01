function Day(){
  let date = new Date()
  let dd = date.getDate()
  let mm = date.getMonth()+1
  let yy = date.getFullYear()
  let tt = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  console.log(`오늘은 ${yy}년 ${mm}월 ${dd}일 ${tt}:${min}:${sec}입니다`)
}
  
Day()


