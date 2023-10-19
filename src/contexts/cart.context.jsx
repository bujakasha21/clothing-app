import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext();

const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  numberOfItems: 0,
  cartItems: [],
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, numberOfItems, cartItems, total }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  //REDUCER

  const updateCartItemsReducer = (newCartItems) => {
    //CART TOTAL
    const newTotalAmount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    //PRICE TOTAL
    const newTotalPrice = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    dispatch(
      createAction(CART_ACTIONS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        numberOfItems: newTotalAmount,
        total: newTotalPrice,
      })
    );
  };

  // ADD ITEM

  const addItem = (cartItems, producttoAdd) => {
    const cartItemExist = cartItems.find(
      (cartItem) => cartItem.id === producttoAdd.id
    );

    if (cartItemExist) {
      return cartItems.map((cartItem) =>
        cartItem.id === producttoAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...cartItems, { ...producttoAdd, quantity: 1 }];
  };
  const addCartItem = (producttoAdd) => {
    const newCartItems = addItem(cartItems, producttoAdd);
    updateCartItemsReducer(newCartItems);
  };

  // REMOVE ITEM

  const removeItem = (cartItems, producttoRemove) => {
    const cartItemExist = cartItems.find(
      (cartItem) => cartItem.id === producttoRemove.id
    );

    if (cartItemExist.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== producttoRemove.id);
    }

    return cartItems.map((cartItem) =>
      cartItem.id === producttoRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  const removeItemFromCart = (producttoRemove) => {
    const newCartItems = removeItem(cartItems, producttoRemove);
    updateCartItemsReducer(newCartItems);
  };

  // CLEAR ITEM

  const clearItem = (cartItems, producttoClear) =>
    cartItems.filter((cartItem) => cartItem.id !== producttoClear.id);
  const clearItemFromCart = (producttoClear) => {
    const newCartItems = clearItem(cartItems, producttoClear);
    updateCartItemsReducer(newCartItems);
  };

  // IS CART OPEN
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addCartItem,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    numberOfItems,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
