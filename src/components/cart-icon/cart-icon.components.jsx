//styles
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, numberOfItems } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{numberOfItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
