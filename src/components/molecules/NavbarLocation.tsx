import { useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarLocation = () => {
  const { pathname } = useLocation();
  return (
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
  );
};

export default NavbarLocation;
