import Navbar from "./Navbar"
import CartItemCounter from "./cartItemCounter"
import "../styles/Header.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "./CartProvider"

export default function Header() {
    const {cart} = useContext(cartContext);
    return (
        <div className="header-ctn">
            <div className="header">
                <h1 className="header-title"><Link to="/">NICE</Link>.</h1>
                <div className="icon-wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="cart-icon-wrapper">
                    <Link to="cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <CartItemCounter cart={cart}/>
                </div>
                
                
                </div>
            </div>
            <Navbar/>
        </div>
    )
}