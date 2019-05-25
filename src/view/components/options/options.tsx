import React, { Component } from 'react';
import { OptionsProps, OptionsState } from './interface';
import { Directions } from '../direction';
import { DirectionOptions } from '../../options/directions';
import { Input } from '../input';

export default class Example extends Component<OptionsProps, OptionsState>{
  render(){
    return(
      <div className="letterify__options">
        <Directions 
          options= {DirectionOptions}
          currentOption={this.props.currentDirection}
          handler={this.props.directionHandler}
        />
        <Input 
          inputString={`${this.props.currentDelay}`}
          inputName="delay"
          placeholder={"Delay in milliseconds"}
          handleInputChange={this.props.handleDelayChange}
        />
        <Input 
          inputString={`${this.props.currentSpeed}`}
          inputName="speed"
          placeholder={"Speed in milliseconds"}
          handleInputChange={this.props.handleSpeedChange}
        />
        <Input 
          inputString={`${this.props.currentTranslate}`}
          inputName="translate"
          placeholder={"Translate in pixels"}
          handleInputChange={this.props.handleTranslateChange}
        />
      </div>
    );
  }
}