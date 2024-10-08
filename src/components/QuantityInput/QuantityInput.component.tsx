import { Minus, Plus } from 'phosphor-react'
import * as S from './QuantityInput.styled'
import { QuantityInputProps } from './QuantityInput.types'

export function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <S.QuantityInputContainer size={size}>
      <S.IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </S.IconWrapper>
      <input type="number" readOnly value={quantity} />
      <S.IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </S.IconWrapper>
    </S.QuantityInputContainer>
  )
}
