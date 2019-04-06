import React, { Component } from 'react';
import Letterify from './lib/Letterify';

class App extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state={animate: false};
  }

  buttonClick = () => {
    this.setState({
      animate: true
    });
  }
  render() {
    return (
      <div className="react-letterify">
        <h1>React letterify</h1>
        <Letterify 
              styleClasses={['lettterify-me', 'test2', 'test3']}
              letterifyString={'Test letterify component'}
              animate={this.state.animate}
              delay={10}
              speed={10}
              direction={'up'}
          />
        <button className="show_button" onClick={() => this.buttonClick()}>
            show
        </button>
      </div>
    );
  }
}

export default App;
