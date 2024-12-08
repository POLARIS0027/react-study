import './category-item.style.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="category-container">
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>지금 구매하기</p>
            </div>
        </div>
    )
}

export default CategoryItem