import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

const route = createBrowserRouter([
  {
    element: <Navbar />,
    path: "/"
  }
])

export default route;
