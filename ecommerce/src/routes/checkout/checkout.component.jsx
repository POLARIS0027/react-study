import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';





const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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