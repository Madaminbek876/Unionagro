import Navbar from "@/components/Navbar/navbar";
import { getCatalogProduct } from "@/data/catalog";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Leaf,
  PackageCheck,
  PhoneCall,
  Send,
  Sprout,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = getCatalogProduct(slug);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#07b800] text-white">
        <div className="fixed inset-0 bg-[linear-gradient(145deg,#41c83a_0%,#12bd0b_38%,#00ad00_100%)]" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,80,0,0.16))]" />
        <div className="relative">
          <Navbar />
          <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 w-fit rounded-full border border-[#FBC719] bg-[#FBC719]/12 px-4 py-2 text-sm font-black text-[#FBC719]">
              Mahsulot topilmadi
            </p>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              Bu mahsulot bo'yicha ma'lumot mavjud emas
            </h1>
            <Link
              to="/product"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FBC719] px-6 py-3 text-sm font-black text-[#196931] transition hover:bg-white"
            >
              <ArrowLeft size={18} />
              Mahsulotlarga qaytish
            </Link>
          </section>
        </div>
      </main>
    );
  }

  const backPath = product.type === "seed" ? "/product" : "/medicine";
  const sectionTitle = product.type === "seed" ? "Urug'lar" : "Dorilar";
  const SectionIcon = product.type === "seed" ? Sprout : PackageCheck;

  return (
    <main className="min-h-screen overflow-hidden bg-[#07b800] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(145deg,#41c83a_0%,#12bd0b_38%,#00ad00_100%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,80,0,0.16))]" />

      <div className="relative">
        <Navbar />

        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-[#FBC719] hover:text-[#FBC719]"
          >
            <ArrowLeft size={17} />
            {sectionTitle}ga qaytish
          </Link>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FBC719]/70 bg-[#FBC719]/12 px-4 py-2 text-xs font-black text-[#FBC719] backdrop-blur-xl sm:text-sm">
                <SectionIcon size={17} />
                {sectionTitle} bo'limi
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-[18px] border border-white/16 bg-white/[0.12] p-4 shadow-[0_14px_38px_rgba(0,80,0,0.12)] backdrop-blur-xl"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FBC719]">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-base font-black text-white">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-4 h-24 w-24 rounded-full border border-[#FBC719]/40 bg-[#FBC719]/18 blur-2xl sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
              <div className="relative overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-[0_34px_90px_rgba(0,0,0,0.36)] sm:rounded-[28px]">
                <div className="aspect-[1.05/1] overflow-hidden bg-[#123d21] sm:aspect-[1.12/1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-full w-full ${
                      product.type === "medicine"
                        ? "object-contain p-4"
                        : "object-cover"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid items-start gap-5 sm:mt-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="group relative overflow-hidden rounded-[22px] border border-[#FBC719]/34 bg-[#196931]/72 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FBC719]/80 hover:bg-[#196931]/88 hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:rounded-[24px] sm:p-6">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#FBC719]/10 blur-2xl transition group-hover:bg-[#FBC719]/20" />
              <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-[#FBC719]/80 bg-[#FBC719]/15 text-[#FBC719] transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
                <Leaf size={24} />
              </div>
              <div className="relative mb-4 h-1 w-12 rounded-full bg-[#FBC719]" />
              <h2 className="relative text-xl font-black text-white sm:text-2xl">
                Qisqa ma'lumot
              </h2>
              <p className="relative mt-4 text-sm font-semibold leading-7 text-white/78 sm:text-base sm:leading-8">
                {product.summary}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {product.highlights.map((item) => (
                <div
                  key={item}
                  className="group relative flex items-start gap-3 overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.08] p-4 shadow-[0_16px_44px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#FBC719]/70 hover:bg-[#172c1d]/86 hover:shadow-[0_22px_62px_rgba(0,0,0,0.22)]"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-[#FBC719]/8 blur-2xl transition group-hover:bg-[#FBC719]/18" />
                  <CheckCircle2
                    className="relative mt-0.5 shrink-0 text-[#FBC719] transition group-hover:scale-110"
                    size={20}
                  />
                  <p className="relative text-sm font-black leading-6 text-white sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-white/12 bg-[#0b2a16]/70 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-[24px] sm:p-5">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FBC719] text-[#196931]">
                <BadgeCheck size={23} />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-black text-white">
                  Union Agro tavsiyasi
                </p>
                <p className="text-sm font-semibold text-white/62">
                  Mahsulotni qo'llashdan oldin ekin turi va mavsum sharoitini
                  aniqlashtiring.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsContactDialogOpen(true)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#FBC719] px-6 py-3 text-sm font-black text-[#196931] transition hover:bg-white sm:w-auto"
            >
              Maslahat olish
            </button>
          </div>
        </section>
      </div>

      {isContactDialogOpen && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-[#06170d]/74 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
          onClick={() => setIsContactDialogOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-[24px] border border-[#FBC719]/34 bg-[#0b2a16] p-5 text-white shadow-[0_34px_90px_rgba(0,0,0,0.42)] sm:rounded-[28px] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Yopish"
              onClick={() => setIsContactDialogOpen(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-white/8 text-white transition hover:border-[#FBC719] hover:text-[#FBC719]"
            >
              <X size={20} />
            </button>

            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#FBC719] text-[#196931]">
              <BadgeCheck size={27} />
            </div>
            <h2 id="contact-dialog-title" className="text-2xl font-black">
              Maslahat olish
            </h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/64">
              Sizga qulay aloqa turini tanlang.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="tel:+998901234567"
                className="group flex items-center gap-3 rounded-[20px] border border-white/12 bg-white/[0.08] p-4 transition hover:-translate-y-0.5 hover:border-[#FBC719]/70 hover:bg-[#196931]/70 sm:gap-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#FBC719]/70 bg-[#FBC719]/12 text-[#FBC719] transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
                  <PhoneCall size={22} />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/50">
                    Telefon
                  </span>
                  <span className="break-words text-base font-black text-white sm:text-lg">
                    +998 90 123 45 67
                  </span>
                </span>
              </a>

              <a
                href="https://t.me/Narim0nov"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-[20px] border border-white/12 bg-white/[0.08] p-4 transition hover:-translate-y-0.5 hover:border-[#FBC719]/70 hover:bg-[#196931]/70 sm:gap-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#FBC719]/70 bg-[#FBC719]/12 text-[#FBC719] transition group-hover:bg-[#FBC719] group-hover:text-[#196931]">
                  <Send size={22} />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/50">
                    Telegram
                  </span>
                  <span className="break-words text-base font-black text-white sm:text-lg">
                    @Narim0nov
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetailPage;
