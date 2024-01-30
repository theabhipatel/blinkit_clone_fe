import { FaSquareThreads } from "react-icons/fa6";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { usefullLinks } from "../constant";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategory } from "../interfaces";
import { axiosInstance } from "../utils/axiosInstance";

const Footer = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      if (res.status === 200) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="px-4 md:px-16">
      {/* ---> links <--- */}
      <div className="flex justify-between gap-3 flex-col lg:flex-row">
        {/* ---> Useful Links <--- */}
        {categories.length !== 0 && (
          <div className="w-[100%] lg:w-[25%] ">
            <h5 className="font-semibold">Useful Links</h5>
            <div className=" mt-4 grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8">
              {usefullLinks.map(({ title }, index) => (
                <span
                  key={index}
                  className="text-xs text-zinc-500 cursor-pointer"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ---> Categories <--- */}
        {categories.length !== 0 && (
          <div className="w-[100%] lg:w-[65%]">
            <h5 className="font-semibold">
              Categories{" "}
              <NavLink
                to={
                  "/cn/fresh-vegetables/cid/6582c57beae03687384b458c/658563420cc788a65bead8c8"
                }
                className="text-primary ml-2 font-[400] cursor-pointer"
              >
                see all
              </NavLink>
            </h5>
            <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2">
              {categories?.map((category, index) => {
                const { _id, title, subCategories } = category;
                return (
                  <NavLink
                    to={`/cn/${subCategories[0].title}/cid/${_id}/${subCategories[0]._id}`}
                    key={index}
                    className="text-xs text-zinc-500 cursor-pointer"
                  >
                    {title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* ---> Social links <--- */}
      <div className="mt-16 flex justify-between items-center gap-3 flex-wrap">
        <div className="w-[100%] md:w-[65%] flex justify-between items-center gap-3 flex-wrap">
          <div className="w-[100%] md:w-[50%]">
            <h5 className="text-[11px] text-zinc-500">
              © Blink Commerce Private Limited (formerly known as Grofers India
              Private Limited), 2016-2023
            </h5>
          </div>

          <div className="flex gap-3">
            <h5 className="text-xs md:text-sm text-zinc-500 font-[500]">
              Download App
            </h5>
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
