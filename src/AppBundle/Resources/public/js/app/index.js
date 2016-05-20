var testModule = require('./module.js');
import React from 'react';
import ReactDOM from 'react-dom';
  
testModule.printTest('stringas');
console.log('yeah');

class HelloMessage extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('my-placeholder'));