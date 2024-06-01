import { Link } from "react-router-dom";
import "../styles/Cart.css";
import payLogo from "../assets/images/payLogo.png";
import NavBar from "../components/NavBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../components/Footer";
import BestSellers from "../components/BestSellers";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/CartState";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch;

  const itemDelete = (item) => {
    dispatch(removeFromCart({ item }));
  };
  return (
    <div>
      <NavBar />

      <div className="home-cart">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight className="arrow-cart" />
        <Link to="/shop">Shop</Link>
        <MdKeyboardArrowRight className="arrow-cart1" />
        <p>Cart</p>
      </div>

      <div className="cart-contain">
        <div className="cart">
          <h4 className="shop-head">Shopping Cart</h4>
          <div className="cart-header">
            <p>Item Details</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>

          <div className="holder">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-details">
                  <div onClick={itemDelete(item.id)} className="image-div">
                    <img src={item.image} alt={item.title} />
                    <h6>
                      <RiDeleteBin6Line /> REMOVE
                    </h6>
                  </div>
                  <div className="cart-item-title">
                    <h3>{item.title}</h3>
                    <p>In Stock</p>
                    <span className="cart-star">
                      <FaStar className="prod-star" />
                      <FaStar className="prod-star" />
                      <FaStar className="prod-star" />
                      <FaStar className="prod-star" />
                      <FaStar className="prod-star" />
                      <h6>28 Reviews</h6>
                    </span>
                  </div>
                </div>

                <div className="item-counter">
                  <button>-</button>
                  <input type="text" name="num" id="num" />
                  <button style={{ background: "#23a6f0", color: "white" }}>
                    +
                  </button>
                </div>

                <div className="item-price">
                  <h4>N{item.price}</h4>
                  <p>{cart.price} x 1 item(s)</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary">
          <div className="order-div">
            <h4>Order Summary</h4>
            <p>4 Items</p>
          </div>
          <div className="delivery">
            <p>Delivery Charges</p>
            <span>
              Add your delivery address to checkout to see delivery charges.
            </span>
          </div>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>N26,500</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>N26,500</h3>
          </div>
          <div className="charges">
            <div>
              <p>Excluding Delivery Charges</p>
            </div>
            <button>Proceed to Checkout</button>
          </div>

          <div className="pay-log">
            <img className="pay-logo" src={payLogo} alt="payment logo" />
          </div>
        </div>
      </div>

      <BestSellers />
      <Footer />
    </div>
  );
}

export default Cart;
