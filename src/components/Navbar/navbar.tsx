
import Avatarka from "@/assets/icons/user.svg"
import Logo from "@/assets/images/logoAgro.png"
import { Link } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[60px] mt-3 border px-5  rounded-lg">
      <div className="flex items-center justify-between">
        <img className="w-[80px]" src={Logo} alt="" />
        <nav className="flex items-center justify-center gap-6">
          <Link className="hover:text-[#00cc69] relative
    inline-block
    text-black
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-[#00cc69]
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/">Home</Link>
          <Link className="hover:text-[#00cc69] relative
    inline-block
    text-black
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-[#00cc69]
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/product">Product</Link>
          <Link className="hover:text-[#00cc69] relative
    inline-block
    text-black
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-[#00cc69]
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/services">Services</Link>
          <Link className="hover:text-[#00cc69] relative
    inline-block
    text-black
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-[#00cc69]
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/blog">About</Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5">
            <Select>
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="UZ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="UZ">UZ</SelectItem>
                  <SelectItem value="RU">RU</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#00cc69]">
                <img className="rounded-full p-2" src={Avatarka} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
