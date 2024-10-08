import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.svg'
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './Header.styled'
import { useCart } from '../../hooks/useCart/useCart.hook'

const Header = () => {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Penha, SC
          </HeaderButton>

          <NavLink to="/finish-order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
