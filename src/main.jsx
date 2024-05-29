import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <a href="/">Home</a> },
  { path: "/shop", element: <Shop /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
