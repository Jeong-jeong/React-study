import React from 'react';

function User ( {user, onRemove, onToggle } ) {
	const {username, email, id, active} = user;
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

export default UserList;