import { Component } from 'react';

class Subject extends Component {
	render() { // z
	  return (
		<header>
		  <h1>{this.props.title}</h1> {/* props = 속성 */}
		  {this.props.sub}
		</header>
	  );
	}
  }

export default Subject;