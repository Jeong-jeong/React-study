import { Component } from 'react';
import Toc from './Components/Toc'
import Content from './Components/Content'
import Subject from './Components/Subject'
import './App.css';



class App extends Component { // React의 Component를 상속받아 App 클래스를 만듦.
  constructor(props) { 
    super(props); // state 값 초기화
    this.state = { 
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for desgin'},
        {id: 3, title: 'JS', desc: 'JS is for interactive'},
      ]
    }
  }
  render() { // ⭐️ 클래스 안의 메서드는 function 키워드 생략 가능
    return (
      <>
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title='HTML' desc='HTML is HyperText Markup Language.'></Content>
      </div>
      </>
    );
  }
}

export default App;
