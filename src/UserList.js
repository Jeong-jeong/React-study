import React from 'react';

function User ( {user, onRemove} ) {
	const {username, email, id} = user;
	return (
		<div>
			<b>{username}</b> <span>({email})</span>
			<button onClick={ ()=> onRemove(id) }>삭제</button>
		</div>
	);
}

function UserList({ users, onRemove }) {

	return (
		<>
		{users.map(item => (
			<User 
				user={item} 
				key={item.id} 
				onRemove={onRemove}
			/>
		))}
		</>
	);
}

export default UserList;