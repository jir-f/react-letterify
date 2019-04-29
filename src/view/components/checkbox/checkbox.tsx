import React, { Component } from 'react';
import { CheckboxProps, CheckboxState } from './interface';

export default class Checkbox extends Component<CheckboxProps, CheckboxState>{
  constructor(props: CheckboxProps) {
		super(props);
		this.state={
      checked: this.props.checked
		};
	}

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = e.target.checked;
    this.setState({
      checked: value
    } as CheckboxState);
  }

  render() {
    return (
      <label className="letterify__checkbox">
        <input 
          className="letterify__checkbox-input"
          type="checkbox"
          name={this.props.value} 
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />
        <span className="letterify__checkbox-text">
          {this.props.label}
        </span>
      </label>
    );
  }
}