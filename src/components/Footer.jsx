import "../styles/Footer.css";
import fb from "../assets/images/facebook.png";
import ig from "../assets/images/instagram.png";
import tw from "../assets/images/twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="wrap">
      <div className="cover">
        <div className="top">
          <h3>Bandage</h3>
          <span>
            <img src={fb} alt="fb-logo" />
            <img src={ig} alt="ig-logo" />
            <img src={tw} alt="tw-logo" />
          </span>
        </div>
      </div>

      <div className="middle">
        <div className="rows">
          <h5>Company Info</h5>
          <Link to="#">About Us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are Hiring</Link>
          <Link to="#">Blog</Link>
        </div>
        <div className="rows">
          <h5>Legal</h5>
          <Link to="#">About Us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are Hiring</Link>
          <Link to="#">Blog</Link>
        </div>
        <div className="rows">
          <h5>Features</h5>
          <Link to="#">Business Marketing</Link>
          <Link to="#">User Analytic</Link>
          <Link to="#">Live Chat</Link>
          <Link to="#">Unlimited Support</Link>
        </div>
        <div className="rows">
          <h5>Resources</h5>
          <Link to="#">IOS and Andriod</Link>
          <Link to="#">Watch a Demo</Link>
          <Link to="#">Customers</Link>
          <Link to="#">API</Link>
        </div>
        <div className="rows1">
          <h5>Get in Touch</h5>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>

      <h6 className="bottom">Made With Love By Finland All Right Reserved</h6>
    </div>
  );
}

export default Footer;
