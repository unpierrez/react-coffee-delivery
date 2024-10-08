import { useState } from 'react'
import { useCart } from '../../hooks/useCart/useCart.hook'
import { formatMoney } from '../../utils/formatMoney'
import { CoffeeProps } from './Card.types'

const useCard = ({ coffee }: CoffeeProps) => {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee?.price)

  function handleIncrease() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleDecrease() {
    setQuantity((quantity) => quantity - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  return {
    quantity,
    formattedPrice,
    handleIncrease,
    handleDecrease,
    handleAddToCart,
  }
}

export default useCard
