import { FC } from "react";
import { ISubCategory } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
  subCategories: ISubCategory[];
  selectedSubCategory: string;
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategorySideBar: FC<IProps> = ({
  subCategories,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const navigate = useNavigate();

  const handleClickSubCategory = (path: string, id: string) => {
    navigate(path);
    setSelectedSubCategory(id);
  };

  return (
    <div className="min-w-[13rem] h-[80vh] sticky top-[6.5rem] border border-t-0 border-zinc-200 pt-5 hide-scrollbar overflow-y-auto">
      {subCategories.map(({ _id, thumbnail, title, categoryId }) => {
        return (
          <div
            key={_id}
            onClick={() =>
              handleClickSubCategory(
                `/cn/${title}/cid/${categoryId}/${_id}`,
                _id
              )
            }
            className={`w-full h-14 flex items-center pl-3 gap-3 border-l-4 ${
              selectedSubCategory === _id
                ? "border-l-primary bg-green-100"
                : "border-l-white hover:border-l-green-100"
            }  border-b border-b-zinc-200 hover:bg-green-100 duration-300 cursor-pointer`}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden">
              <img
                src={thumbnail}
                alt="categories"
                className={`object-cover duration-300  ${
                  selectedSubCategory === _id
                    ? "translate-y-1"
                    : "translate-y-3"
                }`}
              />
            </div>

            <h4 className="text-xs ">{title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySideBar;
