interface LetterifyProps {
  letterifyString: string,
  styleClasses?: string[],
  animate: boolean,
  random?: boolean,
  delay?: number,
  speed?: number,
  direction?: string,
  color?: string
}

interface LetterifyState {
  opacity: number,
  direction: string,
  speed: number,
  delay: number,
}