import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart/useCart.hook'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { confirmOrderFormValidationSchema } from './FinishOrder.validation'
import { ConfirmOrderFormData } from './FinishOrder.types'
const useFinishOrder = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const navigate = useNavigate()
  const { handleSubmit, formState } = confirmOrderForm
  const { cleanCart } = useCart()
  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    navigate('/coffeeDelivery/order-confirmed', {
      state: data,
    })

    cleanCart()
    console.log('Erros => ', formState?.errors)
  }
  return { handleSubmit, handleConfirmOrder, confirmOrderForm }
}

export default useFinishOrder
