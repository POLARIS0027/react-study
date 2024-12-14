import { createContext, useState, useEffect } from "react";
import { createStateDocumentFromAuth, onAuthStateChangedListener, signOutState } from "../utils/firebase/firebase.util";

// 실제 값으로 접근하기를 원하는 것
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
});

// 프로바이더 : 내부 값에 엑세스가 필요한 모든 다른 구성 요소를 감싸는 구성 요소
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
