import { Coffee } from '../../components/Card/Card.types'
import { ReactNode } from 'react'

export interface CartItem extends Coffee {
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffeeItemId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: string) => void
  cleanCart: () => void
  cartItemsTotal: number
  deliveryPrice: number
}

export interface CartContextProviderProps {
  children: ReactNode
}
