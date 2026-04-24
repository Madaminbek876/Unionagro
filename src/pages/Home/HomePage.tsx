import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer";
import Fabio from "@/assets/images/8da9ce091b880623eea47f85f6d2e3f2911fa325.png";
import SeedsMix from "@/assets/images/blob.jpeg";
import FieldCarouselOne from "@/assets/images/watermelon-field-man.jpg";
import FieldCarouselTwo from "@/assets/images/field-carousel-2.jpg";
import FieldCarouselThree from "@/assets/images/field-carousel-3.jpg";
import FieldCarouselFour from "@/assets/images/field-carousel-4.jpg";
import ArticleMelonChild from "@/assets/images/article-melon-child.jpg";
import ArticleWatermelonField from "@/assets/images/article-watermelon-field.jpg";
import ArticleTomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import ArticleTomatoRed from "@/assets/images/article-tomato-red.jpg";
import ArticleTomatoGreen from "@/assets/images/article-tomato-green.jpg";
import HomeSectionsBg from "@/assets/images/home-sections-bg.jpg";
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
  { image: FieldCarouselThree, title: "Issiqxona nazorati" },
  { image: FieldCarouselFour, title: "Gul yetishtirish" },
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
        className="relative -mt-20 min-h-[720px] overflow-hidden bg-[url('/dala.webp')] bg-cover bg-center px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06170d]/88 via-[#123d21]/68 to-[#196931]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06170d]/70 via-transparent to-[#06170d]/28" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FBC719] bg-[#FBC719]/10 px-4 py-2 text-xs font-bold text-[#FBC719] backdrop-blur-xl sm:text-sm">
              <Leaf size={17} />
              <span>Ishonchli hosil daromadingiz manbaidir</span>
            </div>
            <h1 className="max-w-3xl text-3xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Unionagro bilan
              <span className="mt-3 block w-fit max-w-full rounded-[18px] border-2 border-[#FBC719] px-3 py-1 text-white sm:rounded-[22px]">
                hosilingiz uchun zamonaviy yechimlar
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8">
              Urug'lar, agro dorilar va o'simlik parvarishi uchun ishonchli
              mahsulotlar. Har bir bo'lim rasm, qisqa ta'rif va aniq tanlov
              bilan foydalanuvchiga tez tushunarli ko'rinadi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#196931] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:bg-[#125326] sm:px-7 sm:py-4 sm:text-base"
              >
                Mahsulotlarni ko'rish
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FBC719] bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-[#FBC719] hover:text-[#196931] sm:px-7 sm:py-4 sm:text-base"
              >
                <PhoneCall size={18} />
                Maslahat olish
              </a>
            </div>

          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[590px] sm:h-[440px] lg:-mt-4 lg:h-[560px] lg:justify-self-end">
            <div className="absolute -left-5 top-12 h-32 w-32 rounded-full border border-[#FBC719]/30 bg-[#FBC719]/18 blur-2xl sm:h-52 sm:w-52" />
            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/24 bg-white/12 p-2 shadow-[0_32px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:rounded-[42px] sm:p-3">
              <div className="relative h-full overflow-hidden rounded-[22px] bg-[#0b2a16] sm:rounded-[32px]">
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
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-[18px] border border-white/18 bg-white/14 px-4 py-3 text-white backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-[22px] sm:px-5 sm:py-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FBC719] sm:text-xs sm:tracking-[0.28em]">
                      Unionagro group
                    </p>
                    <p className="mt-1 text-base font-black sm:text-xl">
                      {heroSlides[activeSlide].title}
                    </p>
                    <p className="mt-1 max-w-[230px] text-xs font-semibold leading-5 text-white/68 sm:max-w-sm sm:text-sm">
                      Dala tajribasi va sifatli hosil sari amaliy yondashuv.
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

      <section className="relative -mt-10 overflow-hidden sm:-mt-16">
        <img
          src={HomeSectionsBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06170d]/88 via-[#123d21]/68 to-[#196931]/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06170d]/84 via-transparent to-[#06170d]/34" />

        <div className="relative px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-4 rounded-[24px] border border-white/20 bg-[#172c1d]/88 p-5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:rounded-[32px] sm:p-7 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-4xl font-black text-[#FBC719] sm:text-5xl">
                  {animatedStats[index]}+
                </p>
                <p className="mt-2 text-base font-bold text-white/78 sm:mt-3 sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="products" className="relative px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl rounded-[24px] border border-white/10 bg-[#166b2f] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:rounded-[34px] sm:p-6">
            <div className="grid gap-10 md:grid-cols-4">
              <CategoryCard
                href="/product"
                image={SeedsMix}
                title="Urug'lar"
                icon={<Sprout size={24} />}
              />
              <CategoryCard
                href="/medicine"
                image={Fabio}
                title="Ozuqalar"
                icon={<Beaker size={24} />}
              />
              <CategoryCard
                href="/medicine"
                image={Fabio}
                title="Tuzoqlar"
                icon={<Beaker size={24} />}
              />
              <CategoryCard
                href="/medicine"
                image={Fabio}
                title="Jonli bakteriyalar"
                icon={<Beaker size={24} />}
              />
            </div>
          </div>
        </div>

        <div className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mx-auto mb-4 w-fit rounded-full border border-[#FBC719] bg-[#FBC719]/12 px-4 py-2 text-sm font-black text-[#FBC719]">
              Agro yangiliklar
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
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
                  className="group relative overflow-hidden rounded-[30px] border border-white/14 bg-[linear-gradient(145deg,#154c1f_0%,#123d1b_55%,#295f1e_100%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#FBC719]/70 hover:bg-[linear-gradient(145deg,#185723_0%,#15461d_55%,#2f6a21_100%)]"
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
      featured ? "min-h-[360px] sm:min-h-[520px]" : "min-h-[230px] sm:min-h-[248px]"
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
          featured ? "text-2xl sm:text-3xl" : "text-xl"
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
    <div className="mt-4 flex items-center justify-center gap-3 text-center text-3xl font-black text-white sm:mt-6 sm:text-3xl">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/70 bg-white/12 text-white sm:h-11 sm:w-11">
        {icon}
      </span>
      {title}
    </div>
  </a>
);

export default HomePage;
