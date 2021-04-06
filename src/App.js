import React, {useRef ,useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    // useState에서 사용할 상태 설정
    username: '',
    email: '',
  });
  const { username, email } = inputs; // inputs에서 username과 email 추출
  const onChange = e => {
    const { name, value } = e.target; // e.target에서 name과 value 추출
    setInputs({
      ...inputs, // 기존의 내용 복사
      [name] : value // name 값을 value로 덮어씌움
    });
  };

  const [users, setUsers] = useState([ // users 배열을 상태관리해주기 위해서
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
  ]);
  
  const nextId = useRef(4);
  const onCreate = () => { // 버튼 클릭 시 onCreate 함수 호출
    const user = { // 새 user 객체 생성
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user)); // 기존 배열 복사 후 ... 자리에 넣고 새 항목을 추가
    setInputs({
      username: '',
      email: ''
    });
    
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter( user => user.id !== id ))
    // users의 각 객체들을 가져와 id가 parmeter로 받아온 거랑 다르면 새 배열로 반환!
  };

  const onToggle = id => {
    setUsers(users.map( 
      user => user.id === id ?
      { ...user, active: !user.active } :
       user
      ));
  }
  
  return (
    <div>
      <CreateUser
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>

    </div>
  );
}

export default App;
