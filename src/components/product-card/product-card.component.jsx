import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addCartItem } = useContext(CartContext);

  const { name, imageUrl, price } = product;

  const addProduct = () => addCartItem(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
