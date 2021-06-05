import React, {useEffect} from 'react';

const User = function User ( {user, onRemove, onToggle } ) {
	const {username, email, id, active} = user;
	useEffect(() => {
	}, [user]);
	return (
		<div>
			<b style={{
				color: active ? 'green' : 'black',
				cursor: 'pointer'
			}}
				onClick={ () => onToggle(id) }
			>
				{username}
			</b> 
			<span>({email})</span>
			<button onClick={ ()=> onRemove(id) }>삭제</button>
		</div>
	);
}

function UserList({ users, onRemove, onToggle }) {

	return (
		<>
		{users.map(item => (
			<User 
				user={item} 
				key={item.id} 
				onRemove={onRemove}
				onToggle={onToggle}
			/>
		))}
		</>
	);
}

export default React.memo(UserList, (pre, next) => pre === next); // props가 바뀌었을 때만 리렌더링
// React.memo의 두번째 인수로 propsAreEqual 함수를 넣어줄 수 있음.