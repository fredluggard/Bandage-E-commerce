import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoIosMail, IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import menuIcon from "../assets/images/vector.png";
import { useEffect, useState } from "react";

function NavBar() {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthSize]);
  return (
    <div>
      {widthSize > 700 ? (
        <div className="navbar">
          <div className="top-nav">
            <div className="top-con">
              <a href="tel:2255550118">
                <LiaPhoneSolid /> (225) 555-0118
              </a>
              <a href="mailto:michelle.rivera@example.com">
                <IoIosMail /> michelle.rivera@example.com
              </a>
            </div>
            <div className="follow">
              <p>Follow Us and get a chance to win 80% off</p>
            </div>
            <div className="top-socials">
              <p>Follow Us : </p>
              <SlSocialInstagram />
              <FaYoutube />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>

          <div className="down-nav">
            <div className="logo-div">
              <h1 className="logo">Bandage</h1>
              <nav className="nav-links">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/shop">
                  Shop
                  <span className="dropdown">
                    <RiArrowDropDownLine />
                  </span>
                </NavLink>
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
                <NavLink className="nav-link" to="#">
                  Blog
                </NavLink>
                <NavLink className="nav-link" to="#">
                  Contact
                </NavLink>
                <NavLink className="nav-link" to="#">
                  Pages
                </NavLink>
              </nav>
            </div>

            <div className="register">
              <Link className="register-link" to="#">
                <FaRegUser /> Login / Register
              </Link>

              <Link className="register-link" to="#">
                <IoIosSearch />
              </Link>
              <Link className="register-link" to="#">
                <BsCart />
              </Link>
              <Link className="register-link" to="#">
                <IoIosHeartEmpty />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="down-nav">
          <h1 className="logo">Bandage</h1>
          <div className="register">
            <Link className="register-link-bg" to="#">
              <IoIosSearch />
            </Link>
            <Link className="register-link-bg" to="#">
              <BsCart />
            </Link>
            <Link className="register-link-bg" to="#">
              <img src={menuIcon} alt="menu" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
