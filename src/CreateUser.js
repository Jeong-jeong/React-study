import React from 'react';

// props 가져오기
function CreateUser ({ username, email, onChange, onCreate  }) {
	console.log('createUser');
	// onChange = input 값 바뀔 때 호출
	// onCreate = 버튼 누르면 새 항목 등록
	return (
		<>
			<input 
			name='username' 
			placeholder='계정명' 
			onChange={onChange} 
			value={username}
			/>
			<input name='email' 
			placeholder='이메일' 
			onChange={onChange} 
			value={email}/>
			<button onClick={onCreate}>등록</button>
		</>
	);
}

export default React.memo(CreateUser); // props가 바뀌었을 때만 리렌더링