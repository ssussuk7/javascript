//<표준 내장 객체>
//1.문자

//.length 문자의 길이를 반환합니다.
const str = 'Hello World!'
console.log(str.length)

//.includes() 대상 문자에 주어진 문자가 포함되어 있는지 불린 값 출력(대소문자 주의)
console.log(str.includes('Hello', 0))//기본값 0 = str의 첫번째부터 확인 2로 설정하면 He 를 제외하고 l 부터 시작
console.log(str.includes('Hello', 2))

//.indexOf()
//대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다
//일치하는 문자가 없으면 '-1'를 반환
console.log(str.indexOf('H')) //H는 0번째 있기 때문에 0출력
console.log(str.indexOf('ell')) //e가 먼저 조회 되기때문에 1출력

//.padEnd()
//대상 문자의 길이가 지정된 길이보다 작으면
//주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환(대상 문자 길이가 길면 적용 X)
console.log(str.padEnd(20,'*'))//Hello World길이는 20보다 작기때문에 20까지 *로 채운다
console.log(str) //원래 변수의 값을 바꾸지는 않는다

//.padStart()
//padEnd와 같은 형식이지만 앞에 붙임
console.log(str.padStart(20,'!*'))

//.replace()
//대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환
console.log(str.replace('Hello', 'Hi')) // Hello가 처음 조회되는 부분을 Hi로 바꿈
console.log(str.replace(/Hello/g, 'Hi')) // 정규표현식 [/문자/g] g는 global의 약자고 조회되는 모든 값을 대체한다

//.slice()
//대상 문자의 일부를 추출해 새로운 문자를 반환
//두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출함
console.log(str.slice(0,6))
console.log(str.slice(6,-1)) //-1은 끝에서 첫번째
console.log(str.slice(6)) //두 번째 인수가 없으므로 6번째부터 끝까지

//.split()
//대상 문자를 주어진 구분자로 나눠 배열로 반환
const fruits = 'Apple, Banana, Cheery'
console.log(fruits.split(', ')) //띄어쓰기도 문자이기 때문에 주의
console.log(fruits.split('')) //아무것도 구분자로 두지 않으면 모든 문자를 하나로 분리 가능


//.toLowerCase()
//대상 문자를 영어 소문자로 변환해 새로운 문자로 반환함(한글은 영향 X)
console.log(fruits.toLowerCase())

//.toUpperCase()
//대상 문자를 영어 대문자로 변환해 새로운 문자로 반환
console.log(fruits.toUpperCase())

//.trim()
//대상 문자의 앞뒤 공백문자(space, tab)을 제거한 새로운 문자를 반환
console.log(str.trim()) //사이 띄어쓰기는 제거하지 않으니 주의



//2.숫자

//.toFixed()
//숫자를 지정된 고정 소수점 표기(자릿수)가지 표현하는 문자로 반환

const num = 3.141592635

console.log(num.toFixed(2)) //소수점 2번째 자리까지 출력
console.log(parseFloat(num.toFixed(2))) //toFixed는 문자로 반환이기 때문에 parseInt를 사용해서 숫자로 바꿔줘야 한다

//.toLacaleString()
//숫자를 현지 언어 형식의 문자로 변환합니다.

const money = 1000000
console.log(money.toLocaleString()) // 1,000,000


//Number.isInteger()
//숫자가 정수인지 확인(정적메소드)

console.log(Number.isInteger(money))

//Number.inNaN()
//주어진 값이 'NaN'인지 확인합니다.
console.log(Number.isNaN(money))

//Number.parseIng() or parseInt()
//주어진 값(숫자, 문자)을 파싱해 특정 진수의 정수로 반환합니다.

console.log(Number.parseInt(num, 10)) //num변수를 10진수 정수로 변환

//Number.parseFloat() or parseFloat()
//주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 변환 합니다.



//3.수학

//Math.abs()
//주어진 숫자의 절댓값을 반환

console.log(Math.abs(-2)) //2

//Math.ceil()
//주어진 숫자를 올림해 정수를 반환

console.log(Math.ceil(3.1525)) //정수 4를 반환

//Math.floor()
//주어진 숫자를 내림해 정수를 반환

console.log(Math.floor(3.142525))//정수 3을 반환

//Math.max()
//주어진 숫자 중 가장 큰 숫자를 반환

console.log(Math.max(1, 22 ,20 , 30))

//Math.min()
//주어진 숫자 중 가장 작은 숫자를 반환

//Math.pow()
//주어진 숫자의 거듭제곱한 값을 반환

console.log(Math.pow(2,4)) //2의 4제곱 16 반환

//Math.random()
//숫자 0 이상 1 미만의 난수를 반환합니다.

console.log(Math.random())

function randomFun(min, max){
  console.log(Math.floor(Math.random() * (max-min))) + min
}

randomFun(1,10) //1부터 10사이의 랜덤 값 출력

//Math.round()
//주어진 숫자를 반올림해 정수를 반환

console.log(Math.round(2.74)) //정수3 출력


//3. 날짜

//.getFullYear() , .setFullYear()
//날자 인스턴스의 '연도'를 반환하거나 지정

const date = new Date()
console.log(date)
console.log(date.getFullYear()) //그 당시 연도 출력

date.setFullYear(2024) //연도를 2024로 설정
console.log(date)


//.getMonth() .setMonth()
//날짜 인스턴스의 '월'을 반환하거나 지정
//0부터 시작(9월이면 8출력, 1월이면 0 출력)

console.log(date.getMonth())

//.getDate() .setDate()
//날짜 인스턴스의 '일'을 반환하거나 지정

console.log(date.getDate())

//.getHours() .setHours
//날짜 인스턴스의 '시간'을 반환

console.log(date.getHours())

//.getMinutes() .setMinutes
//날짜 인스턴스의 '분'을 반환

console.log(date.getMinutes())

//.getSeconds() .setSeconds
//날짜 인스턴스의 '초'를 반환

console.log(date.getSeconds())

//.getDay()
//날짜 인스턴스의 '요일'을 반환

const day = date.getDay()

console.log(day)
console.log(getDayKo(day))

function getDayKo(day){ //숫자를 실제 요일로 출력하기
  switch(day){
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}

//.getTime() .setTime()
//'1970-01-01 00:00:00'(유닉스타임)부터 경과한,
//날짜 인스턴스의 '밀리초(ms)'로 반환하거나 저장

Date.prototype.isAfter = function(date){ //Date()클래스를 생성한 인스턴스의 시간이(a) 비교할 시간(b)보다 더 오래된 시간인진 반환하는 메소드
  const a = this.getTime()
  const b = date.getTime()
  
  return a > b
}

const d1 = new Date('2025') //2025년으로 생성
const d2 = new Date('2024') //2024년으로 생성

console.log(d1)
console.log(d2)

console.log(d1.isAfter(d2)) // d1이 d2보다 더 긴 시간인지 출력하는 것

//Date.now()
//'1970-01-01 00:00:00'(유닉스타임)부터 경과한,
//날짜 인스턴스의 '밀리초(ms)'로 반환하거나 저장(호출 될때마다 최신화 되어서 반환)


//4.배열

//.length
//배열의 길이(숫자)를 반환

const arr = [1,2,3,4]

console.log(arr.length)

//.at()
//대상 배열을 인덱싱한다.
//음수 값을 사용하면 뒤에서부터 인덱싱

console.log(arr[0])
console.log(arr.at(0)) //같은 내용

console.log(arr.at(-1)) //마지막 아이템같은 경우에는 -1을 .at하여 배열 크기가 달라져도 계속 사용가능

//.concat()
//대상 배열과 주어진 배열을 병합해 새로운 배열을 반환

const arr1 = ['a', 'b', 'c', 'd']
const arr2 = ['A', 'B', 'C', 'D']
const arr3 = arr2.concat(arr1)
// const arr3 = [...arr1, ...arr2] 전개연산자로 응용가능

console.log(arr3)

//.every()
//대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인

const isValid = arr.every(item => item < 5) //arr=[1,2,3,4]
//화살표 함수로 실제 함수는
//item => {
//  return item< 5
//}

console.log(isValid)

//.filter()
//주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환
//모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환

const numbers = [1, 40, 12525, 23, 155]
const filterNumbers = numbers.filter(number => number < 30) //30보다 작은 값들로만 새로운 배열 구성

console.log(filterNumbers)

const people = [
  {name: 'Kim', age: 15},
  {name: 'Kang', age: 30},
  {name: 'Hong', age: 20}
]

const adults = people.filter(adult => adult.age >= 20)
console.log(adults)

//.find()
//대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환합니다.

//arr = [1,2,3,4]
const foundItem = arr.find(item => item > 3)
console.log(foundItem)//4

//.findIndex()
//대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환

//.flat()
//대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성
//깊이의 기본값은 1

const flatarr = [1,2,3,[1,2]]

console.log(flatarr.flat()) // [1,2,3,1,2]
//flat(2)를 하면 깊이 2까지 평평하게
//flat(Infinity) 모든 배열을 평평하게

//.forEach()
//대상 배열의 길이만큼 주어진 콜백을 실행

//반복을 중간에 종료할 수가 없다(for문은 break문으로 종료 가능하므로 생각해서 사용)
arr.forEach(item => {
  console.log(item)
})

//.includes()
//대상 배열이 특정 요소를 포함하고 있는지 확인

console.log(arr.includes(2))

//.join()
//대상 배열의 모든 요소를 구분자로 연결한 문자를 반환

const joinarr = ['Apple', 'Banna', 'Cherry']

console.log(joinarr.join(',')) // Apple,Banana,Cherry
console.log(joinarr.join(', ')) // Apple, Banana, Cherry
console.log(joinarr.join('/')) // Apple/Banana/Cherry

//.map()
//대상 배열의 길이만큼 주어진 콜백을 실행, 콜백의 반환 값을 모아 새로운 배열을 반환

const mapNum = arr.map(item => {
  return item * 2
})

console.log(arr)
console.log(mapNum)

const mapPeple = people.map(user => {
  return {...user,
  isValid: true,
  email: null
  }
})

console.log(mapPeple)

//.pop()
//대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
//대상 배열 원본이 변경!

console.log(arr) //[1,2,3,4]
console.log(arr.pop()) // 4제거
console.log(arr) // [1,2,3] 원본에 영향을 준다

//.push()
//대상 배열의 마지막에 하나 이상의 요소를 추가, 배열의 새로운 길이를 반환

console.log(arr) // [1,2,3]
console.log(arr.push(4)) // 길이: 4출력
console.log(arr) // [1,2,3,4]


//.reduce()
//대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환
//각 콜백의 반환 값은 다음 콜백으로 전달

const sum = arr.reduce((firstValue, arrValue) => { //reduce(콜백함수, 초기값)
  return firstValue + arrValue 
},0)
//firstValue에 초기값 0을 넣고 시작, arr의 값은 arrValue에 들어가서 첫째 값은 1 다시 firstValue로 반환 arrValue는 2... 계속 반복

console.log(sum)

//총 나이 계산

const totalage = people.reduce((acc,cur) => {
  return acc + cur.age
}, 0)

console.log(totalage)
console.log('평균나이 ' + Math.floor(totalage / people.length))

const totalName = people.reduce((acc, cur) => {
  acc.push(cur.name) //초기값 빈 배열 [] 에다가 cur.name 을 하나씩 추가
  return acc
},[])

console.log(totalName)

console.log(totalName.join(','))

//.reverse()
//대상 배열의 순서를 반전합니다
//대상 배열의 원본을 변경합니다.

const reversedArr = arr.reverse()

console.log(reversedArr)

//.shift()
//대상 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환
//대상 배열 원본이 변경

//.slice()
//대상 배열의 일부를 추출해 새로운 배열을 반환
//두 번째 인수 직전가지 추출, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출

console.log(arr.slice(0,3))
console.log(arr.slice(1,-1))

//.some()
//대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인
//하나라도 통과하면 True 반환

//.sort()
//대상 배열의 콜백의 반환 값(음수, 양수, 0)에 따라 정렬
//콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
//대상 배열 원본이 변경

const sortArr = [4,5,125,23,2,77,11]

sortArr.sort()
console.log(sortArr) //문자로 바꿔서 정렬하기 때문에 정확하지 않음

sortArr.sort((a,b) => a - b) // 4-5를 하면 -1(음수)가 나오기 때문에 5가 더 크다고 판단하여 정렬하는 방식(오름차순으로 정렬)
console.log(sortArr)

sortArr.sort((a,b) => b - a) // 반대로 계산하여 5-4 양수가 나오게 하여 a가 b보다 크다고 인식시켜 내림차순으로 정렬하게 함
console.log(sortArr)

//.splice()
//대상 배열에 요소를 추가하거나 삭제하거나 교체
//대상 배열 원본이 변경

arr.splice(2, 0, 'X') // 위치, 삭제할 개수, 넣을 요소(2번위치에서 0개를 제거 'X'를 추가)
console.log(arr)

arr.splice(1,2) // 1번위치부터 2개 제거
console.log(arr)

//.unshift()
//새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
//대상 배열 원본이 변경

console.log(arr.unshift('X'))
console.log(arr)

//Array.from()
//유사 배열을 실제 배열로 반환

const arrLike = { //length라는 속성이 무조건 필요한 객체
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}

// arrLike.forEach(item => console.log(item)) 는 배열데이터가 아니기 때문에 오류가 난다
Array.from(arrLike).forEach(item => console.log(item))// A B C 출력

//Array.isArray()
//배열 데이터인지 확인

console.log(Array.isArray(arrLike)) //false



//5.객체

//Object.assign()
//하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환

const target = {a:1, b:2}
const source1 = {b:3, c:4}
const source2 = {c:5, d:6}
// const result = Object.assign(target, source1, source2) - 각각의 출처객체를 복사하여 갱신됨 target값이 변함

// const result = Object.assign({}, target, source1, source2) - 1번방법
const result = { //2번방법
  ...target,
  ...source1,
  ...source2,
}

console.log(target)
console.log(result)

//Object.entries()
//주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열을 반환

const user = {
  name : 'Hong',
  age: 30,
  isValid : true,
  email : 'hsw1001@korea.kr'
}

console.log(Object.entries(user)) //[['name', 'Hong],['age',30]] 형식으로 2차원 배열을 반환

for(const [key, value] of Object.entries(user)){
  console.log(key,value)
}

//Object.keys()
//주어진 객체의 속성 이름을 나열한 배열을 반환

console.log(Object.keys(user)) //속성들만 배열로 출력

//Object.values()
//주어진 객체의 값을 나열한 배열을 반환

console.log(Object.values(user))


//6. JSON(JavaScript Object Notation)

//데이터 전달을 위한 표준 포멧
// 문자, 숫자, 불린, Null, 객체, 배열만 사용
//문자는 큰 따옴표만 사용
//후행 쉼표 사용 불가
//.json 확장자 사용

//JSON.stringify() - 데이터를 JSON 문자로 변환
//JSON.parse() - JSON 문자를 분석해 데이터로 변환

import test from './text.json'
console.log(test)
//
