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


### `9일차` - 2021.04.06(화)

👾 배열에 항목 추가하기<br>
+ 컴포넌트의 상태로 관리해주기 위해선 useState 사용!
+ 배열도 객체와 마찬가지로 기존 배열 복사 후 새 배열에 변화를 줘야 함.
	+ push, splice, sort 함수는 원 배열을 바꾸기 떄문에 사용 불가.
	+ spread 문법(...) 이나 concat 사용

👾 배열에 항목 제거하기<br>
+ 배열에서 특정 아이템을 삭제할 때 불변성을 지켜가며 업데이트 하기!
	+ filter() 사용 : 배열에서 특정 조건이 만족하면 새 배열로 반환

👾 배열에 항목 수정하기<br>
+ 배열의 항목을 수정할 때도 map 함수를 사용!


### `10일차` - 2021.05.22(토)
+ 너무 어려워서 JS 차근차근 파고 슬슬 이해될 때 다시 시작함 🥲

👾 useEffect 사용법
+ 클래스 컴포넌트의 라이프 사이클 대체
+ useEffect는 컴포넌트가 렌더링 된 후(mount), 업데이트 될 때, 삭제될 때(unmount) 사용가능
+ 보통은 렌더링된 후 + 업데이트 될 때마다 실행됨.
+ 두번째 인수, deps(dependency) = []
	+ [] 안에 값이 설정되거나, update될 때만 useEffect 실행.
		+ []안에 값이 등록되면 클리너 함수가 값이 바뀌기 전에 먼저 실행됨.
	+ []이 비었을 경우 컴포넌트 렌더링 시에만 나타남(업데이트시엔 X)
+ 클리너 함수: return ()=> {} 로 삭제될 때 사용.
	+ useEffect에서 setTimeout을 설정하고 나중에 삭제하기 위해<br>
	clearTimeout을 사용할 때 적용 가능.
+ ⭐️ useEffect 사용시 props로 받아온 값, useState 값을 참조할 떄, 함수를 사용할 때<br>
deps에 꼭 넣어줘야 함. => 오류 가능성 줄여줌
+ ⭐️ React에선 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링됨!!


### `11일차` - 2021.06.04(금)
👾 useMemo
+ 이전에 연산된 값을 재사용할 때 사용.
+ 특정 값이 바뀌었을 때만 특정 함수를 실행해서 연산 처리.
	+ 만약 값이 바뀌지 않았다면 리렌더링될 때 이전의 연산된 값을 재사용하게 해줌.
+ <code>useMemo(해당함수, deps)</code>

👾 useCallback
+ 이전에 만들었던 함수를 새로 만들지 않고 재사용할 떄 사용.
+ useMemo랑 비슷하지만 '함수'를 위한 hook.
+ ⭐️ 리렌더링 될 때마다 함수가 새로 만들어지는 것을 막는 것이 좋음.
	+ 최적화하고 싶은 함수를 useCallback으로 감싸준다.
		+ <code>useCallback(해당함수, deps)</code>

👾 React.memo
+ 컴포넌트에서 리렌더링이 불필요할 때 이전 렌더링 결과를 재사용.
+ 컴포넌트 리렌더링 성능 최적화 효과!
+ 컴포넌트를 export default 할 때 React.memo로 감싸주기
+ 두번째 인수로 propsAreEqual 함수를 넣어줄 수 있음.
	+ preProps, nextProps를 가져와서 비교 후 true이면 리렌더링 방지, 아니면 리렌더링.
	+ ex) <code>React.memo(컴포넌트, (pre, next) => pre === next)</code> 이면 리렌더링 방지.

⭐️ 오늘 배운 최적화 hooks 들은 최적화가 필요하다고 판단될 때에만 사용하기!


### `12일차` - 2021.06.05(토)
👾 useReducer
+ 상태 업데이트.
+ useState와의 차이점
	+ ⭐️action⭐️이란 객체를 기반으로 상태를 업데이트.
	+ 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능.
	+ 다른 파일에 작성 후 불러와서 사용도 가능.
+ <code>reducer</code>: 상태를 업데이트하는 함수
+ <code>dispatch</code>: action을 발생시킴.

👾 useState VS useReducer
+ 간단한 거면 useState, 복잡한거면 useReducer





