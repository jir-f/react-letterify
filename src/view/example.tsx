import React, { Component } from 'react';
import Input from './components/input';
import Letterify from '../lib/Letterify';


interface ExampleProps {
}

interface ExampleState {
  inputString: string,
  animate: boolean
}

export default class Example extends Component<ExampleProps, ExampleState>{
  constructor(props: ExampleProps){
    super(props);
    this.state = {
      inputString: '',
      animate: false
    };  
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputString: e.target.value});
  }

  buttonClick = () => {
    this.setState({
      animate: !this.state.animate
    });
  }

  render() {
    return (
      <div className='example'>
        <Input 
          inputString={this.state.inputString}
          handleInputChange={this.handleChange}
        />
        <Letterify 
              styleClasses={['lettterify-me', 'test2', 'test3']}
              letterifyString={this.state.inputString}
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
      </div>
    );
  }
}