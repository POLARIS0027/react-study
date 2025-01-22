import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {

    const categories = [
        {
            "id": 1,
            "title": "모자",
            "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png"
        },
        {
            "id": 2,
            "title": "재킷",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "운동화",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "여성",
            "imageUrl": "https://i.ibb.co/fNjwrpy/ayj.png"
        },
        {
            "id": 5,
            "title": "남성",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ];

    return (
        <div>
            <Directory categories={categories} />
            <Outlet />
        </div>

    );
}

export default Home;