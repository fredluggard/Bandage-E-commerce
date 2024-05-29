import "../styles/FeaturedPost.css";
import user from "../assets/images/icon-cool-icon-1153.svg";

function FeaturedPost() {
  return (
    <div className="container">
      <div className="best-seller">
        <h4>Featured Products</h4>
        <p>Problems trying to resolve the conflict between </p>
      </div>

      <div>
        <div>
          <img src={user} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
