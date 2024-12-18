import './checkout.style.scss'

// Cart내용을 담아야 하니까 CartContext가져옴
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';





const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>사진</span>
                </div>
                <div className='header-block'>
                    <span>설명</span>
                </div>
                <div className='header-block'>
                    <span>수량</span>
                </div>
                <div className='header-block'>
                    <span>가격</span>
                </div>
                <div className='header-block'>
                    <span>삭제</span>
                </div>
            </div>


            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    );
                })
            }
            <span className='total'>총액: ₩{cartTotal}</span>

        </div>
    );
}

export default Checkout;