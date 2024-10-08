import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { TitleText, RegularText } from '../../Typography/Typography'
import { useFormContext } from 'react-hook-form'
import {
  FormContainer,
  TitleContainer,
  AddressFormContainer,
} from './CompleteYourOrderForm.styled'
import { useTheme } from 'styled-components'
import Input from '../../Inputs/Input/Input.component'
import PaymentMethodsOptions from '../../PaymentMethod/PaymentMethod.component'
import { ErrorsType } from './CompleteYourOrderForm.types'

const CompleteYourOrderForm = () => {
  const { colors } = useTheme()
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <div>
      <TitleText size="s" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormContainer>
        <TitleContainer>
          <MapPinLine size={22} color={colors['brand-yellow-dark']} />
          <div>
            <RegularText color="subtitle">Endereço de Entrega</RegularText>
            <RegularText size="s" color="text">
              Informe o endereço onde deseja receber o pedido
            </RegularText>
          </div>
        </TitleContainer>
        <AddressFormContainer>
          <Input
            {...register('cep')}
            error={errors?.cep?.message}
            placeholder="CEP"
            className="cep"
          />
          <Input
            {...register('street')}
            error={errors?.street?.message}
            placeholder="Rua"
            className="street"
          />
          <Input
            {...register('number')}
            error={errors?.number?.message}
            placeholder="Número"
          />
          <Input
            {...register('complement')}
            error={errors?.complement?.message}
            placeholder="Complemento"
            className="complement"
            rightText={'Opcional'}
          />
          <Input
            {...register('district')}
            error={errors?.district?.message}
            placeholder="Bairro"
          />
          <Input
            {...register('city')}
            error={errors?.city?.message}
            placeholder="Cidade"
          />
          <Input
            {...register('uf')}
            error={errors?.uf?.message}
            placeholder="UF"
          />
        </AddressFormContainer>
      </FormContainer>
      <FormContainer>
        <TitleContainer>
          <CurrencyDollar size={22} color={colors['brand-purple']} />
          <div>
            <RegularText color="subtitle">Pagamento</RegularText>
            <RegularText size="s" color="text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </RegularText>
          </div>
        </TitleContainer>
        <PaymentMethodsOptions />
      </FormContainer>
    </div>
  )
}

export default CompleteYourOrderForm
