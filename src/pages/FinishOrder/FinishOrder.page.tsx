import CompleteYourOrderForm from '../../components/Forms/CompleteYourOrderForm/CompleteYourOrderForm.component'
import SelectedCoffees from '../../components/SelectedCoffes/SelectedCoffes.component'
import { CompleteOrderContainer } from './FinishOrder.styled'
import useFinishOrder from './FinishOrder.hook'
import { FormProvider } from 'react-hook-form'

const FinishOrder = () => {
  const { handleSubmit, handleConfirmOrder, confirmOrderForm } =
    useFinishOrder()
  return (
    <FormProvider {...confirmOrderForm}>
      <div className="container">
        <CompleteOrderContainer onSubmit={handleSubmit(handleConfirmOrder)}>
          <CompleteYourOrderForm />
          <SelectedCoffees />
        </CompleteOrderContainer>
      </div>
    </FormProvider>
  )
}

export default FinishOrder
