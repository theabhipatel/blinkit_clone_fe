import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICategory } from "../interfaces";

interface IProps {
  categories: ICategory[];
}

const HomeScreenCategoriesPoster: FC<IProps> = ({ categories }) => {
  return (
    <div className="flex gap-1 flex-wrap">
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
  );
};

export default HomeScreenCategoriesPoster;
