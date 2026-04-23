import Navbar from "@/components/Navbar/navbar";
import { medicineProducts } from "@/data/catalog";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MedicinesPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07b800] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(145deg,#41c83a_0%,#12bd0b_38%,#00ad00_100%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,80,0,0.16))]" />
      <div className="relative">
        <Navbar />
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-[#FBC719] hover:text-[#FBC719]"
          >
            <ArrowLeft size={17} />
            Bosh sahifaga
          </Link>

          <h1 className="text-center text-3xl font-black tracking-wide text-white sm:text-5xl">
            Dorilar
          </h1>

          <div className="mt-12 grid gap-x-20 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {medicineProducts.map((medicine) => (
              <CatalogCard
                slug={medicine.slug}
                key={medicine.name}
                name={medicine.name}
                image={medicine.image}
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
        to={`/medicine/${slug}`}
        className="block h-[250px] overflow-hidden rounded-[14px] border-4 border-white bg-white shadow-[0_18px_42px_rgba(0,0,0,0.32)] outline-none sm:h-[268px]"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
        />
      </Link>
      <h2 className="mx-auto mt-4 w-fit max-w-full rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-5 py-2 text-lg font-black text-[#FBC719] drop-shadow transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
        {name}
      </h2>
    </div>
  </div>
);

export default MedicinesPage;
