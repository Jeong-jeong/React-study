import React, { useState, useEffect } from 'react';
import './App.css';

function App () {
  let [funcShow, setFuncShow] =  useState(true);
  let [classShow, setClasscShow] =  useState(true);

  return (
    <div className = 'App'>
        <h1>Hello World</h1>
        <input type='button' value='remove func' onClick={function() {
          setFuncShow(false);
        }}></input>
        <input type='button' value='remove Cump' onClick={function() {
          setClasscShow(false);
        }}></input>
        {funcShow ? <FuncComp initNumber = {2}></FuncComp> : null}
        {classShow? <ClassComp initNumber = {2}></ClassComp> : null}
    </div>
  )
}
let funcStyle = 'color: blue';
let funcId = 0;
function FuncComp (props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0]; // useState의 [0] 요소 = props.initNumber
  let setNumber = numberState[1]; // useState의 [1] 요소 = 함수
  // let dateState = useState(new Date().toString());
  // let date = dateState[0];
  // let setDate = dateState[1];
  let [_date, setDate] = useState(new Date().toString())

  // = side effect
  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount)' + (++funcId), funcStyle);
    document.title = number + ':' + _date;
    return function () {
      console.log('%cfunc => useEffect return (componentDidMount' + (++funcId), funcStyle);
    }
  }, [])

  useEffect(function() {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
    document.title = number + ':' + _date;
    return function () {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
    }
  }, [number]) // 2번째 인자로 배열을 주고, 배열안의 원소들 상태가 바꼈을 때만 첫번째 인자인 콜백 함수를 싱행.

  useEffect(function() {
    console.log('%cfunc => useEffect date (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
    document.title = _date;
    return function () {
      console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
    }
  }, [_date]) // 2번째 인자로 배열을 주고, 배열안의 원소들 상태가 바꼈을 때만 첫번째 인자인 콜백 함수를 싱행.

  console.log('%cfunc => render' + (++funcId), funcStyle);
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
      <input type = 'button' value = 'date' onClick = {
          function () {
            setDate(new Date().toString()) // useState의 [1] 함수에 인자로 넣어줌.
          } 
        }></input>
    </div>
  );
}
let classStyle = 'color: red';
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle)
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle);
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
