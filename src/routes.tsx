import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MedicinesPage from "./pages/Products/MedicinesPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";

const route = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/"
  },
  {
    element: <ProductsPage />,
    path: "/product"
  },
  {
    element: <MedicinesPage />,
    path: "/medicine"
  },
  {
    element: <ProductDetailPage />,
    path: "/product/:slug"
  },
  {
    element: <ProductDetailPage />,
    path: "/medicine/:slug"
  }
])

export default route;
