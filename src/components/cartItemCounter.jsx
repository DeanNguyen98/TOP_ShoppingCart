import PropTypes from 'prop-types';

export default function CartItemCounter ({cart}) {
    const cartQuantity = cart.reduce((quantity, item) => {
        return quantity += item.quantity;
    }, 0);
    return (
        <div className="item-counter">
            {cartQuantity}
        </div>
    )
}

CartItemCounter.propTypes = {
    cart: PropTypes.array.isRequired,
}