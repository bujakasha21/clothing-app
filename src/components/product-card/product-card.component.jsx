import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addCartItem } = useContext(CartContext);

  const { name, imageUrl, price } = product;

  const addProduct = () => addCartItem(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProduct}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
