import './checkout-item.style.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { removeItemFromCheckoutList, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const removeItemFromCartHandler = () => {
        removeItemFromCheckoutList(cartItem);
    }
    const addItemHandler = () => {
        addItemToCart(cartItem);
    }
    const removeItemHandler = () => {
        removeItemFromCart(cartItem);
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> ₩{price} </span>
            <div className='remove-button' onClick={removeItemFromCartHandler}>&#10005;</div>



        </div>
    );
}

export default CheckoutItem;