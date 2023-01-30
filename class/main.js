//1.prototype
const fruits = new Array('apple','banana','cherry')

Array.prototype.heropy = function(){
  console.log(this)
}
fruits.heropy()


function User(first, last){
  this.first = first
  this.last = last
}

User.prototype.getFullName = function(){
  return `${this.first} ${this.last}`
}

const user1 = new User('seok','woo') //생성자에서 생성하게 된 인스턴스들은 자동으로 prototype을 사용할 수 있어서 user1은 getFullName을 사용할 수 있다.
console.log(user1)
console.log(user1.getFullName())

//2. ES6 Class 기본 문법
class User2{
  constructor(first, last) { //생성자 함수
    this.first = first
    this.last = last
  }
  getFullName2(){ //class를 사용할 경우 따로 prototype을 선언하지 않고 사용 가능
    return `${this.first} ${this.last}`
  }
}

const kim = new User2('kim','ggang')
console.log(kim)
console.log(kim.getFullName2())

//3. Getter, Setter
class User3{
  constructor(first, last) { //생성자 함수
    this.first = first
    this.last = last
  }
  get getfullName3(){ //Getter
    return `${this.first} ${this.last}`
  }

  set setfullName3(value){ //Setter
    [this.first, this.last] = value.split(' ')

  }
}

const kang = new User3('kang','soo')
console.log(kang.getfullName3)

kang.setfullName3 = 'kang zi'
console.log(kang.getfullName3)

//4.정적 메소드
//prototype을 사용하지 않는 클래스 자체에서 사용하는 메소드(인스턴스를 생성하지 않고 사용 가능한 것들)
class User4{
  constructor(first, last){
    this.first = first
    this.last = last
  }
  getFullName(){
    return 'fullname'
  }

  static isUser(user){ //정적메소드
   if(user.first && user.last){
    return 'isUser'
   }
   return 'not user'
  }
}

const user4 = new User4('hong','woo')
const user44 = {
  name: 'hong woo'
}

console.log(user4.getFullName())
console.log(User4.isUser(user4)) //정적메소드의 사용 (클래스에서 바로)
console.log(User4.isUser(user44))

//5.상속과 instanceof
class Vehicle{
  constructor(accel = 10, price){
    this.accel = accel
    this.price = price
    this.speed = 0
  }
  
  accelerator(){
    this.speed += this.accel
    console.log(`${this.accel}만큼 가속합니다 / 현재속도:${this.speed}`)
  }

  deccelerator(){
    this.speed -= this.accel
    if(this.speed == 0 || this.speed < 0){
      console.log(`${this.accel}만큼 감속합니다 / 현재속도:${this.speed}`)
      console.log('정지!')
      return
    }
    console.log(`${this.accel}만큼 감속합니다 / 현재속도:${this.speed}`)
  }
}

class Bicycle extends Vehicle{
  constructor(accel, price){
    super(accel, price)
    this.speed = 0
  }
}

class Car extends Bicycle{
  constructor(licence, accel, price){
    super(accel, price)
    this.speed = 0
    this.licence = licence
  }

  accelerator(){
    if(!this.licence){
      console.error('무면허 운전')
      return
    }
    this.speed += this.accel
    console.log(`${this.accel}만큼 가속합니다 / 현재속도:${this.speed}`)
  }
}

const bicycleA = new Bicycle(10,500)
const carA = new Car(true, 20, 500)
const carB = new Car(false, 30, 700)

bicycleA.accelerator()
bicycleA.deccelerator()
carA.accelerator()
carA.accelerator()
carA.deccelerator()
carA.deccelerator()
carA.deccelerator()
carB.accelerator()

//6. instanceof과 constructor
console.log(bicycleA instanceof Bicycle)
console.log(carA instanceof Car)

console.log(carA.constructor == bicycleA.constructor)