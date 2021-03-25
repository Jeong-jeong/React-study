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
      selected_content_id: 1,
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
      this.state.contents.forEach ( (item) => {
        if (item.id === this.state.selected_content_id) {
          _title = item.title;
          _desc = item.desc;
        }
      } )
      
    }
    console.log('render', this); // App 컴포넌트 > render () 안에서 this = App 
    return (
      <>
      <div className='App'>
        <Subject title={this.state.subject.title} 
                  sub={this.state.subject.sub}
                  onChangePage = {function () {
                    this.setState({mode: 'welcome'});
                  }.bind(this)}
        >
                  
        </Subject>
        <Toc onChangePage = { function(id) {
          this.setState({
            mode: 'read',
            selected_content_id: +id
          });
        }.bind(this)} 
        data={this.state.contents}
        ></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
      </>
    );
  }
}

export default App;
