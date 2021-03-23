import { Component } from 'react';
import Toc from './Components/Toc'
import Content from './Components/Content'
import Subject from './Components/Subject'
import './App.css';








class App extends Component { // React의 Component를 상속받아 App 클래스를 만듦.
  render() { // ⭐️ 클래스 안의 메서드는 function 키워드 생략 가능
    return (
      <>
      <div className='App'>
        <Subject title='WEB' sub='world wide web!'></Subject>
        <Toc></Toc>
        <Content title='HTML' desc='HTML is HyperText Markup Language.'></Content>
      </div>
      </>
    );
  }
}

export default App;
