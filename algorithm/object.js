let student1 = {}
student1.name = '철수'
console.log(student1)


const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}
student.school =school

console.log(student)


let student2 = {
	name: "철수",
	drink: "사이다"
};
delete student2.drink
console.log(student2)


const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school="다람쥐초등학교"

console.log(classmates)