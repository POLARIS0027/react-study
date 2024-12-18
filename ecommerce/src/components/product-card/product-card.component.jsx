import './product-card.style.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>₩ {product.price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>카트에 담기</Button>
        </div>
    );
};

export default ProductCard;