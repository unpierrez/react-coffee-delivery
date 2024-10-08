import { TitleText } from '../Typography/Typography'
import { useCart } from '../../hooks/useCart/useCart.hook'
import CoffeeCartCard from '../CoffeCardCart/CoffeeCartCard.component'
import ConfirmationSection from '../ConfirmationSection/ConfirmationSection.component'
import {
  SelectedCoffeesContainer,
  DetailsContainer,
} from './SelectedCoffes.styled'

const SelectedCoffees = () => {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export default SelectedCoffees
