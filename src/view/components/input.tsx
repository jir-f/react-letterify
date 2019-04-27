import React, { Component } from 'react';

/// <reference path="./input.d.ts" />

interface InputProps {
  inputString: string,
  handleInputChange(event: any): void;
}

interface InputState {
	inputString: string
}

export default class Input extends Component<InputProps, InputState>{
  constructor(props: InputProps){
    super(props);
  }

  render(){
    return(
      <input value={this.props.inputString} onChange={this.props.handleInputChange} />
    );
  }
}