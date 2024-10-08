export interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}
