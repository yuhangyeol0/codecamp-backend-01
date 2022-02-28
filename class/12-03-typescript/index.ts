//문자타입 - 타입추론
let aaa = "안녕하세요" //처음 잡힌 타입으로 설정됨
// aaa = 3 //숫자라서 불가능
aaa = "반갑습니다"

//문자타입
let bbb: string = "반갑습니다"
bbb = "반가워요"
bbb = 123

//숫자타입 
let ccc = 5
ccc=10
ccc="dd"

//불린타입
let ddd : boolean = true
ddd = 11
ddd = "22"

//배열타입
let eee = [1,2,3,4,5]
let fff : String[] = ["c", "d"]
let ggg : (number| string)[]= [1, "ccc", 3, "33"]
let money : number[] | string[] = [1000, 2000, 3000]


//객체타입
interface Iprofile{
    name: string
    age: number | string
    school: string
}
let profile: Iprofile ={ //Interface의 Iprofile 선언해서 넣어주기
    name: "철수",
    age: 13,
    school:"다람쥐초"
}
profile.age = "13살"//하고싶으면 타입추론되게 하지말고 타입을 직접 만들어줘야함

//함수타입
function qqq(a:number, b:number) : string {// 리턴값도 선언해줌
    // return a+b
    return "ggg"
}
const result = qqq(1, 2)

