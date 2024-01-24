import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICategory } from "../interfaces";

interface IProps {
  categories: ICategory[];
}

const HomeScreenCategoriesPoster: FC<IProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap justify-center md:px-10 lg:px-20 md:justify-start  ">
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
        {categories.map(({ _id, thumbnail, subCategories }) => (
          <NavLink
            key={_id}
            to={`/cn/${subCategories[0]?.title
              .toLowerCase()
              .split(" ")
              .join("-")}/cid/${_id}/${subCategories[0]?._id}`}
          >
            <img src={thumbnail} alt="category" className="w-[6rem]" />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeScreenCategoriesPoster;
