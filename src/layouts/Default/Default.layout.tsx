import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header.component'
import { LayoutContainer } from './Default.styled'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
