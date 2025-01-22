import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.style.jsx'

// 홈 화면에서, 모자, 재킷 등 DirectoryItem를 보여주는 컨테이너
// DirectoryItem에서 개별 물건을 보여준다.

const Directory = ({ categories }) => {
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