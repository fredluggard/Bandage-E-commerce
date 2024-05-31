import { Link } from "react-router-dom";
import "../styles/Cart.css";
import NavBar from "../components/NavBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";
import BestSellers from "../components/BestSellers";

function Cart() {
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
      <div>API Content</div>

      <BestSellers />
      <Footer />
    </div>
  );
}

export default Cart;
