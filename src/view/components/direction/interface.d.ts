export interface DirectionProps {
  options: {optionLabel: string, optionValue: string}[],
  currentOption: string,
  handler(option: string): void
}

export interface DirectionState {
}