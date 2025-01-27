import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
        border: 1px solid black;
    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

`
export const Footer = styled.div`
    width: 100 %;
    display: flex;
    flex - direction: column;
    /* 세로 정렬 */
    justify - content: center;
    /* 부모 요소 안에서 가운데 정렬 */
    align - items: flex - start;
    /* 왼쪽 정렬 (필요시 center로 변경 가능) */
    font - size: 18px;
    gap: 5px;
`
export const FooterName = styled.span`
        width: 100 %;
        margin - bottom: 5px;
`

export const FooterPrice = styled.span`
        width: 100 %;
        text - align: right;
        padding - right: 10px;
`