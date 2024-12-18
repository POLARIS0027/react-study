import { createContext, useState, useEffect } from "react";

// 배열 안에 cartItem이 이미 있는지 확인하는 함수
const addCartItem = (cartItems, productToAdd) => {
    // 배열 안에 cartItem이 이미 있는지 확인하는 함수
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
    if (existingCartItem) {
        // 기존 요소가 있으면 quantity +1
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }
    // 기존 요소가 없으면 새로 추가 (quantity: 1)
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    // 배열 안에 cartItem이 이미 있는지 확인하는 함수
    const existingCartItem = cartItems.find((item) => item.id === productToRemove.id);
    // 존재하지 않으면 아무것도 안함.
    if (!existingCartItem) {
        return cartItems;
    }
    // 1이면 제거함(이거 빼고 다 반환함)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }

    return cartItems.map((item) => item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item);

    // 1보다 크면 quantity를 -1 함
}

const removeCheckoutListItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
}

// 실제 값으로 접근하기를 원하는 것
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    removeItemFromCheckoutList: () => { },
    cartTotal: 0,
});


// 프로바이더 : 내부 값에 엑세스가 필요한 모든 다른 구성 요소를 감싸는 구성 요소
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const updateCartCount = cartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0);
        setCartCount(updateCartCount);
    }, [cartItems]);

    useEffect(() => {
        const updateCartTotal = cartItems.reduce((total, cartItem) => (total + cartItem.quantity * cartItem.price), 0);
        setCartTotal(updateCartTotal);
    }, [cartItems]);

    // 유저가 카트에 추가 버튼을 누르면, 그 객체를 받아서 수정한다.
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    // 감소 버튼이 눌리면, 그 객체를 받아서 수정한다.
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    // 결제화면에서 제거 누르면, 목록에서 제거
    const removeItemFromCheckoutList = (productToRemove) => {
        setCartItems(removeCheckoutListItem(cartItems, productToRemove));
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, removeItemFromCheckoutList, cartItems, cartCount, cartTotal };



    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
