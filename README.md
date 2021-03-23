# 가장 기초적인 리액트 개념을 위한 생활코딩 강의 수강



 [생활코딩 react](https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=1).

### `1일차`

기본적인 js, css 수정방법과 배포하는 법을 배움.
+ npx serve -s build
+ **클래스 기반 컴포넌트** 사용
  + 오래된 코드에서 클래스를 쓰기 때문에 이해하는 게 중요

### `2일차`
+ clss 안의 메서드는 function 키워드 생략 가능.
+ 컴포넌트는 하나의 최상위 태그만 써야 함.
+ **JSX** 문법의 코드를 리액트가 해석해 JS로 바꿔줌.
+ react developer tool 설치
+ 컴포넌트 분리
+ **props**
+ 컴포넌트 실행시 render()보다 먼저 실행되어 컴포넌트 초기화시켜주고 싶을 때 constructor 안에 넣자.
+ **state**
  + 상위 컴포넌트(App)의 상태를 하위 컴포넌트(Subject, Toc...)로 전달하고 싶을 때 사용
+ **key**
  + 반복문을 통해 자동으로 태그가 추가될 땐 추가되는 태그들을 각각 구분하기 위한 key가 필요
 
⭐️ 정리: 부모(App)는 state라는 내부 정보를 사용하고 자식에게 전달할 땐 props로 전달.
👉🏻 부모는 내부적으로 (props 안의 내용)은 알 필요가 없고 사용자에게 전달할 것만 알면 됨.
  내부적인 것은 자식 내에서 해결






