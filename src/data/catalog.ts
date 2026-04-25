import WatermelonField from "@/assets/images/article-watermelon-field.jpg";
import TomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import TomatoClose from "@/assets/images/article-tomato-close.jpg";
import LaserF1Cucumber from "@/assets/images/laser-f1-cucumber.jpg";
import ZumraF1Melon from "@/assets/images/zumra-f1-melon.jpg";
import SeedsMix from "@/assets/images/blob.jpeg";
import NutriLeaf from "@/assets/images/nutri-leaf.png";
import ProtonV367 from "@/assets/images/proton-v367.jpg";
import ProtonBeforeAfter from "@/assets/images/proton-before-after.jpg";
import ProtonEffect from "@/assets/images/proton-effect.jpg";
import FabioInfoOne from "@/assets/images/fabio-info-1.png";
import FabioInfoTwo from "@/assets/images/fabio-info-2.png";
import RadikaBase from "@/assets/images/radika-base.png";
import VitalPlusCalcium from "@/assets/images/vital-plus-calcium.png";
import HomeBacteria from "@/assets/images/home-bacteria.jpg";
import HomeTraps from "@/assets/images/home-traps.jpg";
import TrapBoard from "@/assets/images/trap-board.jpg";
import ZExtra from "@/assets/images/z-extra.png";
import MedicineSeven from "@/assets/images/medicine-7.jpg";

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
  mediaSections?: {
    title: string;
    image: string;
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
    name: "Calcium nitrate + Amino acid",
    image: VitalPlusCalcium,
    summary:
      "Yuqori sifatli suyuq o'g'it, o'simliklarda kalsiy tanqisligini bartaraf etish va hosil sifatini yaxshilash uchun qo'llaniladi.",
    description:
      "Umumiy ma'lumotlar: DATIS RICH FERT Kalsiy nitrat - bu yuqori sifatli suyuq o'g'itlar bo'lib, o'simliklarda kalsiy tanqisligini rostlash uchun ishlatiladi. Kalsiy nitrat tarkibidagi azot moddasi esa o'simliklar uchun butkul o'zlashtiriluvchan bo'lib, darhol va kutilgan o'sish reaksiyasini ta'minlaydi. Kalsiy o'simliklar kasalliklarini, xususan olmaning achchiq dog'i, pomidor va garmdori gullari chirishi, karamning kovak o'zagi hamda salat uchlari kuyishini kamaytiradi. Kalsiy o'simliklarning barcha to'qimalari rivojlanishi uchun muhim oziq modda hisoblanadi, uning adekvat ta'minlanishi va iste'mol qilinishi esa barcha bog'dorchilik ekinlarining yanada uzoq muddat saqlanishini ta'minlaydi. Kalsiy hujayra devorchalarida saqlanib, u yerda hujayralar yaxlitligini va o'simlikning umumiy mustahkamligini ta'minlaydi. DATIS RICH FERT Kalsiy nitratli o'g'itlar kalsiydan tashqari o'simlikning o'sish uchun moslashishi, qattiqlik, saqlanuvchanlik, po'stning rangi va ko'rinishini yaxshilash uchun barcha meva-sabzavot mahsulotlariga qo'llanilishi mumkin.",
    highlights: [
      "Tarkibida kalsiy saqlab, o'simlikning son va sifat unumdorligini oshiradi",
      "O'simlikni zarur miqdorda kalsiy bilan ta'minlab, kalsiy tanqisligi belgilarining oldini oladi",
      "Yuqori sifatli suyuq kalsiy bo'lib, o'simliklar uchun oson o'zlashtiriladigan hisoblanadi",
      "Barcha to'qimalar rivojlanishi uchun muhim oziq modda hisoblanadi",
      "Hujayra devorchalarida saqlanib, hujayralar yaxlitligi va ko'payishini ta'minlaydi",
      "Bozuka, meva qattiqligi, saqlanuvchanligi, rangi va ko'rinishini yaxshilaydi",
      "Tarkibi o'simlikka mansub aminokislotalardan iborat",
    ],
    specs: [
      { label: "Nitragen (N)", value: "7.0%" },
      { label: "Soluble Calcium (Ca)", value: "14.0%" },
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
    name: "HUMIX-70",
    image: NutriLeaf,
    summary:
      "Organik moddalarga boy mahsulot, oziqlantiruvchi moddalar nuqtai nazaridan oriq yer uchun a'lo ozuqa qo'shimchasi.",
    description:
      "HUMIX-70 - organik moddalarga boy mahsulot bo'lib, oziqlantiruvchi moddalar nuqtai nazaridan oriq yer uchun a'lo ozuqa qo'shimchasi hisoblanadi. HUMIX-70 o'simliklarda ko'plab jarayonlarni amalga oshirib, mineral moddalarni katta miqdorda o'zlashtirishga va mahsulot sifatini oshirishga yordam beradi. Mineral moddalar odatda o'simlik tomonidan o'zlashtirilmaydi, sulfatlar o'simlikka faqat cheklangan miqdorda so'riladi. Gumin kislotasi yerda o'zlashtirilmaydigan moddalarni eritadi, ularga singuvchanlik imkoniyatini beradi va zarur vaqtda ularni o'simlik ildiziga yetkazib beradi. Ushbu organik o'g'it yerning organik tarkibini ta'minlash bilan bir vaqtda o'zlashtirilgan, yerga barkamollashtirilgan elementlar singishiga yordam beradi.",
    highlights: [
      "Yer tarkibini yaxshilaydi",
      "Ildizlarning yaxshi o'sishiga yordam beradi",
      "Erda ko'proq namlikni saqlab qoladi",
      "Erda foydali bakteriyalar tez rivojlanishiga yordam beradi",
      "Makro- va mikroelementlarni yuvilish va ozod etilishga yordam berib, mineral o'g'itlarga ehtiyoj sezilarli kamaytiradi",
      "Sho'rlikka qarshilikni oshiradi",
      "Degidratatsiya qarshilikni oshiradi",
      "Sovuqqa qarshilikni oshiradi",
      "O'g'itlar va erdagi qo'shimcha elementlarning zaharlilik darajasini kamaytiradi",
      "Kuchli ta'sir ko'rsatib, erda bir necha yilgacha saqlanib qoladi",
      "O'simlikning turli kasalliklarga chidamliligini oshiradi va toksinlarni o'zlashtirish ehtiyojini sezilarli kamaytiradi",
      "Urug'larning unib chiqish tezligini oshiradi",
      "Bu mahsulotning pH oksidli erda ishqorlar miqdorini kamaytirishga yordam beradi",
      "Tabiat uchun mos, o'simlik yoki atrof-muhit uchun xavfli emas",
      "Er muvozanatini saqlab qolishga yordam beradi",
      "Mahsulot sifatini yaxshilashga yordam beradi",
      "Gumin kislotasi eng yaxshi tabiiy xelatlar hisoblanadi",
    ],
    specs: [
      { label: "K20", value: "6.0%" },
      { label: "Humic Acid", value: "3.0%" },
      { label: "Fulvik Acid", value: "12.0%" },
      { label: "Organic Carbon", value: "14.0%" },
      { label: "Organic Matter", value: "10.0%" },
    ],
  },
  {
    slug: "z-extra",
    type: "medicine",
    name: "NEW DATIS ALL",
    image: ZExtra,
    summary:
      "Organik o'g'itlarga o'xshab, organik kislotalarning yuqori foizini saqlaydigan boy o'g'it.",
    description:
      "Hayvonotga mansub organik o'g'itlarga o'xshab, organik kislotalarning yuqori foizini saqlaydigan boy o'g'it - NEW DATIS ALL yerning ko'pgina kimyoviy va fizik xususiyatlariga foydali ta'sir ko'rsatadi. Bu o'g'it turli sug'orish usullari yordamida barcha qishloq xo'jalik mahsulotlari uchun ishlatilib, hayvonotga mansub organik o'g'itlarga ehtiyojni kamaytirishi mumkin. O'g'it tarkibidan fosfor, kaliy, temir, rux, marganets kabi makro- va mikroelementlar hamda foliy kislotasi o'rin olgan.",
    highlights: [
      "Ildizlarning harakatlanuvchi va elementlarning erga singuvchanligini oshiradi",
      "Erdagi foydali mikroorganizmlarni faollashtiradi",
      "Erdagi elementlar o'zlashtiriluvchanligini oshiradi",
      "Erdagi kislota miqdorini rostlaydi - pH",
      "Bir vaqtda ishlatilgan holatlarda, kimyoviy o'g'itlarning singuvchanligini oshiradi",
      "Fotosintezni kuchaytiradi",
      "O'simlikning ko'proq gullashga va sovuqqa chidamkorligini oshiradi, buning natijasida o'simlikning stressga qarshiligini mustahkamlaydi",
      "O'simliklarning Briks darajasini oshiradi va kech so'lishga sababchi bo'ladi",
    ],
    specs: [
      { label: "P205", value: "4.0%" },
      { label: "K20", value: "5.0%" },
      { label: "Fe", value: "0.1%" },
      { label: "Mn", value: "0.05%" },
      { label: "Zn", value: "0.05%" },
      { label: "Humic Acid", value: "TRACE" },
      { label: "Fulvik Acid", value: "4.0%" },
    ],
  },
  {
    slug: "agro-balance",
    type: "medicine",
    name: "AMINO 33-plus Cal Mag",
    image: SeedsMix,
    summary:
      "O'simlikka mansub aminokislotalardan iborat, stressga chidamlilik va mahsulot sifatini oshirishga yordam beradi.",
    description:
      "Ushbu o'g'it o'simlikka mansub aminokislotalardan iborat bo'lib, o'simlikni zarur miqdorda aminokislotalar bilan ta'minlaydi. O'g'it tarkibidagi azotning tegishli foizi o'simlikning vegetativ o'sishini tezlashuviga ta'sir ko'rsatadi, dengiz suv o'tlari esa o'simlikning stresslarga chidamkorligini oshirib, mahsulot sifatini yaxshilaydi.",
    highlights: [
      "Barcha o'simlik va daraxtlar, ayniqsa issiqxona o'simliklari uchun qo'l keladi",
      "Sug'orish tizimida foydalanish uchun qulay",
      "Mahsulotlar o'sishi va etilishini tezlashtiradi",
      "Tarkibida magniy saqlab, o'simlikning o'sish davri oxirida xlorofill va oziq moddalar samaradorligini oshiradi",
      "Tarkibida kalsiy saqlab, o'simlikning son va sifat unumdorligini oshiradi",
      "O'simlikni zarur miqdorda kalsiy bilan ta'minlash orqali kalsiy tanqisligi belgilarining oldini oladi",
      "Barqaror mavsumlarda va o'simlik o'sishining barcha bosqichlarida foydalanish mumkin",
      "Tashish va omborlarga joylash vaqtida mahsulotning jismoniy stresslarga chidamkorligini oshiradi",
    ],
    specs: [
      { label: "Soluble Calcium (CaO)", value: "5.0%" },
      { label: "Soluble Magnesium (MgO)", value: "1.0%" },
      { label: "Seaweed Extract", value: "2.0%" },
      { label: "Amino Acid", value: "33.0%" },
    ],
  },
  {
    slug: "proton-v367",
    type: "medicine",
    name: "Proton V-367",
    image: ProtonV367,
    summary:
      "Viruslar va viroidlarga qarshi yuqori barqarorlikni ta'minlovchi maxsus preparat.",
    description:
      "Proton V-367 - oвЂsimliklarni viruslar va viroidlarga qarshi yuqori barqarorlik bilan himoya qilishga yordam beruvchi maxsus preparat. U virusning yuqishida faol rol oвЂynaydigan proteaza fermentini ingibirlaydi va past chidamlilik davrlarida yuzaga keladigan immunitet susayishini kamaytirishga yordam beradi. Organik tarkibga ega, eksportda qoldiq bilan bogвЂliq muammolar keltirib chiqarmaydi, asalarilar uchun zararsiz va kutish vaqti 0 kun. Preparat pH ni pasaytiruvchi va barqarorlashtiruvchi xususiyatlarga ham ega.",
    highlights: [
      "Virusning yuqishida faol rol oвЂynaydigan proteaza fermentini ingibirlaydi",
      "Organik tarkibga ega",
      "Eksport qilishda qoldiqlar bilan bogвЂliq muammolar yuzaga kelmaydi",
      "Asalarilar uchun zararsiz, kutish vaqti 0 kun",
      "Qoldiqlar bilan bogвЂliq muammolar keltirib chiqarmaydi",
      "pH ni pasaytiruvchi va barqarorlashtiruvchi xususiyatlarga ega",
      "OвЂsimliklarning pH va ishqoriy muvozanatini boshqaradi",
      "OвЂsimliklarning fiziologik rivojlanishiga yordam beradi",
      "OвЂsimliklarga viruslar va viroidlarga chidamlilik beradi",
    ],
    specs: [
      { label: "Yo'nalish", value: "Virus va viroid himoyasi" },
      { label: "Tarkibi", value: "Organik" },
      { label: "Kutish vaqti", value: "0 kun" },
      { label: "pH", value: "Pasaytiradi va barqarorlashtiradi" },
    ],
    mediaSections: [
      {
        title: "Do / Posle",
        image: ProtonBeforeAfter,
      },
      {
        title: "Effekt Proton V-367",
        image: ProtonEffect,
      },
    ],
  },
  {
    slug: "medicine-6",
    type: "medicine",
    name: "FABIO",
    image: HomeBacteria,
    summary:
      "100% tabiiy va organik mikrobli o'g'it bo'lib, tarkibida foydali bakteriyalar va qishloq xo'jaligida ishlatiladigan qo'ziqorinlar mavjud.",
    description:
      "FABIO mikrobli o'g'iti 100% tabiiy va organik mahsulot bo'lib, tarkibida foydali bakteriyalar va qishloq xo'jaligida ishlatiladigan qo'ziqorinlar mavjud.",
    highlights: [
      "100% tabiiy va organik mahsulot",
      "Tarkibida foydali bakteriyalar mavjud",
      "Qishloq xo'jaligida ishlatiladigan qo'ziqorinlar mavjud",
    ],
    specs: [
      { label: "Mahsulot turi", value: "Mikrobli o'g'it" },
      { label: "Tarkibi", value: "Tabiiy va organik" },
      { label: "Asosi", value: "Foydali bakteriyalar" },
      { label: "Qo'shimcha", value: "Qishloq xo'jaligi qo'ziqorinlari" },
    ],
    mediaSections: [
      {
        title: "FABIO qanday ishlaydi",
        image: FabioInfoOne,
      },
      {
        title: "FABIO mikroorganizmlari",
        image: FabioInfoTwo,
      },
    ],
  },
  {
    slug: "medicine-7",
    type: "medicine",
    name: "Datis K40",
    image: MedicineSeven,
    summary:
      "Datis Rich Fertilizer K40 mahsulot rangini, qand miqdorini, yangiligini va tovarbopligini oshirishga yordam beradi.",
    description:
      "РРЅС„РѕСЂРјР°С†РёСЏ Рѕ РїСЂРѕРґСѓРєС‚Рµ: РЈРґРѕР±СЂРµРЅРёРµ Datis Rich Fertilizer K40 РїСЂРёРґР°РµС‚ РїСЂРѕРґСѓРєС‚Р°Рј РіСЂСѓР±СѓСЋ РѕРєСЂР°СЃРєСѓ, РїРѕРІС‹С€Р°РµС‚ СЃРѕРґРµСЂР¶Р°РЅРёРµ СЃР°С…Р°СЂР°, СЃРІРµР¶РµСЃС‚СЊ Рё С‚РѕРІР°СЂРЅРѕСЃС‚СЊ. РќРµРґРѕСЃС‚Р°С‚РѕРє РєР°Р»РёСЏ РґР»СЏ СЂР°СЃС‚РµРЅРёР№ РѕР±С‹С‡РЅРѕ РЅР°Р±Р»СЋРґР°РµС‚СЃСЏ РЅР° С‚СЏР¶РµР»С‹С… Рё Р»РµРіРєРёС…, Р° С‚Р°РєР¶Рµ РЅР° СЃСѓС…РёС… РїРѕС‡РІР°С…. Рљ РїСЂРµРёРјСѓС‰РµСЃС‚РІР°Рј РєР°Р»РёСЏ РѕС‚РЅРѕСЃСЏС‚СЃСЏ СѓРІРµР»РёС‡РµРЅРёРµ РїСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚Рё Р¶РёР·РЅРё Р»РёСЃС‚СЊРµРІ, СЃРЅРёР¶РµРЅРёРµ С‚СЂР°РЅСЃРїРёСЂР°С†РёРё СЂР°СЃС‚РµРЅРёР№, РїРѕРІС‹С€РµРЅРёРµ СѓСЃС‚РѕР№С‡РёРІРѕСЃС‚Рё Рє РІРѕРґРЅРѕРјСѓ СЃС‚СЂРµСЃСЃСѓ Рё Р·Р°СЃРѕР»РµРЅРёСЋ, Р° С‚Р°РєР¶Рµ РѕР±Р»РµРіС‡РµРЅРёРµ СѓСЃРІРѕРµРЅРёСЏ С‚Р°РєРёС… СЌР»РµРјРµРЅС‚РѕРІ, РєР°Рє Р¶РµР»РµР·Рѕ, С„РѕСЃС„РѕСЂ Рё РјРёРєСЂРѕСЌР»РµРјРµРЅС‚С‹. РљР°Р»РёР№ СЌС„С„РµРєС‚РёРІРЅРѕ РІР»РёСЏРµС‚ РЅР° РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРµРЅРЅСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ С„РµСЂРјРµРЅС‚РѕРІ, РєРѕРЅС‚СЂРѕР»РёСЂСѓСЏ РёС… Р°РєС‚РёРІРЅРѕСЃС‚СЊ, Рё СЃРїРѕСЃРѕР±СЃС‚РІСѓРµС‚ РїРѕРІС‹С€РµРЅРёСЋ С„РµСЂРјРµРЅС‚Р°С‚РёРІРЅРѕР№ Р°РєС‚РёРІРЅРѕСЃС‚Рё, СЂРµРіСѓР»РёСЂСѓСЏ РєРёСЃР»РѕС‚РЅРѕСЃС‚СЊ С†РёС‚РѕРїР»Р°Р·РјС‹. Р’ СЃРѕСЃС‚Р°РІ СЌС‚РѕРіРѕ СѓРґРѕР±СЂРµРЅРёСЏ РІ РєР°С‡РµСЃС‚РІРµ С…РµР»Р°С‚РёСЂСѓСЋС‰РёС… Р°РіРµРЅС‚РѕРІ РІС…РѕРґСЏС‚ Р°РјРёРЅРѕРєРёСЃР»РѕС‚С‹, РєРѕС‚РѕСЂС‹Рµ СЃС‚Р°Р±РёР»РёР·РёСЂСѓСЋС‚ РѕР±СЂР°Р·РѕРІР°РЅРёРµ РєРѕРјРїР»РµРєСЃРѕРІ СЃ РєР°Р»РёРµРј.",
    highlights: [
      "Meva shaklini yaxshilashga yordam beradi",
      "Meva rangini kuchaytiradi",
      "Qand miqdorini oshirishga xizmat qiladi",
      "Mahsulot sifatini yaxshilashga yordam beradi",
    ],
    specs: [
      { label: "K40", value: "40%" },
      { label: "Yo'nalish", value: "Meva sifati" },
      { label: "Mahsulot turi", value: "Plant stimulant" },
    ],
  },
  {
    slug: "trap-roll",
    type: "medicine",
    name: "Roll Trap",
    image: HomeTraps,
    summary:
      "Issiqxona, dala va omborlarda uchuvchi hasharotlarni samarali tutish uchun mo'ljallangan yopishqoq lenta.",
    description:
      "Roll Trap вЂ” bu issiqxona, dala va omborlarda ishlatiladigan yopishqoq lenta boвЂlib, uchuvchi hasharotlarni (masalan, oqkanot, trips, pashsha) samarali tutish uchun moвЂljallangan.",
    highlights: [
      "Oqkanot, trips va mayda uchuvchi zararkunandalarni samarali tutadi",
      "Kimyoviy vositasiz ishlaydi",
      "Ekologik xavfsiz",
      "Oson oвЂrnatiladi",
      "Uzoq muddat xizmat qiladi",
      "Zararkunandalarni erta aniqlash imkonini beradi",
    ],
    specs: [
      { label: "O'lchami", value: "30 sm x 100 metr" },
      { label: "Ranglari", value: "Oq, Ko'k, Sariq" },
      { label: "Material", value: "Kuchli yopishqoq sirt" },
      { label: "Qo'llanilishi", value: "Issiqxona, bog', dala, ombor" },
    ],
  },
  {
    slug: "trap-board",
    type: "medicine",
    name: "Yopishqoq tuzoq plastina",
    image: TrapBoard,
    summary:
      "Issiqxona, bog', dala va omborlarda uchuvchi zararkunandalarni aniqlash va tutish uchun ishlatiladigan yopishqoq plastina.",
    description:
      "Ushbu yopishqoq tuzoq plastina issiqxona, bog', dala va omborlarda uchuvchi zararkunandalarni aniqlash va tutish uchun ishlatiladi. Sariq rang hasharotlarni o'ziga jalb qiladi, yopishqoq qatlami esa ularni ushlab qoladi.",
    highlights: [
      "Oqkanot, trips, pashsha, mayda chivinlar va boshqa uchuvchi zararkunandalar uchun samarali",
      "Kimyoviy vositasiz ishlaydi",
      "O'simliklar uchun xavfsiz",
      "Oson osib qo'yiladi",
      "Namlik va quyosh ta'sirida uzoq muddat xizmat qiladi",
      "Zararkunandalarni erta aniqlashga yordam beradi",
    ],
    specs: [
      { label: "O'lchami", value: "30cm x 30cm" },
      { label: "Rangi", value: "Sariq" },
      { label: "Material", value: "Karton/plastina asos, yopishqoq qoplama" },
      { label: "Qo'llanilishi", value: "Issiqxona, bog', dala, omborxona" },
      { label: "Mahsulot turi", value: "Hasharot tutuvchi yopishqoq tuzoq" },
      { label: "Qadoqlash", value: "1 dona / paket" },
    ],
  },
];

export const catalogProducts = [...seedProducts, ...medicineProducts];

export const getCatalogProduct = (slug: string | undefined) =>
  catalogProducts.find((product) => product.slug === slug);
