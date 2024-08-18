import { useContext } from "react";
import { cartContext } from "../components/CartProvider";
import "../styles/CartPage.scss";
export default function CartPage () {
    const {cart} = useContext(cartContext);
    return (
        <div className="cartContainer">
            <div className="cart_header">Check Out</div>
            <div className="cartProductContainer">
            {cart.length === 0  && (
                <div>Your cart is empty.</div>
            )}
            {cart.length !== 0 && cart.map(item => {
                return (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image}></img>
                        <div className="cart-item-info">
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                        
                    )
                })}
            </div>
            <button className="checkout-btn">CHECK OUT NOW</button>
        </div>
    )
}