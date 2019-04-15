import React, { Component } from 'react';
import Letterify from './lib/Letterify';

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
        <h1>React letterify</h1>
        <Letterify 
              styleClasses={['lettterify-me', 'test2', 'test3']}
              letterifyString={'Test letterify component'}
              animate={this.state.animate}
              delay={0.1}
              speed={0.3}
              translateValue={40}
              color={'0077be'}
              direction={'up'}
          />
        <button className="show_button" onClick={() => this.buttonClick()}>
            show
        </button>
        <button className="show_button" onClick={() => this.buttonClick()}>
            remove
        </button>

        <Letterify 
              styleClasses={['lettterify-me', 'test2', 'test3']}
              letterifyString={'Test letterify component'}
              animate={this.state.animate2}
              speed={0.2}
              direction={'right'}
          />
        <button className="show_button" onClick={() => this.buttonClick()}>
            show
        </button>
        <button className="show_button" onClick={() => this.buttonClick()}>
            remove
        </button>
      </div>
    );
  }
}

export default App;
