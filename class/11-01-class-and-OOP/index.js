const aaa =new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth()+1)


class Monster{ //설명서라고 할 수 있음
    power = 10
    constructor(aaa){//new Monster()안에 들어가는것과 같은것을 받음){//여기는 함수
        this.power = aaa
    }

    attack=()=>{
        console.log('공격하자')
        console.log('내 공격력은' + this.power+'이야')
    }

    run =( )=>{
        console.log('도망가자')
    }
}

const myMonster1 = new Monster(50) //설명서로 보고 50인 new 몬스터를 만들었다고 생각해라
myMonster1.attack()
myMonster1.run()

const myMonster2 = new Monster(20)
myMonster2.attack()
myMonster2.run()

//const loginService = new LoginService()
//loginService.login()
//loginService.logout()
//loginService.loginCheck()
//객체 지향 프로그래밍 OOP