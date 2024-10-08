import { useCart } from '../../hooks/useCart/useCart.hook'
import { formatMoney } from '../../utils/formatMoney'
import { CoffeeCartCardProps } from './CoffeCartCard.types'

const useCoffeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  const handleIncrease = () => {
    changeCartItemQuantity(coffee?.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee?.id, 'decrease')
  }

  const handleRemove = () => {
    removeCartItem(coffee?.id)
  }
  return {
    formattedPrice,
    handleIncrease,
    handleDecrease,
    handleRemove,
  }
}

export default useCoffeCartCard
