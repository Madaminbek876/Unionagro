import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import Product from "@/assets/images/product.png";
import Seda from "@/assets/images/seda.png";
import FieldCarouselOne from "@/assets/images/field-carousel-1.jpg";
import FieldCarouselTwo from "@/assets/images/field-carousel-2.jpg";
import ArticleMelonChild from "@/assets/images/article-melon-child.jpg";
import ArticleWatermelonField from "@/assets/images/article-watermelon-field.jpg";
import ArticleTomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import ArticleTomatoRed from "@/assets/images/article-tomato-red.jpg";
import ArticleTomatoGreen from "@/assets/images/article-tomato-green.jpg";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Beaker,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";

const advantages = [
  {
    icon: BadgeCheck,
    title: "Sertifikatlangan mahsulot",
    text: "Har bir mahsulot tanlangan va tekshirilgan sifat mezonlariga mos.",
  },
  {
    icon: Sprout,
    title: "Agro sanoatga mos tanlov",
    text: "Maydon, mavsum va ekin turiga qarab yechim tavsiya qilamiz.",
  },
  {
    icon: Truck,
    title: "Tez yetkazib berish",
    text: "Buyurtmalarni kelishilgan manzilga tez va qulay yetkazamiz.",
  },
  {
    icon: ShieldCheck,
    title: "Ishonchli maslahat",
    text: "Mahsulot tanlashda agronomik yo'nalish bilan yordam beramiz.",
  },
];

const articles = [
  {
    image: ArticleMelonChild,
    category: "Hosil sifati",
    date: "2026",
    title: "Sifatli urug' tanlovi hosilda qanday ko'rinadi",
    featured: true,
  },
  {
    image: ArticleWatermelonField,
    category: "Dala tajribasi",
    date: "2026",
    title: "Poliz ekinlari uchun to'g'ri parvarish bosqichlari",
  },
  {
    image: ArticleTomatoCherry,
    category: "Issiqxona",
    date: "2026",
    title: "Cherry pomidorlarda hosilni barqaror ushlab turish",
  },
  {
    image: ArticleTomatoRed,
    category: "Pomidor",
    date: "2026",
    title: "Qizil pomidor shodalarida yetilish nazorati",
  },
  {
    image: ArticleTomatoGreen,
    category: "Agro maslahat",
    date: "2026",
    title: "Pomidor ko'chatlarini oziqlantirish va himoya qilish",
  },
];

const heroSlides = [
  { image: FieldCarouselOne, title: "Dala nazorati" },
  { image: FieldCarouselTwo, title: "Hosil sifati" },
];

const heroStats = [
  { value: 120, label: "umumiy urug'lar soni" },
  { value: 500, label: "mijozlar soni" },
  { value: 80, label: "umumiy dorilar soni" },
];

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(() =>
    heroStats.map(() => 0),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    let animationFrameId = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(
        heroStats.map((stat) => Math.round(stat.value * easedProgress)),
      );

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#172c1d] text-white">
      <Navbar />

      <section
        id="about"
        className="relative -mt-24 min-h-[760px] overflow-hidden bg-[url('/dala.webp')] bg-cover bg-center px-4 pb-20 pt-36 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06170d]/88 via-[#123d21]/68 to-[#196931]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06170d]/70 via-transparent to-[#06170d]/28" />

        <div className="relative mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-4 py-2 text-sm font-bold text-[#FBC719] backdrop-blur-xl">
              <Leaf size={17} />
              Unionagro bilan xosilingizni yanada samarali qiling
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              Union Agro
              <span className="mt-3 block w-fit rounded-[22px] border-2 border-[#FBC719] px-3 py-1 text-white">
                hosilingiz uchun zamonaviy yechimlar
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Urug'lar, agro dorilar va o'simlik parvarishi uchun ishonchli
              mahsulotlar. Har bir bo'lim rasm, qisqa ta'rif va aniq tanlov
              bilan foydalanuvchiga tez tushunarli ko'rinadi.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#196931] px-7 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:bg-[#125326]"
              >
                Mahsulotlarni ko'rish
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FBC719] bg-white/8 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:bg-[#FBC719] hover:text-[#196931]"
              >
                <PhoneCall size={18} />
                Maslahat olish
              </a>
            </div>

          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[590px] lg:-mt-4 lg:h-[560px] lg:justify-self-end">
            <div className="absolute -left-5 top-12 h-52 w-52 rounded-full border border-[#FBC719]/30 bg-[#FBC719]/18 blur-2xl" />
            <div className="relative h-full overflow-hidden rounded-[42px] border border-white/24 bg-white/12 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="relative h-full overflow-hidden rounded-[32px] bg-[#0b2a16]">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${
                      index === activeSlide
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06170d]/64 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-[22px] border border-white/18 bg-white/14 px-5 py-4 text-white backdrop-blur-2xl">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FBC719]">
                      Carousel
                    </p>
                    <p className="mt-1 text-xl font-black">
                      {heroSlides[activeSlide].title}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        aria-label={slide.title}
                        onClick={() => setActiveSlide(index)}
                        className={`h-3 rounded-full transition ${
                          index === activeSlide
                            ? "w-8 bg-[#FBC719]"
                            : "w-3 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-16 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto grid max-w-5xl gap-4 rounded-[32px] border border-white/20 bg-[#172c1d]/88 p-7 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:grid-cols-3">
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-5xl font-black text-[#FBC719]">
                {animatedStats[index]}+
              </p>
              <p className="mt-3 text-lg font-bold text-white/78">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-white/10 bg-[#166b2f] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <CategoryCard
              href="/product"
              image={Seda}
              title="Urug'lar"
              icon={<Sprout size={24} />}
            />
            <CategoryCard
              href="/medicine"
              image={Product}
              title="Dorilar"
              icon={<Beaker size={24} />}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mx-auto mb-4 w-fit rounded-full border border-[#FBC719] bg-[#FBC719]/12 px-4 py-2 text-sm font-black text-[#FBC719]">
              Agro yangiliklar
            </p>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Foydali maqolalar va dala tajribalari
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <ArticleCard article={articles[0]} featured />
            <div className="grid gap-5 sm:grid-cols-2">
              {articles.slice(1).map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FBC719]/70 hover:bg-[#172c1d]/86"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#FBC719]/10 blur-2xl transition group-hover:bg-[#FBC719]/20" />
                  <div className="relative mb-5 grid h-13 w-13 place-items-center rounded-2xl border border-[#FBC719]/80 bg-[#FBC719]/12 text-[#FBC719]">
                    <Icon size={24} />
                  </div>
                  <div className="relative mb-4 h-1 w-12 rounded-full bg-[#FBC719]" />
                  <h3 className="relative text-xl font-black leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm font-semibold leading-6 text-white/62">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

type Article = {
  image: string;
  category: string;
  date: string;
  title: string;
};

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => (
  <article
    className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#172c1d]/80 shadow-[0_22px_60px_rgba(0,0,0,0.22)] ${
      featured ? "min-h-[520px]" : "min-h-[248px]"
    }`}
  >
    <img
      src={article.image}
      alt={article.title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#06170d]/94 via-[#06170d]/36 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-black">
        <span className="rounded-full border border-[#FBC719]/70 bg-[#FBC719]/14 px-3 py-1 text-[#FBC719]">
          {article.category}
        </span>
        <span className="text-white/58">{article.date}</span>
      </div>
      <h3
        className={`font-black leading-tight text-white ${
          featured ? "text-3xl" : "text-xl"
        }`}
      >
        {article.title}
      </h3>
    </div>
  </article>
);

type CategoryCardProps = {
  href: string;
  image: string;
  title: string;
  icon: React.ReactNode;
};

const CategoryCard = ({ href, image, title, icon }: CategoryCardProps) => (
  <a href={href} className="group block">
    <div className="overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-[1.08/1] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#196931]/34 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
    </div>
    <div className="mt-6 flex items-center justify-center gap-3 text-center text-4xl font-black text-white sm:text-5xl">
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white/12 text-white">
        {icon}
      </span>
      {title}
    </div>
  </a>
);

export default HomePage;
