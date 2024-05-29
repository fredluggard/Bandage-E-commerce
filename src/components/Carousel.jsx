import { Link } from "react-router-dom";
import "../styles/Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <div className="right-carousel">
        <p>5 Items</p>
        <h2>FURNITURE</h2>
        <Link to="#">Read More</Link>
      </div>

      <div className="left-carousel">
        <div className="top-carousel">
          <p>5 Items</p>
          <h3>FURNITURE</h3>
          <Link to="#">Read More</Link>
        </div>

        <div className="bottom-carousel">
          <div className="bottom-carousel-one">
            <p>5 Items</p>
            <h3>FURNITURE</h3>
            <Link to="#">Read More</Link>
          </div>

          <div className="bottom-carousel-two">
            <p>5 Items</p>
            <h3>FURNITURE</h3>
            <Link to="#">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
