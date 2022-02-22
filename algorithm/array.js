let fruits = []
fruits.push("사과","바나나","파인애플")
console.log(fruits)

let newFruits = [];
let a = fruits.length-1
newFruits.push(fruits[a])
console.log(newFruits)



let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = []
newArr = students.slice(0,3)
console.log(newArr)


let fruits1 = ["사과", "바나나"]
fruits1[0] = '맛있는 '+fruits1[0]
fruits1[1] = '맛있는 '+fruits1[1]
console.log(fruits1)


const number = "01012345678"
let arr = []
arr[0] = number.slice(0,3)
arr[1] = number.slice(3,7)
arr[2] = number.slice(7)
console.log(arr) // ["010", "1234", "5678"]