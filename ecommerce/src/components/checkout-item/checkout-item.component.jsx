import { CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton, BaseSpan } from './checkout-item.style';

import { removeItemFromCart, clearItemFromCheckout, addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
    const cartItems = useSelector(selectCartItems);
    console.log("cartItems in CheckoutItem:", cartItems);
    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();

    const removeItemFromCartHandler = () =>
        dispatch(clearItemFromCheckout(cartItems, cartItem));

    const addItemHandler = () =>
        dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));


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