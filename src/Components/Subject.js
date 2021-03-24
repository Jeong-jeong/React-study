import { Component } from 'react';

class Subject extends Component {
	render() {
    console.log('Subject render');
		
	  return (
		<header>
		  <h1><a href=''>{this.props.title}</a></h1> {/* props = 속성 */}
		  {this.props.sub}
		</header>
	  );
	}
  }

export default Subject;