//1.이벤트 추가 및 제거

//.addEventListener()
//대상의 이벤트를 등록
//대상에 지정한 이벤트가 발생했을 때 지정한 함수가 호출

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

const printFunc = (input) =>{console.log(`${input}`)} //함수로 선언해야 나중에 remove 하기 편함

parentEl.addEventListener('click', () => {
  printFunc('Parent!!')
})
childEl.addEventListener('click', event => {
  printFunc('Child!!')
  event.stopPropagation()
})

//.removeEventListener()
//대상에 등록했던 이벤트를 제거
//메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음


//2.이벤트 객체
//이베트 객체는 대상에서 발생한 이벤트 정보를 담고 있습니다.

parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)
})
//target - 클릭한 위치
//currentTarget - 이벤트를 추가한 위치


//3.기본동작방지
//마우스 휠의 스크롤 동작 방지
parentEl.addEventListener('wheel', event => {
  event.preventDefault()
  console.log('wheel!')
}) //실제로는 되고 있지만 우리가 동작할 때는 안됨


//4.버블링과 캡처링
//이벤트 전파(버블) 정지 - 이벤트가 부모요소에게 전파되는 것을 방지
//event.stopPropagation() 
//그 target에만 이벤트를 적용시기고 싶을 때 사용

//capture: true속성을 추가하면 target인 영역 보다 먼저 이벤트가 되도록 속성을 추가

document.body.addEventListener('click', event => {
  console.log('body !!!')
},{capture: true})

 //body가 먼저 출력되고
 //그 다음 target 여러개일 경우 부모요소부터 실행

 //5.이벤트 옵션
 //핸들러 한 번만 실행

 //{once: ture} 이벤트 한번만 실행
 //{passive: true} 기본 동작과 핸들러 실행 분리(이벤트 안에 로직이 상당이 복잡하면 전체적으로 느려질 수 있어서 분류하여 화면이 부드럽게 실행가능)


 //6.이벤트 위임(Delegation)
 //비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우
 //단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있음

 const parentEl2 = document.querySelector('.parent2')
 const childEls = document.querySelectorAll('.child2')

//각각 이벤트를 추가하는 방법 
childEls.forEach(el => {
  el.addEventListener('click', event => {
    console.log(event.target.textContent)
  })
})
 
//조상 요소에 이벤트 위임
parentEl2.addEventListener('click', event => {
  const childEl2 = event.target.closest('.child2')
  if(childEl2){
    console.log(childEl2.textContent)
  }
})

//7.마우스와 포인터 이벤트
//click - 클릭했을 때
//dblclick - 더블클릭했을 때
//mousedown - 마우스를 누르고 있을 때
//mouseup - 마우스를 땔 때
//mouseenter -포인터가 요소 위로 들어 갈 때
//mouseleave - 포인터가 요소 밖으로 나올 때
//mousemove - 포인터가 움직일 때
//contextmenu - 우클릭했을 때
//wheel - 휠 버튼이 회전할 때


//8.키보드 이벤트
//keydown - 키를 누를 때
//keyup - 키를 땔 때

const inputEl = document.querySelector('input')

inputEl.addEventListener('keydown', event => {
  if(event.key === 'Enter' && !event.isComposing){ 
    console.log(event.target.value)
  }
})
//한글같은 문자는 2번의 처리과정을 수행해야 하는데
//isComposing이 true일 때는 처리중이다라는 내용이므로 false일 때만 사용해주면 됨



//9.양식과 포커스 이벤트
//focus - 포커스를 얻었을 때
//blur - 포커스를 잃었을 때
//input - 값이 변경되었을 때
//change - 상태가 변경되었을 때(tab)
//submit - 제출 버튼을 선택했을 때
//reset - 리셋 버튼을 선택했을 때

const formEl = document.querySelector('form')
const inputEls = document.querySelectorAll('input')

inputEls.forEach(el => {
  el.addEventListener('focus', () => {
    formEl.classList.add('active')
  })

  el.addEventListener('blur', () => {
    formEl.classList.remove('active')
  })

  el.addEventListener('change',event=>{
    console.log(event.target.value)
  })
})

formEl.addEventListener('submit', event=>{
  event.preventDefault() //원래 submit을 하면 새로고침 되지만 그것을 방지
  const sub = {
    id: event.target[0].value,
    pw: event.target[1].value
  }
  console.log(sub)
})

formEl.addEventListener('reset',() => {
  console.log('reset !!')
})

//10.커스텀 이벤트

const child31 = document.querySelector('.child3:nth-child(1)')
const child32 = document.querySelector('.child3:nth-child(2)')

child31.addEventListener('click', () => {
  //강제적으로 이벤트 추가
  child32.dispatchEvent(new Event('click'))
  child32.dispatchEvent(new Event('wheel'))
  child32.dispatchEvent(new Event('mousedown'))
})

//새로운 이벤트 추가
child31.addEventListener('hello',()=>{
  console.log('hello World !!')
})

child32.addEventListener('click', () => {
  console.log('child2 click!')
  child31.dispatchEvent(new Event('hello')) //2번째 요소를 클릭했을 때 hello이벤트 강제로 실행
})

child32.addEventListener('wheel', () => {
  console.log('child2 wheel!')
})

child32.addEventListener('mousedown', () => {
  console.log('child2 mousedown!')
})