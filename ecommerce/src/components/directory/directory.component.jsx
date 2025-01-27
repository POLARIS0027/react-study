import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.style.jsx'

// 홈 화면에서, 모자, 재킷 등 DirectoryItem를 보여주는 컨테이너
// DirectoryItem에서 개별 물건을 보여준다.

const categories = [
    {
        "id": 1,
        "title": "모자",
        "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
        "route": 'shop/hats'
    },
    {
        "id": 2,
        "title": "재킷",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        "route": 'shop/jackets'
    },
    {
        "id": 3,
        "title": "운동화",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        "route": 'shop/sneakers'
    },
    {
        "id": 4,
        "title": "여성",
        "imageUrl": "https://i.ibb.co/fNjwrpy/ayj.png",
        "route": 'shop/womens'
    },
    {
        "id": 5,
        "title": "남성",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
        "route": 'shop/mens'
    }
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {/* 분해 할당 */}
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory