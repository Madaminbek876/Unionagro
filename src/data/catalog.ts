import WatermelonField from "@/assets/images/article-watermelon-field.jpg";
import TomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import TomatoClose from "@/assets/images/article-tomato-close.jpg";
import LaserF1Cucumber from "@/assets/images/laser-f1-cucumber.jpg";
import ZumraF1Melon from "@/assets/images/zumra-f1-melon.jpg";
import Product from "@/assets/images/product.png";
import Seda from "@/assets/images/seda.png";
import SeedsMix from "@/assets/images/blob.jpeg";

export type CatalogType = "seed" | "medicine";

export type CatalogProduct = {
  slug: string;
  type: CatalogType;
  name: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
};

export const seedProducts: CatalogProduct[] = [
  {
    slug: "labela-f1",
    type: "seed",
    name: "Labela F1",
    image: WatermelonField,
    summary:
      "Erta pishar tarvuz navi. Yirik meva, kuchli ildiz va yaxshi tashishga chidamlilik bilan ajralib turadi.",
    description:
      "Labela F1 ochiq maydon uchun tanlanadigan barqaror tarvuz urug'i. Mevasi bir xil shakllanadi, po'sti mustahkam va uzoq masofaga tashishga mos.",
    highlights: [
      "Yirik va bozorbop meva",
      "Kuchli ildiz tizimi",
      "Issiq mavsumda barqaror rivojlanish",
    ],
    specs: [
      { label: "Yo'nalish", value: "Tarvuz" },
      { label: "Pishish turi", value: "Erta" },
      { label: "Ekish joyi", value: "Ochiq maydon" },
    ],
  },
  {
    slug: "cherry-tt-10-f1",
    type: "seed",
    name: "Cherry TT-10 F1",
    image: TomatoCherry,
    summary:
      "Issiqxona uchun serhosil cherry pomidor. Bir tekis shoda, yorqin rang va bozorbop ko'rinish beradi.",
    description:
      "Cherry TT-10 F1 issiqxona sharoitida barqaror hosil berishga mos. Shodalari tartibli, mevalari mayda, yorqin va savdo uchun chiroyli ko'rinadi.",
    highlights: [
      "Bir tekis shoda hosil qiladi",
      "Yorqin rang va zich meva",
      "Doimiy yig'im uchun qulay",
    ],
    specs: [
      { label: "Yo'nalish", value: "Cherry pomidor" },
      { label: "Pishish turi", value: "O'rtacha erta" },
      { label: "Ekish joyi", value: "Issiqxona" },
    ],
  },
  {
    slug: "aisha-f1",
    type: "seed",
    name: "Aisha F1",
    image: TomatoClose,
    summary:
      "Pomidor navi kuchli o'sadi, kasallikka chidamliligi yaxshi va uzoq hosil davriga mos.",
    description:
      "Aisha F1 kuchli vegetativ o'sishi va meva bog'lash barqarorligi bilan ajralib turadi. Issiqxona hamda parvarishi kuchli maydonlarda uzoq hosil olish uchun mos.",
    highlights: [
      "Kuchli o'sish energiyasi",
      "Uzoq hosil davriga mos",
      "Bozorbop meva shakli",
    ],
    specs: [
      { label: "Yo'nalish", value: "Pomidor" },
      { label: "Pishish turi", value: "O'rtacha" },
      { label: "Ekish joyi", value: "Issiqxona" },
    ],
  },
  {
    slug: "laser-f1",
    type: "seed",
    name: "Laser F1",
    image: LaserF1Cucumber,
    summary:
      "Bodring urug'i issiqxona va ochiq maydon uchun mos. Mevasi silliq, hosildorligi barqaror.",
    description:
      "Laser F1 bodring urug'i bir tekis meva shakli va yaxshi hosildorligi uchun tanlanadi. Parvarish to'g'ri bo'lsa, mavsum davomida sifatli mahsulot beradi.",
    highlights: [
      "Silliq va bir xil meva",
      "Hosildorligi barqaror",
      "Issiqxona va ochiq maydonga mos",
    ],
    specs: [
      { label: "Yo'nalish", value: "Bodring" },
      { label: "Pishish turi", value: "Erta" },
      { label: "Ekish joyi", value: "Universal" },
    ],
  },
  {
    slug: "zumra-f1",
    type: "seed",
    name: "Zumra F1",
    image: ZumraF1Melon,
    summary:
      "Qovun urug'i shirin ta'm, zich et va bir xil meva shakli uchun tanlanadi.",
    description:
      "Zumra F1 qovun urug'i shirin ta'mi, zich eti va ko'rkam meva shakli bilan ajralib turadi. Bozor uchun chiroyli va mazali hosil olishga yordam beradi.",
    highlights: [
      "Shirin ta'm va xushbo'y hid",
      "Zich etli meva",
      "Bir xil meva shakli",
    ],
    specs: [
      { label: "Yo'nalish", value: "Qovun" },
      { label: "Pishish turi", value: "O'rtacha" },
      { label: "Ekish joyi", value: "Ochiq maydon" },
    ],
  },
];

export const medicineProducts: CatalogProduct[] = [
  {
    slug: "bio-magic",
    type: "medicine",
    name: "Bio Magic",
    image: Product,
    summary:
      "O'simlik o'sishini qo'llab-quvvatlaydigan kompleks oziqlantirish vositasi.",
    description:
      "Bio Magic vegetatsiya davrida o'simlikning umumiy rivojlanishini qo'llab-quvvatlash uchun ishlatiladi. Barg, poya va ildiz faoliyatini balansda ushlab turishga yordam beradi.",
    highlights: [
      "O'sishni faollashtiradi",
      "Stressdan keyingi tiklanishni qo'llab-quvvatlaydi",
      "Vegetatsiya davrida qo'llashga mos",
    ],
    specs: [
      { label: "Yo'nalish", value: "Oziqlantirish" },
      { label: "Qo'llash", value: "Vegetatsiya" },
      { label: "Mahsulot turi", value: "Agro vosita" },
    ],
  },
  {
    slug: "root-max",
    type: "medicine",
    name: "Root Max",
    image: SeedsMix,
    summary:
      "Ildiz rivojlanishini kuchaytiradi va ko'chatning moslashish davrini yengillashtiradi.",
    description:
      "Root Max ko'chat ildizining faol rivojlanishini qo'llab-quvvatlash uchun tavsiya qilinadi. Ko'chirishdan keyingi moslashish jarayonini yengillashtiradi.",
    highlights: [
      "Ildiz tizimini qo'llab-quvvatlaydi",
      "Ko'chat moslashuviga yordam beradi",
      "Erta rivojlanish bosqichiga mos",
    ],
    specs: [
      { label: "Yo'nalish", value: "Ildiz rivoji" },
      { label: "Qo'llash", value: "Ko'chat davri" },
      { label: "Mahsulot turi", value: "Agro vosita" },
    ],
  },
  {
    slug: "green-shield",
    type: "medicine",
    name: "Green Shield",
    image: Seda,
    summary:
      "Barg va poya himoyasi uchun profilaktik agro yechim sifatida tavsiya etiladi.",
    description:
      "Green Shield barg va poyani sog'lom saqlashga qaratilgan profilaktik yechim. Mavsum davomida o'simlik tashqi omillarga bardoshli bo'lishiga yordam beradi.",
    highlights: [
      "Barg yuzasini qo'llab-quvvatlaydi",
      "Profilaktik parvarishga mos",
      "Sog'lom yashil massa uchun",
    ],
    specs: [
      { label: "Yo'nalish", value: "Himoya" },
      { label: "Qo'llash", value: "Barg orqali" },
      { label: "Mahsulot turi", value: "Agro vosita" },
    ],
  },
  {
    slug: "fito-energy",
    type: "medicine",
    name: "Fito Energy",
    image: Product,
    summary:
      "Vegetatsiya vaqtida o'simlikka quvvat berib, hosil sifatini yaxshilashga yordam beradi.",
    description:
      "Fito Energy o'simlik faol o'sayotgan paytda qo'shimcha quvvat berish uchun ishlatiladi. Hosil sifati va umumiy rivojlanishni balansda ushlab turadi.",
    highlights: [
      "Vegetatsiyada energiya beradi",
      "Hosil sifatini qo'llab-quvvatlaydi",
      "O'simlik rangini yaxshilaydi",
    ],
    specs: [
      { label: "Yo'nalish", value: "Energiya" },
      { label: "Qo'llash", value: "Vegetatsiya" },
      { label: "Mahsulot turi", value: "Agro vosita" },
    ],
  },
  {
    slug: "agro-balance",
    type: "medicine",
    name: "Agro Balance",
    image: SeedsMix,
    summary:
      "Stressdan keyingi tiklanish va oziqa balansini ushlab turish uchun ishlatiladi.",
    description:
      "Agro Balance issiq, sovuq, ko'chirish yoki oziqa yetishmovchiligi kabi holatlardan keyin o'simlikni tiklashga yordam beradigan yechim sifatida ishlatiladi.",
    highlights: [
      "Stressdan keyingi tiklanish",
      "Oziqa balansini saqlash",
      "Mavsum davomida qo'llashga qulay",
    ],
    specs: [
      { label: "Yo'nalish", value: "Balans" },
      { label: "Qo'llash", value: "Stressdan keyin" },
      { label: "Mahsulot turi", value: "Agro vosita" },
    ],
  },
];

export const catalogProducts = [...seedProducts, ...medicineProducts];

export const getCatalogProduct = (slug: string | undefined) =>
  catalogProducts.find((product) => product.slug === slug);
