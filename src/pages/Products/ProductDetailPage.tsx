import Product from "@/assets/images/seda.png";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-black/30">
        {/* Header */}
        <div className="px-6 pt-8">
          <h2 className="text-sm text-gray-300 mb-2">Urug‘lar bo‘limi</h2>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Qora sedana urug‘i
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 items-center">
          {/* Text */}
          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>
              Yaqin Sharq qora sedana vatani deb hisoblanadi, keyinchalik u butun
              Osiyo qit'asida tarqalib, Yevropaning janubiga va Shimoliy Afrikaga
              kirib bordi.
            </p>

            <p>
              Bugungi kunda o‘simlik dunyoning ko‘plab mamlakatlarida, shu jumladan
              Rossiyaning janubida yetishtiriladi.
            </p>

            <p>
              Qora sedana (ilmiy nomi <b>Nigella sativa</b>) eng qadimgi achchiq va
              dorivor o‘simliklardan biri hisoblanadi.
            </p>

            <Button
              variant="ghost"
              className="mt-4 w-fit bg-black/80 text-white hover:bg-black"
            >
              Batafsil maʼlumot
            </Button>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <img
              src={Product}
              alt="Qora sedana urug‘i"
              className="w-full max-h-[420px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
