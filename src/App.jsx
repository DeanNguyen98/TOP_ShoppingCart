import { ProductProvider } from './components/ProductProvider.jsx';
import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom';
import { CartProvider } from './components/CartProvider.jsx';



function App() {
  return (
    <>
    <ProductProvider>
      <CartProvider>
        <Header/>
        <div className="main-section">
          <Outlet/>
        </div>
      </CartProvider>
    </ProductProvider>
    </>
  )
}


export default App
