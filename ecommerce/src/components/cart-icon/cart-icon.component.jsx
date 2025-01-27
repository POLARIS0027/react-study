
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style';
import { useContext } from 'react';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;