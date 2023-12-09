import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full flex border-b border-slate-200 ">
      <div className="flex w-[35%]">
        <a
          href="/"
          className="logo w-[33%] h-[4rem] border-r border-slate-200 flex justify-center items-center cursor-pointer "
        >
          <img src="../../public/blinkit-logo.svg" className="h-6" alt="logo" />
        </a>
        <div className="w-[67%] h-[4rem] flex justify-center items-center gap-2 ">
          <div>
            <h3 className="text-sm font-bold">Delivery in 9 minutes</h3>
            <p className="text-xxs">LIG Square, Rss Nagar, Indore, ...</p>
          </div>
          <div className="h-[60%] flex justify-center items-end ">
            <IoMdArrowDropdown className="text-xl" />
          </div>
        </div>
      </div>

      <div className="flex w-[65%] items-center">
        <div className="w-[70%] ">
          <div className="w-[90%] bg-zinc-50 border border-slate-100 flex items-center gap-3 py-2 px-2 rounded-md cursor-text">
            <FiSearch className="text-sm" />
            <span className="text-xxs font-semibold text-zinc-400 ">
              Search "rice"
            </span>
          </div>
        </div>
        <div className="w-[30%] flex justify-between items-center pr-8">
          <div className="cursor-pointer">
            <h4 className="text-sm">Login</h4>
          </div>
          <div className="bg-primary text-white flex justify-center items-center px-3 py-3 rounded-md gap-2 cursor-pointer">
            <HiOutlineShoppingCart />
            <h4 className="text-xxs font-bold">My Cart</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
