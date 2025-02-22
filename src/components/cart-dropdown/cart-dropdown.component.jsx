
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.style';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />))
                ) : (
                    <EmptyMessage>표시 가능한 품목이 없습니다.</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>결제하기</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;