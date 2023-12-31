import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
