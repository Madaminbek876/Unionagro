import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";

const route = createBrowserRouter([
  {
    element: <Navbar />,
    path: "/"
  },
  {
    element: <ProductsPage />,
    path: "/product"
  },
  {
    element: <ProductDetailPage />,
    path: "/productDetail"
  }
])

export default route;
