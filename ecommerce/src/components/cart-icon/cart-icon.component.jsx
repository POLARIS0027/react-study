import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.style.scss'
import { useContext } from 'react';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon onClick={toggleIsCartOpen} className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    );
};

export default CartIcon;