import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";

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

const SearchInput = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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

  return (
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
  );
};

export default SearchInput;
