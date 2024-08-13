import "../styles/Navbar.scss"

export default function Navbar() {
    return (
        <div className="navCtn">
            <div className="navlinks">
                <a href="shop">Shop</a>
                <a href="about">About</a>
            </div>
            <a href="cart"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
    )
}