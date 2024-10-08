import Introduction from '../../components/Introduction/Introduction.component'
import CoffeCatalog from '../CoffeeCatalog/CoffeeCatalog.page'
import { HomeContainer } from './Home.styled'

const HomePage = () => {
  return (
    <HomeContainer>
      <Introduction />
      <CoffeCatalog />
    </HomeContainer>
  )
}

export default HomePage
