import React, { Component } from 'react';
import { ExampleProps, ExampleState } from './interface';
import { Input } from './components/input';
import { Options } from './components/options';
import { Letterify } from '../lib';


export default class Example extends Component<ExampleProps, ExampleState>{
  constructor(props: ExampleProps){
    super(props);
    this.state = {
      inputString: '',
      currentDirection: 'inplace',
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
        this.setState({ currentDelay: parseFloat(value) });
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

  handleDirection = (option: string) => {
    this.setState({
      currentDirection: option
    } as ExampleState);
  }

  buttonClick = (state: boolean) => {
    if ( this.state.inputString.length > 0 ) {
      this.setState({
        animate: state
      });
    } 
  }

  render() {
    return (
      <div className='example'>
        <h1>React letterify</h1>        
        <Letterify 
          styleClasses={['lettterify-me', 'example_text']}
          letterifyString={this.state.inputString}
          animate={this.state.animate}
          direction={this.state.currentDirection}
          delay={this.state.currentDelay}
          speed={this.state.currentSpeed}
          translateValue={this.state.currentTranslate}
          color={'0077be'}
        />
        <Input 
          inputType="text"
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
          currentDirection={this.state.currentDirection}
          directionHandler={this.handleDirection}
        />
        <div className="example_buttons">
          <button className="btn" onClick={() => this.buttonClick(true)}>
            animate
          </button>
          <button className="btn" onClick={() => this.buttonClick(false)}>
            remove
          </button>
        </div>
      </div>
    );
  }
}