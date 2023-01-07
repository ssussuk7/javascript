//---------------------------------------------------------------------------------------------------------------
//1.함수 호이스팅(Hoisting)

hello()

function hello(){
  console.log('hello')
}
//사용부를 먼저 작성하고 후에 함수를 선언해도 오류가 나지 않는다.

/*
const hello = function(){
  console.log('hello')
}
변수를 선언하고 함수를 표현하면 호이스팅이 적용되지 않아 오류가 발생한다
*/
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//2.반환 및 종료 - return문은 반환 뿐만아니라 종료의 의미도 있다

function funA(){
  return 1
  console.log(1) // return문 다음이므로 출력되지 않는다
}
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//3.매개변수 패턴
function sum(a,b=0){ //b에 값이 들어오지 않을 경우네는 0이 출력되도록 default 값을 설정
  return a+b
}

//객체 구조 분해 할당
const userA ={
  name: 'hong',
  age: 30
}

function getName({name}){
  return name
}

function getEmail({email = 'hsw1001@korea.kr'}){
  return email
}

console.log(getName(userA)) // {name} = userA 형식으로 같은 객체 데이터기 때문에 name의 값 'hong'이 할당되는 구조
console.log(getEmail(userA)) // email속성은 없어 undefined 값이 출력되지만 기본값을 설정해놨기 때문에 기본값이 출력

//배열 구조 분해 할당
const fruits = ['apple','banana','cherry']
const numbers = [1,2,3,4,5,6,7]

function getThirdItem([,,c]){ // ,가 2개있기 때문에 앞에 2개의 값은 할당하지 않고 세번째 값만 할당한다
  return c
}

console.log(getThirdItem(fruits))
console.log(getThirdItem(numbers))

//나머지 매개변수
function restFunc(...rest){ // a,b 를 할당받고 나머지 들을 ...로 배열로 만듦
  return rest.reduce(function(acc,cur){ //reduce 메소드 rest 배열의 길이만큼 반복하게 하도록 하고 acc초기값은 0
    return acc + cur //cur는 rest의 값들
  },0)
} // 즉 들어오는 값들의 합을 구한다

console.log(restFunc(1,2))
console.log(restFunc(1,2,3,4))
console.log(restFunc(1,2,3,4,5,6,7,8,9,10))
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//4. 화살표 함수

const sum1 = (a,b) => a+b //function(a,b){ return a+b } 를 이렇게 표현한 것 다른 실행문이 있을경우에는 중괄호 생략 X

const i = () => ({a:1}) //객체 데이터 반환은 중괄호가 겹치기 때문에 ()로 감싸준다
const j = () => [1,2,3] //배열 데이터 반환 예
console.log(i())
console.log(j())
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//5. 즉시 실행 함수


/*
실행 함수 유형
;(() => {})() //(F)()
;(function () {})() //(F)()
;(function(){}()) //(F())
;!function(){}() // !F()
;+function(){}() // +F()
*/

const a5 = 7

;(()=>{console.log(a5 * a5)})()

;(function(){
  console.log(a5 * a5)
})()

;!function(){
  console.log(a5 * a5)
}()

;+function(){
  console.log(a5 * a5)
}()


;((a,b) => {
  console.log(a)
  console.log(b)
})(window, document)
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//6. 콜백

const a6 = (cb) => { //매개변수에 함수데이터를 넣어 collback(cb)하는 것
  console.log('A')
  b6()
}

const b6 = () => {
  console.log('B')
}

a6()

//html에 이미지 로드하기

const loadImg = (url, cb) => {
  const imgEl = document.createElement('img')
  imgEl.src = url
  imgEl.addEventListener('load',() => {
    setTimeout(() => {
      cb(imgEl)
    },1000)

  })
}

const containerEl = document.querySelector('.container')
loadImg('./1.png',(imgEl) => {
  containerEl.innerHTML = ''
  containerEl.append(imgEl)
})
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//7. 재귀 - 자기 자신을 호출하는 것

const userA7 = {name: 'A', parent: null}
const userB7 = {name: 'B', parent: userA7}
const userC7 = {name: 'C', parent: userB7}

const loadUser = (user) => {
  if(user.parent){
    return loadUser(user.parent)
  }
  return user
}

console.log(loadUser(userC7))
console.log(loadUser(userB7))
console.log(loadUser(userA7))
//---------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------
//8. 호출 스케쥴링

/*
setTimeout(() => {}, 2000) 2초뒤에 선언한 함수를 실행
setInterval(() => {}, 2000) 2초마다 선언한 함수를 실행
clearTimeout() 선언한 스케쥴링을 제거한다
*/

const printHello = () => {
  console.log('hello')
}

const timeHello = setInterval(printHello,2000) //2chakek printHello()함수를 실행
const divEl = document.querySelector('.container')

divEl.addEventListener('click',() => {
  console.log('clear!')
  clearTimeout(timeHello) //divEl영역을 클릭했을때 스케쥴 제거
})
//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------
//9.this
////일반 함수의 this는 호출 위치에서 정의
////화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

function user9(){
  this.firstName = 'hong'
  this.lastName = 'woo'

  return {
    firstName: 'hong',
    lastName: 'young',

    //일반 함수에서의 this 사용 - 호출 위치에서의 this 사용(hong young)
    printName_fun(){ //printName_fun: funciont(){}는 생략하여 printName_fun(){}로 사용가능하다
      return `${this.firstName} ${this.lastName}`
    },

    //화살표 함수에서의 this 사용 - 자신이 선언된 함수(user9)함수에서의 this를 사용(hong woo)
    printName_arr: () => { 
      return `${this.firstName} ${this.lastName}`
    }
    //객체 데이터에서 함수는 '메소드'라고 한다
  }
}

const user_po = {
  firstName: 'po',
  lastName: 'dol'
}

const u = user9()
console.log(u.printName_fun())
console.log(u.printName_arr())
console.log(u.printName_fun.call(user_po)) //user_po라는 객체를 사용하여 printName_fun함수를 호출
//---------------------------------------------------------------------------------------------------------------










