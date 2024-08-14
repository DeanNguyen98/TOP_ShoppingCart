import Navbar from "./Navbar"
import "../styles/Header.scss"

export default function Header() {
    return (
        <div className="header-ctn">
            <div className="header">
                <h1>NICE.</h1>
                <div className="icon-wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                <a href="cart"><i className="fa-solid fa-cart-shopping"></i></a>
                
                </div>
            </div>
            <Navbar/>
        </div>
    )
}