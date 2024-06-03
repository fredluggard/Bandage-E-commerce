import "../styles/ProductCard.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCart } from "../features/CartState";
import { Link, useNavigate } from "react-router-dom";

function ProductCard() {
  const product = useSelector(
    (state) => state.item.value[state.item.value.length - 1]
  );
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = () => {
    const isProductInCart = cart.some((item) => item.title === product.title);
    if (!isProductInCart) {
      dispatch(
        setCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 0,
        })
      );
      navigate("/cart");
    } else {
      alert("Product is already in the cart");
    }
  };

  return (
    <div className="main-product-card">
      {product.price > 0 && (
        <div className="product-card">
          <img src={product.image} alt="Product image" />
          <div className="product-details">
            <h4>{product.title}</h4>
            <span>
              <FaStar className="product-star" />
              <FaStar className="product-star" />
              <FaStar className="product-star" />
              <FaStar className="product-star" />
              <CiStar className="product-bg-star" />
              <h6>10 Reviews</h6>
            </span>
            <h3>${product.price}</h3>
            <span>
              <h6>Availability :</h6>{" "}
              <h6 style={{ color: "#23A6F0", opacity: "1" }}>In Stock</h6>
            </span>

            <div className="select-option">
              <div className="product-color">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="selected-option">
                <button onClick={addToCart}>Select Options</button>
                <IoIosHeartEmpty style={{ cursor: "pointer" }} />
                <Link to="/cart">
                  <BsCart style={{ cursor: "pointer" }} /> {cart.length}
                </Link>
                <IoEye style={{ color: "black", cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
