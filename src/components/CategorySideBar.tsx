import { FC } from "react";
import { ISubCategory } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

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
  const isMobile = useAppSelector((state) => state.cart.isMobile);

  const handleClickSubCategory = (
    title: string,
    categoryId: string,
    id: string
  ) => {
    const path = `/cn/${title
      .toLowerCase()
      .split(" ")
      .join("-")}/cid/${categoryId}/${id}`;
    navigate(path);
    setSelectedSubCategory(id);
  };

  return (
    <div className="md:min-w-[13rem] h-[80vh] sticky top-[5.5rem] md:top-[6.5rem] md:border border-t-0 border-zinc-200 pt-3 hide-scrollbar overflow-y-auto">
      {/* ---> for desktop and large size devices. */}
      {!isMobile &&
        subCategories.map(({ _id, thumbnail, title, categoryId }) => {
          return (
            <div
              key={_id}
              onClick={() => handleClickSubCategory(title, categoryId, _id)}
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
      {/* ---> for mobile and small size devices. */}
      {isMobile &&
        subCategories.map(({ _id, thumbnail, title, categoryId }) => {
          return (
            <div
              key={_id}
              onClick={() => handleClickSubCategory(title, categoryId, _id)}
              className={`w-full  flex  items-center pl-3  py-2 gap-1 text-center cursor-pointer`}
            >
              <div className="w-full flex flex-col items-center gap-1">
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
                <h4
                  className={`text-[9px] ${
                    selectedSubCategory === _id ? "font-bold" : ""
                  }`}
                >
                  {title}
                </h4>
              </div>
              <div
                className={`h-16 w-1 rounded-l-md ${
                  selectedSubCategory === _id ? "bg-primary" : "bg-white"
                }`}
              ></div>
            </div>
          );
        })}
    </div>
  );
};

export default CategorySideBar;
