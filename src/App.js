import React, { useState } from 'react';
import './App.css';

function App () {
  return (
    <div className = 'App'>
        <h1>Hello World</h1>
        <FuncComp initNumber = {2}></FuncComp>
        <ClassComp initNumber = {2}></ClassComp>
    </div>
  )
}

function FuncComp (props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0]; // useState의 [0] 요소 = props.initNumber
  let setNumber = numberState[1]; // useState의 [1] 요소 = 함수
  // let dateState = useState(new Date().toString());
  // let date = dateState[0];
  // let setDate = dateState[1];
  let [_date, setDate] = useState(new Date().toString())
  return (
    <div className = 'container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Today : {_date}</p>
      <input type = 'button' value = 'random' onClick = {
          function () {
            setNumber(Math.random()) // useState의 [1] 함수에 인자로 넣어줌.
          } 
        }></input>
      <input type = 'button' value = 'time' onClick = {
          function () {
            setDate(new Date().toString()) // useState의 [1] 함수에 인자로 넣어줌.
          } 
        }></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  }
  render() {
    return (
      <div className = 'container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Today : {this.state.date}</p>
        <input type = 'button' value = 'random' onClick = {
          function () {
            this.setState({number: Math.random()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;
