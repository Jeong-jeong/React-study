import { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() { // z
    return (
      <header>
        <h1>web</h1>
        world wide web!
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">JavaScript</a></li>
        </ul>
    </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
    </article>
    );
  }
}

class App extends Component { // React의 Component를 상속받아 App 클래스를 만듦.
  render() { // ⭐️ 클래스 안의 메서드는 function 키워드 생략 가능
    return (
      <>
      <div className='App'>
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
      </>
    );
  }
}

export default App;
