import { forwardRef } from 'react'
import {
  PaymentMethodInputContainer,
  ContentContainer,
} from './PaymentMethodInput.styled'
import { PaymentMethodInputProps } from './PaymentMethodInput.types'

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, value, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input
        id={id}
        type="radio"
        name="paymentMethod"
        value={value}
        {...props}
        ref={ref}
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
