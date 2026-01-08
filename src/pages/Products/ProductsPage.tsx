import Product from "@/assets/images/product.png";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      {/* TITLE */}
      <h1
        className="
          text-white 
          text-3xl sm:text-4xl lg:text-5xl 
          font-serif font-bold 
          text-center 
          mt-10
        "
      >
        Urug'lar bo'limi
      </h1>

      {/* PRODUCTS */}
      <div
        className="
          mt-10 sm:mt-16 lg:mt-20
          flex flex-wrap
          items-center justify-center
          gap-4 sm:gap-5
        "
      >
        <Link
          to="/productDetail"
          className="
            w-[160px] sm:w-[220px] lg:w-[250px]
            h-[250px] sm:h-[360px] lg:h-[400px]
            border rounded-2xl shadow-sm
            hover:shadow-lg transition
          "
        >
          <img
            src={Product}
            alt=""
            className="w-full mt-5 h-[65%] object-cover rounded-t-2xl"
          />
          <div className="flex flex-col gap-2 items-center justify-center h-[35%]">
            <h1 className="text-sm sm:text-base font-medium">
              Pamidor urug'i
            </h1>
          </div>
        </Link>

        <Link
          to="/productDetail"
          className="
            w-[160px] sm:w-[220px] lg:w-[250px]
            h-[250px] sm:h-[360px] lg:h-[400px]
            border rounded-2xl shadow-sm
            hover:shadow-lg transition
          "
        >
          <img
            src={Product}
            alt=""
            className="w-full mt-5 h-[65%] object-cover rounded-t-2xl"
          />
          <div className="flex flex-col gap-2 items-center justify-center h-[35%]">
            <h1 className="text-sm sm:text-base font-medium">
              Bodiring urug'i
            </h1>
          </div>
        </Link>

        <Link
          to="/productDetail"
          className="
            w-[160px] sm:w-[220px] lg:w-[250px]
            h-[250px] sm:h-[360px] lg:h-[400px]
            border rounded-2xl shadow-sm
            hover:shadow-lg transition
          "
        >
          <img
            src={Product}
            alt=""
            className="w-full mt-5 h-[65%] object-cover rounded-t-2xl"
          />
          <div className="flex flex-col gap-2 items-center justify-center h-[35%]">
            <h1 className="text-sm sm:text-base font-medium">
              Piyoz urug'i
            </h1>
          </div>
        </Link>

        <Link
          to="/productDetail"
          className="
            w-[160px] sm:w-[220px] lg:w-[250px]
            h-[250px] sm:h-[360px] lg:h-[400px]
            border rounded-2xl shadow-sm
            hover:shadow-lg transition
          "
        >
          <img
            src={Product}
            alt=""
            className="w-full mt-5 h-[65%] object-cover rounded-t-2xl"
          />
          <div className="flex flex-col gap-2 items-center justify-center h-[35%]">
            <h1 className="text-sm sm:text-base font-medium">
              Sabzi urug'i
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
