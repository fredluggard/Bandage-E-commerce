import "../styles/FeaturedPost.css";
import user from "../assets/images/icon-cool-icon-1153.svg";
import book from "../assets/images/icon-cool-icon-153.svg";
import arrow from "../assets/images/icon-cool-icon-125.svg";
import room from "../assets/images/room.png";
import kitchen from "../assets/images/kitchen.png";
import bedroom from "../assets/images/bedroom.png";
import { CiAlarmOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function FeaturedPost() {
  return (
    <div className="container">
      <div className="best-seller">
        <h4>Featured Products</h4>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
      </div>

      <div className="icons">
        <div className="icon">
          <img src={user} alt="icon" />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>

        <div className="icon">
          <img src={book} alt="icon" />
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="icon">
          <img src={arrow} alt="icon" />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>

      <div className="feature">
        <div className="featured-post">
          <h6>Practice Advice</h6>
          <h2>Featured Posts</h2>
        </div>

        <div className="room-cards">
          <div className="room-card">
            <img src={room} alt="image" />
            <h6>New</h6>
            <div className="bottom-card">
              <div className="trends">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <h4>Loudest à la Madison #1 (L`integral)</h4>
              <p className="ps">
                We focus on ergonomics and meeting you where you work.
                It`&apos;`s only a keystroke away.
              </p>
              <div className="date">
                <span>
                  <CiAlarmOn className="alarm" /> 22 April 2021
                </span>
                <span>
                  <FaChartArea className="chart" /> 10 comments
                </span>
              </div>
              <Link className="learn" to="#">
                Learn More <MdKeyboardArrowRight className="arrow-right" />
              </Link>
            </div>
          </div>

          <div className="room-card">
            <img src={kitchen} alt="image" />
            <h6>New</h6>
            <div className="bottom-card">
              <div className="trends">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <h4>Loudest à la Madison #1 (L`integral)</h4>
              <p className="ps">
                We focus on ergonomics and meeting you where you work.
                It`&apos;`s only a keystroke away.
              </p>
              <div className="date">
                <span>
                  <CiAlarmOn className="alarm" /> 22 April 2021
                </span>
                <span>
                  <FaChartArea className="chart" /> 10 comments
                </span>
              </div>
              <Link className="learn" to="#">
                Learn More <MdKeyboardArrowRight className="arrow-right" />
              </Link>
            </div>
          </div>

          <div className="room-card">
            <img src={bedroom} alt="image" />
            <h6>New</h6>
            <div className="bottom-card">
              <div className="trends">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <h4>Loudest à la Madison #1 (L`integral)</h4>
              <p className="ps">
                We focus on ergonomics and meeting you where you work.
                It`&apos;`s only a keystroke away.
              </p>
              <div className="date">
                <span>
                  <CiAlarmOn className="alarm" /> 22 April 2021
                </span>
                <span>
                  <FaChartArea className="chart" /> 10 comments
                </span>
              </div>
              <Link className="learn" to="#">
                Learn More <MdKeyboardArrowRight className="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
