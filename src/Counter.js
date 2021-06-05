import React, {useReducer} from 'react';

function reducer (state, action) {
	// action.type이 뭐냐에 따라 다른 업데이트.
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			throw new Error('Unhandled action');
	}
}

function Counter () {
	// reducer 함수 만들기

	// dispatch = action을 발생시킴
	const [number, dispatch] = useReducer(reducer, 0);
	
	const onIncrease = () => {
		dispatch({
			type: 'INCREMENT'
		})
	}

	const onDecrease = () => {
		dispatch({
			type: 'DECREMENT'
		})
	}

	return (
		<>
			<h1>{number}</h1>
			<button onClick = {onIncrease}> +1 </button>
			<button onClick = {onDecrease}> -1 </button>
		</>
	);
}

export default Counter;