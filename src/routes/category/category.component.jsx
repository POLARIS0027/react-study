import { CategoryTitle, CategoryContainer } from './category.style';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect가 setProducts를 호출함')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner /> : <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            }
        </Fragment>
    );
};

export default Category;