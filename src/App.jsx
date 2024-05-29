import "./App.css";
import BestSellers from "./components/BestSellers";
import Carousel from "./components/Carousel";
import FeaturedPost from "./components/FeaturedPost";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <BestSellers />
      <FeaturedPost />
    </>
  );
}

export default App;
