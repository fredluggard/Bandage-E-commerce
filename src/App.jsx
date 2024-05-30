import "./App.css";
import AboutUs from "./components/AboutUs";
import Advert from "./components/Advert";
import BestSellers from "./components/BestSellers";
import Carousel from "./components/Carousel";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Carousel />
        <BestSellers />
        <FeaturedPost />
        <AboutUs />
        <Advert />
        <Footer />
      </div>
    </>
  );
}

export default App;
