import "../styles/Shop.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../assets/images/reading.png";
import BestSellers from "../components/BestSellers";
import hoo from "../assets/images/fa-brands-1.png";
import left from "../assets/images/fa-brands-2.png";
import leaf from "../assets/images/fa-brands-3.png";
import stripe from "../assets/images/fa-brands-4.png";
import aws from "../assets/images/fa-brands-5.png";
import dot from "../assets/images/fa-brands-6.png";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div>
      <NavBar />

      <div className="home">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight className="arrow" />
        <p>Shop</p>
      </div>

      <ProductCard />

      <div className="info">
        <h5>Description</h5>
        <h5>Additional Information</h5>
        <h5>
          Reviews <span>(0)</span>
        </h5>
      </div>

      <div className="write-up">
        <div className="text">
          <h3>the quick fox jumps over </h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="colored">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        <img src={img} alt="Reading desk" />
      </div>

      <div className="mobile-hide">
        <BestSellers />
      </div>

      <div className="brands">
        <img src={hoo} alt="hoo" />
        <img src={left} alt="left" />
        <img src={leaf} alt="leaf" />
        <img src={stripe} alt="Stripe" />
        <img src={aws} alt="aws" />
        <img src={dot} alt="dot" />
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
