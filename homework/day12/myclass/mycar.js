class car {
    power = 250
    type = 'suv'
    color = 'white'
    
    start=()=>{
        console.log('출발한 차량입니다. 색깔은' + this.color+'입니다. 마력은'+this.power+'입니다')
    }

    stop=()=>{
        console.log('정지한 차량입니다. 기종은 ' + this.type+'입니다')
    }
}

const myCar = new car()
myCar.start()
myCar.stop()
