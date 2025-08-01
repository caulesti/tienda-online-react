import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import Layout from "../../Components/Layout"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard 
                totalProducts={order.totalProducts}
                totalPrice={order.totalPrice}/>
            </Link>
        ))}
    </Layout>
  )
}

export default MyOrders