import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "../categories/category.types";


export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCheckout = (cartItems, cartItemToClear) => {
    const newCartItems = removeCheckoutListItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

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