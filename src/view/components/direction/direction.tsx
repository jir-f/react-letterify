import React, { Component } from 'react';
import { DirectionProps, DirectionState } from './interface';
import { Checkbox } from '../checkbox';

export default class Directions extends Component<DirectionProps, DirectionState>{

  renderOptions = () => {
    return this.props.options.map((item, key) => {
      return (
        <Checkbox 
          label={item.optionLabel}
          value={item.optionValue}
          checked={this.props.currentOption === item.optionValue ? true : false}
          key={key}
        />
      );
    });
  }

  render(){
    return(
      <div className="letterify__options_directions">
        <h4>Direction</h4>
        <div className="letterify__options_directions-checkboxes">
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}