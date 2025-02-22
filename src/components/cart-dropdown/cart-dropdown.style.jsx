import styled from "styled-components";
import { BaseButton, GoogleSingInButton, InvertedButton } from "../button/button.style";
export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;


    ${BaseButton},
    ${GoogleSingInButton},
    ${InvertedButton} {
    margin-top: auto;
    }
   
`;
export const EmptyMessage = styled.span`
    font-size: 12px;
    margin: 50px auto;
`;

export const CartItems = styled.span`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;


