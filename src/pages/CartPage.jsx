import { useEffect, useState } from "react";
import "../styles/CartPage.scss";
export default function CartPage () {
    const [Storagecart,setStoragecart] = useState([]);
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setStoragecart(savedCart);
    }, []);
    return (
        <div className="cartContainer">
            <div className="cart_header">Check Out</div>
            <div className="cartProductContainer">
            {Storagecart.length === 0  && (
                <div>Your cart is empty.</div>
            )}
            {Storagecart.length !== 0 && Storagecart.map(item => {
                return (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image}></img>
                        <div className="cart-item-info">
                            <p>{item.title}</p>
                            <p>Quantity: {item.quantity}</p>
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