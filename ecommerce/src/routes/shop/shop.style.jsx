import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;

    width: 100%;
    /* 폭을 90%로 설정 */
    margin: 0 auto;
    /* 가운데 정렬 */
`