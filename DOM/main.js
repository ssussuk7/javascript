//DOM(Document Object Model)

//DOM이란 HTML 문서를 객체로 표현한 것으로
//JS에서 HTML을 제어할 수 있게 해준다

//1.Node vs Elements
//노드(Node) : HTML 요소, 텍스트, 주석 등 모든 것을 의미
//요소(Element) : HTML 요소만을 의미

const parent = document.querySelector('.parent')

console.log(parent.childNodes) //parnt클래스 하위에 있는 주석,텍스트,요소 전부 포함
console.log(parent.children)//요소만 의미(div)

//2.검색과 탐색

//document.getElementById()
//HTML 'id' 속성값으로 검색한 요소를 반환
//여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
//검색 결과가 없으면, 'null' 반환

const el = document.getElementById('child2') //#을 쓰지 않는다.
console.log(el)

//document.querySelector()
//CSS 선택자로 검색한 요소를 하나 반환
//여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
//검색 결과가 없으면, 'null' 반환

//document.querySelectorAll()
//CSS 선택자로 검색한 요소를 'NodeList'로 반환
//forEach를 사용

const els = document.querySelectorAll('.child')
els.forEach(el => console.log(el.textContent))


//N.parentElement
//노드의 부모 요소를 반환

const childEl = document.querySelector('.child')
console.log(childEl.parentElement)

//E.closest()
//자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는
//가장 가까운 요소를 반환
//요소를 찾지 못하면 null 반환

console.log(childEl.closest('div')) //자신을 포함하기 때문에 자기자신 출력
console.log(childEl.closest('body')) 
console.log(childEl.closest('.hello')) //없기 때문에 null 출력


//N.previousSibling / N.nextSibling
//노드의 이전 형제 혹은 다음 형제

console.log(childEl.previousSibling)
console.log(childEl.nextSibling)

//E.previousElementSibling / N.nextElementSibling
//요소의 이전 형제 혹은 다음 형제

console.log(childEl.previousElementSibling) //이전 child가 없기 때문에 null
console.log(childEl.nextElementSibling)

//E.children
//오소의 모든 자식 요소를 반환

console.log(parent.children)

//E.firstElementChild / E.lastElementChild
//요소의 첫 번째 자식 요소 혹은 마지막 자식 요소를 반환

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)


//3.생성,조회,수정

//document.createElement()
//메모리에만 존재하는 새로운 HTML 요소를 생성

//E.prepend() , E.append()
//노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입

const newEl = document.createElement('div') 
newEl.textContent = '새로 추가된 div' 
parent.prepend(new Comment('추가된 주석')) //맨 앞에 추가
parent.append(newEl , 'NEW !!') //맨 뒤로 차례대로 추가


//E.remove()
//요소를 제거함


//E.insertAdjacentElement()
//'대상 요소'의 지정한 위치에 '새로운 요소'를 삽입
//대상요소.insertAdjacentElement(위치, 새로운요소)

//'beforebegin'
//<div> - 대상요소
//'afterbegin'
//'beforeend'
//</div> - 대상요소의 끝
//'afterend'

const spanEl = document.createElement('span')
spanEl.textContent = 'afterbegin !!'

childEl.insertAdjacentElement('afterbegin', spanEl)

//N.insertBefore()
//'부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드를' 삽입
//부모노드.insertBefore(삽입노드, 참조노드(자식))

parent.insertBefore(spanEl, childEl)


//N.contatins()
//'주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인
//노드.contains(주어진노드)

console.log(parent.contains(childEl)) //true

//N.textContent
//노드의 모든 텍스트를 얻거나 변경

childEl.textContent = "변경된 child !"


//E.innerHTML
//요소의 모든 HTML 내용을 하나의 문자로 얻거나
//새로운 HTML을 지정

console.log(parent.innerHTML)

childEl.innerHTML = /*html*/`
  <div>새로운 자식요소 추가</div>
`

//E.dataset
//요소의 각 'data-' 속성 값을 얻거나 지정

childEl.dataset.helloworld = "Hello World"
//<div class="child" data-helloworld = "Hello World"> 이런식으로 들어 감

const obj = {a:1, b:2}
childEl.dataset.object = JSON.stringify(obj) //객체 속성은 JSON화 해서 넣어야 나중에 쓰기도 편함
console.log(JSON.parse(childEl.dataset.object))

//E.tagName
//요소의 태그 이름을 반환

console.log(childEl.tagName) //DIV 출력

//E.id
//요소의 'id' 속성 값을 얻거나 지정

//E.className
//요소의 'class'속성 값을 얻거나 지정

childEl.className += ' child1 active' //띄어쓰기를 해서 작성해야 함


//E.classList
//요소의'class'속성 값을 제어
//-.add() 새로운 값을 추가
//-.remove() 기존 값을 제거
//-.toggle() 값을 토글(값이 있으면 제거, 없으면 추가)
//-.contains() 값을 확인


//E.style
//요소의 'style' 속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정
//<div style="~~~" 안에 작성된 것들만 확인 가능하다(CSS에 작성된 것들 X)


//window.getComputedStyle()
//요소에 적용된 스타일 객체 반환(CSS에 작성된 속성 까지 확인가능)


//E.getAttribute() / E.setAttribute()
//요소에서 특정 속성 값을 얻거나 지정

childEl.setAttribute('title','Hello World')
console.log(childEl.getAttribute('title'))


//E.hasAttribute() / E.removeAttribute()
//요소에서 특정 속성을 확인하거나 제거

console.log(childEl.hasAttribute('title'))
childEl.removeAttribute('title')


//5.크기와 좌표

//window.innerWidth / window.innerHeight
//현재 화면의 크기를 얻습니다

//window.scrollX / window.scrollY
//페이지의 좌상단 기준, 현재 화면의 수평 혹은 수직 스크롤 위치를 얻음

//window.scrollTo() / E.scrollTo()
//지정된 자표로 대상(화면, 스크롤 요소)을 스크롤함
//대상.scrollTo(X좌표, Y좌표)
//대상.scrollTo(top: Y, left: X, behavior: 'smooth')

setTimeout(() => {
  window.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth'
  })
},1000) //1초 뒤 Y축으로 500 부드럽게 이동


//E.clientWidth / E.clientHeight
//테두리 선을 제외한 요소의 크기를 얻음


//E.offsetWidth / E.offsetHeight
//테두리 선을 포함한 요소의 크기를 얻음


//E.scrollLeft / E.scrollTop
//요소의 스크롤 X값, Y값의 위치를 얻음

//E.offsetLeft / E.offsetTop
//페이지의 좌상단 기준, 요소의 위치를 얻음


//E.getBoundingClientRect()
//테두리 선을 포함한 요소의 크기와
//화면에서의 상대 위치 정보를 얻음