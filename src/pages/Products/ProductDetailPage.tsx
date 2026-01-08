import Product from "@/assets/images/seda.png";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-50 my-6 sm:my-10 lg:my-30">
      <div className="max-w-[1200px] h-auto lg:h-[500px] overflow-hidden bg-white/10 backdrop-blur-xl border-white/20 shadow-lg shadow-black/30 border rounded-lg">
        <div>
          <h1 className="ml-4 sm:ml-[30px] mt-6 sm:mt-[40px] pb-6 text-black">
            Urug'lar bo'limi
          </h1>

          <div className="ml-4 sm:ml-[30px] flex flex-col lg:flex-row lg:justify-between gap-6">
            <div className="w-full lg:w-[435px]">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-normal pb-5 text-white">
                Qora sedana urug'i
              </h1>

              <p className="text-sm sm:text-base">
                Yaqin Sharq qora sedana vatani deb hisoblanadi, keyinchalik u butun Osiyo qit'asida tarqalib,
                Yevropaning janubiga <br />
                va shimoliy Afrikaga kirib bordi. Bugungi kunda o'simlik dunyoning ko'plab mamlakatlarida,
                shu jumladan <br />
                <br />
                Rossiyaning janubida yetishtiriladi. Qora sedana, haqiqiy sedana bilan birga, eng qadimgi
                achchiq va dorivor <br />
                o'simliklardan biridir. Qora sedana urug'ining ilmiy nomi - Nigella sativa deb ataladi.
              </p>
            </div>

            <div className="rounded-lg h-auto lg:h-[300px]">
              <img
                className="w-full lg:w-[660px] h-[260px] sm:h-[360px] lg:h-[500px] ml-0 lg:ml-[10px] rounded-lg mt-0 lg:-mt-[90px] object-cover"
                src={Product}
                alt=""
              />
            </div>
          </div>

          <Button
            variant="ghost"
            className="ml-4 sm:ml-[30px] py-5 bg-black text-white mt-6 lg:mt-0"
          >
            Batafsil ma'lumot uchun
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
