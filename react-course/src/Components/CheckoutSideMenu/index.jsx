import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const hanbleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
    }
    
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} chekout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={context.closeCheckoutSideMenu} ></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {context.cartProducts.map(product => (
                    <OrderCard 
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        key={product.id} 
                        handleDelete={hanbleDelete}
                        id={product.id}
                    />
                ))}
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu