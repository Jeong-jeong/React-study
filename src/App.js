import { Component } from 'react';
import Toc from './Components/Toc'
import Content from './Components/Content'
import Subject from './Components/Subject'
import './App.css';



class App extends Component { // React의 Component를 상속받아 App 클래스를 만듦.
  constructor(props) { 
    super(props); // state 값 초기화
    this.state = { 
      mode: 'read', // 'welcome' 모드일 때
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'}, // welcome 모드일 때 갖는 값
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for desgin'},
        {id: 3, title: 'JS', desc: 'JS is for interactive'},
      ]
    }
  }
  render() { // ⭐️ 클래스 안의 메서드는 function 키워드 생략 가능
    console.log('App render');
    let _title, _desc = null;
    if (this.state.mode === 'welcome') { // welcome 모드일 때 화면 바뀌기
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this); // App 컴포넌트 > render () 안에서 this = App 
    return (
      <>
      <div className='App'>
        {/* <Subject title={this.state.subject.title} 
                  sub={this.state.subject.sub}>
        </Subject> */}
        <header>
		      <h1><a href='' onClick = {function(e) {
            console.log('event in', this);
            e.preventDefault();
            // this.state.mode = 'welcome'; > state 값 직접 변경❌
            this.setState({ // setState()에서 변경하고 싶은 값을 객체 형태로 줘야 함.
              mode: 'welcome'
            })
 
          }.bind(this)}>{this.state.subject.title}</a></h1>
		        {this.state.subject.sub}
		    </header>
        <Toc data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
      </>
    );
  }
}

export default App;
