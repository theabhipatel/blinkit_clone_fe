import { useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarLocation = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`min-w-[75%] md:min-w-[35%] h-[3.5rem] md:h-[4rem] flex justify-start md:justify-center items-center gap-2  ${
        pathname === "/s" && "hidden"
      }`}
    >
      <div className=" md:w-[75%]">
        <h3 className="text-sm font-bold">Delivery in 9 minutes</h3>
        <p className="text-xxs line-clamp-1">
          LIG Square, Rss Nagar, Vijay Nagar Indore, MadhyaPradesh, Bharat,
          India
        </p>
      </div>
      <div className="h-[60%] flex justify-center items-end ">
        <IoMdArrowDropdown className="text-xl" />
      </div>
    </div>
  );
};

export default NavbarLocation;
