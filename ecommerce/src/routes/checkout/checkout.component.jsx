import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style';

// Cart내용을 담아야 하니까 CartContext가져옴
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';





const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>사진</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>설명</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>수량</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>가격</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>삭제</span>
                </HeaderBlock>
            </CheckoutHeader>


            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    );
                })
            }
            <Total>총액: ₩{cartTotal}000</Total>

        </CheckoutContainer>
    );
}

export default Checkout;