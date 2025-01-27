import { CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton, BaseSpan } from './checkout-item.style';

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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan> ₩{price}000 </BaseSpan>
            <RemoveButton onClick={removeItemFromCartHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;