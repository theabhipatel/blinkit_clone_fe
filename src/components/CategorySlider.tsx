import ProductCard from "./ProductCard";
import Slider from "./Slider";

const CategorySlider = () => {
  return (
    <div className="">
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold text-zinc-800">Dairy, Bread & Eggs</h2>
        <span className="text-md font-semibold text-primary cursor-pointer">
          see all
        </span>
      </div>
      {/* ---> slider <--- */}
      <Slider>
        {[...new Array(20)].map((_, idx) => (
          <ProductCard key={idx} />
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
