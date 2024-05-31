import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productState from "./features/ProductState.jsx";

const store = configureStore({
  reducer: {
    item: productState,
  },
});

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <a href="/">Home</a> },
  { path: "/shop", element: <Shop /> },
  { path: "/cart", element: <Cart /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
