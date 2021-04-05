# 벨로퍼트 리액트로 기초 다지기



 [벨로퍼트 react](https://react.vlpt.us/)

### `8일차` - 2021.04.05(월)

👾 input 상태 관리하기<br>
+ Input의 값이 바뀌면 <b> 태그 안의 값이 바뀌게 변경해보자!
	+ **onChange**
		+ onChange의 event 객체: 이벤트가 발생할 때 내장되어 있음
		+ event 객체안의 e.target은 이벤트가 발생한 DOM 정보를 갖고 있음.
		+ e.target.value = 해당 DOM의 값 조회
		+ useState의 기본 상태 값을 공백으로 하고 input value에 넣어주는게 중요!
			+ 그래야 초기화 시 기본 상태 값을 불러와 input이 비워지게 됨.

👾 여러개의 input 관리하기<br>
+ **불변성 지키기**
	+ 여러 개의 input을 관리하기 위해선 useState인자를 객체로 받아야 함!
	+ 리액트에서 객체를 업데이트 할 때는 spread 문법(...)을 이용해 기존의 객체를 복사!!
	+ 새 객체에서 state를 업데이트 해줘야 함.

👾 **useRef**로 특정 DOM 선택하기<br>
+ 버튼을 누르고 focus를 인풋으로 가게하는 리액트 자체 기능이 없다.
	+ useRef ()로 Ref 객체를 만들고 해당 DOM의 ref 값으로 설정.
	+ Ref 객체의 current 값은 해당 DOM을 가리키게 됨.

👾 배열 렌더링하기<br>

