import { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCircle, MdCheckCircle } from "react-icons/md";
import { IFilterList } from "../../constant";

interface IProps {
  activeFilter: IFilterList;
  setActiveFilter: React.Dispatch<React.SetStateAction<IFilterList>>;
  filterList: IFilterList[];
}

const FilterDropdown: FC<IProps> = ({
  activeFilter,
  setActiveFilter,
  filterList,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleSelectFilter = (title: string, id: string) => {
    setActiveFilter({ title, id });
    setToggleDropdown(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setToggleDropdown((prev) => !prev)}
        className="w-40 h-[1.6rem] border rounded-sm flex justify-between items-center px-2 text-primary cursor-pointer"
      >
        <span className="text-[11px] font-[500]">{activeFilter.title}</span>
        <span>
          <IoIosArrowDown />
        </span>
      </button>
      {toggleDropdown && (
        <div className="absolute top-[1.65rem] right-0 left-0 bg-white shadow-normal z-40">
          {filterList.map(({ title, id }) => {
            return (
              <div
                key={id}
                onClick={() => handleSelectFilter(title, id)}
                className={`flex gap-2 p-1 py-2 text-[11px] items-center border-b hover:bg-gray-100 cursor-pointer duration-300 font-[500] ${
                  activeFilter.id === id ? "text-primary" : ""
                }`}
              >
                <span className="text-sm">
                  {activeFilter.id === id ? (
                    <MdCheckCircle />
                  ) : (
                    <MdOutlineCircle />
                  )}
                </span>
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
