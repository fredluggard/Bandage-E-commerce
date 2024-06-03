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
import { removeFromCart, setQty } from "../features/CartState";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item, index) => {
    const qty = item.qty + 1;
    dispatch(setQty({ index: index, qty: qty }));
  };

  const handleDecrement = (item, index) => {
    if (item.qty > 1) {
      const qty = item.qty - 1;
      dispatch(setQty({ index: index, qty: qty }));
    }
  };

  const itemDelete = (index) => {
    dispatch(removeFromCart({ index }));
  };

  const totalPrice = cart
    .map((item) => item.price * item.qty)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

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
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <div onClick={() => itemDelete(index)} className="image-div">
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
                  <button onClick={() => handleDecrement(item, index)}>
                    -
                  </button>
                  <input
                    type="number"
                    name="num"
                    id="num"
                    value={item.qty}
                    readOnly
                  />
                  <button
                    onClick={() => handleIncrement(item, index)}
                    style={{ background: "#23a6f0", color: "white" }}
                  >
                    +
                  </button>
                </div>

                <div className="item-price">
                  <h4>N{(item.price * item.qty).toFixed(2)}</h4>
                  <p>
                    {item.price} x {item.qty} item(s)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary">
          <div className="order-div">
            <h4>Order Summary</h4>
            <p>{cart.length} Items</p>
          </div>
          <div className="delivery">
            <p>Delivery Charges</p>
            <span>
              Add your delivery address to checkout to see delivery charges.
            </span>
          </div>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>&#x20A6; {totalPrice}</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>&#x20A6; {totalPrice}</h3>
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
