import React, { useRef } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UseList';
import Wrapper from './Wrapper';


function App() {
  const users = [
		{
			id: 1,
			username: 'velopert',
			email: 'velopert@naver.com'
		},
		{
			id: 2,
			username: 'Jeongs',
			email: 'Jeongs@naver.com'
		},
		{
			id: 3,
			username: 'tester',
			email: 'tester@naver.com'
		}
  ];
  
  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current); // 4
    nextId.current += 1;

  }

  return (
    <div>
      <Wrapper>
      <Hello color='pink' />
      <Hello name= 'react' color='red' isSpecial/>
      </Wrapper>

      <Counter />

      <InputSample />

      <UserList users={users}/>

    </div>
  );
}

export default App;
