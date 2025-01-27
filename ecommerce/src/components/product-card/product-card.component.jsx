import { ProductCardContainer, Footer, FooterName, FooterPrice } from './product-card.style';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// SHOP페이지에서 각 상품을 카드로 나타냄.

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <Footer>
                <FooterName>{product.name}</FooterName>
                <FooterPrice>₩{product.price}000</FooterPrice>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>카트에 담기</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;