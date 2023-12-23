import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import TextTransition, { presets } from "react-text-transition";
import { useAppDispatch } from "../store/hooks";
import { toggleCartOpenAndClose } from "../store/cart/cartSlice";

const TEXTS = [
  'Search "milk"',
  'Search "bread"',
  'Search "sugar"',
  'Search "butter"',
  'Search "paneer"',
  'Search "chocholate"',
  'Search "curd"',
  'Search "rice"',
  'Search "chips"',
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  /** ---> for creating transitional text on navbar search */
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    const searchText = searchParams.get("q");
    if (searchText) {
      setSearchText(searchText);
    }
  }, []);

  useEffect(() => {
    handleSetQuery();
  }, [searchText]);

  const handleSetQuery = () => {
    if (searchText) {
      setSearchParams({ q: searchText });
    } else {
      setSearchParams({});
    }
  };

  const handleClearState = () => {
    setSearchText("");
  };

  const handleCartOpen = () => {
    dispatch(toggleCartOpenAndClose(true));
  };

  return (
    <nav className="w-full max-w-[1250px] fixed top-0 flex border-b border-slate-200 bg-white z-50">
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
              <span className="text-[11px] font- text-zinc-400 ">
                <TextTransition springConfig={presets.slow}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
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
                autoComplete="off"
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
            <div
              onClick={() => setIsLoginModalOpen(true)}
              className="cursor-pointer"
            >
              <h4 className="text-sm text-zinc-700">Login</h4>
            </div>
          </div>
        )}
      </div>

      {/* --->  cart button <--- */}
      <div className="w-[20%]  flex justify-center items-center ">
        <div
          onClick={handleCartOpen}
          className="bg-primary text-white flex justify-center items-center px-3 py-3 rounded-md gap-2 cursor-pointer"
        >
          <HiOutlineShoppingCart />
          <h4 className="text-xxs font-bold">My Cart</h4>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
      )}
    </nav>
  );
};

export default Navbar;
