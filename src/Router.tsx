import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/Default/Default.layout'
import HomePage from './pages/Home/Home.page'
import FinishOrder from './pages/FinishOrder/FinishOrder.page'
import OrderConfirmed from './pages/OrderConfirmed/OrderConfirmed.page'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/finish-order" element={<FinishOrder />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
