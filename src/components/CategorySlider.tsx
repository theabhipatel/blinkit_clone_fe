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
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold text-zinc-800">{categoryTitle}</h2>
        <span className="text-md font-semibold text-primary cursor-pointer">
          see all
        </span>
      </div>
      {/* ---> slider <--- */}
      <Slider>
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
