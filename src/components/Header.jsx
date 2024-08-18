import Navbar from "./Navbar"
import "../styles/Header.scss"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header-ctn">
            <div className="header">
                <h1><Link to="/">NICE</Link>.</h1>
                <div className="icon-wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                <Link to="cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                
                </div>
            </div>
            <Navbar/>
        </div>
    )
}