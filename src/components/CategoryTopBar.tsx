import { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ICategory } from "../interfaces";
import { NavLink } from "react-router-dom";

interface IProps {
  categories: ICategory[];
}

const CategoryTopBar: FC<IProps> = ({ categories }) => {
  const [toggleMore, setToggleMore] = useState(false);

  return (
    <div className="max-w-[1250px] z-40 fixed top-16  w-full h-10 shadow-md bg-white ">
      <div className="h-full md:px-5 lg:px-24  flex  ">
        {categories.slice(0, 6).map((category) => {
          const { title, _id, subCategories } = category;
          return (
            <NavLink
              to={`/cn/${subCategories[0]?.title
                .toLowerCase()
                .split(" ")
                .join("-")}/cid/${_id}/${subCategories[0]?._id}`}
              key={_id}
              className="h-full px-3 flex justify-center items-center hover:bg-zinc-100 cursor-pointer duration-200"
            >
              <h3 className="text-[11.5px]  text-zinc-600">{title}</h3>
            </NavLink>
          );
        })}
        <div className="relative">
          <button
            onClick={() => setToggleMore((prev) => !prev)}
            className={`h-full w-16 px-0 flex justify-center items-center gap-1 hover:bg-zinc-100 cursor-pointer duration-200 ${
              toggleMore && "bg-zinc-100"
            }`}
          >
            <span className="text-xs text-zinc-600">More</span>
            <IoIosArrowDown className="mt-1 text-zinc-600 " />
          </button>
          {/* --->other list<--- */}
          {toggleMore && (
            <div className="absolute top-10 right-0  w-36 max-h-[60vh] overflow-y-auto shadow-normal bg-white">
              {categories.slice(6).map((category) => {
                const { title, _id, subCategories } = category;
                return (
                  <NavLink
                    to={`/cn/${subCategories[0]?.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}/cid/${_id}/${subCategories[0]?._id}`}
                    key={_id}
                    onClick={() => setToggleMore(false)}
                    className="h-10 px-3  hover:bg-zinc-100 cursor-pointer duration-200 border-b border-zinc-100 flex items-center"
                  >
                    <h3 className="text-xs text-zinc-600">{title}</h3>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryTopBar;
