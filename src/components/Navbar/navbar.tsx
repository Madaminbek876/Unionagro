
import Avatarka from "@/assets/icons/user.svg"
import Logo from "@/assets/images/logoAgro.png"
import { Link } from "react-router-dom"
import TG from "@/assets/icons/tg.svg"
import Insta from "@/assets/icons/insta.svg"
import Face from "@/assets/icons/face.svg"
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
    <div className="mx-auto max-w-[1440px] h-[60px] mt-3 bg-[#FFFFFF19] shadow-sm border-black border px-5  rounded-lg">
      <div className="flex items-center">
        <img width="80" height="80" src={Logo} alt="sasaasa" />
        <div className="flex items-center gap-1 ml-30">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF19] p-2">
            <img width="35" height="35" src={TG} alt="" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF19] p-2">
            <img width="35" height="35" src={Insta} alt="" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF19] p-2">
            <img width="35" height="35" src={Face} alt="" />
          </div>
        </div>
        <nav className="flex items-center justify-center gap-10 ml-50">
          <Link className="hover:text-black relative
    inline-block
    text-white
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-l
    after:from-white
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/">Home</Link>
          <Link className="hover:text-black relative
    inline-block
    text-white
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-white
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/product">Product</Link>
          <Link className="hover:text-black relative
    inline-block
    text-white
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-white
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/services">Services</Link>
          <Link className="hover:text-black relative
    inline-block
    text-white
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-white
    after:to-[#00cc69]
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:after:left-0" to="/blog">About</Link>
        </nav>
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-6 ml-100">
            <Select>
              <SelectTrigger className="w-[70px] border-white text-white">
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
              <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF19]">
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
