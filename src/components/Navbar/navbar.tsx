import Logo from "@/assets/images/union-agro-logo.png";
import { Menu, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Biz haqimizda", to: "/#about" },
  { label: "Mahsulotlar", to: "/#products" },
  { label: "Bog'lanish", to: "/#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/24 bg-[#0b2a16]/42 px-4 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-[72px] w-24 place-items-center overflow-hidden bg-transparent">
            <img
              src={Logo}
              alt="Union Agro"
              className="h-[72px] w-24 object-contain"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-black tracking-wide text-white">
              UNION AGRO
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FBC719]">
              Agro sanoat
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/18 bg-white/10 p-1.5 shadow-inner lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="rounded-full px-6 py-3 text-sm font-black text-white/82 transition hover:bg-white hover:text-[#196931] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-[#196931] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(25,105,49,0.24)] transition hover:bg-[#FBC719] hover:text-white md:flex"
          >
            <PhoneCall size={16} />
            Bog'laning
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/24 bg-white/14 text-white shadow-sm lg:hidden"
            type="button"
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
