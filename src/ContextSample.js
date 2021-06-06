// Context API
import React, { createContext, useContext } from 'react'

const MyContext = createContext('defaultValue'); // Context에서 사용할 기본값 넣기

function Child () {
	const text = useContext(MyContext); // Context의 값을 읽어와 사용하게 해줌.
	return <div>안녕하세요? {text}</div>
}

function Parent () {
	return <Child />
}

function GrandParnet () {
	return <Parent />
}

function ContextSample() { // 최상위에서 Provider 사용(값 지정할 때)
	return (
	<MyContext.Provider value='GOOD'>
	<GrandParnet />
	</MyContext.Provider>
	)
}

export default ContextSample;
