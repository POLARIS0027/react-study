import { CartItemContainer, ItemDetails, Name } from "./cart-item.style";
const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>₩{price}000 x {quantity}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;