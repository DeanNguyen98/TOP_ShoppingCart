import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';


export const cartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    return (
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}