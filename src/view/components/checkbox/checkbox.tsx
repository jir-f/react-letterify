import React, { Component } from 'react';
import { CheckboxProps, CheckboxState } from './interface';

export default class Checkbox extends Component<CheckboxProps, CheckboxState>{
  constructor(props: CheckboxProps) {
		super(props);
	}

  render() {
    return (
      <label className="letterify__checkbox">
        <input 
          className="letterify__checkbox-input"
          type="checkbox"
          name={ this.props.value } 
          checked={ this.props.checked }
          onChange={ () => this.props.handler(this.props.value) }
        />
        <span className="letterify__checkbox-text">
          {this.props.label}
        </span>
      </label>
    );
  }
}