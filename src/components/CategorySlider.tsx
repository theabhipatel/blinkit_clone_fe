import { FC } from "react";
import { IProduct } from "../interfaces";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

interface IProps {
  categoryTitle: string;
  products: IProduct[];
}

const CategorySlider: FC<IProps> = ({ categoryTitle, products }) => {
  return (
    <div className="">
      <div className="flex justify-between px-3">
        <h2 className="text-xl font-bold text-zinc-800">{categoryTitle}</h2>
        <span className="text-md font-semibold text-primary cursor-pointer">
          see all
        </span>
      </div>
      {/* ---> slider in desktop <--- */}
      <div className="hidden md:block">
        <Slider>
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </Slider>
      </div>
      {/* ---> slider in mobile <--- */}
      <div className="md:hidden mt-5 mb-3 flex gap-2 overflow-auto hide-scrollbar pl-3 pr-3">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} width="7" />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
