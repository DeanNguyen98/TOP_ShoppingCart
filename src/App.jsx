import { ProductProvider } from './components/ProductProvider.jsx';
import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
    <ProductProvider>
    <Header/>
        <div className="main-section">
          <Outlet/>
        </div>
    </ProductProvider>
    </>
  )
}


export default App
