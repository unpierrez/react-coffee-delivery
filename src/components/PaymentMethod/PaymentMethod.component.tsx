import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../Typography/Typography'
import { PaymentMethodInput } from '../Inputs/PaymentMethodInput/PaymentMethodInput.component'
import { PaymentMethodOptionsContainer } from './PaymentMethod.styled'

export const PAYMENT_METHODS = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

const PaymentMethodsOptions = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(PAYMENT_METHODS).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          id={key}
          key={label}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}

export default PaymentMethodsOptions
