import React, { Component } from 'react';
import { InputProps, InputState } from './interface';

export default class Input extends Component<InputProps, InputState>{
  constructor(props: InputProps){
    super(props);
  }

  render(){
    return(
      <input type="text" name={this.props.inputName} className="h5" value={this.props.inputString} placeholder={this.props.placeholder} onChange={this.props.handleInputChange} />
    );
  }
}