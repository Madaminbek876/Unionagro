import {
  ArrowRight,
  Globe2,
  Home,
  MapPin,
  PackageOpen,
  Phone,
  Sprout,
} from "lucide-react";
import FooterBg from "@/assets/images/footer-bg.jpg";

const navigation = [
  { icon: Home, label: "Bosh sahifa", href: "/" },
  { icon: Sprout, label: "Biz haqimizda", href: "/#about" },
  { icon: PackageOpen, label: "Mahsulotlar", href: "/#products" },
  { icon: Phone, label: "Aloqa", href: "/#contact" },
];

const contacts = [
  {
    icon: MapPin,
    label: "Manzil",
    value: "Xasanboy lag'moni, Hasanboy 2/2",
  },
  { icon: Phone, label: "Telefon", value: "+998 90 123 45 67" },
  { icon: Globe2, label: "Sayt", value: "union-agro.uz" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative items-center overflow-hidden px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <img
        src={FooterBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#06170d]/94 via-[#196931]/82 to-[#1fb05a]/72" />
      <div className="absolute inset-0 bg-[#06170d]/28" />

      <div className="relative mx-auto grid max-w-[1760px] gap-10 lg:min-h-[520px] lg:grid-cols-[300px_minmax(680px,1.35fr)_340px] lg:items-center lg:justify-between">
        <div className="lg:justify-self-start">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-white/14 py-4 text-xl font-bold text-white/78 transition hover:text-[#FBC719]"
                >
                  <span className="flex items-center gap-4">
                    <Icon size={22} />
                    {item.label}
                  </span>
                  <ArrowRight size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:justify-self-center">
          <p className="text-center text-sm font-black uppercase tracking-[0.42em] text-white/72">
            Ofis lokatsiyasi
          </p>
          <div className="mt-8 w-3xl overflow-hidden rounded-[28px] border border-white/18 bg-white/10 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl">
            <iframe
              title="Union Agro ofis lokatsiyasi"
              src="https://yandex.com/map-widget/v1/?ll=69.259895%2C41.396785&mode=search&text=Xasanboy%20lag%27moni%20Hasanboy%202%2F2%20Toshkent&z=18"
              className="h-[360px] w-full rounded-[20px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://yandex.com/maps/?ll=69.259895%2C41.396785&mode=search&text=Xasanboy%20lag%27moni%20Hasanboy%202%2F2%20Toshkent&z=18"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#FBC719] bg-[#FBC719]/12 px-5 py-3 text-sm font-black text-[#FBC719] transition hover:bg-[#FBC719] hover:text-[#196931]"
          >
            <MapPin size={18} />
            Yandex kartada ochish
          </a>
        </div>

        <div className="lg:justify-self-end">
          <div className="space-y-4">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-5 rounded-[20px] bg-gradient-to-r from-[#143f25] to-[#14a850] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
                >
                  <Icon size={35} />
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.22em] text-white/72">
                      {item.label}
                    </span>
                    <span className="text-base font-black sm:text-lg">
                      {item.value}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
