import { Button } from '../Button/Button.component'
import { RegularText } from '../Typography/Typography'
import { useCart } from '../../hooks/useCart/useCart.hook'
import { formatMoney } from '../../utils/formatMoney'
import {
  ConfirmationSectionContainer,
  NoCoffeeBox,
} from '../ConfirmationSection/ConfirmationSection.styled'
import { Coffee } from 'phosphor-react'

const ConfirmationSection = () => {
  const { cartItemsTotal, cartQuantity, deliveryPrice } = useCart()
  const cartTotal = deliveryPrice + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      {cartQuantity > 0 ? (
        <>
          <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ {formattedItemsTotal}</RegularText>
          </div>
          <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ {formattedDeliveryPrice}</RegularText>
          </div>
          <div>
            <RegularText size="l" weight="700" color="subtitle">
              Total
            </RegularText>
            <RegularText size="l" weight="700" color="subtitle">
              R$ {formattedCartTotal}
            </RegularText>
          </div>
          <Button
            text="Confirmar Pedido"
            disabled={cartQuantity <= 0}
            type="submit"
          />
        </>
      ) : (
        <NoCoffeeBox>
          <Coffee size={32} weight="fill" />
          <RegularText>Não há itens no carrinho.</RegularText>
        </NoCoffeeBox>
      )}
    </ConfirmationSectionContainer>
  )
}

export default ConfirmationSection
