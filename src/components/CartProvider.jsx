import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const cartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    return (
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}