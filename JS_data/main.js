//1. 문자형 변수 선언하기
const string1 = "Hello";
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`;

console.log(string1);
console.log(string2);
console.log(string3);


//2. 숫자형 변수
const number = 123;
const a = 0.1;
const b = 0.2;

console.log(a + b); // 0.3이 아닌  0.3000000..이 출력 됨
console.log(Number((a + b).toFixed(1)) + 1); // toFixed를 사용하여 첫째자리까지만 출력 0.3 하지만 String 타입으로 바뀌기 때문에 Number로 바꿔줘야 함

//3. Boolean, null, undefined
const trueVal = true;
let age = null //값이 변할 내용은 let으로 변수 선언
let age2; // undefined 형식의 변수

const user = {
    name: "user",
    age: 22
};

console.log(user);
console.log(user.name);


//4. 배열
const fruits = new Array('apple', 'banana', 'cherry'); //length: 3
const fruits2 = ['apple', 'banana', 'cherry'];
console.log(fruits[1]);
console.log(fruits2[2]);

//5. Object 객체 데이터
const user1 = new Object();
user1.name = 'Hong'; // key = value 형식 고유한 값을 가진다
user1.age = 30;
console.log(user1);

const user2 = {
    name: 'Kim',
    age: 30,
    parent: user1 //객체데이터 안에 객체데이터
};

console.log(user2.parent.name);
console.log(user2['age']);

const users = [user1, user2]; //배열로도 가능
console.log(users);

//6.Function 데이터
function hello() {
    console.log('hello');
}

hello();
console.log(hello);

const getNumber = function() { //이름이 없는 익명함수
    return 123
}

console.log(getNumber());

const a_console = function() {
    console.log('a')
}

const b_console = function(c) {
    console.log(c)
    c() // a_console() = consolo.log('a')
}
b_console(a_console) //a_console 은 함수형 데이터로 함수 자체가 들어가게 된다.


//7. 형 변환

const a1 = 1
const b1 = '1'

console.log(a1 == b1) //동등 연산자 형변환 하면서 비교함 true
console.log(a1 === b1) //일치 연산자 완전히 일치해야함 false

//8. 데이터 타입 확인

//문자나 숫자 형은 typeof를 이용하여 데이터 타입을 확인할 수 있음
console.log(typeof 'Hello')
console.log(typeof 123)

//배열이나 object 는 typeof이 아닌 constructor로 확인 가능
console.log([].constructor)
console.log({}.constructor)


//어떠한 형식이던 데이터 타입을 반환하는 함수
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))