import React, {useState} from 'react';

function Counter () {
	const [number, setNumber] = useState(0);
	// 상태
	// 상태를 바꾸는 콜백 함수
	const onIncrease = () => {
		setNumber(pre => pre + 1)
	}

	const onDecrease = () => {
		setNumber(pre => pre - 1)
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