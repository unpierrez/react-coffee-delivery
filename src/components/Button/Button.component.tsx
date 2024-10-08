import { ButtonContainer } from '../Button/Button.styled'
import { ButtonProps } from './Button.types'

export function Button({ text, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{text}</ButtonContainer>
}
