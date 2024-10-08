import Card from '../../components/Card/Card.component'
import { TitleText } from '../../components/Typography/Typography'
import {
  CoffeCatalogContainer,
  CoffeeList,
  TagsContainer,
  Tag,
} from './CoffeeCatalog.styled'
import useCoffeeCatalog from './CoffeeCatalog.hook'

const CoffeCatalog = () => {
  const { handleTagSelect, filteredCoffees, uniqueTags, selectedTag } =
    useCoffeeCatalog()

  return (
    <CoffeCatalogContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <TagsContainer>
        <Tag
          onClick={() => handleTagSelect(null)}
          isSelected={selectedTag === null}
        >
          Todos
        </Tag>
        {uniqueTags.map((tag) => (
          <Tag
            key={tag}
            onClick={() => handleTagSelect(tag)}
            isSelected={selectedTag === tag}
          >
            {tag}
          </Tag>
        ))}
      </TagsContainer>

      <CoffeeList>
        {filteredCoffees?.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeCatalogContainer>
  )
}

export default CoffeCatalog
