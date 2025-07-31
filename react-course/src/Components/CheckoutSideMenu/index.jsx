import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const hanbleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
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
            <div className='px-6 overflow-y-scroll'>
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
        </aside>
    )
}

export default CheckoutSideMenu