import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");

  const handleClearState = () => {
    setSearchText("");
  };

  return (
    // <nav className="w-full fixed top-0 flex border-b border-slate-200 bg-white ">
    //   <div
    //     className={`flex ${
    //       pathname === "/s" ? "w-[10%]" : "w-[35%]"
    //     } bg-red-400`}
    //   >
    //     <a
    //       href="/"
    //       className={`logo ${
    //         pathname === "/s" ? "w-[100%]" : "w-[33%]"
    //       }  h-[4rem] border-r border-slate-200 flex justify-center items-center cursor-pointer `}
    //     >
    //       <img src="../../public/blinkit-logo.svg" className="h-6" alt="logo" />
    //     </a>

    //     <div
    //       className={`${
    //         pathname === "/s" ? "hidden" : ""
    //       } w-[67%] h-[4rem] flex justify-center items-center gap-2 `}
    //     >
    //       <div>
    //         <h3 className="text-sm font-bold">Delivery in 9 minutes</h3>
    //         <p className="text-xxs">LIG Square, Rss Nagar, Indore, ...</p>
    //       </div>
    //       <div className="h-[60%] flex justify-center items-end ">
    //         <IoMdArrowDropdown className="text-xl" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex w-[65%] items-center">
    //     <div className="w-[70%] ">
    //       <div
    //         onClick={() => navigate("/s")}
    //         className="w-[90%] bg-zinc-50 border border-slate-100 flex items-center gap-3 py-2 px-2 rounded-md cursor-text"
    //       >
    //         <FiSearch className="text-sm" />
    //         <span className="text-xxs font-semibold text-zinc-400 ">
    //           Search "rice"
    //         </span>
    //       </div>
    //     </div>
    //     <div className="w-[30%] flex justify-between items-center pr-8">
    //       <div className="cursor-pointer">
    //         <h4 className="text-sm">Login</h4>
    //       </div>
    //       <div className="bg-primary text-white flex justify-center items-center px-3 py-3 rounded-md gap-2 cursor-pointer">
    //         <HiOutlineShoppingCart />
    //         <h4 className="text-xxs font-bold">My Cart</h4>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav className="w-full fixed top-0 flex border-b border-slate-200 bg-white z-50">
      {/* ---> logo <--- */}
      <div className={`flex w-[18%] `}>
        <a
          href="/"
          className={`logo w-full h-[4.15rem] border-r border-slate-200 flex justify-center items-center cursor-pointer `}
        >
          <img src="/blinkit-logo.svg" className="h-6" alt="logo" />
        </a>
      </div>
      {/* ---> Location and Search Input and login button <--- */}
      <div className="w-full flex items-center justify-between ">
        {/* ---> Location  <--- */}
        <div
          className={`min-w-[35%] h-[4rem] flex justify-center items-center gap-2 ${
            pathname === "/s" && "hidden"
          }`}
        >
          <div>
            <h3 className="text-sm font-bold">Delivery in 9 minutes</h3>
            <p className="text-xxs">LIG Square, Rss Nagar, Indore, ...</p>
          </div>
          <div className="h-[60%] flex justify-center items-end ">
            <IoMdArrowDropdown className="text-xl" />
          </div>
        </div>

        {/* --->  Search Input <--- */}

        <div className="w-full flex justify-center items-center">
          {pathname !== "/s" ? (
            <div
              onClick={() => navigate("/s")}
              className={`w-[90%] bg-zinc-50 border border-slate-100 flex items-center gap-3 py-[0.6rem] px-2 rounded-md cursor-text`}
            >
              <FiSearch className="text-sm" />
              <span className="text-xxs font-semibold text-zinc-400 ">
                Search "rice"
              </span>
            </div>
          ) : (
            <div
              className={`w-[90%] bg-white border border-zinc-300 flex items-center gap-3 p-1 px-2 rounded-md cursor-text shadow-mini `}
            >
              <FiSearch className="text-sm" />
              <input
                type="text"
                autoFocus
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for atta dal and more"
                className="py-[.3rem] w-full text-xs outline-none  "
              />
              {searchText !== "" && (
                <span onClick={handleClearState} className={`cursor-pointer`}>
                  <MdClose />
                </span>
              )}
            </div>
          )}
        </div>

        {/* ---> Login <--- */}
        {pathname !== "/s" && (
          <div className="w-[20%] flex justify-center items-center ">
            <div className="cursor-pointer">
              <h4 className="text-sm text-zinc-700">Login</h4>
            </div>
          </div>
        )}
      </div>

      {/* --->  cart button <--- */}
      <div className="w-[20%]  flex justify-center items-center ">
        <div className="bg-primary text-white flex justify-center items-center px-3 py-3 rounded-md gap-2 cursor-pointer">
          <HiOutlineShoppingCart />
          <h4 className="text-xxs font-bold">My Cart</h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
