//모듈이란 특정 데이터들의 집합
//모듈 가져오기(Import), 내보내기(Export)

import number from './module.js' //default 기본내보내기
import { hello } from './module.js' //이름 내보내기
import { func as hellofunc } from './module.js' //이름 바꿔서 사용하기
import * as abc from './module.js' //모든 값 다쓰기

console.log(number)
console.log(hello)
hellofunc()
console.log(abc)

//import문은 항상 맨 상단에 작성되어야 하지만 중간에 사용하려면 import()함수를 사용할 수 있다.
setTimeout(() => {
  import('./module.js').then(abc => { //모듈의 값을 불러들이면 then()콜백함수가 실행되고
    console.log(abc) //모든 값을 사용한다
  })
}, 1000)