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
+ 여러 개의 객체를 담고 있는 배열을 자동으로 렌더링되게 할 떄는 **map**을 사용
+ key: 각 원소들에 고유값을 줘서 리렌더링 성능 최적화에 도움을 줌
	+ 고유 key 값을 설정할 게 없다면 map의 두번째 인자인 Index를 키값으로!<br>
	👉🏻 단 성능적으로 좋아지지 않기 때문에 이 방법은 지양

👾 **useRef**로 컴포넌트 안의 변수 만들기<br>
+ useRef는 특정 DOM 선택에도 사용하지만,<br>
컴포넌트가 리렌더링 될 때마다 기억될 수 있는 값을 관리할 때도 사용
	+ ex) setTimeout, setInterval의 id, Scroll의 위치 등등
	+ useRef() 인자로 기억될 수 있는 값을 넣으면 됨.


