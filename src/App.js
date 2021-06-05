import React, {useRef ,useReducer, useMemo, useCallback} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    // useState에서 사용할 상태 설정
    username: '',
    email: '',
  },
  users: [ // users 배열을 상태관리해주기 위해서
    // useState로 감싼 뒤 비구조화할당으로 추출
		{
			id: 1,
			username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
		  },
		  {
			id: 2,
			username: 'tester',
      email: 'tester@example.com',
      active: false,
      
		  },
		  {
			id: 3,
			username: 'liz',
      email: 'liz@example.com',
      active: false,
		  }
  ]
}

function reducer (state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
          ? { ...user, active: !user.active }
          : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
      default:
        throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state안에 inputs, users가 들어있음.
  // state 안의 값들을 비구조화 할당으로 추출후 컴포넌트에게 props로 할당.
  const { username, email } = state.inputs;
  const { users } = state;
  const nextId = useRef(4);

  // onChange 구현
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  // onCreate 구현
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    })
    nextId.current += 1;
  }, [username, email])

  // onToggle 구현
  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  // onRemove 구현
  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, [])

  // active user
  const count = useMemo(() => countActiveUsers(users), [users])
  
  return (
    <div>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성 사용자 수: {count}</div>
    </div>
  );
}

export default App;
