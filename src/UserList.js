import React, {useContext, useEffect} from 'react';
import { userDispatch } from './App';
const User = function User ( { user } ) {
	const {username, email, id, active} = user;
	const dispatch = useContext(userDispatch);
	useEffect(() => {
	}, [user]);
	return (
		<div>
			<b style={{
				color: active ? 'green' : 'black',
				cursor: 'pointer'
			}}
				onClick={ () => dispatch({ 
					type: 'TOGGLE_USER',
					id
				})}
			>
				{username}
			</b> 
			<span>({email})</span>
			<button onClick={ ()=> dispatch({
				type: 'REMOVE_USER',
				id
			})}>삭제</button>
		</div>
	);
}

function UserList({ users }) { // 다리 역할

	return (
		<>
		{users.map(item => (
			<User 
				user={item} 
				key={item.id} 
			/>
		))}
		</>
	);
}

export default React.memo(UserList, (pre, next) => pre === next); // props가 바뀌었을 때만 리렌더링
// React.memo의 두번째 인수로 propsAreEqual 함수를 넣어줄 수 있음.