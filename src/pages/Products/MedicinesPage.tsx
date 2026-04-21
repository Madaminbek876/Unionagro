import Product from "@/assets/images/product.png";
import Seda from "@/assets/images/seda.png";
import Sedana from "@/assets/images/sedana.png";
import Navbar from "@/components/Navbar/navbar";
import { ArrowLeft, Beaker } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const medicines = [
  {
    name: "Bio Magic",
    image: Product,
    text: "O'simlik o'sishini qo'llab-quvvatlaydigan kompleks oziqlantirish vositasi.",
  },
  {
    name: "Root Max",
    image: Sedana,
    text: "Ildiz rivojlanishini kuchaytiradi va ko'chatning moslashish davrini yengillashtiradi.",
  },
  {
    name: "Green Shield",
    image: Seda,
    text: "Barg va poya himoyasi uchun profilaktik agro yechim sifatida tavsiya etiladi.",
  },
  {
    name: "Fito Energy",
    image: Product,
    text: "Vegetatsiya vaqtida o'simlikka quvvat berib, hosil sifatini yaxshilashga yordam beradi.",
  },
  {
    name: "Agro Balance",
    image: Sedana,
    text: "Stressdan keyingi tiklanish va oziqa balansini ushlab turish uchun ishlatiladi.",
  },
];

const MedicinesPage = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

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
            Dorilar
          </h1>

          <div className="mt-16 grid gap-x-20 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {medicines.map((medicine) => (
              <FlipCatalogCard
                key={medicine.name}
                name={medicine.name}
                image={medicine.image}
                text={medicine.text}
                flipped={flippedCard === medicine.name}
                onClick={() =>
                  setFlippedCard(
                    flippedCard === medicine.name ? null : medicine.name,
                  )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

type FlipCatalogCardProps = {
  name: string;
  image: string;
  text: string;
  flipped: boolean;
  onClick: () => void;
};

const FlipCatalogCard = ({
  name,
  image,
  text,
  flipped,
  onClick,
}: FlipCatalogCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="mx-auto block w-full max-w-[260px] text-center outline-none [perspective:1100px]"
  >
    <div
      className="h-[250px] transition duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] data-[flipped=true]:[transform:rotateY(180deg)]"
      data-flipped={flipped}
    >
      <div className="absolute inset-0 [backface-visibility:hidden]">
        <div className="h-[178px] overflow-hidden rounded-[14px] border-4 border-white bg-white shadow-[0_18px_42px_rgba(0,0,0,0.32)]">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <h2 className="mt-4 text-xl font-black text-[#FBC719] drop-shadow">
          {name}
        </h2>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[18px] border-2 border-[#FBC719] bg-[#196931] p-5 text-white shadow-[0_20px_48px_rgba(0,0,0,0.34)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl border border-[#FBC719] bg-[#FBC719]/15 text-[#FBC719]">
          <Beaker size={24} />
        </div>
        <h3 className="text-xl font-black text-[#FBC719]">{name}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-white/82">
          {text}
        </p>
      </div>
    </div>
  </button>
);

export default MedicinesPage;
