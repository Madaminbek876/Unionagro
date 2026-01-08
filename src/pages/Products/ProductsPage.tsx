import Product from "@/assets/images/product.png"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-40 gap-5">
        <Link to="/productDetail" className="w-[250px] h-[400px] border">
          <img src={Product} alt="" />
          <div className="flex flex-col gap-2 items-center">
            <h1>Urug</h1>
          </div>
        </Link>
        <div className="w-[250px] h-[400px] border">
          <img src={Product} alt="" />
        </div>
        <div className="w-[250px] h-[400px] border">
          <img src={Product} alt="" />
        </div>
        <div className="w-[250px] h-[400px] border">
          <img src={Product} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
