import "../styles/AboutUs.css";
import user from "../assets/images/user.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function AboutUs() {
  return (
    <div className="contain">
      <div className="left">
        <h3>What they say about us</h3>
        <div className="user">
          <img src={user} alt="image" />
          <span>
            <FaStar className="colored-star" />
            <FaStar className="colored-star" />
            <FaStar className="colored-star" />
            <FaStar className="colored-star" />
            <CiStar className="bg-star" />
          </span>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <h5>Regina Miles</h5>
          <h6>Designer</h6>
        </div>
      </div>

      <div className="right">
        <img src={img1} alt="images" />
        <img src={img2} alt="images" />
        <img src={img3} alt="images" />
        <img src={img4} alt="images" />
        <img src={img5} alt="images" />
        <img src={img6} alt="images" />
        <img src={img7} alt="images" />
        <img src={img8} alt="images" />
        <img src={img9} alt="images" />
      </div>
    </div>
  );
}

export default AboutUs;
