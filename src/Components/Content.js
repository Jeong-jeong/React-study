import React, {Component} from 'react';

class Content extends Component {
	render() {
	console.log('Content render');

	  return (
		<article>
		  <h2>{this.props.title}</h2>
		  {this.props.desc}
	  </article>
	  );
	}
  }

export default Content; // 클래스 Content를 외부에서 사용하게 허용.