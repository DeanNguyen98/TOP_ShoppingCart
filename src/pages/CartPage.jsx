import { useContext, useEffect, useState } from "react";
import "../styles/CartPage.scss";
import { cartContext } from "../components/CartProvider";
import { Link } from "react-router-dom";
export default function CartPage () {
    const {setCart } = useContext(cartContext);
    const [Storagecart,setStoragecart] = useState([]);
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setStoragecart(savedCart);
    }, []);
    
    const TotalPrice = () => {
        return Storagecart.reduce((total, item) => {
            return Math.floor(total += (item.price * item.quantity));
        }, 0)
    }

    function CheckOut () {
        alert("Thanks for your purchase from our mock stores. Item won't be delivered within the forseable futures.")
        setStoragecart([]);
        setCart([]);
        localStorage.removeItem('cart');
    }

    function removeItem (removedItem) {
        const updatedCart = Storagecart.filter(item => item.id !== removedItem.id)
        setCart(updatedCart);
        setStoragecart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    }
    
    return (
        <div className="cartContainer">
            <div className="cart_header">Check Out</div>
            <div className="cartProductContainer">
            {Storagecart.length === 0  && (
                <div className="empty-cart">
                    <div>There are no products in your cart at the moment.</div>
                    <div><Link to="/shop">Shop Now </Link></div>
                </div>
            )}
            {Storagecart.length !== 0 && Storagecart.map(item => {
                return (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image}></img>
                        <div className="cart-item-info">
                            <p>{item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                            <button onClick={() => removeItem(item)}>Remove</button>
                        </div>
                    </div>
                        
                    )
                })}
            </div>
            {Storagecart.length!== 0 && (
                <>
                <div className="cart_totalPrice">Total Price: 
                    ${TotalPrice()} 
                    </div>
                <button className="checkout-btn" onClick={CheckOut}>CHECK OUT NOW</button>
                </>
            )}
        </div>
    )
}