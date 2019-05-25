export interface OptionsProps {
  currentDelay: number,
  handleDelayChange(event: any): void,
  currentSpeed: number,
  handleSpeedChange(event: any): void,
  currentTranslate: number,
  handleTranslateChange(event: any): void,
  currentDirection: string,
  directionHandler(option: string): void
}

export interface OptionsState {
}