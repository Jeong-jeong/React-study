import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function Home () {
  return (
    <div>
      <h2>Home</h2>
      <p>Home...</p>
    </div>
  )
}

let contents = [
  {id: 1, title: 'HTML', desc: 'HTML is ...'},
  {id: 2, title: 'CSS', desc: 'CSS is ...'},
  {id: 3, title: 'JS', desc: 'JS is ...'},
]

function Topic () {
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}

function Topics () {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      
      <Switch>
        <Route path='/topics/1'>
          HTML is ...
        </Route>
        <Route path='/topics/2'>
          CSS is ...
        </Route>
        <Route path='/topics/3'>
          JS is ...
        </Route>
      </Switch>
    </div>
  )
}

function Contact () {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/'>Not found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
