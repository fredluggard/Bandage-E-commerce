import "../styles/ProductCard.css";
import { useSelector } from "react-redux";

function ProductCard() {
  const product = useSelector((state) => state.item.value);

  return (
    <div>
      <div>{product.title}</div>
    </div>
  );
}

export default ProductCard;
