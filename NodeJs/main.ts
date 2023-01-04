import _ from 'lodash'

console.log(_.upperCase('hello world'))

interface User{
  name: string
  age: number
}

const user: User = {
  name:'Heropy',
  age:50
}

console.log(user)