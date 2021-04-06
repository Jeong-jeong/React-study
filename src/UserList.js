import React from 'react';

function User ( {user} ) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>
	);
}

function UserList({ users }) {

	return (
		<>
		{users.map(item => (
			<User user={item} key={item.id}/>
		))}
		</>
	);
}

export default UserList;