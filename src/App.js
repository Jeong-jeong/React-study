import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from 'react';
import produce from 'immer';
import Button from './components/Button';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    // users 배열을 상태관리해주기 위해서
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
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        // immer를 쓴 경우
        draft.users.push(action.user);
      });
    //return {
    //  users: state.users.concat(action.user)
    //}
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        // 이런 경우 코드가 복잡하기 때문에 immer로 간단히 바꿔줌.
        const user = draft.users.find((user) => user.id === action.id); // 특정 유저 찾기 (user의 id가 action으로 가져온 id랑 같은)
        user.active = !user.active;
        //users: state.users.map(user =>
        //  user.id === action.id
        //  ? { ...user, active: !user.active }
        //  : user
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
        //...state,
        //users: state.users.filter(user => user.id !== action.id)
      });
    default:
      throw new Error('Unhandled action');
  }
}

export const userDispatch = createContext(null); // 기본값 필요 없음

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state안에 inputs, users가 들어있음.
  // state 안의 값들을 비구조화 할당으로 추출후 컴포넌트에게 props로 할당.
  const [form, onChange] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const { users } = state;
  const nextId = useRef(4);

  // onChange 구현

  // onCreate 구현
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  // active user
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      {/* scss 스타일링 */}
      <div className="buttons">
        <Button size="large" color="gray">
          버튼
        </Button>
        <Button>버튼</Button>
        <Button size="small" color="pink">
          버튼
        </Button>
        <Button size="large" outline>
          버튼
        </Button>
        <Button color={'gray'} outline>
          버튼
        </Button>
        <Button size="small" color="pink" outline fullWidth>
          버튼
        </Button>
        <Button
          size="small"
          color="blue"
          outline
          fullWidth
          onClick={() => console.log('클릭!')}
          onMouseMove={() => console.log('무브!')}
          className="button-styling"
        >
          버튼 222
        </Button>
      </div>

      <userDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} />
        <div>활성 사용자 수: {count}</div>
      </userDispatch.Provider>
    </div>
  );
}

export default App;
