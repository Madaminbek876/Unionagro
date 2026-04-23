import Navbar from "@/components/Navbar/navbar";
import { seedProducts } from "@/data/catalog";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#d8f4c8] text-[#123d21]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(157,218,116,0.72),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(225,255,207,0.88),transparent_30%),linear-gradient(145deg,#f8fff1_0%,#d6f3c4_42%,#a8dc83_100%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(216,244,200,0.2)_42%,rgba(112,166,74,0.2))]" />
      <div className="relative">
        <Navbar />
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#196931]/18 bg-white/40 px-5 py-3 text-sm font-bold text-[#196931] shadow-[0_14px_34px_rgba(25,105,49,0.12)] backdrop-blur-xl transition hover:border-[#196931]/45 hover:bg-white/70"
          >
            <ArrowLeft size={17} />
            Bosh sahifaga
          </Link>

          <h1 className="text-center text-3xl font-black tracking-wide text-[#123d21] sm:text-5xl">
            Urug'lar
          </h1>

          <div className="mt-12 grid gap-x-20 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {seedProducts.map((seed) => (
              <CatalogCard
                slug={seed.slug}
                key={seed.name}
                name={seed.name}
                image={seed.image}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

type FlipCatalogCardProps = {
  slug: string;
  name: string;
  image: string;
};

const CatalogCard = ({
  slug,
  name,
  image,
}: FlipCatalogCardProps) => (
  <div className="group mx-auto w-full max-w-[320px] text-center sm:max-w-[260px]">
    <div className="transition duration-500 group-hover:-translate-y-2">
      <Link
        to={`/product/${slug}`}
        className="block h-[250px] overflow-hidden rounded-[14px] border-4 border-white bg-white shadow-[0_18px_42px_rgba(0,0,0,0.32)] outline-none sm:h-[268px]"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </Link>
      <h2 className="mx-auto mt-4 w-fit rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-5 py-2 text-lg font-black text-[#FBC719] drop-shadow transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
        {name}
      </h2>
    </div>
  </div>
);

export default ProductsPage;
