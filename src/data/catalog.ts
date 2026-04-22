import WatermelonField from "@/assets/images/article-watermelon-field.jpg";
import TomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import TomatoClose from "@/assets/images/article-tomato-close.jpg";
import LaserF1Cucumber from "@/assets/images/laser-f1-cucumber.jpg";
import ZumraF1Melon from "@/assets/images/zumra-f1-melon.jpg";
import SeedsMix from "@/assets/images/blob.jpeg";
import NutriLeaf from "@/assets/images/nutri-leaf.png";
import RadikaBase from "@/assets/images/radika-base.png";
import VitalPlusCalcium from "@/assets/images/vital-plus-calcium.png";
import ZExtra from "@/assets/images/z-extra.png";

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
    slug: "vital-plus-12-calcium",
    type: "medicine",
    name: "VITAL plus 12% CALCIUM",
    image: VitalPlusCalcium,
    summary:
      "Tarkibida katta miqdorda kalsiy mavjud bo'lgan, sitrat va karboksil bilan birikkan suyuq o'g'it.",
    description:
      "VITAL plus 12% CALCIUM - ushbu turdagi o'g'it tarkibida katta miqdorda kalsiy mavjud bo'lib, sitrat va karboksil bilan birikkan etilendiamintetrasirka kislotasi ko'rinishiga ega. U o'simliklarda kalsiy tanqisligining oldini olib, yig'im-terim paytida mevalarning lat yeyishi, yorilishi va to'kilishiga qarshi chidamliligini oshiradi, hosilning saqlanish muddatini uzaytiradi. O'g'it tarkibida o'simliklar uchun zarur katta miqdordagi turli makro- va mikroelementlar mavjud.",
    highlights: [
      "Kalsiy tanqisligining oldini oladi",
      "Meva yorilishi va to'kilishini kamaytiradi",
      "Hosil saqlanish muddatini uzaytiradi",
    ],
    specs: [
      { label: "Total nitrogen (N)", value: "4.0%" },
      { label: "Water soluble potassium (K20)", value: "4.0%" },
      { label: "Soluble Calcium (CaO)", value: "2.5%" },
      { label: "Soluble Magnesium (Mg)", value: "0.6%" },
      { label: "Boron (B)", value: "0.1%" },
      { label: "Soluble Iron (Fe)", value: "0.1%" },
      { label: "Soluble manganese (Mn)", value: "0.05%" },
      { label: "Zinc (Zn)", value: "0.05%" },
      { label: "MS solution (Cu)", value: "0.05%" },
      { label: "Folic Acid", value: "1.0%" },
      { label: "Free Amino Acid", value: "4.0%" },
      { label: "Seaweed extract", value: "2.0%" },
    ],
  },
  {
    slug: "radika-base",
    type: "medicine",
    name: "RADIKA BASE",
    image: RadikaBase,
    summary:
      "O'simlik ildizlarini kattalashtirish va rivojlantirish, er va suvda pH miqdorini kamaytirish uchun samarali o'g'it.",
    description:
      "RADIKA BASE - ushbu turdagi o'g'it o'simliklar ildizlarini kattalashtirish va rivojlantirish, er va suvda pH miqdorini kamaytirish borasida samarali. Barcha turdagi o'simliklar uchun mos. Tarkibidagi maxsus kislotalar, mikroelementlar, yuqori miqdordagi hol kislotalari ildiz gormonlari va ildiz tizimining o'zini kattalashtirib, tez rivojlantiradi. Maxsus formulasi tufayli noyob o'g'itlar sinfidan joy olgan. Tarkibida fosfor, turli xelatlangan makro- va mikroelementlar, gumin va foliy kislotalari mavjud.",
    highlights: [
      "Ildiz tizimini tez rivojlantiradi",
      "Er va suvda pH miqdorini kamaytirishga yordam beradi",
      "Fosfor, gumin va foliy kislotalariga boy",
    ],
    specs: [
      { label: "Total Nitrogen (N)", value: "5.0%" },
      { label: "Available Phosphorous (P205)", value: "12.0%" },
      { label: "Soluble Potassium (K20)", value: "3.0%" },
      { label: "Iron (Fe)", value: "0.7%" },
      { label: "Manganese (Mn)", value: "0.3%" },
      { label: "Zinc (Zn)", value: "0.5%" },
      { label: "Boron (B)", value: "0.08%" },
      { label: "Copper (Cu)", value: "0.06%" },
      { label: "Humic Acid", value: "TRACE" },
      { label: "Fulvic Acid", value: "4.0%" },
      { label: "Amino Acid", value: "4.0%" },
      { label: "Seaweed Etract", value: "2.0%" },
    ],
  },
  {
    slug: "nutri-leaf",
    type: "medicine",
    name: "NUTRI-LEAF",
    image: NutriLeaf,
    summary:
      "Makro- va mikroelementlar, organik moddalar va dengiz o'tlari ekstraktlariga ega barg orqali oziqlantirish o'g'iti.",
    description:
      "NUTRI-LEAF - ushbu turdagi o'g'it tarkibida makro- va mikroelementlar, organik moddalar va dengiz o'tlari ekstraktlari mavjud. U o'simliklarni barcha zarur moddalar bilan ta'minlaydi. O'g'it tarkibidan o'rin olgan sarimsoq va achchiq qalampir ekstrakti esa hasharotlarning nafas tizimiga ta'sir etib, ularning kamayishiga olib keladi.",
    highlights: [
      "Barg orqali oziqlantirishga mos",
      "Dengiz o'tlari ekstrakti mavjud",
      "Sarimsoq va achchiq qalampir ekstrakti bilan boyitilgan",
    ],
    specs: [
      { label: "Total nitrogen (N)", value: "4.0%" },
      { label: "Applicable phosphorus (P205)", value: "4.0%" },
      { label: "Water soluble potassium (K20)", value: "6.0%" },
      { label: "Boron (B)", value: "0.02%" },
      { label: "Soluble Iron (Fe)", value: "0.1%" },
      { label: "Soluble Manganese (Mn)", value: "0.06%" },
      { label: "Zinc (Zn)", value: "0.1%" },
      { label: "Copper (Cu)", value: "0.05%" },
      { label: "Humic Acid", value: "1.0%" },
      { label: "Folic Acid", value: "3.0%" },
      { label: "Seaweed extract", value: "1.0%" },
      { label: "Free Amino acid", value: "4.0%" },
    ],
  },
  {
    slug: "z-extra",
    type: "medicine",
    name: "Z-EXTRA",
    image: ZExtra,
    summary:
      "Xelatlangan rux elementi va amino kislotalar bilan boyitilgan, sabzavot ekinlari va bog'dorchilik uchun mos o'g'it.",
    description:
      "Z-EXTRA - ushbu turdagi o'g'it xelatlangan rux elementi, hol tuzlari kislotasi ko'rinishini o'z ichiga olib, ko'p miqdorda amino- va etilendiamintetrasirka kislotasi hamda sitratlardan tashkil topgan. O'simliklar o'sishi, rivojlanishi, gullashi va ko'payishini muvozanatda saqlaydi. Barcha turdagi sabzavot ekinlari va bog'dorchilik uchun mos.",
    highlights: [
      "Xelatlangan rux elementi mavjud",
      "O'sish va gullashni muvozanatda saqlaydi",
      "Sabzavot va bog'dorchilik uchun mos",
    ],
    specs: [
      { label: "Soluble Zink (Zn)", value: "7.0%" },
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
