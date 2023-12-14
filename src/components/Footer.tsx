import { FaSquareThreads } from "react-icons/fa6";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { categories, usefullLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="px-16">
      {/* ---> links <--- */}
      <div className="flex justify-between">
        {/* ---> Useful Links <--- */}
        <div className="w-[25%] ">
          <h5 className="font-semibold">Useful Links</h5>
          <div className=" mt-4 grid grid-cols-3 gap-y-2 gap-x-8">
            {usefullLinks.map(({ title }) => (
              <span className="text-xs text-zinc-500">{title}</span>
            ))}
          </div>
        </div>
        {/* ---> Categories <--- */}
        <div className="w-[65%]">
          <h5 className="font-semibold">
            Categories{" "}
            <span className="text-primary ml-2 font-[400] cursor-pointer">
              see all
            </span>
          </h5>
          <div className=" mt-4 grid grid-cols-3 gap-y-2">
            {categories.map(({ title }) => (
              <span className="text-xs text-zinc-500">{title}</span>
            ))}
          </div>
        </div>
      </div>
      {/* ---> Social links <--- */}
      <div className="mt-16 flex justify-between items-center">
        <div className="w-[65%] flex justify-between items-center ">
          <div className="w-[50%]">
            <h5 className="text-[11px] text-zinc-500">
              © Blink Commerce Private Limited (formerly known as Grofers India
              Private Limited), 2016-2023
            </h5>
          </div>

          <div className="flex gap-3">
            <h5 className="text-sm text-zinc-500 font-[500]">Download App</h5>
            <img
              src="https://blinkit.com/d61019073b700ca49d22.png"
              alt="download on app store"
              className="w-20 h-6"
            />
            <img
              src="https://blinkit.com/8ed033800ea38f24c4f0.png"
              alt="get it on play store"
              className="w-20 h-6"
            />
          </div>
        </div>
        <div className="flex gap-5 text-3xl">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
          <FaLinkedin />
          <FaSquareThreads />
        </div>
      </div>
      {/* ---> disclaimer <--- */}
      <div className="mt-10 mb-3">
        <h4 className="text-[11px] text-zinc-500">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited"
          (formerly known as Grofers India Private Limited) and is not related,
          linked or interconnected in whatsoever manner or nature, to
          “GROFFR.COM” which is a real estate services business operated by
          “Redstone Consultancy Services Private Limited”.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
