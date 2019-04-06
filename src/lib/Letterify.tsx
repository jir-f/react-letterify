import React, { Component } from 'react';
import { LetterifyStyle } from './Styled-Letterify';

/// <reference path="./interface.d.ts"/>

export default class Letterify extends Component<LetterifyProps, LetterifyState>{
	constructor(props: LetterifyProps) {
		super(props);
		this.state={opacity: 0,
			direction: 'inplace',
			speed: 5,
			delay: 0.1
		};
	}

	componentDidMount(){
		console.log(this.props);
	}

	static getDerivedStateFromProps(nextProps: LetterifyProps){
		if(nextProps.animate){
			return ({opacity: 1});
		} else {
			return ({opacity: 0,});
		}
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
		const translateValue: any = 'inplace';

		for (var c of passedSentence) {
			const t = {timing: 0.2, 
				delay: i/10, 
				opacity: this.state.opacity,
				translateX: translateValue.x,
				translateY: translateValue.y
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
		}
	}

	render(){
		return(
			<div className={this.getLetterifyClasses()}>
				{this.letterify(this.props.letterifyString)}
			</div>
		);
	}
}