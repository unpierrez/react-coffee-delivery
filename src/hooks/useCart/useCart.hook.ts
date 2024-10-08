import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
