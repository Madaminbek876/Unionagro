import Navbar from "@/components/Navbar/navbar";
import { medicineProducts } from "@/data/catalog";
import HomeSectionsBg from "@/assets/images/home-sections-bg.jpg";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const MedicinesPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const isBacteriaCategory = category === "bacteria";
  const isTrapsCategory = category === "traps";
  const defaultMedicineProducts = medicineProducts.filter(
    (medicine) =>
      !["trap-roll", "trap-board", "medicine-6", "medicine-7", "proton-v367", "bacteria-calcium-40"].includes(
        medicine.slug,
      ),
  );
  const orderedBacteriaSlugs = [
    "bacteria-calcium-40",
    "medicine-6",
    "medicine-7",
    "proton-v367",
  ];
  const productsToShow = isBacteriaCategory
    ? orderedBacteriaSlugs
        .map((slug) => medicineProducts.find((medicine) => medicine.slug === slug))
        .filter((medicine): medicine is NonNullable<typeof medicine> => Boolean(medicine))
    : isTrapsCategory
      ? medicineProducts.filter((medicine) =>
          ["trap-roll", "trap-board"].includes(medicine.slug),
        )
      : defaultMedicineProducts;
  const pageTitle = isBacteriaCategory
    ? "Jonli bakteriyalar"
    : isTrapsCategory
      ? "Tuzoqlar"
      : "Dorilar";

  return (
    <main className="min-h-screen overflow-hidden bg-[#07b800] text-white">
      <video
        className="fixed inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HomeSectionsBg}
      >
        <source src="/0_Field_Green_1920x1080.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-gradient-to-r from-[#06170d]/88 via-[#123d21]/68 to-[#196931]/24" />
      <div className="fixed inset-0 bg-gradient-to-t from-[#06170d]/84 via-transparent to-[#06170d]/34" />
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
            {pageTitle}
          </h1>

          <div className="mt-12 grid gap-x-20 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {productsToShow.map((medicine) => (
              <CatalogCard
                slug={medicine.slug}
                key={medicine.name}
                name={medicine.name}
                image={medicine.image}
                images={medicine.images}
                category={category}
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
  images?: string[];
  category?: string | null;
};

const CatalogCard = ({
  slug,
  name,
  image,
  images,
  category,
}: FlipCatalogCardProps) => {
  const slides = images?.length ? images : [image];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="group mx-auto w-full max-w-[320px] text-center sm:max-w-[260px]">
      <div className="transition duration-500 group-hover:-translate-y-2">
        <Link
          to={`/medicine/${slug}${category ? `?category=${category}` : ""}`}
          className="relative block h-[250px] overflow-hidden rounded-[14px] border-4 border-[#FBC719] bg-[#123d21] shadow-[0_18px_42px_rgba(0,0,0,0.32)] outline-none sm:h-[268px]"
        >
          {slides.map((slide, index) => (
            <img
              key={slide}
              src={slide}
              alt={name}
              className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {slides.length > 1 ? (
            <span className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {slides.map((slide, index) => (
                <span
                  key={slide}
                  className={`h-2 rounded-full transition ${
                    index === activeSlide
                      ? "w-5 bg-[#FBC719]"
                      : "w-2 bg-[#196931]/45"
                  }`}
                />
              ))}
            </span>
          ) : null}
        </Link>
        <h2 className="mx-auto mt-4 w-fit max-w-full rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-5 py-2 text-lg font-black text-[#FBC719] drop-shadow transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default MedicinesPage;
