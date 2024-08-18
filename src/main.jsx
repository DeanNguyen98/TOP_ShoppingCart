import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Homepage from './pages/Homepage'
import Shop from './pages/Shop.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo.jsx'
import CartPage from './pages/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true, 
        element:<Homepage/>
      },
      {
        path: 'shop', 
        element: <Shop/>,
      },
      {
        path:"productInfo/:productId", 
        element:<ProductInfo/>
      },
      {
        path:"cart",
        element:<CartPage/>
      }
  
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
