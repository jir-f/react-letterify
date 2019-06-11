import React, { Component, createRef } from 'react';
import { LetterifyStyle } from './Styled-Letterify';

/// <reference path="./interface.d.ts"/>

export default class Letterify extends Component<LetterifyProps, LetterifyState>{
	private letterifyRef = createRef<HTMLDivElement>();

	constructor(props: LetterifyProps) {
		super(props);
		this.state={opacity: 0,
			direction: 'inplace',
			speed: 5,
			delay: 0.1,
			directionAttrs: {x: 0, y: 0},
			color: '#000000'
		};
	}

	static getDerivedStateFromProps(nextProps: LetterifyProps){
		const directionValues = Letterify.propsVerifier(nextProps);
		return ({
			opacity: nextProps.animate ? 1 : 0,
			direction: nextProps.direction,
			speed: nextProps.speed ? nextProps.speed : 5,
			delay: nextProps.delay ? nextProps.delay : 0.1,
			directionAttrs: directionValues,
			color: nextProps.color ? `#${nextProps.color}` : '#000000'
		});
	}

	letterify = (passedSentence: string) => {
		if(passedSentence && passedSentence.length > 0){
			return(
				<span className='letterify__word'>
					{this.splitLetters(passedSentence)}
				</span>
			);
		}
	}

	splitLetters = (passedSentence: string)=>{
		const result: JSX.Element[] = [];
		var i: number = 1;

		for (var c of passedSentence) {
			const t = {timing: this.state.speed, 
				delay: i * this.state.delay,
				color: this.state.color, 
				attrs: {
						opacity: this.state.opacity,
						xValue: this.state.directionAttrs.x,
						yValue: this.state.directionAttrs.y,
					}
				}
			result.push(<LetterifyStyle theme={t} className='letterify__word_char' key={i = i+1}>{c}</LetterifyStyle>)
		}
		return result;
	}
	
	getLetterifyClasses = () => {
		if(this.props.styleClasses){
			var result: string = '';
			const spacing: string = this.props.styleClasses.length > 1 ? ' ' : '';
			this.props.styleClasses.forEach((item) => {
				return result = result + item + spacing;
			});
			return result;
		} else {
			return ('no__styleclass');
		}
	}

	static propsVerifier = (props: LetterifyProps) => {
		if (props.direction === 'up'){
			if(props.animate){
				return ({x: 0, y: 0});
			} else {
				return({x: 0, y: props.translateValue ? props.translateValue : 10});
			}
		}
		else if (props.direction === 'down'){
			if(props.animate){
				return ({x: 0, y: 0});
			} else {
				return({x: 0, y: props.translateValue ? -1 * props.translateValue : -10});
			}
		}
		else if (props.direction === 'right'){
			if(props.animate){
				return ({x: 0, y: 0});
			} else {
				return({x: props.translateValue ? -1 * props.translateValue : -10, y: 0});
			}
		}
		else if (props.direction === 'left'){
			if(props.animate){
				return ({x: 0, y: 0});
			} else {
				return({x: props.translateValue ? props.translateValue : -10, y: 0});
			}
		}
		else {
			return ({x: 0, y: 0});
		}
	}

	render(){
		return(
			<div className={this.getLetterifyClasses()} ref={this.letterifyRef}>
				{this.letterify(this.props.letterifyString)}
			</div>
		);
	}
}