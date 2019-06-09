export interface InputProps {
	inputLabel?: string,
	inputType: string,
	inputString: string,
	placeholder: string,
	inputName: string,
	handleInputChange(event: any): void;
}

export interface InputState {
	inputString: string
}