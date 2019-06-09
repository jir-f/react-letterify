import React, { Component } from 'react';
import Example from './view/example';

class App extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state={animate: false, animate2: false};
  }

  buttonClick = () => {
    this.setState({
      animate: !this.state.animate,
      animate2: !this.state.animate2
    });
  }
  render() {
    return (
      <div className="react-letterify">
        <Example/>
      </div>
    );
  }
}

export default App;
