import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.style";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>지금 구매하기</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem