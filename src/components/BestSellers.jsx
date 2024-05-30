import { useEffect, useState } from "react";
import "../styles/BestSellers.css";
import { Link } from "react-router-dom";

function BestSellers() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [count]);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="container">
      <div className="best-seller">
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between </p>
      </div>

      <div className="products">
        {products.map((product) => (
          <Link className="link" to="/shop" key={product.id}>
            <div className="product">
              <img
                width={183}
                height={238}
                src={product.thumbnail}
                alt="images"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = product.images;
                }}
              />
              <h5>{product.title}</h5>
              <p>English Department</p>
              <span className="prices">
                <h4 className="discount">$16.48</h4>
                <h4>${product.price}</h4>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button onClick={loadMore} className="btn">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
}

export default BestSellers;
