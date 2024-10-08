import { forwardRef } from 'react'
import { RegularText } from '../../Typography/Typography'
import { InputProps } from './Input.types'
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from './Input.styled'

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)

export default Input
