import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([ 
    { path: '/', element: <Home /> },
    { path: '/my_account', element: <MyAccount /> },
    { path: '/my_order', element: <MyOrder /> },
    { path: '/my_orders', element: <MyOrders /> },
    { path: '/sign_in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
