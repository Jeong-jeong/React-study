import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';


function App() {
  return (
    <div>
      <Wrapper>
      <Hello color='pink' />
      <Hello name= 'react' color='red' isSpecial/>
      </Wrapper>

      <Counter />

      <InputSample />

    </div>
  );
}

export default App;
