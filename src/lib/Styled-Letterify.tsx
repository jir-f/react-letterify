import styled, {keyframes} from 'styled-components';

export const LetterifyStyle = styled.span`
	color: #4286f4;
	display: inline-block;
	font-weight: bold;
	margin-right: 5px;
	opacity: 0;
	animation: ${props => Letterify_Animation(props.theme.translateX, props.theme.translateY, props.theme.opacity)} ${props => props.theme.timing}s ease ${props => props.theme.delay}s forwards;
`;

const Letterify_Animation = (x: number, y: number, opacity: number) => keyframes`
	0% {
		opacity: 0;
		transform: translate(10px, 10px);
	}
	100% {
		opacity: ${opacity};
		transform: translate(0px, 0px);
	}
`;