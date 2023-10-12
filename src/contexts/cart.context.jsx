import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
  const addCartItem = (producttoAdd) =>
    setCartItems(addItem(cartItems, producttoAdd));

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
  const removeItemFromCart = (producttoRemove) =>
    setCartItems(removeItem(cartItems, producttoRemove));

  // CLEAR ITEM

  const clearItem = (cartItems, producttoClear) =>
    cartItems.filter((cartItem) => cartItem.id !== producttoClear.id);
  const clearItemFromCart = (producttoClear) =>
    setCartItems(clearItem(cartItems, producttoClear));

  // TOTAL AMOUNT

  useEffect(() => {
    const amount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setNumberOfItems(amount);
  }, [cartItems]);

  //TOTAL PRICE

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(totalAmount);
  }, [cartItems]);

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
