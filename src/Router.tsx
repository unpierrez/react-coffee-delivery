import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/Default/Default.layout'
import HomePage from './pages/Home/Home.page'
import FinishOrder from './pages/FinishOrder/FinishOrder.page'
import OrderConfirmed from './pages/OrderConfirmed/OrderConfirmed.page'

export function Router() {
  return (
    <Routes>
      <Route path="/coffeeDelivery" element={<DefaultLayout />}>
        <Route path="/coffeeDelivery" element={<HomePage />} />
        <Route path="/coffeeDelivery/finish-order" element={<FinishOrder />} />
        <Route
          path="/coffeeDelivery/order-confirmed"
          element={<OrderConfirmed />}
        />
      </Route>
    </Routes>
  )
}
