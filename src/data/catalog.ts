import WatermelonField from "@/assets/images/article-watermelon-field.jpg";
import TomatoCherry from "@/assets/images/article-tomato-cherry.jpg";
import LabelaF1SingleField from "@/assets/images/labela-f1-single-field.jpg";
import LabelaF1CutOpen from "@/assets/images/labela-f1-cut-open.jpg";
import LabelaF1TwoField from "@/assets/images/labela-f1-two-field.jpg";
import LabelaF1CloseField from "@/assets/images/labela-f1-close-field.jpg";
import CherryTT10HeavyChain from "@/assets/images/cherry-tt10-heavy-chain.jpg";
import CherryTT10RedChain from "@/assets/images/cherry-tt10-red-chain.jpg";
import CherryTT10ColorChain from "@/assets/images/cherry-tt10-color-chain.jpg";
import CherryTT10LongChain from "@/assets/images/cherry-tt10-long-chain.jpg";
import TomatoClose from "@/assets/images/article-tomato-close.jpg";
import AishaF1GreenhouseRow from "@/assets/images/aisha-f1-greenhouse-row.jpg";
import AishaF1HandCluster from "@/assets/images/aisha-f1-hand-cluster.jpg";
import AishaF1GreenCluster from "@/assets/images/aisha-f1-green-cluster.jpg";
import AishaF1HeavyCluster from "@/assets/images/aisha-f1-heavy-cluster.jpg";
import AishaF1RipeCluster from "@/assets/images/aisha-f1-ripe-cluster.jpg";
import LaserF1Cucumber from "@/assets/images/laser-f1-cucumber.jpg";
import LaserF1HarvestBox from "@/assets/images/laser-f1-harvest-box.jpg";
import LaserF1Lineup from "@/assets/images/laser-f1-lineup.jpeg";
import LaserF1Crates from "@/assets/images/laser-f1-crates.jpg";
import LaserF1BagsClose from "@/assets/images/laser-f1-bags-close.jpg";
import LaserF1PackedBags from "@/assets/images/laser-f1-packed-bags.jpg";
import ZumraF1Melon from "@/assets/images/zumra-f1-melon.jpg";
import ZumraF1FieldStack from "@/assets/images/zumra-f1-field-stack.jpg";
import ZumraF1Sliced from "@/assets/images/zumra-f1-sliced.jpg";
import ZumraF1Label from "@/assets/images/zumra-f1-label.jpg";
import ZumraF1YellowStack from "@/assets/images/zumra-f1-yellow-stack.jpeg";
import ZumraF1HarvestField from "@/assets/images/zumra-f1-harvest-field.jpeg";
import Amino33PlusImage from "@/assets/images/amino-33-plus-new.jpg";
import Humix70Image from "@/assets/images/humix-70-new.jpg";
import ProtonV367 from "@/assets/images/proton-v367.jpg";
import ProtonBeforeAfter from "@/assets/images/proton-before-after.jpg";
import ProtonEffect from "@/assets/images/proton-effect.jpg";
import FabioInfoOne from "@/assets/images/fabio-info-1.png";
import FabioInfoTwo from "@/assets/images/fabio-info-2.png";
import RadikaBase from "@/assets/images/radika-base.png";
import RadikaBaseCanisterCity from "@/assets/images/radika-base-canister-city.jpg";
import RadikaBaseGreenhouseBottle from "@/assets/images/radika-base-greenhouse-bottle.jpg";
import RadikaBaseRootsHand from "@/assets/images/radika-base-roots-hand.jpg";
import RadikaBaseRootTray from "@/assets/images/radika-base-root-tray.jpg";
import VitalPlusCalcium from "@/assets/images/vital-plus-calcium-new.jpg";
import VitalPlusCalciumSlideOne from "@/assets/images/home-nutrition-slide-1.jpg";
import VitalPlusCalciumSlideTwo from "@/assets/images/home-nutrition-slide-2.jpg";
import VitalPlusCalciumSlideThree from "@/assets/images/home-nutrition-slide-3.jpg";
import HomeBacteria from "@/assets/images/home-bacteria.jpg";
import BacteriaCalcium40 from "@/assets/images/bacteria-calcium-40.jpg";
import BacteriaCalciumSlideOne from "@/assets/images/bacteria-calcium-slide-1.jpg";
import OceanImage from "@/assets/images/medicine-6.jpg";
import HomeTraps from "@/assets/images/home-traps.jpg";
import TrapBoard from "@/assets/images/trap-board.jpg";
import TrapRollDetailOne from "@/assets/images/trap-roll-detail-1.jpg";
import TrapRollDetailTwo from "@/assets/images/trap-roll-detail-2.jpg";
import RollTrapSlideOne from "@/assets/images/roll-trap-slide-1.jpg";
import RollTrapSlideTwo from "@/assets/images/roll-trap-slide-2.jpg";
import RollTrapSlideThree from "@/assets/images/roll-trap-slide-3.jpg";
import RollTrapSlideFour from "@/assets/images/roll-trap-slide-4.jpg";
import TrapBoardSlideOne from "@/assets/images/trap-board-slide-1.jpg";
import TrapBoardSlideTwo from "@/assets/images/trap-board-slide-2.jpg";
import TrapBoardSlideThree from "@/assets/images/trap-board-slide-3.jpg";
import TrapBoardSlideFour from "@/assets/images/trap-board-slide-4.jpg";
import TrapBoardSlideFive from "@/assets/images/trap-board-slide-5.jpg";
import NewDatisAllImage from "@/assets/images/new-datis-all-new.jpg";
import MedicineSeven from "@/assets/images/medicine-7.jpg";

export type CatalogType = "seed" | "medicine";

export type CatalogProduct = {
  slug: string;
  type: CatalogType;
  name: string;
  image: string;
  images?: string[];
  summary: string;
  description: string;
  highlights: string[];
  diseaseResistance?: {
    title: string;
    items: string[];
  };
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
    images: [
      WatermelonField,
      LabelaF1SingleField,
      LabelaF1CutOpen,
      LabelaF1TwoField,
      LabelaF1CloseField,
    ],
    summary:
      "Ertapishar tarvuz duragayi. Og'irligi 10-13 kg, eti to'q qizil, mazasi juda shirin va qarsildoq.",
    description:
      "Labela F1 super ertapishar tarvuz duragayi bo'lib, ko'chat ekilgandan so'ng 60-65 kunda pishadi. Mevasi 10-13 kg, eti to'q qizil rangda, mazasi juda shirin va qarsildoq. Generativ tipdagi o'simlik, palagi va bargi o'rtacha kattalikda.",
    highlights: [
      "Super ertapishar",
      "Mevasi 10-13 kg",
      "Eti to'q qizil rangda",
      "Mazasi juda shirin va qarsildoq",
      "Palagi va bargi o'rtacha kattalikda",
    ],
    specs: [
      { label: "Yo'nalish", value: "Tarvuz" },
      { label: "Pishish turi", value: "Super ertapishar" },
      { label: "Ekish joyi", value: "Ochiq maydon" },
      { label: "Pishish muddati", value: "60-65 kun" },
      { label: "Meva vazni", value: "10-13 kg" },
      { label: "O'simlik tipi", value: "Generativ" },
    ],
  },
  {
    slug: "cherry-tt-10-f1",
    type: "seed",
    name: "Cherry TT-10 F1",
    image: TomatoCherry,
    images: [
      TomatoCherry,
      CherryTT10HeavyChain,
      CherryTT10RedChain,
      CherryTT10ColorChain,
      CherryTT10LongChain,
    ],
    summary:
      "Ertapishar cherry pomidor duragayi. Mevasi mazali, shakar miqdori yuqori va uzoq masofalarga tashishga yaroqli.",
    description:
      "Cherry TT-10 F1 ertapishar cherry pomidor duragayi. Kuchli poyali, muvozanatli va bo'g'in oralari kalta bo'lgan o'simlik. Mevasi mazali, shakar miqdori yuqori, dumaloq, qattiq, yaltiroq to'q qizil rangda. Shodasi o'rta va katta uzunlikda, mevalar shodada bir tekis bo'lib pishadi. Mevaning shakli va hajmi bir xil, uzoq masofalarga tashishga yaroqli.",
    highlights: [
      "Shodasi o'rta va katta uzunlikda",
      "Mevaning shakli va hajmi bir xil",
      "Uzoq masofalarga tashishga yaroqli",
      "Kasalliklarga yaxshi chidamli",
      "Shakar miqdori yuqori va mazali meva",
    ],
    diseaseResistance: {
      title: "Kasalliklarga yaxshi chidamli",
      items: [
        "V HR: Va:0; Vd:0 / Fol:0,1 / ToMV:0,1,2 / Pf:A,B,C,D,E",
        "V IR: TYLCV / Ma Mi Mj / Ss",
      ],
    },
    specs: [
      { label: "Yo'nalish", value: "Cherry pomidor" },
      { label: "Pishish turi", value: "Ertapishar" },
      { label: "Ekish joyi", value: "Issiqxona" },
    ],
  },
  {
    slug: "aisha-f1",
    type: "seed",
    name: "Aisha F1",
    image: TomatoClose,
    images: [
      TomatoClose,
      AishaF1GreenhouseRow,
      AishaF1HandCluster,
      AishaF1GreenCluster,
      AishaF1HeavyCluster,
      AishaF1RipeCluster,
    ],
    summary:
      "Ertapishar pomidor duragayi. Kuchli poyali, muvozanatli o'simlik bo'lib, mazali va yirik meva beradi.",
    description:
      "Aisha F1 ertapishar pomidor duragayi. Kuchli poyali, muvozanatli va bo'g'in oralari kalta bo'lgan o'simlik. Mevasi mazali, qattiq, yaltiroq to'q qizil rangda. Shodasi o'rta va katta uzunlikda, mevalar shodada bir tekis bo'lib pishadi. Mevaning shakli va hajmi bir xil, uzoq masofalarga tashishga yaroqli.",
    highlights: [
      "Kuchli poyali va muvozanatli o'simlik",
      "Bo'g'in oralari kalta",
      "Mevasi qattiq, yaltiroq to'q qizil rangda",
      "Mevaning shakli va hajmi bir xil",
      "Uzoq masofalarga tashishga yaroqli",
    ],
    diseaseResistance: {
      title: "Kasalliklarga yaxshi chidamli",
      items: [
        "V HR: Va:0; Vd:0 / Fol:0,1 / ToMV:0,1,2 / Pf:A,B,C,D,E",
        "V IR: TYLCV / Ma Mi Mj / Ss, ToBRFV",
      ],
    },
    specs: [
      { label: "Yo'nalish", value: "Pomidor" },
      { label: "Pishish turi", value: "Ertapishar" },
      { label: "Ekish joyi", value: "Issiqxona" },
      { label: "Meva vazni", value: "200-220 gr" },
    ],
  },
  {
    slug: "laser-f1",
    type: "seed",
    name: "Laser F1",
    image: LaserF1Cucumber,
    images: [
      LaserF1Cucumber,
      LaserF1HarvestBox,
      LaserF1Lineup,
      LaserF1Crates,
      LaserF1BagsClose,
      LaserF1PackedBags,
    ],
    summary:
      "Erta bahor, yoz va erta kuz mavsumlari uchun tavsiya qilinadigan bodring duragayi. Mevasi 9-10 sm, ta'mi a'lo va mazali.",
    description:
      "Laser F1 bodring duragayi erta bahor, yoz va erta kuz mavsumlari uchun tavsiya qilinadi. Meva uzunligi 9-10 sm, rangi och yashildan ko'ra yaltiroq, uzoq saqlanuvchan. Meva tugishi a'lo va tez, bo'g'in oralig'i qisqa bo'lib, bir bo'g'inda 3-4 ta meva tugadi. Palagi kuchli o'suvchi va baquvvat, sovuq ob-havo sharoitida ham yaxshi meva tugadi, stressga chidamli.",
    highlights: [
      "Meva uzunligi 9-10 sm",
      "Ta'mi a'lo va mazali",
      "Uzoq saqlanuvchan",
      "Bir bo'g'inda 3-4 ta meva tugadi",
      "Sovuq ob-havoda ham yaxshi meva tugadi",
      "Stressga chidamli",
      "Ildiz tizimi kuchli va katta",
      "Yon novdalari yaxshi rivojlangan",
    ],
    diseaseResistance: {
      title: "Kasalliklarga chidamliligi",
      items: [
        "Yuqori chidamli - CMV, CYV va ZYMV",
        "O'rta chidamli - DM va PM",
      ],
    },
    specs: [
      { label: "Yo'nalish", value: "Bodring" },
      { label: "Pishish turi", value: "Erta" },
      { label: "Mavsum", value: "Erta bahor, yoz, erta kuz" },
      { label: "Meva uzunligi", value: "9-10 sm" },
      { label: "Ekish zichligi", value: "18000-20000 ko'chat/ga" },
    ],
  },
  {
    slug: "zumra-f1",
    type: "seed",
    name: "Zumra F1",
    image: ZumraF1Melon,
    images: [
      ZumraF1Melon,
      ZumraF1FieldStack,
      ZumraF1Sliced,
      ZumraF1Label,
      ZumraF1YellowStack,
      ZumraF1HarvestField,
    ],
    summary:
      "Erta pishar ananas turidagi qovun. 60-65 kunda pishadi, mevasi 2-4 kg, shakar va lazzat nisbati yuqori.",
    description:
      "Zumra F1 60-65 kunda pishadigan ananas turidagi qovun duragayi. Mevasi 2-4 kg, go'shti och sariq rangda, shakar va lazzat nisbati yuqori. Meva po'stlog'i mukammal tinli, tasvirlari to'q sariq, saqlash muddati 7-10 kun.",
    highlights: [
      "Shakar va lazzat nisbati yuqori",
      "Meva go'shti och sariq rangda",
      "Meva po'stlog'i mukammal tinli",
      "Tasvirlari to'q sariq",
      "Saqlash muddati 7-10 kun",
    ],
    diseaseResistance: {
      title: "Kasalliklarga chidamliligi",
      items: [
        "Yuqori chidamli - CMV, CYV va ZYMV",
        "O'rta chidamli - DM va PM",
        "Kasalliklarga qarshilik: Fusarium 0,1",
      ],
    },
    specs: [
      { label: "Yo'nalish", value: "Qovun" },
      { label: "Pishish turi", value: "Erta pishar" },
      { label: "Ekish joyi", value: "Ochiq maydon" },
      { label: "Pishish muddati", value: "60-65 kun" },
      { label: "Turi", value: "Ananas" },
      { label: "Meva vazni", value: "2-4 kg" },
      { label: "Refraktometr qiymati", value: "14-16" },
    ],
  },
];

export const medicineProducts: CatalogProduct[] = [
  {
    slug: "vital-plus-12-calcium",
    type: "medicine",
    name: "Calcium nitrate + Amino acid",
    image: VitalPlusCalcium,
    images: [
      VitalPlusCalcium,
      VitalPlusCalciumSlideOne,
      VitalPlusCalciumSlideTwo,
      VitalPlusCalciumSlideThree,
    ],
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
    images: [
      RadikaBase,
      RadikaBaseCanisterCity,
      RadikaBaseGreenhouseBottle,
      RadikaBaseRootsHand,
      RadikaBaseRootTray,
    ],
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
    image: Humix70Image,
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
    image: NewDatisAllImage,
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
    image: Amino33PlusImage,
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
    slug: "ocean",
    type: "medicine",
    name: "OCEAN",
    image: OceanImage,
    summary:
      "Baliq va suv o'tlari ekstrakti asosida tayyorlangan, o'simlik oziqlanishi va stressga chidamliligini kuchaytiruvchi mahsulot.",
    description:
      "OCEAN baliq qoldiqlari va suv o'tlaridan olingan aminokislotalarga boy bo'lib, sabzavot, don va bog' ekinlari uchun zarur makro va mikroelementlarni saqlaydi. Mahsulot tuproqdagi foydali mikroorganizmlar faoliyatini qo'llab-quvvatlaydi, oziqlanishni yaxshilaydi va o'simlikning noqulay sharoitlarga chidamliligini oshirishga yordam beradi.",
    highlights: [
      "Mevalar hajmi va hosildorligini oshirishga yordam beradi",
      "Sovuqqa va kasalliklarga chidamlilikni qo'llab-quvvatlaydi",
      "Mineral moddalar o'zlashtirilishini oshiradi",
      "Turli stresslarga qarshi kurashishda yordam beradi",
      "Oziq moddalarning o'zlashtirilish darajasini yaxshilaydi",
      "Mahsulot sifatini yaxshilashga ko'maklashadi",
    ],
    specs: [
      { label: "N", value: "8%" },
      { label: "P2O5", value: "8%" },
      { label: "K2O", value: "8%" },
      { label: "Amino / Seaweed", value: "7% / 2%" },
    ],
  },
  {
    slug: "bacteria-calcium-40",
    type: "medicine",
    name: "Datis Rich Fertilizer Calcium 40% SC",
    image: BacteriaCalcium40,
    images: [BacteriaCalcium40, BacteriaCalciumSlideOne],
    summary:
      "Suspenzion shakldagi suyuq o'g'it bo'lib, yuqori so'rilish va mahsulotga tez kirib borishni ta'minlaydi.",
    description:
      "Datis Rich Fertilizer Calcium 40% SC suyuq o'g'iti o'zining suspenzion shakli tufayli mayda zarrachalar diametriga ega bo'lib, bu eritmaning yuqori so'rilishini va mahsulotga kirishini ta'minlaydi. Zarrachalarning bir xil tuzilishi, chang hosil qilmasligi va to'liq aralashuvchanligi uni qo'llashda juda oson qiladi. O'g'it barg yuzasiga yaxshi purkaladi va bevosita o'simlik og'izchalari orqali so'riladi, bu esa fotosintez tezligini sezilarli darajada oshiradi. Bundan tashqari, bu o'g'it o'simliklar uchun zaharli emas, hosilning sifati va miqdorini yaxshilaydi, o'simliklarning o'sishi va hayotchanligini oshiradi, shuningdek, hosil yig'ib olingandan keyin mahsulotning mustahkamligi va chidamliligini oshiradi.",
    highlights: [
      "Mayda zarrachalari tufayli yuqori so'rilish beradi",
      "Chang hosil qilmaydi va to'liq aralashadi",
      "Barg yuzasiga yaxshi purkaladi",
      "Fotosintez tezligini oshirishga yordam beradi",
      "Hosil sifati va miqdorini yaxshilaydi",
      "O'simlikning o'sishi va hayotchanligini oshiradi",
      "Yig'imdan keyingi mustahkamlik va chidamlilikni kuchaytiradi",
    ],
    specs: [
      { label: "Mahsulot turi", value: "Suyuq o'g'it" },
      { label: "Shakli", value: "Suspenzion" },
      { label: "Ta'siri", value: "Yuqori so'rilish" },
      { label: "Afzalligi", value: "Fotosintezni tezlashtiradi" },
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
      "Proton V-367 o'simliklarni viruslar va viroidlarga qarshi yuqori barqarorlik bilan himoya qilishga yordam beruvchi maxsus preparatdir. U virusning yuqishida faol rol o'ynaydigan proteaza fermentini ingibirlaydi va past chidamlilik davrlarida yuzaga keladigan immunitet susayishini kamaytirishga yordam beradi. Organik tarkibga ega, eksportda qoldiq bilan bog'liq muammolar keltirib chiqarmaydi, asalarilar uchun zararsiz va kutish vaqti 0 kun. Preparat pH ni pasaytiruvchi va barqarorlashtiruvchi xususiyatlarga ham ega.",
    highlights: [
      "Virusning yuqishida faol rol o'ynaydigan proteaza fermentini ingibirlaydi",
      "Organik tarkibga ega",
      "Eksport qilishda qoldiqlar bilan bog'liq muammolar yuzaga kelmaydi",
      "Asalarilar uchun zararsiz, kutish vaqti 0 kun",
      "Qoldiqlar bilan bog'liq muammolar keltirib chiqarmaydi",
      "pH ni pasaytiruvchi va barqarorlashtiruvchi xususiyatlarga ega",
      "O'simliklarning pH va ishqoriy muvozanatini boshqaradi",
      "O'simliklarning fiziologik rivojlanishiga yordam beradi",
      "O'simliklarga viruslar va viroidlarga chidamlilik beradi",
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
      "Datis Rich Fertilizer K40 mevaning rangini kuchaytiradi, qand miqdorini oshiradi, yangiligini saqlashga va mahsulotning tovarbop ko'rinishini yaxshilashga yordam beradi. Kaliy tanqisligi ko'pincha og'ir, yengil va quruq tuproqlarda kuzatiladi. Ushbu mahsulot barglarning yashash davomiyligini uzaytirishga, transpiratsiyani kamaytirishga, o'simlikning suv tanqisligi va sho'rlanishga chidamliligini oshirishga yordam beradi. Shuningdek, temir, fosfor va mikroelementlarning o'zlashtirilishini yaxshilaydi. Tarkibidagi aminokislotalar kaliy bilan kompleks hosil bo'lishini barqarorlashtirib, mahsulot samaradorligini oshiradi.",
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
    images: [
      HomeTraps,
      RollTrapSlideOne,
      RollTrapSlideTwo,
      RollTrapSlideThree,
      RollTrapSlideFour,
    ],
    summary:
      "Issiqxona, dala va omborlarda uchuvchi hasharotlarni samarali tutish uchun mo'ljallangan yopishqoq lenta.",
    description:
      "Roll Trap issiqxona, dala va omborlarda ishlatiladigan yopishqoq lenta bo'lib, uchuvchi hasharotlarni, masalan oqkanot, trips va pashshani samarali tutish uchun mo'ljallangan.",
    highlights: [
      "Oqkanot, trips va mayda uchuvchi zararkunandalarni samarali tutadi",
      "Kimyoviy vositasiz ishlaydi",
      "Ekologik xavfsiz",
      "Oson o'rnatiladi",
      "Uzoq muddat xizmat qiladi",
      "Zararkunandalarni erta aniqlash imkonini beradi",
    ],
    specs: [
      { label: "O'lchami", value: "30 sm x 100 metr" },
      { label: "Ranglari", value: "Oq, Ko'k, Sariq" },
      { label: "Material", value: "Kuchli yopishqoq sirt" },
      { label: "Qo'llanilishi", value: "Issiqxona, bog', dala, ombor" },
    ],
    mediaSections: [
      {
        title: "Roll Trap natijasi",
        image: TrapRollDetailOne,
      },
      {
        title: "Issiqxona kuzatuvi",
        image: TrapRollDetailTwo,
      },
    ],
  },
  {
    slug: "trap-board",
    type: "medicine",
    name: "Yopishqoq tuzoq plastina",
    image: TrapBoard,
    images: [
      TrapBoard,
      TrapBoardSlideOne,
      TrapBoardSlideTwo,
      TrapBoardSlideThree,
      TrapBoardSlideFour,
      TrapBoardSlideFive,
    ],
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
