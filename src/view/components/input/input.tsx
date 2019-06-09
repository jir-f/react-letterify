import React, { Component } from 'react';
import { InputProps, InputState } from './interface';

export default class Input extends Component<InputProps, InputState>{
  constructor(props: InputProps){
    super(props);
  }

  render(){
    return(
      <div className="input__wrapper">
        <label>{this.props.inputLabel}</label>
        <input 
          type={this.props.inputType}
          name={this.props.inputName} 
          className="h5" 
          value={this.props.inputString} 
          placeholder={this.props.placeholder} 
          onChange={this.props.handleInputChange} />
      </div>
    );
  }
}