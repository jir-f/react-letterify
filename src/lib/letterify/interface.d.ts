export interface LetterifyProps {
  letterifyString: string, // Passed in string to be letterified
  styleClasses?: string[], // CSS classes
  animate: boolean, // A boolean to start/stop animation
  random?: boolean, // Random delays between letters
  delay?: number, // Delary between each letter
  speed?: number, // Speed of animation
  direction?: string, // Animation direction
  color?: string, // Text color
  translateValue?: number, // The shifted value of x or y
}

export interface LetterifyState {
  color: string,
  opacity: number,
  direction: string,
  speed: number,
  delay: number,
  directionAttrs: {x: number, y: number},
}