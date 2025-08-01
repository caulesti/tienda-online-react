import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //Get products
    const [items, setItems] = useState(null) 

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping cart - Add products to cart
    const [order, setOrder] = useState([])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState([])
    console.log('searchByTitle: ', searchByTitle)

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            searchByTitle, 
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}