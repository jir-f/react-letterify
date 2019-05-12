import React, { Component } from 'react';
import Input from './components/input';
import { Letterify } from '../lib';

interface ExampleProps {
}

interface ExampleState {
  inputString: string,
  currentDelay: number,
  currentSpeed: number,
  currentTranslate: number,
  animate: boolean
}

export default class Example extends Component<ExampleProps, ExampleState>{
  constructor(props: ExampleProps){
    super(props);
    this.state = {
      inputString: '',
      currentDelay: 0.1,
      currentSpeed: 0.3,
      currentTranslate: 40,
      animate: false
    };  
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    switch(key){
      case 'animatedText':
        this.setState({ inputString: value });
        break;
      case 'delay':
        this.setState({ currentDelay: +value });
        break;
      case 'speed':
        this.setState({ currentSpeed: +value });
        break;
      case 'translate':
        this.setState({ currentTranslate: +value });
        break;
      default:
        break;
    }
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
          placeholder={"String to animate"}
          handleInputChange={this.handleChange}
          inputName='animatedText'
        />
        <Options 
          currentDelay={this.state.currentDelay}
          handleDelayChange={this.handleChange}
          currentSpeed={this.state.currentSpeed}
          handleSpeedChange={this.handleChange}
          currentTranslate={this.state.currentTranslate}
          handleTranslateChange={this.handleChange}
        />
        <button className="show_button" onClick={() => this.buttonClick()}>
          show
        </button>
        <button className="show_button" onClick={() => this.buttonClick()}>
          remove
        </button>
        <Letterify 
          styleClasses={['lettterify-me', 'test2', 'test3']}
          letterifyString={this.state.inputString}
          animate={this.state.animate}
          delay={this.state.currentDelay}
          speed={this.state.currentSpeed}
          translateValue={this.state.currentTranslate}
          color={'0077be'}
          direction={'up'}
        />
      </div>
    );
  }
}