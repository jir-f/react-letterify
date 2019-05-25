export interface CheckboxProps {
  label: string,
  value: string,
  checked: boolean,
  handler(option: string) :void
}

export interface CheckboxState {
  checked: boolean
}