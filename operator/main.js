//1.산술
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(1 / 2)
console.log(1 % 2) //연산자와 피연산자

//2.부정 , 비교
console.log(!true)

const a = 1
const b = 2

console.log(a == b) //동등 =2개
console.log(a != b)
console.log(a === b) //일치 =3개
console.log(a !== b)

//3.논리
console.log(true && false) //and 연산자
console.log(true || false) //or 연산자

console.log(1 && 2 && 0 && 3) //and 연산자는 왼쪽에서 오른쪽으로 진행하면서 거짓을 만나면(0) 바로 반환
console.log(1 && 2 && 3) // 거짓을 만나지 않는다면 맨 마지막 참을 출력 한다(3)
console.log(NaN && false && 0) //모두 거짓을 만나면 맨 처음 거짓을 출력(NaN)

console.log(0 || 1) // or 연산자는 왼쪽에서 오른쪽으로 가면서 제일 처음 만나는 참 데이터를 출력(1)
console.log(false || 0 || NaN) // 모두 거짓이라면 맨 마지막 거짓 내역을 출력(NaN)

// 4.Nullish 병합
const num1 = 0

const num2 = num1 ?? 7 //Null, undefined 데이터를 제외하고 맨 처음 만나는 데이터 출력 (0)

//5. 삼항연산자
console.log(a < 2 ? '참' : '거짓...') // 조건문 ? 참일때 : 거짓일때

//6. 전개 연산자(Spread Operator)
const array1 = [1, 2, 3, 4]
console.log(array1) // [1,2,3]
console.log(...array1) // ... 대괄호를 날려준다

const object1 = { x: 1, y: 2 }
const object2 = { y: 3, z: 4 }

const object3 = { object1, object2 }
const object4 = {...object1, ...object2 }

console.log(object3)
console.log(object4)

function fn(x, y, z) {
    console.log(x, y, z)
}

fn(...array1) //array1 [1,2,3,4] 에서 전개연산자 ... 를 사용하여 대괄호를 날려 버렸으므로
    //x에 1, y에 2, z에 3이 차례로 들어가고 4는 할당되지 않는다.


//7.구조분해할당
const arr = [1, 2, 3]

const [, cs2, cs3] = arr // 같은 형식의 배열로 할당하여 cs2=2, cs3=3가 차례로 할당된다. cs1은 비워놨기 때문에 할당되지 않음
console.log(cs2, cs3)

const [cs1, ...rest] = arr //rest 앞에 전개연산자 ... 를 붙여 형식을 다르게 한 후 cs1에는 1 / rest에는 [2,3]이 할당될 수 있도록 한다.
console.log(cs1, rest)

const obj = {
    obj1: 1,
    obj2: 2,
    obj3: 3
}

const { obj1, obj2 } = obj //객체 데이터에서 지정한 변수에 맞게 설정해야 한다.
console.log(obj1, obj2)

const { x = 4, obj1: ssussuk } = obj // obj에서 x값이 지정되어 있지 않다면 기본값으로 4를 출력한다.
console.log(x, ssussuk) // 내가 원하는 이름으로 바꾸려면 obj1:ssussuk을 통해 바꿀 수 있다.

const { obj3, ...restobj } = obj
console.log(obj3, restobj) // 할당된 obj3를 제외하고 나머지 obj1과 obj2를 restobj로 객체 데이터로 저장

//8. 선택적 체이닝

const nulldata = null
console.log(nulldata?.name) //nulldata는 객체 데이터가 아니기 때문에 .name 속성을 가질 수 없기 때문에 그냥 nulldata.name을 쓰면 오류가 발생하지만 ?.를 써서 객체 데이터가 아닌
//데이터에도 속성 값 조회가 가능하도록 한다

const userA = {
    age: 30,
    name: 'hong'
}

function readAddress(user){
    return user.address?.city || '주소없음' // user.address 값이 없으면 '주소없음' 을 출력하도록 or 을 사용
}

console.log(readAddress(userA))

//9. If조건문

function number(num){
    if(num > 0){
        console.log('양수입니다')

    }
    else if(num < 0){
        console.log('음수입니다')

    }
    else{
        console.log('0입니다')
    }
}

number(1)
number(-1)
number(0)

function fruits(fruit){
    switch(fruit){
        case 'apple':
            console.log('사과입니다')
            break
        
        case 'banana':
            console.log('바나나입니다')
            break
        
        default:
            console.log('정의되지 않았습니다')
            break // return문을 쓰면 자동으로 break되기 때문에 break문을 쓰지 않아도 된다.
    }
}

fruits('apple')
fruits('water')

//10. for문 for(초기화; 조건; 증감){}
for(let a = 0; a<10; a++){
    if(a % 2 == 0){
        continue // a가 2의 배수일 경우 다시 조건문으로 올라가 for문을 계속 진행
    }
    console.log(a) // 홀수만 출력된다
}

//for of
const fruits3 = ['apple','banana','cherry']

for(const fruit of fruits3){
    console.log(fruit)
}

//for in
const userB = {
    name: 'hong',
    age: 30,
    height: 175
}

for(const key in userB){
    console.log(key)
    console.log(userB[key]) //대괄호 표기법으로 사용 key에는 'name','age'처럼 문자 데이터 값이 들어가기 때문에
    //.표기법으로 하게되면 userB.'name'이 되어 값이 나오지 않아 []대괄호 표기법을 이용해야한다
}

//11. while
let num3 = 0

while(num3 <4){
    console.log(num3)
    num3 += 1
}

//do-while 맨 먼저 선행을 하고 조건문을 돌릴 때 사용
let num4 = 0
do{
    console.log(num4)
    num4 += 1
}while(num4< 4){

}

