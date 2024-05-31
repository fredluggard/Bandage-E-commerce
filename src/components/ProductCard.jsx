import "../styles/ProductCard.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useSelector } from "react-redux";

function ProductCard() {
  const product = useSelector((state) => state.item.value);

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
                <button>Select Options</button>
                <IoIosHeartEmpty style={{ cursor: "pointer" }} />
                <BsCart style={{ cursor: "pointer" }} />
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
