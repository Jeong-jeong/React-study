import { useReducer, useCallback } from 'react';

// custom hook 만들어 사용하기

// useReducer로 만들어 사용하기
function reducer (state, action) { // state = form
	// CHANGE
	switch (action.type) {
		case 'CHANGE': // onChange
			return {
				...state,
				[action.name]: action.value
			};
		case 'RESET': // reset
			return Object.keys(state).reduce((acc, cur) => {
				acc[cur] = '';
				return acc;
			}, {});
		default:
			return state; // 기본은 return state
	}
}

function useInputs(initialForm) {
	//const [form, setForm] = useState(initialForm);
	const [form, dispatch] = useReducer(reducer, initialForm);
	const onChange = useCallback(e => {
		const { name, value } = e.target;
		dispatch({ type: 'CHANGE', name, value });
	}, []);
	const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

	return [form, onChange, reset]; // 객체 or 배열 형태로 내보내기
};

export default useInputs; 
