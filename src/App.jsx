import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
        <div className="main-section">
          <Outlet/>
        </div>
    </>
  )
}

export default App
