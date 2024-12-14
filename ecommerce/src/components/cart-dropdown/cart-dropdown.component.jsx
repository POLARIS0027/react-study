import './cart-dropdown.style.scss';

import Button from '../button/button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-itmes'>
                <Button>결제하기</Button>
            </div>
        </div>
    )
}

export default CartDropdown;