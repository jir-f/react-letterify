import styled, {keyframes} from 'styled-components';

export const LetterifyStyle = styled.span`
	color: ${props => props.theme.color};
	display: inline-block;
	font-weight: bold;
	margin-right: 5px;
	opacity: ${props => props.theme.attrs.opacity};
	transform: ${props => `translate(${props.theme.attrs.xValue}px, ${props.theme.attrs.yValue}px)`};
	transition: ${props => `all ${props.theme.timing}s ease ${props.theme.delay}s`}
`;