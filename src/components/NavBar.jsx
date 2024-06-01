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
import { useSelector } from "react-redux";

function NavBar() {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [drop, setDrop] = useState(false);
  const dropdown = () => {
    setDrop(!drop);
  };
  const cart = useSelector((state) => state.cart.items);

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
                <span>
                  <BsCart /> <p className="cart-num">{cart.length}</p>
                </span>
              </Link>
              <Link className="register-link" to="#">
                <IoIosHeartEmpty />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="cover-div">
          <div className="down-nav">
            <h1 className="logo">Bandage</h1>
            <div className="register">
              <Link className="register-link-bg" to="#">
                <IoIosSearch />
              </Link>
              <Link className="register-link-bg" to="#">
                <span>
                  <BsCart /> <p className="cart-num">{cart.length}</p>
                </span>
              </Link>
              <div onClick={dropdown} className="register-link-bg">
                <img src={menuIcon} alt="menu" />
              </div>
            </div>
          </div>

          {drop === true && (
            <div
              className="droppedMenu"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "98vh",
              }}
            >
              <nav
                className="link-nav"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  gap: "50px",
                }}
              >
                <NavLink
                  className="nav-link"
                  to="/"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/shop"
                  style={{ fontSize: "20px" }}
                >
                  Shop
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="#"
                  style={{ fontSize: "20px" }}
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="#"
                  style={{ fontSize: "20px" }}
                >
                  Blog
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="#"
                  style={{ fontSize: "20px" }}
                >
                  Contact
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="#"
                  style={{ fontSize: "20px" }}
                >
                  Pages
                </NavLink>
                <Link
                  className="register-link"
                  to="#"
                  style={{ color: "#23a6f0", fontSize: "20px" }}
                >
                  <FaRegUser /> Login / Register
                </Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
