export interface InputProps {
	inputString: string,
	placeholder: string,
	handleInputChange(event: any): void;
}

export interface InputState {
	inputString: string
}