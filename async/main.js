//1.동기와 비동기
//동기: 순차적으로 코드 실행
//비동기: 순차적으로 코드 실행하지 않음

// console.log(1)
// setTimeout(() => {console.log(2)}, 1000)
// console.log(3)
//console.log(2)를 먼저 작성했지만 SetTimeout이 있기때문에 1초후에 실행 = 비동기

//2.콜백과 콜백지옥

// const a = (callback) => {
//   setTimeout(() => {
//     console.log(1)
//     callback()
//   },1000)
// }

// const b = (callback) => {
//   setTimeout(() => {
//     console.log(2)
//     callback()
//   },1000)
// }

// const c = () =>{
//   console.log(3)
// }

// a(() => {
//   b(() => {
//     c()
//   })
// })

//setTime함수를 사용하여 비동기를 구현한 후에
//callback함수를 작성하여 강제로 차례로 실행되도록 지정했지만 계속적으로 사용ㅎ면 좋지 않음

// const getMovie = (movieName, callback) => {
//   fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
//     callback()
//   })
// }

// getMovie('frozen',() => {
//   console.log('겨울왕국 정보입니다')
//   getMovie('Avengers', () => {
//     console.log('어벤져스 정보입니다')
//     getMovie('soccer', () => {
//       console.log('축구 정보입니다')
//     })
//   })
// })
//따로 작성하게 되면 데이터를 가져온 순서대로 실행되기 때문에 순서가 계속 바뀜
//그래서 이렇게 강제적으로 실행순서를 설정하지만 이것 또한 계속 들여쓰기 됨으로 관리가 용이하지 않음


//3.promise

const a3 = () => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      console.log(1)
      resolve()
    },1000)
  })
}

const b3 = () => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      console.log(2)
      resolve()
    },1000)
  })
}

const c3 = () => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      console.log(3)
      resolve()
    },1000)
  })
}

// a3().then(() => {
//   b3().then(() => {
//     c3()
//   })
// })
//위 식으로 사용할 수 있지만 전과 같기 때문에 간결하게 표현하면

a3()
.then(b3)
.then(c3)
.then(() => console.log('finished!'))

const getMovies = (movieName) => {
  return new Promise((resolve) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      resolve()
    })
  })
}

getMovies('frozen')
.then(() => getMovies('fire'))
.then(() => getMovies('taxi'))
.then(() => {
  console.log('finished !!')
})

//4.Async Await 패턴

const wrap = async() => {
  await a3()
  b3() //a3가 출력이 된 후에 b3를 출력
} //await은 무조건 'async'에 감싸져야한다.

wrap()

//5.Resolve, Reject 에러 헨들링

const delayAdd = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(index > 10){
        reject(`${index}는 10보다 큽니다 !`)
        return
      }
      console.log(`${index}입니다`)
      resolve(index + 1) //reject가 실행되면 resolve는 실행되지 않지만, 다른 것들은 실행되므로 return문으로 실행 방지를 해줘야한다.
    },1000)
  })
}

delayAdd(13)
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Done!'))//항상 실행되는 문

//await패턴
const delayWrap = async() => {
  try{//정상문
    const res = await delayAdd(2)
    console.log(res)
  }catch(err){//오류문
    console.log(err)
  }finally{ //항상 실행되는 문
    console.log('Done!')
  }
}

//6.반복문에서 비동기 처리

const getMovies6 = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => resolve(res))
  })
}

const movies = ['fact','frozen','herry']

const forWrap = async() => { //forEach문은 순서가 바뀔수도 있어 forof을 사용한다
  for(const movie of movies){
    const res = await getMovies6(movie)
    console.log(movie, res)
  }
}
forWrap()

//7.fetch()함수
//fetch(주소, 옵션)
//네트워크를 통해 리소스의 request 및 response을 처리할 수 있습니다.
//Promise 인스턴스를 반환(then을 사용)

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen',{
  method: 'GET',
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify({ //꼭 JSON을 통해 string화해야 한다.
    name: 'Hong',
    age: 30,
    email: 'hsw1001@korea.kr'
  })
})
//많이 쓰는 fetch 속성들
