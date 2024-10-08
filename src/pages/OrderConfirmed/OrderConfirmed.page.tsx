import { RegularText, TitleText } from '../../components/Typography/Typography'
import confirmedOrderIllustration from '../../assets/confirmedOrder.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import {
  OrderConfirmedContainer,
  OrderDetailsContainer,
} from './OrderConfirmed.styled'
import BeneftisInfo from '../../components/BenefitsInfo/BenefitsInfo.component'
import { useTheme } from 'styled-components'
import useOrderConfirmed from './OrderConfirmed.hook'
import { PAYMENT_METHODS } from '../../components/PaymentMethod/PaymentMethod.component'

const OrderConfirmed = () => {
  const { colors } = useTheme()

  const { state } = useOrderConfirmed()

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <BeneftisInfo
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText color="text">
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <BeneftisInfo
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText color="text">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <BeneftisInfo
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText color="text">
                Pagamento na entrega
                <br />
                <strong>{PAYMENT_METHODS[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <figure>
          <img src={confirmedOrderIllustration} alt="" />
        </figure>
      </section>
    </OrderConfirmedContainer>
  )
}

export default OrderConfirmed
