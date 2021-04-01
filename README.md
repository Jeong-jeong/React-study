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


### `3일차`
+ render() : 어떤 HTML을 화면에 그릴 것인지를 결정.
+ Props, State 값이 바뀌면 자식의 render()가 다시 호출됨❕
+ 🔥 event 🔥
  + 이벤트를 걸 땐 이벤트 콜백함수의 파라미터로 이벤트 객체(e)를 자동으로 받음.
  + e.preventDefault(): 기본적인 기능을 막음
+ **bind**
  + 기본적으로 render() 안에서 this는 컴포넌트 자기자신을 가리킴.
  + 이벤트 호출시 실행되는 함수안의 this는 컴포넌트 자기자신을 가리키지 않음❕❕❕<br>
    심지어 undefined임<br>
  + 함수 바로 뒤에 *.bind(this)* 👉🏻 이때 this는 함수 안에서 컴포넌트를 가리킴.
  + this가 원하는 객체를 가리키게 하고 싶을 때 .bind(해당객체) 하면 될듯?
+ **setState**
  + 이미 컴포넌트가 생성된 후 state 값을 직접 변경하려하면 안됨.<br>
  👉🏻 리액트가 값이 바뀐지 모르기 때문에. render()도 실행되지 않음.<br>
  + setState() 안에 {} 형태로 변경할 값을 넣어줘야 함.


### `4일차`
+ 컴포넌트 이벤트 만들기
✔️ 리스트를 눌렀을 때 본문이 변경되게 해보자.
+ this.state.contents의 id값과 어떠한 state의 번호와 같을 경우 해당 본문을 출력하도록 조건 설정.
+ 클릭할 때마다 어떠한 state 값이 클릭된 li의 아이디 값으로 변경되게 하기위해,<br>
+ Toc 컴포넌트안의 함수를 실행할 때 인자로 클릭된 li(a)의 id 값을 줄 것임.(어렵다....🥲)
  + 이벤트가 자체적으로 갖고있는 target은 해당 이벤트를 실행하는 태그를 가리킴.
  + Toc의 onChangePage 함수의 인자로 e.target.dataset.id 값을 줌.
  + 매개변수로는 id를 주고 결국 Toc 컴포넌트의 onChangePage 함수가 실행될 때<br>
  변경될 selected_content_id의 값으로 매개변수로 받은 id(e.target.dateset.id)를 숫자로 변환해 주면 되는 것임!!! 와 복잡하다~~~!~!~
+ bind()의 두번째 인자로 주면 해당 함수의 매개변수안에 들어가는 방법으로 할 수도 있음.

⭐️ props와 state 복습
**props**<br>
+ 부모(컴포넌트를 사용하는 쪽)에서는 props를 통해 값을 넣을 수 있음.
+ 자식(컴포넌트를 만든 쪽)에서는 props를 직접 변경할 수 없음.
+ 부모가 자식에게 값을 전달할 때 props 통해서 전달.

**state**<br>
+ 내부적으로 필요한 데이터들은 state를 통해서 관리.
+ 즉 컴포넌트 내부에서 선언하고 내부에서 값을 변경 가능.

**event**<br>
+ 자식이 부모의 값을 변경하고 싶을 때 이벤트를 사용!


### `5일차`
클래스 스타일 VS 함수 스타일<br>

+ 클래스 스타일
  + 클래스 문법 이해 필요. 복잡한 코드
  + 리액트를 풀로 사용 가능
+ 함수 스타일
  + 함수 문법만 알면 됨. 기능 부족
  + 함수로 state 사용 불가.
  + 라이플 사이클 API(생성, 업데이트, 삭제 등) 사용 불가
👉🏻 최신 리액트에 'hook' 등장!

**hook**<br>
+ hook은 use로 시작함.
+ React.useState 대신 import 쪽에 {useState}를 적어주기.
+ ✔️ useState는 2개의 값으로 이루어진 배열.
  + 1번째 요소는 상태값
  + 2번째 요소는 상태를 바꿀 수 있는 함수.
+ this는 클래스 안에서 사용하는 것이기 때문에 함수 스타일에선 사용하지 않음.
+ 구조 분해 할당을 사용해 함수에서 state 사용을 더 깔끔하게 할 수 있음.


### `6일차`
라이프 사이클<br>

+ ✔️ 클래스에서 라이프 사이클 구현하기
+ componentWillMount() => render 되기 전 실행 (첫 render 시)
+ componentDidMount() => render된 후 실행 (첫 render 시 )
+ shouldComponentUpdate() => state값이 바뀔 때 render를 호출할 필요가 있냐 없냐를 true로 리턴하면 render 호출 false면 호출 안함.
+ componentWillUpdate() => shouldComponentUpdate return 값이 true일 때 실행. (state 값이 바뀔 때마다)
+ componentDidUpdate() => render후 실행 (state 값이 바뀔 때마다)
+ componentWillUnMount() => 뒤처리 할 때, 컴포넌트가 사라질 때

+ ✔️ 함수에서 라이프 사이클 구현하기
+ **useEffect()** => render가 끝난 후 실행, 렌더가 실행될 때마다 같이 실행됨
  + class에서의 componentDidMount & componentDidUpdate와 동일
  + side effect가 생략된 말
  + 리액트의 main effect는 render, 즉 화면에 그리는 것.
  + useEffect는 렌더가 끝나고 난후, 렌더가 실행될 때마다 실행되는 사이드 이펙트 효과.
  + 여러 개 사용 가능
+ **effect with clean up**
  + render가 된 직후, render가 다시 호출될 때 기존 useEffect보다 먼저 실행하고 싶은 작업이 있을 땐 return 값으로 함수를 주자.
  + = componentWillUnMount() 와 같음
  + ex) render가 처음 실행되고, 다시 render가 실행될 때 이전에 실행됐던 것들을 정리하고 싶을 때 사용함! 👍
+ **Skipping Effects**
  + 2번째 인자로 배열[]을 주고, 배열안의 원소들 상태가 바꼈을 때만 첫번째 인자인 콜백 함수를 싱행.
  + 2번째 인자인 배열 안 원소에 포함되지 않는다면 useEffect의 콜백함수가 실행되지 않는다.
+ **useEffect를 componentDidMount()만 실행되게 하고 싶을 때**
  + 2번째 인자로 빈 배열을 주면 첫 render시에만 실행되고, state 값이 바뀌어도 실행되지 않는다. component가 사라질 땐 실행됨










