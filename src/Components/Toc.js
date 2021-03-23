import React, {Component} from 'react';
// react라는 라이브러리에서 Component를 로딩해서 사용.

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

// Toc.js 안에 변수 등 더 다양한 것들이 있을 경우,
// export를 통해
// 어떤 것을 외부에서 사용하게 허용할 지 설정할 수 있음.
export default Toc; // 클래스 Toc를 사용할 수 있게 허용