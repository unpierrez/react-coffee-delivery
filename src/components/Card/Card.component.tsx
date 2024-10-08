import {
  CardContainer,
  TagsContainer,
  Tag,
  Name,
  Decription,
  CardFooter,
  AddCartWrapper,
} from './Card.styled'
import { RegularText, TitleText } from '../Typography/Typography'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../QuantityInput/QuantityInput.component'
import { CoffeeProps } from './Card.types'
import useCard from './Card.hook'

const Card = ({ coffee }: CoffeeProps) => {
  const {
    quantity,
    formattedPrice,
    handleIncrease,
    handleDecrease,
    handleAddToCart,
  } = useCard({ coffee })

  return (
    <CardContainer>
      <img src={`/coffeesImages/${coffee.photo}`} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={Math.floor(Date.now() * Math.random()).toString(36)}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>

      <Name>{coffee.name}</Name>
      <Decription>{coffee.description}</Decription>

      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CardContainer>
  )
}

export default Card
