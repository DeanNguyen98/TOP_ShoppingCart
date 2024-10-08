import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';

export const productContext = createContext();
export const ProductProvider = ({children}) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {mode: "cors"})
            .then(res=>res.json())
            .then(json=> setproducts(json));
  },[]);
  return (
    <productContext.Provider value= {products}>
      {children}
    </productContext.Provider>
  )
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};