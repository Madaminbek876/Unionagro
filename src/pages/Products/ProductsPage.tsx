import Navbar from "@/components/Navbar/navbar";
import { seedProducts } from "@/data/catalog";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-[#0f321b] text-white">
      <div className="fixed inset-0 bg-[url('/dala.webp')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-[#0b2a16]/86" />
      <div className="relative">
        <Navbar />
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-[#FBC719] hover:text-[#FBC719]"
          >
            <ArrowLeft size={17} />
            Bosh sahifaga
          </Link>

          <h1 className="text-center text-4xl font-black tracking-wide text-white sm:text-5xl">
            Urug'lar
          </h1>

          <div className="mt-16 grid gap-x-20 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
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
  <Link
    to={`/product/${slug}`}
    className="group mx-auto block w-full max-w-[260px] text-center outline-none"
  >
    <div className="transition duration-500 group-hover:-translate-y-2">
      <div className="h-[268px] overflow-hidden rounded-[14px] border-4 border-white bg-white shadow-[0_18px_42px_rgba(0,0,0,0.32)]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
      <h2 className="mx-auto mt-4 w-fit rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-5 py-2 text-lg font-black text-[#FBC719] drop-shadow transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
        {name}
      </h2>
    </div>
  </Link>
);

export default ProductsPage;
