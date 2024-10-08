import { Trash } from 'phosphor-react'
import { QuantityInput } from '../QuantityInput/QuantityInput.component'
import { RegularText } from '../Typography/Typography'
import { CoffeeCartCardProps } from './CoffeCartCard.types'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './CoffeeCartCard.styled'
import useCoffeCartCard from './CoffeCartCard.hook'

const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { formattedPrice, handleIncrease, handleDecrease, handleRemove } =
    useCoffeCartCard({ coffee })
  return (
    <CoffeeCartCardContainer>
      <img src={`/coffeesImages/${coffee?.photo}`} alt="" />
      <div className="description-container">
        <div className="description-container-top">
          <RegularText color="subtitle">{coffee?.name}</RegularText>
          <p className="price">R$ {formattedPrice}</p>
        </div>
        <ActionsContainer>
          <QuantityInput
            size="small"
            quantity={coffee?.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <RemoveButton onClick={handleRemove}>
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </ActionsContainer>
      </div>
    </CoffeeCartCardContainer>
  )
}

export default CoffeeCartCard
