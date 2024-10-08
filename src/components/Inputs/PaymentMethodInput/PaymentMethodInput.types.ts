import { InputHTMLAttributes, ReactNode } from 'react'

export type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  icon: ReactNode
  value: string
}
